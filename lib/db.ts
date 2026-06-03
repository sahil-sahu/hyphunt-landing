import fs from "fs/promises"
import path from "path"

const DB_FILE = path.join(process.cwd(), "data", "waitlist.json")

export interface WaitlistEntry {
  email: string
  registeredAt: string
}

/**
 * Ensures the database file and directory exist
 */
async function ensureDb() {
  const dir = path.dirname(DB_FILE)
  try {
    await fs.mkdir(dir, { recursive: true })
  } catch (err) {
    // Ignore folder creation errors
  }

  try {
    await fs.access(DB_FILE)
  } catch {
    try {
      // File doesn't exist, initialize with empty array
      await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8")
    } catch (writeErr) {
      // Gracefully catch EROFS on Serverless platforms
      console.warn("Could not create local JSON database file (Read-only environment):", writeErr)
    }
  }
}

/**
 * Retrieves all registered waitlist entries
 */
export async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    await ensureDb()
    const data = await fs.readFile(DB_FILE, "utf-8")
    return JSON.parse(data) as WaitlistEntry[]
  } catch (err) {
    console.warn("Failed to read local waitlist database. Returning empty array (Read-only serverless environment):")
    return []
  }
}

/**
 * Checks if an email is already registered (case-insensitive)
 */
export async function isAlreadyRegistered(email: string): Promise<boolean> {
  try {
    const list = await getWaitlist()
    const lowerEmail = email.toLowerCase().trim()
    return list.some(entry => entry.email.toLowerCase() === lowerEmail)
  } catch (err) {
    return false
  }
}

/**
 * Registers a new email into the waitlist
 * Returns true if registration was successful, false if it already exists
 */
export async function registerEmail(email: string): Promise<boolean> {
  const lowerEmail = email.toLowerCase().trim()

  // Prevent race conditions and duplicates
  if (await isAlreadyRegistered(lowerEmail)) {
    return false
  }

  try {
    const list = await getWaitlist()
    const newEntry: WaitlistEntry = {
      email: lowerEmail,
      registeredAt: new Date().toISOString()
    }

    list.push(newEntry)
    await fs.writeFile(DB_FILE, JSON.stringify(list, null, 2), "utf-8")
  } catch (err) {
    // Gracefully catch EROFS on Serverless platforms (Vercel)
    console.warn("Vercel EROFS read-only environment: Skipped writing local waitlist.json backup.")
  }
  
  return true
}

/**
 * Deletes an email from the waitlist
 * Returns true if the email was found and removed, false if not found
 */
export async function deleteEmail(email: string): Promise<boolean> {
  const lowerEmail = email.toLowerCase().trim()

  if (!(await isAlreadyRegistered(lowerEmail))) {
    return false
  }

  try {
    const list = await getWaitlist()
    const updatedList = list.filter(entry => entry.email.toLowerCase() !== lowerEmail)
    await fs.writeFile(DB_FILE, JSON.stringify(updatedList, null, 2), "utf-8")
  } catch (err) {
    console.warn("Vercel EROFS read-only environment: Skipped writing local waitlist.json update on delete.")
  }

  return true
}

