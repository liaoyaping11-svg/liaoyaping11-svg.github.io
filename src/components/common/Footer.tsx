const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">© {year} LY Ping · All rights reserved</span>
          <span className="footer-mark">
            Designed &amp; Built by <span>LYP</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
