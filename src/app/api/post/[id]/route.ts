import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';


type Context = {
  params: {
    id: string;
  };
};

export async function DELETE(
  req: NextRequest,
  context: Context
): Promise<NextResponse> {
  const postId = Number(context.params.id);

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