import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const likesFile = join(process.cwd(), 'data', 'likes.json');

async function getLikes(): Promise<Record<string, number>> {
  try {
    const data = await readFile(likesFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveLikes(likes: Record<string, number>) {
  try {
    const fs = require('fs');
    const dataDir = join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    await writeFile(likesFile, JSON.stringify(likes), 'utf-8');
  } catch (error) {
    console.error('Error saving likes:', error);
  }
}

export async function POST(request: Request) {
  const { postId } = await request.json();
  
  const likes = await getLikes();
  likes[postId] = (likes[postId] || 0) + 1;
  await saveLikes(likes);
  
  return NextResponse.json({ success: true, likes: likes[postId] });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  
  if (postId) {
    const likes = await getLikes();
    return NextResponse.json({ likes: likes[postId] || 0 });
  }
  
  const likes = await getLikes();
  return NextResponse.json({ likes });
}

