import { FC } from 'react';
import moneyGrow from '../../../../../assets/img/money-grow.jpg';

import './FinLiteracy.scss';

const FinLiteracy: FC = () => {
  return (
    <section className="literacy">
      <div className="literacy__left">
        <img src={moneyGrow} alt="moneyGrow" loading="lazy" />
      </div>
      <div className="literacy__right">
        <h2 className="literacy__right-title">Financial literacy</h2>
        <p className="literacy__right-text">
          Financial literacy is the key to successfully managing one's money and
          achieving financial well-being. It is the ability to use resources
          effectively, understand the complexities of the financial world, and
          make prudent decisions.
        </p>
        <p className="literacy__right-text">
          One aspect of financial literacy is the ability to create and stick to
          a budget, prioritize spending, and effectively manage personal
          finances. Additionally, it includes understanding the basics of
          investing, credit, taxes, and the pension system.
        </p>
        <p className="literacy__right-text">
          Individuals with developed financial literacy can reduce financial
          stress, avoid unnecessary risks, and build a resilient financial
          future. Acquiring knowledge in this area is a crucial investment in
          one's financial stability and independence.
        </p>
      </div>
    </section>
  );
};

export default FinLiteracy;
