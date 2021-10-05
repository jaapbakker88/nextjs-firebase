import Nav from '../components/structure/nav';

export default function Main({ children }) {
  return (
    <>
      <Head>
        <title>Firebase auth/nextjs template</title>
      </Head>
      <main>
        <Nav />
        <main>{children}</main>
      </main>
    </>
  );
}
