import { prisma } from "./lib/prisma";
import PostResult from "./components/PostResult/PostResult";

export default async function Home() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <PostResult />

  );
}