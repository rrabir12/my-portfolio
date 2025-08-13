import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#6856AE]">
      <div className="!mx-auto !w-full !max-w-screen-xl !p-4 !py-6 lg:!py-8">
        <div className="md:flex md:justify-between">
          <div className="!mb-6 md:mb-0">
            <h2 className="text-5xl !text-white">Rabi <span className="text-[#D9A520]">Roy.</span></h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="!mb-3 !text-sm !font-semibold  !uppercase !text-white">
                Resources
              </h2>
              <ul className="!text-gray-500 dark:!text-gray-300 !font-medium">
                <li className="!mb-1">
                  <a href="#home" className="hover:!underline">
                    Home
                  </a>
                </li>
                <li className="!mb-1">
                  <a href="/#about" className="hover:!underline">
                    About
                  </a>
                </li>
                <li className="!mb-1">
                  <a href="/#portfolio" className="hover:!underline">
                    Portfolio
                  </a>
                </li>
                <li className="!mb-3">
                  <a href="/#contact" className="hover:!underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="!mb-3 !text-sm !font-semibold !uppercase !text-white">
                Follow me on
              </h2>
              <ul className="!text-gray-600 flex dark:!text-gray-500 !font-medium !space-x-4">
                <li className="!mb-4">
                  <a
                    href="https://github.com/rrabir12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#4d36a5] hover:text-white bg-[#F2F2F2] !p-3 rounded-full flex items-center justify-center"
                  >
                    <FaGithubAlt className="!text-xl" />
                  </a>
                </li>
                <li className="!mb-1">
                  <a
                    href="www.linkedin.com/in/rabi-roy-821466272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[#4d36a5] hover:text-white bg-[#F2F2F2] !p-3 rounded-full flex items-center justify-center"
                  >
                    <FaLinkedinIn className="!text-xl" />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
        <hr className="!my-6 !border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" style={{border: "1px solid gray,"}}/>
        <div className="sm:flex sm:items-center sm:justify-between lg:items-center lg:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
            © 2024{" "}
            <a href="/" className="hover:underline">
               Rabi Portfolio
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
