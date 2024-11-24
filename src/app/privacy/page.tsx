const PrivacyPolicy = () => {
  return (
    <div className="py-10 px-6 container">
      <div className=" bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          <strong>Saidur Consulting</strong> understands that your privacy is
          important to you. We are committed to protecting the privacy of your
          personally-identifiable information as you use this website. This
          Privacy Policy explains how we protect and use the information we
          gather from you. By using this website, you consent to the terms
          described in this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Personal and Non-Personal Information
        </h2>
        <p className="text-gray-600 mb-4">
          Our Privacy Policy identifies how we treat your personal and
          non-personal information.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          What Is Non-Personal Information and How Is It Collected?
        </h3>
        <p className="text-gray-600 mb-4">
          Non-personal information cannot identify you. If you visit this
          website to read information about our services, we may collect
          non-personal information from your computer’s web browser. This
          information helps us improve our website experience and is shared only
          on an anonymous basis.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          What Is Personal Information and How Is It Collected?
        </h3>
        <p className="text-gray-600 mb-4">
          Personal information identifies you as an individual, such as your
          name, email address, or phone number. We may collect personal
          information when you:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Send us an application or form</li>
          <li>Conduct a transaction with us</li>
          <li>Provide information through the website</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          How Is Personal Information Used?
        </h2>
        <p className="text-gray-600 mb-4">
          Saidur Consulting uses personal information to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Provide access to services</li>
          <li>Respond to your requests</li>
          <li>Send you updates about our services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Cookies and Other Technologies
        </h2>
        <p className="text-gray-600 mb-4">
          We use cookies to improve your experience. Cookies help us remember
          your preferences and track usage. You can accept or decline cookies
          through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Security of Personal Information
        </h2>
        <p className="text-gray-600 mb-4">
          We implement security measures to protect your personal information
          from unauthorized access, loss, or misuse. However, no system can be
          completely secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-600 mb-4">
          Saidur Consulting reserves the right to modify this Privacy Policy at
          any time. Changes will be posted on this page. For questions about our
          Privacy Policy, contact us at{" "}
          <a
            href="mailto:support@saidurrahman.org"
            className="text-blue-500 underline"
          >
            support@saidurrahman.org
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:support@saidurrahman.org"
            className="text-blue-500 underline"
          >
            support@saidurrahman.org
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
