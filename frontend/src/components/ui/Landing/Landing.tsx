import { FC } from 'react';
import HeaderLanding from './ui/HeaderLanding';
import Hero from './ui/Hero';
import FooterLanding from './ui/FooterLanding';
import Features from './ui/Features/Features';
import FinLiteracy from './ui/FinLiteracy/FinLiteracy';
import Result from './ui/Result/Result';
import News from './ui/News';

import './Landing.scss';

const Landing: FC = () => {
  return (
    <div>
      <HeaderLanding />
      <Hero />
      <Features />
      <FinLiteracy />
      <Result />
      <News />
      <FooterLanding />
    </div>
  );
};

export default Landing;
