import Container from "@mui/material/Container";

import "./Footer.scss";
// eslint-disable-next-line no-restricted-imports
import footerLinks from "../../data/footerLinks.json";

export interface PugleFooterProps {
  copyright: string;
}

const Footer = (props: PugleFooterProps): JSX.Element => {
  const { copyright } = props;
  const { widget1, widget2, widget3, address, titles } = footerLinks;
  return (
    <footer>
      <section className="main-footer-wrapper">
        <Container className="container-footer-wrap">
          <div className="footer-widget-area">
            <h3>{titles.title1}</h3>
            <ul>
              {widget1.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url}>{link.menu}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-widget-area">
            <h3>{titles.title2}</h3>
            <ul>
              {widget2.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url}>{link.menu}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-widget-area">
            <h3>{titles.title3}</h3>
            <ul>
              {widget3.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url}>{link.menu}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-widget-area">
            <h3>{address.title}</h3>
            <address>{address.address}</address>
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
