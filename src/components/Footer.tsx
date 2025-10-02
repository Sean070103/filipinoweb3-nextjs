export default function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__1">
          <a href="/" className="footer__logo">
            <h4>FW3</h4>
          </a>
          <p>
            helping to build a healthy group of Web3 enthusiasts and community
            builders
          </p>
        </div>
        <div className="footer__2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__3">
          <h4>Privacy</h4>
          <ul className="privacy">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="footer__4">
          <h4>Contact Us</h4>
          <div>
            <p>filipinoweb3@gmail.com</p>
          </div>
          <ul className="footer__socials">
            <li>
              <a href="https://www.facebook.com/groups/filipinoweb3communitybuilders" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://t.me/Filipinocryptomanagers" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-telegram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/filipinoweb3" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/filipino-web3-community-builders/" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <i>Copyright © 2025. FW3. All Rights Reserved.</i>
        </div>
      </div>
    </footer>
  );
}




