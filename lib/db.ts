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
    // Ignore folder creation errors if it already exists
  }

  try {
    await fs.access(DB_FILE)
  } catch {
    // File doesn't exist, initialize with empty array
    await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8")
  }
}

/**
 * Retrieves all registered waitlist entries
 */
export async function getWaitlist(): Promise<WaitlistEntry[]> {
  await ensureDb()
  try {
    const data = await fs.readFile(DB_FILE, "utf-8")
    return JSON.parse(data) as WaitlistEntry[]
  } catch (err) {
    console.error("Failed to read waitlist database:", err)
    return []
  }
}

/**
 * Checks if an email is already registered (case-insensitive)
 */
export async function isAlreadyRegistered(email: string): Promise<boolean> {
  const list = await getWaitlist()
  const lowerEmail = email.toLowerCase().trim()
  return list.some(entry => entry.email.toLowerCase() === lowerEmail)
}

/**
 * Registers a new email into the waitlist
 * Returns true if registration was successful, false if it already exists
 */
export async function registerEmail(email: string): Promise<boolean> {
  await ensureDb()
  const lowerEmail = email.toLowerCase().trim()

  // Prevent race conditions and duplicates
  if (await isAlreadyRegistered(lowerEmail)) {
    return false
  }

  const list = await getWaitlist()
  const newEntry: WaitlistEntry = {
    email: lowerEmail,
    registeredAt: new Date().toISOString()
  }

  list.push(newEntry)
  await fs.writeFile(DB_FILE, JSON.stringify(list, null, 2), "utf-8")
  return true
}
