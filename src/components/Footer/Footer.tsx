import Container from "@mui/material/Container";

import "./Footer.scss";

export interface PugleFooterProps {
  copyright: string;
}


const Footer = (props: PugleFooterProps) => {
  const { copyright } = props;
  return (
    <footer>
      <section className="main-footer-wrapper">
        <Container>
          <div className="footer-widget-area">
            <ul>
              <li>
                <a href="https://pugle.net/">Hello</a>
              </li>
            </ul>
          </div>

          <div className="footer-widget-area">
            <ul>
              <li>
                <a href="https://pugle.net/">Hello</a>
              </li>
            </ul>
          </div>

          <div className="footer-widget-area">
            <ul>
              <li>
                <a href="https://pugle.net/">Hello</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget-area">
            <address>hello</address>
          </div>
        </Container>
      </section>
      <article className="wrapper-sub-footer">
        <Container>
          <div className="sub-footer-area">{copyright}</div>
        </Container>
      </article>
    </footer>
  );
};

export default Footer;
