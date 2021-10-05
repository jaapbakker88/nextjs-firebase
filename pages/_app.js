import { UserProvider } from '../contexts/UserContext';
import Main from '../layouts/main';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </UserProvider>
  );
}

export default MyApp;
