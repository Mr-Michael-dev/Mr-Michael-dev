import { Redis } from "@upstash/redis"
import { NextRequest, NextResponse } from "next/server"

const redis = Redis.fromEnv();

const DOWNLOAD_KEYS: Record<string, string> = {
  "resume-automation": "resume-automation-downloads",
  "certificate-automation": "certificate-automation-downloads",
}

const DEFAULT_TEMPLATE = "resume-automation"

function getDownloadKey(request: NextRequest) {
  const template = request.nextUrl.searchParams.get("template") || DEFAULT_TEMPLATE
  return DOWNLOAD_KEYS[template]
}

export async function GET(request: NextRequest) {
  const key = getDownloadKey(request)

  if (!key) {
    return NextResponse.json({ error: "Unknown template" }, { status: 400 })
  }

  try {
    const count = await redis.get<number>(key)
    return NextResponse.json({ 
      count: count || 0,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error("Error fetching download count:", error)
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const key = getDownloadKey(request)

  if (!key) {
    return NextResponse.json({ error: "Unknown template" }, { status: 400 })
  }

  try {
    const newCount = await redis.incr(key)

    return NextResponse.json({ 
      success: true, 
      count: newCount 
    })
  } catch (error) {
    console.error("Error incrementing download count:", error)
    return NextResponse.json({ error: "Failed to increment count" }, { status: 500 })
  }
}
