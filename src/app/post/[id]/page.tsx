import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function PostDetailPage({ params }: Props) {
  const { id } = params;
  
  if (!id) {
    return notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">投稿詳細ページ</h1>
      <p>この投稿のID: {id}</p>
    </div>
  );
}