import ThreadCard from "@/components/cards/ThreadCard";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { fetchThreadById } from "@/lib/actions/thread.actions";
import Comment from "@/components/forms/Comment";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const thread = await fetchThreadById(params.id);

  // if (params.id === thread._id)
  // console.log(params.id);
  console.log(params.id);

  const isShowing = params.id.toString() === thread._id.toString();
  // console.log(thread._id.toString());

  return (
    <section className="relative">
      <div>
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={user!.id || ""}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
          isActive={isShowing}
        />
      </div>

      <div className="mt-7">
        <Comment
          threadId={thread.id}
          currentUserImg={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>
      <div className="mt-10">
        {thread.children.map((comment: any) => (
          <ThreadCard
            key={comment._id}
            id={comment._id}
            currentUserId={user!.id || ""}
            parentId={comment.parentId}
            content={comment.text}
            author={comment.author}
            community={comment.community}
            createdAt={comment.createdAt}
            comments={comment.children}
            isComment
            isActive={isShowing}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
