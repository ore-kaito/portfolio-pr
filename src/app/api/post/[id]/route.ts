import { NextResponse } from 'next/server';
import { prisma } from "../../lib/prisma";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
): Promise<Response> {
  const { id } = context.params;
  const postId = Number(id);

  try {
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: 'Deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('削除エラー:', error);
    return NextResponse.json({ message: '削除に失敗しました' }, { status: 500 });
  }
}