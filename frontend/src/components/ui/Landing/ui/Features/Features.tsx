import { FC } from 'react';

import './Features.scss';

const Features: FC = () => {
  return (
    <section className="features">
      <ul className="features__list">
        <li className="features__list-item">
          <h3 className="features__list-item--title">General Information:</h3>
          <p className="features__list-item--text">
            Tracking your financial status at a glance. Get a quick overview of
            your financial position and key indicators to easily determine how
            to manage your finances.
          </p>
        </li>
        <li className="features__list-item">
          <h3 className="features__list-item--title">Income and Expenses:</h3>
          <p className="features__list-item--text">
            Transparent analysis of your income and expenses, helping you
            understand where your money comes from and where it goes. Simplify
            financial tracking, identify patterns, and make informed decisions
            to optimize your budget.
          </p>
        </li>
        <li className="features__list-item">
          <h3 className="features__list-item--title">Statistics:</h3>
          <p className="features__list-item--text">
            In-depth analysis of your financial activity through data
            visualization. View graphs, charts, and reports to quickly
            understand the dynamics of changes in your finances and make
            effective decisions.
          </p>
        </li>
        <li className="features__list-item">
          <h3 className="features__list-item--title">Goals and Budgeting:</h3>
          <p className="features__list-item--text">
            Set financial goals and track their achievement. Develop budgets for
            each category and receive notifications as you approach limits.
            Efficient money management to achieve your financial objectives.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
