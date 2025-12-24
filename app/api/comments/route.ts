import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Comment } from '@/lib/types';

const commentsFile = join(process.cwd(), 'data', 'comments.json');

async function getComments(): Promise<Record<string, Comment[]>> {
  try {
    const data = await readFile(commentsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function saveComments(comments: Record<string, Comment[]>) {
  try {
    const fs = require('fs');
    const dataDir = join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    await writeFile(commentsFile, JSON.stringify(comments), 'utf-8');
  } catch (error) {
    console.error('Error saving comments:', error);
  }
}

export async function POST(request: Request) {
  const { postId, author, content } = await request.json();
  
  if (!postId || !author || !content) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }
  
  const comments = await getComments();
  if (!comments[postId]) {
    comments[postId] = [];
  }
  
  const newComment: Comment = {
    id: Date.now().toString(),
    author,
    content,
    createdAt: new Date().toISOString(),
  };
  
  comments[postId].push(newComment);
  await saveComments(comments);
  
  return NextResponse.json({ success: true, comment: newComment });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get('postId');
  
  const comments = await getComments();
  
  if (postId) {
    return NextResponse.json({ comments: comments[postId] || [] });
  }
  
  return NextResponse.json({ comments });
}

