import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis = Redis.fromEnv();

const DOWNLOAD_KEY = "resume-automation-downloads"

export async function GET() {
  try {
    const count = await redis.get<number>(DOWNLOAD_KEY)
    return NextResponse.json({ 
      count: count || 0,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error("Error fetching download count:", error)
    return NextResponse.json({ error: "Failed to fetch count" }, { status: 500 })
  }
}

export async function POST() {
  try {
    const currentCount = await redis.get<number>(DOWNLOAD_KEY)
    const newCount = (currentCount || 0) + 1
    
    await redis.set(DOWNLOAD_KEY, newCount)
    
    return NextResponse.json({ 
      success: true, 
      count: newCount 
    })
  } catch (error) {
    console.error("Error incrementing download count:", error)
    return NextResponse.json({ error: "Failed to increment count" }, { status: 500 })
  }
}
