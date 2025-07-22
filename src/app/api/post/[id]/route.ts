import { prisma } from "../../../../lib/prisma";
import { NextResponse } from 'next/server';


export async function DELETE(req, { params }) {
  const postId = Number(params.id);

  try {
    await prisma.post.delete({
      where: { id: postId },
    });

    return NextResponse.json({ message: 'Deleted successfully' });
  } catch (error) {
    console.error('削除エラー:', error);
    return NextResponse.json({ message: '削除に失敗しました' }, { status: 500 });
  }
}