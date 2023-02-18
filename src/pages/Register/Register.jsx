import React from 'react'
import '../Register/Register.css'
import Logo from '../../img_and_logos/Logo.svg'
import Background from '../../img_and_logos/Picture.png'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
        const userInfo = { name, email, password };
        if (password.length < 6 | password.length > 20 ) {
            toast.error("Your password must be at least 6, max 20 characters long");
            return
          }   
        try {
          const response = await axios.post('https://assign-api.piton.com.tr/api/rest/register', userInfo);
          console.log('Kayıt işlemi başarılı:', response.data);
          navigate("/login");
        } catch (error) {
          console.error('Kayıt hatası:', error);
        }
      };


    return (
        <div className='flex justify-center items-center'>
            <div className='flex-1 flex flex-col'>
                <img
                    src={Background} alt='arkaplan' />
            </div>


            <div className='flex-1 flex flex-col justify-center items-center'>
                <table>
                    <tr>
                        <img src={Logo} className='h-78 w-120 mb-12 ' alt='logo' />
                    </tr>
                    <tr>
                        <h3 className='font-manrope font-semibold text-sm lg:text-lg text-primary opacity-60'>Welcome back!</h3>
                        <h1 className='font-manrope font-bold text-2xl leading-11 text-gray-900 mb-12'>Login to your account</h1>
                    </tr>
                    <tr>
                        <div className='mb-12'>
                            <form>
                                <label className='block mx-auto mb-8'>
                                    <span className='block'>Name</span>
                                    <input
                                        className='p-2 w-full border border-gray-300 rounded'
                                        placeholder='John Doe'
                                        required
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>

                                <label className='block mx-auto  mb-8'>
                                    <span className='block'>E-mail</span>
                                    <input
                                        className='p-2 w-full border border-gray-300 rounded'
                                        placeholder='john@mail.com'
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>

                                <label className='block mx-auto'>
                                    <span className='block'>Password</span>
                                    <input
                                        className='p-2 w-full border border-gray-300 rounded'
                                        placeholder='********'
                                        required
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>

                            </form>
                        </div>
                    </tr>
                    <tr>
                        <Link to="/login">
                        <button className='mb-2 flex flex-row justify-center items-center w-48 h-16 bg-[#EF6B4A] rounded text-white'>Go to Login</button>
                        </Link>
                        <button className='flex-row justify-center items-center w-48 h-16 bg-white rounded-md text-indigo-600 border border-indigo-600' onClick={handleRegister}>Register</button>
                    </tr>

                </table>

            </div>
        </div>
    )
}

export default Register