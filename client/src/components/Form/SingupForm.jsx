import React, { useRef } from 'react';
import {registerUser} from '../Utils/user';

export default function SignupForm({ closeform , exchangeForm }) {
    const formRef = useRef();

    const form = (e) => {
        if (formRef.current === e.target) {
            closeform();
        }
    };
    return (
        <div ref={formRef} onClick={form} className="fixed inset-0 bg-transparent flex justify-center items-center">
            <div className='bg-white flex flex-col p-6 rounded-md shadow-lg w-96'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-xl font-semibold'>Sign Up</span>
                    <svg onClick={closeform} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <form onSubmit= {registerUser} className='flex flex-col gap-4 mb-4' >
                    <input type="text" placeholder="Name" className='border border-gray-300 rounded-md p-3' name = "name" />
                    <input type="text" placeholder="E-mail" className='border border-gray-300 rounded-md p-3' name = "email"/>
                    <input type="password" placeholder="Password" className='border border-gray-300 rounded-md p-3' name='password' />
                    <button className='bg-pink-500 text-white font-semibold rounded-md p-3'>Sign up</button>
                </form>
                <div className='flex items-center justify-between mb-4'>
                    <span className="border-b w-full"></span>
                    <span className='px-4 text-gray-500'>or</span>
                    <span className="border-b w-full"></span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span> 
                        Already a member?
                        <button className='px-2' onClick={exchangeForm}>Log in</button>
                    </span>
                    
                </div>
            </div>
    </div>
    );
}
