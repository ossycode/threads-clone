import { fetchUserPosts } from "@/lib/actions/thread.actions";
import { redirect } from "next/navigation";
import React from "react";
import ThreadCard from "../cards/ThreadCard";

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let result = await fetchUserPosts(accountId);

  console.log(result);

  if (!result) redirect("/");

  return (
    <section className="mt-9 flex flex-col">
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          }
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
          // isActive={isShowing}
        />
      ))}
    </section>
  );
};

export default ThreadTab;
