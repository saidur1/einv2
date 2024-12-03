interface BlogItemProps {
  title: string;
  desc: string;
  listNumber: number;
}

const BlogItem = ({ title, desc, listNumber }: BlogItemProps) => {
  return (
    <>
      <h3 className="text-[20px] font-bold pt-4">
        {listNumber}. {title}
      </h3>

      <p className="text-gray-500">{desc}</p>
    </>
  );
};

export default BlogItem;
