import React from "react";
import "./Footer.css";

import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__content__main">
          <section className="footer__content">
            <h4>About</h4>
            <ul className="footer__list">
              <li>How Airbnb works</li>
              <li>Newsroom</li>
              <li>Airbnb Plus</li>
              <li>Airbnb Luxe</li>
              <li>HotelTonight</li>
              <li>Airbnb for Work</li>
              <li>Careers</li>
              <li>Olypics</li>
            </ul>
          </section>
          <section className="footer__content">
            <h4>Community</h4>
            <ul className="footer__list">
              <li>Diversity &amp; Belonging</li>
              <li>Accessibility</li>
              <li>Airbnb Associates</li>
              <li>Frontline Stays</li>
              <li>Invite friends</li>
            </ul>
          </section>
          <section className="footer__content">
            <h4>Host</h4>
            <ul className="footer__list">
              <li>Host your home</li>
              <li>Host an Online Experience</li>
              <li>Host an Experience</li>
              <li>Responsible hosting</li>
              <li>Open Homes</li>
              <li>Resource Centre</li>
              <li>Community Centre</li>
            </ul>
          </section>
          <section className="footer__content">
            <h4>Support</h4>
            <ul className="footer__list">
              <li>Our COVID-19 Response</li>
              <li>Help Centre</li>
              <li>Cancellation options</li>
              <li>Neighbourhood Support</li>
              <li>Trust &amp; Safety</li>
            </ul>
          </section>
        </div>
        <div className="footer__content__others">
          <section>
            <div className="languages__social">
              <div>
                <div className="public">
                  <span className="language">
                    <LanguageIcon className="span1" />
                    <span className="span2">English &#40;GB&#41;</span>
                  </span>
                  <span className="currency">
                    <span className="span1">£</span>
                    <span className="span2">GBP</span>
                  </span>
                </div>
                <div className="social__icons">
                  <ul>
                    <li className="social__icon">
                      <FacebookIcon />
                    </li>
                    <li className="social__icon">
                      <TwitterIcon />
                    </li>
                    <li className="social__icon">
                      <InstagramIcon />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="terms">
              <div className="terms__wrapper">
                <div className="terms__part1">
                  © 2020 Airbnb, Inc. All rights reserved
                </div>
                <div className="terms__part2">
                  <span>Privacy</span>
                  <span className="dot">.</span>
                  <span>Terms</span>
                  <span className="dot">.</span>
                  <span>Sitemap</span>
                  <span className="dot">.</span>
                  <span>UK Modern Slavery Act</span>
                  <span className="dot">.</span>
                  <span>Company details</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Footer;
