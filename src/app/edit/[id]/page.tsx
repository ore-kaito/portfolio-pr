import { getPostById } from "../../../lib/prisma/posts";
import EditPostForm from "./EditPostForm";

interface Props {
  params: { id: string };
}

export default async function EditPage({ params }: Props) {
  const post = await getPostById(params.id);

  if (!post) return <div>投稿が見つかりません。</div>;

  return <EditPostForm post={post} />;
}