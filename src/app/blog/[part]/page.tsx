const Page = ({ params }: { params: { part: number } }) => {
  return (
    <div className="container mt-[100px]">
      <PartOne />
    </div>
  );
};

export default Page;

const PartOne = () => {
  return (
    <div>
      <p>
        An EIN is a unique nine-digit number issued by the Internal Revenue
        Service (IRS) to identify your business for tax purposes. Think of it as
        a Social Security Number (SSN) for your business.
      </p>
      <p></p>
    </div>
  );
};
