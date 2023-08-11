//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const result = await fetchPosts();
  return (
    <>
      {/* <UserButton afterSignOutUrl="/" /> */}
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
