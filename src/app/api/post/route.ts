import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuid } from "uuid";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  const githubUrl = formData.get("githubUrl") as string;
  const description = formData.get("description") as string;
  const highlight = formData.get("highlight") as string;
  const image = formData.get("image") as File | null;

  let imagePath: string | null = null;

  if (image && image.size > 0) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${uuid()}_${image.name}`;
    const filepath = path.join(process.cwd(), "public", "uploads", filename);

    await writeFile(filepath, buffer);
    imagePath = `/uploads/${filename}`;
  }

  const post = await prisma.post.create({
    data: {
      title,
      url,
      githubUrl,
      description,
      highlight,
      image: imagePath,
    },
  });

  return NextResponse.json({ post });
}