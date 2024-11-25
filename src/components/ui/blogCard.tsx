import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

interface Props {
  title: string;
  written_by: string;
  published: string;
  thumbnail: string;
  id: number;
}

const BlogCard = ({ title, written_by, published, thumbnail, id }: Props) => {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <h1 className="text-blue-primary text-[22px] hover:underline cursor-pointer">
          {title}
        </h1>
        <p className="text-gray-400">
          Written by {written_by} on {published}
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[300px]">
          <Image src={thumbnail} alt="img" fill />
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${id}`}>
          <Button className="h-[50px] w-fit">Read Full Article</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
