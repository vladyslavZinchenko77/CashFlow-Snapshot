import { FC } from 'react';

const LogIn: FC = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form name="login">
        <label htmlFor="mail">Email</label>
        <input type="email" name="mail" placeholder="Enter your email" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIn;
