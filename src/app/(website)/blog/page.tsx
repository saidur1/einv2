import BlogCard from "@/components/ui/blogCard";

const blogs = [
  {
    id: 1,
    title: "Demystifying EIN (Employer Identification Number) #1",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
  {
    id: 2,
    title: "Demystifying EIN (Employer Identification Number) #2",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
  {
    id: 3,
    title: "Demystifying EIN (Employer Identification Number) #3",
    wriiten_by: "Saidur Rahman",
    published: "Oct. 17th 2015",
    thumbnail:
      "https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg",
  },
];

const Page = () => {
  return (
    <div className="mt-[100px] container">
      <div className="grid grid-cols-1 gap-10">
        {blogs?.map(({ id, title, published, thumbnail, wriiten_by }) => (
          <BlogCard
            key={id}
            title={title}
            published={published}
            thumbnail={thumbnail}
            written_by={wriiten_by}
            id={id}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
