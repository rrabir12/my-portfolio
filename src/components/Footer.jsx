import { FaFacebookF, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#6856AE]">
      <div className="!mx-auto !w-full !max-w-screen-xl !p-4 !py-6 lg:!py-8">
         {/* <div className="!mb-6 md:mb-0">
            <h2 className="text-5xl !text-white text-center">Rabi <span className="text-[#D9A520]">Roy.</span></h2>
          </div> */}
       <div className="sm:flex sm:items-center sm:justify-between lg:items-center lg:justify-center">
          <span className="text-sm">
            © All Rights Reserved by Rabi Roy.
          </span>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
