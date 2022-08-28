import { Create } from '@atlaskit/atlassian-navigation';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const CreateButton = () => {
  const session = useSession();

  if (session.status === 'authenticated') {
    return <Create onClick={() => signOut()} text="Sign out" />;
  }

  return (
    <Link href={'/signin'} passHref>
      <Create text="Sign in" />
    </Link>
  );
};

export default CreateButton;
