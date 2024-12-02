import Image from "next/image";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ params }: { params: { part: string } }) => {
  const part = params?.part;
  return (
    <div className="container mt-[100px]">
      <Header part={params.part} />
      {part === "1" && <PartOneBlog />}
      {part === "2" && <PartTwoBlog />}
      {part === "3" && <PartThreeBlog />}
    </div>
  );
};

export default Page;

const Header = ({ part }: { part: string }) => {
  return (
    <div className="mb-[50px]">
      <h1 className="text-[22px] text-blue-primary font-medium">
        Demystifying EIN (Employer Identification Number) #{part}
      </h1>
      <p className="text-gray-400">Written by Saidur Rahman on October 2024</p>
      <div className="relative w-full h-[300px] mt-[20px]">
        <Image
          src="https://samovensdemo.com/hosted/images/44/129e013cfe11e782e023068d9967ce/n-RICH-PEOPLE-628x314.jpg"
          alt="img"
          fill
        />
      </div>
    </div>
  );
};

const PartOneBlog = () => {
  const content = [
    {
      id: 1,
      title: "Introduction to EIN",
      desc: "An Employer Identification Number (EIN), also known as a Federal Tax Identification Number, is a unique nine-digit number assigned by the IRS to businesses in the United States. It’s like a Social Security number for your business, used primarily for tax purposes. But its significance goes far beyond just taxes.",
    },
    {
      id: 2,
      title: "Why EIN Matters",
      desc: "Having an EIN is crucial for many business operations. It enables businesses to file taxes, open business bank accounts, and establish a formal business presence. Additionally, many vendors and suppliers require an EIN to process payments or extend credit, making it indispensable for day-to-day operations.",
    },
    {
      id: 3,
      title: "Who Needs an EIN?",
      desc: "While not every business is required to have an EIN, it is mandatory for those that hire employees, operate as corporations or partnerships, or file specific tax returns. Even sole proprietors may benefit from obtaining one, especially if they wish to separate their personal and business finances.",
    },
    {
      id: 4,
      title: "How EIN Supports Growth",
      desc: "Obtaining an EIN signals a commitment to formalizing your business. It helps establish credibility with customers and partners while providing a foundation for scaling operations. For many businesses, getting an EIN is one of the first steps toward long-term success.",
    },
  ];
  return (
    <div className="space-y-5">
      {content?.map(({ id, desc, title }) => (
        <div className="space-y-2" key={id}>
          <h1 className="text-[22px] font-semibold">{title}</h1>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

const PartTwoBlog = () => {
  const content = [
    {
      id: 1,
      title: "The Application Process",
      desc: "Applying for an EIN is straightforward and free. You can complete the application online through the IRS website, by fax, or by mail. The online method is the fastest, with immediate issuance of the EIN upon submission.",
    },
    {
      id: 2,
      title: "Information Required",
      desc: "To apply for an EIN, you’ll need details like the legal name of your business, its structure (e.g., sole proprietorship, LLC, corporation), and the responsible party’s Social Security number. Having these details ready ensures a smooth application process.",
    },
    {
      id: 3,
      title: "Common Challenges",
      desc: "Though the process is simple, errors can delay issuance. Common mistakes include applying for multiple EINs unnecessarily, providing incorrect information, or not selecting the correct business structure. Avoiding these pitfalls ensures you receive your EIN without hitches.",
    },
    {
      id: 4,
      title: "After You Get Your EIN",
      desc: "Once you have your EIN, you’ll use it to open business bank accounts, file taxes, and handle payroll if you have employees. It’s also important to keep your EIN secure, as unauthorized use could lead to complications.",
    },
  ];
  return (
    <div className="space-y-5">
      {content?.map(({ id, desc, title }) => (
        <div className="space-y-2" key={id}>
          <h1 className="text-[22px] font-semibold">{title}</h1>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};

const PartThreeBlog = () => {
  const content = [
    {
      id: 1,
      title: "EIN Updates",
      desc: "As your business evolves, certain changes, like switching ownership or business structure, may require updating your EIN with the IRS. However, in some cases, such as a simple name change, you can update your existing EIN rather than obtaining a new one.",
    },
    {
      id: 2,
      title: "EIN Misuse and Security",
      desc: "Just like personal identity theft, businesses can fall victim to EIN misuse. It’s essential to guard your EIN carefully, sharing it only with trusted entities like banks or the IRS. If misuse occurs, report it immediately to prevent financial damage.",
    },
    {
      id: 3,
      title: "When to Cancel an EIN",
      desc: "If your business ceases operations, you can close your EIN account by notifying the IRS in writing. Keep in mind that an EIN is never reused, so even after closure, it remains tied to your business's historical records.",
    },
    {
      id: 4,
      title: "Conclusion and Best Practices",
      desc: "Maintaining your EIN effectively is a sign of a well-managed business. Stay organized by keeping all documents related to your EIN in one place, and ensure you’re compliant with IRS regulations. An EIN is more than a number—it’s a vital tool for business success.",
    },
  ];
  return (
    <div className="space-y-5">
      {content?.map(({ id, desc, title }) => (
        <div className="space-y-2" key={id}>
          <h1 className="text-[22px] font-semibold">{title}</h1>
          <p>{desc}</p>
        </div>
      ))}
    </div>
  );
};
