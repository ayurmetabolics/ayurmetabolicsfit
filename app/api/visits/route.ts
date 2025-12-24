import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const visitsFile = join(process.cwd(), 'data', 'visits.json');

async function getVisits(): Promise<number> {
  try {
    const data = await readFile(visitsFile, 'utf-8');
    const json = JSON.parse(data);
    return json.count || 0;
  } catch {
    return 0;
  }
}

async function incrementVisits(): Promise<number> {
  try {
    const count = await getVisits();
    const newCount = count + 1;
    
    // Ensure data directory exists
    const fs = require('fs');
    const dataDir = join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    await writeFile(visitsFile, JSON.stringify({ count: newCount }), 'utf-8');
    return newCount;
  } catch (error) {
    console.error('Error incrementing visits:', error);
    return 0;
  }
}

export async function GET() {
  const count = await getVisits();
  return NextResponse.json({ count });
}

export async function POST() {
  const count = await incrementVisits();
  return NextResponse.json({ count });
}

