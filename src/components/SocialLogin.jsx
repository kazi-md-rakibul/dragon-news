import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-semibold mb-3 text-center'>Login with</h2>
      <div className='*:w-full space-y-2'>
        <button className='btn'> <VscGithub className='text-lg'></VscGithub> <span className='font-medium text-gray-600'>Login with Github</span> </button>
        <button className='btn' ><FcGoogle className='text-lg'></FcGoogle> <span className='font-medium text-gray-600' >Login with Google</span> </button>
      </div>
    </div>
  );
};

export default SocialLogin;