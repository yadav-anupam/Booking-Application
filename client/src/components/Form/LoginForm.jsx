import React , {useRef} from 'react';
import { loginUser } from '../Utils/user';
import { useDispatch} from 'react-redux';
import { login as authLogin} from '../store/authSlice';


function LoginForm({closeform , exchangeForm}) {
    const formRef = useRef();
    const dispatch = useDispatch();

    const form = (e) => {
        if (formRef.current === e.target) {
            closeform();
        }
    };

    const login = async(event) => {
        event.preventDefault();
        const email = event.target.gmail.value;
        const password = event.target.password.value;
        try {
            const {data} = await loginUser(email , password);
            if (data) {
                dispatch(authLogin(data));
                alert('User logged in successfully');
                console.log(data);
                closeform();
            }
        } catch (error) {
            alert(error);
        }
    }
    
    return (
        <div ref={formRef} onClick={form} className="fixed inset-0 bg-transparent flex justify-center items-center">
            <div className='bg-white flex flex-col p-6 rounded-md shadow-lg w-96'>
                <div className='flex justify-between items-center mb-4'>
                    <span className='text-xl font-semibold'>Log in</span>
                    <svg onClick={closeform} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <form className='flex flex-col gap-4 mb-4' method='post'  onSubmit={login}>
                    <input type="text" placeholder="Gmail" className='border border-gray-300 rounded-md p-3' name='gmail' />
                    <input type="password" placeholder="Password" className='border border-gray-300 rounded-md p-3' name = "password" />
                    <button className='bg-pink-500 text-white font-semibold rounded-md p-3'>Log in</button>
                </form>
                <div className='flex items-center justify-between mb-4'>
                    <span className="border-b w-full"></span>
                    <span className='px-4 text-gray-500'>or</span>
                    <span className="border-b w-full"></span>
                </div>
                <div className='flex flex-col gap-4'>
                    <span> 
                        Not a member?
                        <button className='px-2' onClick={exchangeForm}>Sign up</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
