import { FC } from 'react';
import Header from './ui/Header';
import Hero from './ui/Hero';
import Footer from './ui/Footer';
import Features from './ui/Features/Features';
import FinLiteracy from './ui/FinLiteracy/FinLiteracy';
import Result from './ui/Result';
import News from './ui/News';

import './Landing.scss';

const Landing: FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <FinLiteracy />
      <Result />
      <News />
      <Footer />
    </div>
  );
};

export default Landing;
