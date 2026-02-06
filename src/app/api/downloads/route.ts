import { promises as fs } from "fs"
import { join } from "path"
import { NextRequest, NextResponse } from "next/server"

const DOWNLOAD_COUNT_FILE = join(process.cwd(), "data", "download-count.json")

async function ensureCountFile() {
  try {
    await fs.access(DOWNLOAD_COUNT_FILE)
  } catch {
    // File doesn't exist, create it
    await fs.mkdir(join(process.cwd(), "data"), { recursive: true })
    await fs.writeFile(DOWNLOAD_COUNT_FILE, JSON.stringify({ count: 0, lastUpdated: new Date().toISOString() }))
  }
}

async function getCount() {
  await ensureCountFile()
  const data = await fs.readFile(DOWNLOAD_COUNT_FILE, "utf-8")
  return JSON.parse(data)
}

async function incrementCount() {
  await ensureCountFile()
  const data = await getCount()
  data.count += 1
  data.lastUpdated = new Date().toISOString()
  await fs.writeFile(DOWNLOAD_COUNT_FILE, JSON.stringify(data, null, 2))
  return data
}

export async function GET() {
  try {
    const data = await getCount()
    return NextResponse.json({ count: data.count, lastUpdated: data.lastUpdated })
  } catch (error) {
    console.error("Error fetching download count:", error)
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 })
  }
}

export async function POST() {
  try {
    const data = await incrementCount()
    return NextResponse.json({ success: true, count: data.count })
  } catch (error) {
    console.error("Error incrementing download count:", error)
    return NextResponse.json({ error: "Failed to increment count" }, { status: 500 })
  }
}
