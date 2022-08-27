import Button from '@atlaskit/button';
import Link from 'next/link';
import type { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <div className={'h-screen flex flex-col justify-center items-center'}>
      <div className={'h-screen flex flex-col justify-center items-center'}>
        <div className={'mb-4'}>
          <h1 className={'text-3xl text-center underline text-slate-800'}>
            Sign in
          </h1>
        </div>
        <div className={'flex flex-col'}>
          <Button appearance={'primary'}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
