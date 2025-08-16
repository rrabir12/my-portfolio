function Footer() {
  return (
    <footer className="bg-[#6856AE] text-white">
        
        {/* Footer Content */}
        <div className="!items-center !gap-4 !mx-auto !text-center  !py-6">

          {/* Copyright */}
          <span className="text-sm opacity-80">
            © {new Date().getFullYear()} All Rights Reserved by Rabi Roy.
          </span>
        </div>
    </footer>
  );
}

export default Footer;
