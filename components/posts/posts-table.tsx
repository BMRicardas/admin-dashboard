import { posts } from "@/data/posts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  limit?: number;
  title?: string;
};

export function PostsTable({ limit, title }: Props) {
  // Sort posts in descending order by date
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //   Filter posts by limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">
        {title || "Posts"}
        <Table>
          <TableCaption>A list of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Author</TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Date
              </TableHead>

              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {post.author}
                </TableCell>
                <TableCell className="hidden md:table-cell text-right">
                  {post.date}
                </TableCell>
                <TableCell>
                  <Link href={`/posts/edit/${post.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </h3>
    </div>
  );
}
