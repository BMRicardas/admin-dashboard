import { BackButton } from "@/components/back-button";
import { PostsPagination } from "@/components/posts/posts-pagination";
import { PostsTable } from "@/components/posts/posts-table";

export default function PostsPage() {
  return (
    <>
      <BackButton text="Back to Dashboard" link="/" />
      <PostsTable />
      <PostsPagination />
    </>
  );
}
