import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
              <h1 className="footer__title">Humayun</h1>
              
              <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Project</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">testimonial</a>
                </li>
              </ul>

              <div className="footer__social">
              <a href="https://facebook.com/tufayalkhan.7" className="footer__social-link">
        <i className="uil uil-facebook">  </i>
        </a>
        <a href="https://github.com/Humayun167" className="footer__social-link">
        <i className="uil uil-github-alt">  </i>
        </a> 
        <a href="https://www.linkedin.com/in/humayun96/" className="footer__social-link">
        <i className="uil uil-linkedin">  </i>
        </a>
              </div>

            <span className="footer__copy">Humayun, All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;