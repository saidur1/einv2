const TermsOfService = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 ">
      <div className="container bg-white shadow-md rounded-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>Saidur Consulting</strong>. By using our services,
          you agree to comply with and be bound by the following terms and
          conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By accessing or using our website and services, you agree to be bound
          by these Terms of Service and our Privacy Policy. If you do not agree
          to these terms, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Changes to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to modify these terms at any time. Changes will
          be effective immediately upon posting. It is your responsibility to
          review the terms periodically.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Use of Services
        </h2>
        <p className="text-gray-600 mb-4">
          Our services are intended for lawful purposes only. You agree not to
          use our services to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
          <li>Violate any laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Distribute harmful or malicious content</li>
          <li>Engage in unauthorized access or misuse of our systems</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content on this website, including text, graphics, logos, and
          software, is the property of <strong>Saidur Consulting</strong> and is
          protected by copyright, trademark, and other intellectual property
          laws. You may not reproduce, distribute, or create derivative works
          from our content without prior written permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          To the fullest extent permitted by law,{" "}
          <strong>Saidur Consulting</strong> shall not be liable for any direct,
          indirect, incidental, special, consequential, or punitive damages
          resulting from your use of our services.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Termination of Service
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to suspend or terminate your access to our
          services at any time, without prior notice, if you violate these terms
          or engage in any conduct deemed harmful to our business.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Governing Law
        </h2>
        <p className="text-gray-600 mb-4">
          These terms are governed by the laws of [Your Country/Region]. Any
          disputes arising from these terms shall be resolved in the courts of
          [Your Country/Region].
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-600">
          If you have any questions about these Terms of Service, please contact
          us at:{" "}
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

export default TermsOfService;
