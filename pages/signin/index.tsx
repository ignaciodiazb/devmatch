import Button from '@atlaskit/button';
import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';
import { getSession, signIn } from 'next-auth/react';

const SignIn: NextPage = (props) => {
  return (
    <div className={'h-screen flex flex-col justify-center items-center'}>
      <div className={'h-screen flex flex-col justify-center items-center'}>
        <div className={'mb-4'}>
          <h1 className={'text-3xl text-center underline text-slate-800'}>
            Sign in
          </h1>
        </div>
        <div className={'flex flex-col'}>
          <Button appearance={'primary'} onClick={() => signIn()}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      props: {
        isLoggedIn: true,
      },
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      isLoggedIn: false,
    },
  };
};
