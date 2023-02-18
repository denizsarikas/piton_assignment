import React from 'react'
import '../Login/Login.css'
import Logo from '../../img_and_logos/Logo.svg'
import Background from '../../img_and_logos/Picture.png'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, setRememberMe } from '../../features/auth/authSlice';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
      e.preventDefault();
      const userInfo = { email, password };
      try {
        const response = await axios.post('https://assign-api.piton.com.tr/api/rest/login', userInfo);
        const  token  = response.data;
        const tokenValue = token.action_login.token

        console.log('burası çok önemli', token.action_login.token)

        if (checked === true && tokenValue !== '') {
          console.log('check durumu tıklanarak true oldu!');
          await dispatch(setToken(tokenValue));
          await dispatch(setRememberMe(true));
          localStorage.setItem('token', tokenValue);
          console.log('localStorage\'a token kaydedildi!');
          navigate("/");
        }
        else if (tokenValue !== '') {
          console.log('Giriş işlemi başarılı:', response.data);
          await dispatch(setToken(tokenValue));
          navigate("/");
        }
      } catch (error) {
        console.error('Giriş hatası:', error);
      }
    };

    //const tokenControl = useSelector(selectToken);
    //console.log('Giriş işlemi detayları token:', tokenControl);
    //console.log('checkbox stateteki durum: ', checked)
    //console.log('checkbox reduxtan gelen durum: ', selectControl)



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
              <form onSubmit={handleLogin}>

                <label className='block mx-auto'>
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
                  <div className="flex items-center">
                    <input onClick={console.log('deneme', checked)} checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" id="remember" className="h-4 w-4 border-gray-300 rounded text-primary-color focus:ring-primary-color" />
                    <label for="remember" className="ml-2 block text-sm font-medium text-[#6251DD]">Remember Me</label>
                  </div>
                </label>

              </form>
            </div>
          </tr>
          <tr>
            <button className='mb-2 flex flex-row justify-center items-center w-48 h-16 bg-[#EF6B4A] rounded text-white'  onClick={handleLogin}>Login</button>
            <Link to="/register">
            <button className='flex-row justify-center items-center w-48 h-16 bg-white rounded-md text-indigo-600 border border-indigo-600'>Go to Register Page</button>
            </Link>
          </tr>

        </table>



      </div>
    </div>
  )
}

export default Login