import { useAuth } from '../../contexts/UserContext';

export default function Profile() {
  const { authUser } = useAuth();
  return (
    <>
      <h1 className="title">{authUser?.email}</h1>
    </>
  );
}
