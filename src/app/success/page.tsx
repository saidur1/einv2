const Success = () => {
  return (
    <div className="max-w-[600px] mx-auto h-[calc(100vh-150px)] flex flex-col justify-start mt-[100px] items-center space-y-5 px-4">
      <p className="text-center text-[23px] font-raleway text-gray-600">
        <span className="font-semibold">Congratulations!</span> Your application
        is submitted to us. We will call you shortly!
      </p>
      <p className="text-center text-[18px] font-raleway text-gray-600">
        To speed up your application, send us what-app message right now{" "}
        <a
          href="https://wa.link/5u8z5q"
          target="_whatsapp"
          className="text-blue-700 font-medium hover:underline"
        >
          link whasapp
        </a>
      </p>
    </div>
  );
};

export default Success;
