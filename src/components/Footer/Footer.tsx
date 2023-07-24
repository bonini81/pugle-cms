import Container from "@mui/material/Container";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <section className="main-footer-wrapper">
          <div className="footer-widget-area">
            <ul>
              <li>Hello</li>
            </ul>
          </div>

          <div className="footer-widget-area">
            <ul>
              <li>Hello</li>
            </ul>
          </div>

          <div className="footer-widget-area">
            <ul>
              <li>Hello</li>
            </ul>
          </div>
          <div className="footer-widget-area">
            <address>hello</address>
          </div>
        </section>
        <article>
          <div className="sub-footer-area">Copyright Pugle.net 2020</div>
        </article>
      </Container>
    </footer>
  );
};

export default Footer;
