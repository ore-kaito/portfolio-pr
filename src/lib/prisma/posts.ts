// lib/prisma/posts.ts
import prisma from "../prisma/posts";

export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return post;
  } catch (error) {
    console.error("投稿取得失敗:", error);
    return null;
  }
}