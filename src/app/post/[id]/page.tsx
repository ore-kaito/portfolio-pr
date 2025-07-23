
// import { prisma } from "../../../lib/prisma";
// import { notFound } from "next/navigation";

// export default async function PostDetailPage({ params }: { params: { id: string } }) {
//   const post = await prisma.post.findUnique({ where: { id: Number(params.id) } });

//   if (!post) return notFound();

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold">{post.title}</h1>
//       <img src={post.imagePath || "/images/default.jpg"} alt={post.title} className="mt-4" />
//       <p className="mt-2 text-sm text-gray-600">{post.description}</p>
//     </div>
//   );
// }

import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next"; // optional if using metadata
import { FC } from "react";

type Props = {
  params: {
    id: string;
  };
};

const PostDetailPage: FC<Props> = async ({ params }) => {
  const post = await prisma.post.findUnique({ where: { id: Number(params.id) } });

  if (!post) return notFound();

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <img
        src={post.imagePath || "/images/default.jpg"}
        alt={post.title}
        className="mt-4"
      />
      <p className="mt-2 text-sm text-gray-600">{post.description}</p>
    </div>
  );
};

export default PostDetailPage;
