import { privacyContent } from "@/data";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-[calc(100vh-145px)] container pt-6 pb-[80px] bg-white">
      <h1 className="text-[#2F2F2F] text-[32px] font-bold">Privacy Policy</h1>
      <div className="pt-[30px] md:pt-[50px]  lg:pt-[70px]">
        <p>
          SAIDUR CONSULTING understands that your privacy is important to you.
          We are committed to protecting the privacy of your
          personally-identifiable information as you use this website. This
          Privacy Policy tells you how we protect and use information that we
          gather from you. By using this website, you consent to the terms
          described in the most recent version of this Privacy Policy. You
          should also read our Terms of Use to understand the general rules
          about your use of this website, and any additional terms that may
          apply when you access particular services or materials on certain
          areas of this website. “We,” “our” means SAIDUR CONSULTING and its
          affiliates. “You,” “your,” visitor,” or “user” means the individual
          accessing this site.
        </p>
        <p className="mt-[44px]">PERSONAL AND NON-PERSONAL INFORMATION</p>
        <p className="mt-[22px]">
          Our Privacy Policy identifies how we treat your personal and
          non-personal information.
        </p>
      </div>
      <div className="mt-[50px] flex flex-col gap-y-[60px]">
        {privacyContent?.map(({ content, title, id }) => (
          <div className="space-y-6" key={id}>
            <h2 className="font-medium">{title}</h2>
            {content?.map((eachContentParagraph, index) => (
              <p key={index}>{eachContentParagraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
