import { useState } from 'react';
import { useAuth } from '../../contexts/UserContext';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuth();

  return (
    <>
      <h1 className="title">Log In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          logIn(email, password);
          e.target.reset();
        }}
      >
        <div>
          <label htmlFor="email">email: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">sign up</button>
      </form>
    </>
  );
}
