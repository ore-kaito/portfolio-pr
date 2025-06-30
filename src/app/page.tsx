
import Link from "next/link";
import Image from "next/image";
import { prisma } from "./lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <div className="border p-4 w-80">
            <Image
              src={post.image || "/images/default.jpg"}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-auto"
            />
            <h2 className="font-bold mt-2">{post.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}