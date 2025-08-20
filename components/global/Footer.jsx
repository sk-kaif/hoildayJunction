const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t">
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">MySite</h2>
          <p className="text-sm">
            We provide reliable transport services with safety, comfort, and
            customer satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-blue-600">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#vechicals" className="hover:text-blue-600">
                Vehicles
              </a>
            </li>
            <li>
              <a href="#price" className="hover:text-blue-600">
                Price
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-600">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 Mumbai, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ support@mysite.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
