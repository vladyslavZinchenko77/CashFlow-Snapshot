import { FC } from 'react';
import saveMoney from '../../../../../assets/img/money-save.jpg';
import hobbie from '../../../../../assets/img/hobbie.jpg';
import deposit from '../../../../../assets/img/money-acumulate.jpg';
import transport from '../../../../../assets/img/money-car.jpg';

import './Result.scss';

const Result: FC = () => {
  return (
    <section className="results">
      <h2 className="results__title section__title">Our Services help you</h2>
      <h4 className="results__subtitle section__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus
        mattis vel feugiat erat tortor eleifend.
      </h4>
      <ul className="results__list">
        <li className="results__list-item">
          <img src={saveMoney} alt="saveMoney" loading="lazy" />
          <p className="results__list-item--text">IPDC SAVING</p>
        </li>
        <li className="results__list-item">
          <img src={hobbie} alt="hobbie" loading="lazy" />
          <p className="results__list-item--text">IPDC Personal</p>
        </li>
        <li className="results__list-item">
          <img src={deposit} alt="deposit" loading="lazy" />
          <p className="results__list-item--text">IPDC Deposit</p>
        </li>
        <li className="results__list-item">
          <img src={transport} alt="transport" loading="lazy" />
          <p className="results__list-item--text">IPDC auto</p>
        </li>
      </ul>
    </section>
  );
};

export default Result;
