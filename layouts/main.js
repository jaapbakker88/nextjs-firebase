import Nav from '../components/structure/nav';

export default function Main({ children }) {
  return (
    <main>
      <Nav />
      <main>{children}</main>
    </main>
  );
}
