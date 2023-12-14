import { FC } from 'react';
import moneyImg from '../../../../../assets/img/money.svg';

import './Hero.scss';

const Hero: FC = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">Chase Your Dream with us</h1>
        <h4 className="hero__subtitle">
          The harder you work for something, the greater you’ll feel when you
          achieve it.
        </h4>
      </div>
      <div className="hero__right">
        <img className="hero__img" src={moneyImg} alt="money" />
      </div>
    </section>
  );
};

export default Hero;
