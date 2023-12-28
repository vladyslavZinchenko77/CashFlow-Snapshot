import { FC } from 'react';
import facebook from '../../../../../assets/icons/facebook.svg';
import youtube from '../../../../../assets/icons/youtube.svg';
import linkedin from '../../../../../assets/icons/linkedin.svg';
import instagram from '../../../../../assets/icons/instagram.svg';

import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="nav-list">
          <li className="nav-list__item">
            <h3 className="nav-list__item-title">About the company</h3>
            <p className="nav-list__item-text">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a
                style={{ padding: 16 }}
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                style={{ padding: 16 }}
                href="https://www.youtube.com/"
                target="_blank"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                style={{ padding: 16 }}
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                style={{ padding: 16 }}
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img src={instagram} alt="instagram}" />
              </a>
            </div>
          </li>
          <li className="footer__nav-list--item">
            <h3 className="nav-list__item-title">Products</h3>
            <a className="nav-list__item-link" href="">
              CSR Activities
            </a>
            <a className="nav-list__item-link" href="">
              Green Banking
            </a>
            <a className="nav-list__item-link" href="">
              News
            </a>
            <a className="nav-list__item-link" href="">
              Ongoing Campgain
            </a>
            <a className="nav-list__item-link" href="">
              Updates
            </a>
          </li>
          <li className="footer__nav-list--item">
            <h3 className="nav-list__item-title">Get Started</h3>
            <a className="nav-list__item-link" href="">
              Career
            </a>
            <a className="nav-list__item-link" href="">
              Contact Us
            </a>
            <a className="nav-list__item-link" href="">
              Government Securities
            </a>
            <a className="nav-list__item-link" href="">
              Examples
            </a>
            <a className="nav-list__item-link" href="">
              NIS
            </a>
          </li>
          <li className="footer__nav-list--item">
            <h3 className="nav-list__item-title">About</h3>
            <a className="nav-list__item-link" href="">
              IPDC at a Glance
            </a>
            <a className="nav-list__item-link" href="">
              Mission, VIsion & Values
            </a>
            <a className="nav-list__item-link" href="">
              Corporate Governanace
            </a>
            <a className="nav-list__item-link" href="">
              Shareholders
            </a>
            <a className="nav-list__item-link" href="">
              Investor Relations
            </a>
          </li>
          <li className="footer__nav-list--item">
            <a href="tel:16519">16519</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
