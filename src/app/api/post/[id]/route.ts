import { prisma } from "../../../../lib/prisma";
interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  const postId = Number(params.id);

  const post = await prisma.post.findUnique({
    where: { id: postId },
  });

  if (!post) {
    return <div>投稿が見つかりませんでした</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}