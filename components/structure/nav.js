import Link from 'next/link';
import { useAuth } from '../../contexts/UserContext';
import styles from './nav.module.css';

const Nav = () => {
  const { authUser, logOut } = useAuth();
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>

      <ul className={styles.right}>
        {authUser ? (
          <>
            <li>
              <Link href="/accounts/profile/">{authUser.email}</Link>
            </li>
            <li onClick={logOut}>Sign Out</li>
          </>
        ) : (
          <>
            <li>
              <Link href="/accounts/signin">Login</Link>
            </li>
            <li>
              <Link href="/accounts/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
