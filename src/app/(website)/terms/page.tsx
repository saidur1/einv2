import { termsContent } from "@/data";

const TermsOfService = () => {
  return (
    <div className="min-h-[calc(100vh-145px)] container pt-6 pb-[80px] bg-white">
      <h1 className="text-[#2F2F2F] text-[32px] font-bold">Terms of Service</h1>
      <div className="mt-[50px] flex flex-col gap-y-[60px]">
        {termsContent?.map(({ content, title, lists, content2 }) => (
          <div className="space-y-6" key={title}>
            <h2 className="font-medium">{title}</h2>
            {content?.map((eachContentParagraph, index) => (
              <p key={index}>{eachContentParagraph}</p>
            ))}
            {lists?.map(({ id, item }) => (
              <ul key={id}>
                <li className="list-disc">{item}</li>
              </ul>
            ))}
            {content2?.map((eachContentParagraph, index) => (
              <p key={index}>{eachContentParagraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
