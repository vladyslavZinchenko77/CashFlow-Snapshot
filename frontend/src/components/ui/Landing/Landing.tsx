import { FC } from 'react';
import HeaderLanding from './ui/HeaderLanding';
import Hero from './ui/Hero';
import FooterLanding from './ui/FooterLanding';
import Features from './ui/Features/Features';

import './Landing.scss';

const Landing: FC = () => {
  return (
    <div>
      <HeaderLanding />
      <Hero />
      <Features />
      <FooterLanding />
    </div>
  );
};

export default Landing;
