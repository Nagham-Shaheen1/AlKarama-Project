import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookies';
import './Login.css';
import { data } from '../../assets/data/data';
import usePost from '../../custom Hooks/usePost';
import { config } from '../../Constant/environment';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [submit, setSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل
  const [isSuccess, setIsSuccess] = useState(false); // حالة النجاح
  const navigate = useNavigate();

  //username admin@alkarameh.com
  //password admin@12345alkarameh12345@admin

  const [postData, postFunc] = usePost(config.login, {
    email: user,
    password: pass
  });

  function handleSettingSubmit(e) {
    e.preventDefault();
    setSubmit(true);
    setIsLoading(true); // تفعيل حالة التحميل
    postFunc();
  }

  useEffect(() => {
    if (postData) {
        console.log(postFunc);
      Cookies.setItem('token', postData.toString());
      const token = Cookies.getItem('token');
      if (postData) {
        setIsLoading(false); // إيقاف حالة التحميل
        setIsSuccess(true); // تفعيل حالة النجاح
        setTimeout(() => {
          navigate('/dashboard/');
        }, 1500);
      }
    }
  }, [postData]);

  return (
    <div className='login-hero'>
      <div className='container-for-elements'>
        <form action='/dashboard' method='post'>
          <label htmlFor='user'>Username</label>
          <input
            type='email'
            name='username'
            id='user'
            placeholder='User Name'
            onChange={(e) => {
              setUser(e.target.value);
            }}
            value={user}
          />
          <p
            style={{
              display: user.length < 5 && submit ? 'block' : 'none',
              color: '#f0f0f0',
              fontSize:'1vw',
            }}
          >
            please enter a username with more than 4 characters
          </p>
          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            name='password'
            id='pass'
            placeholder='Password'
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <p
            style={{
              display: pass.length < 5 && submit ? 'block' : 'none',
              color: '#f0f0f0',
              fontSize:'1vw',
            }}
          >
            please enter a password with more than 4 characters
          </p>

          <button type='submit' onClick={handleSettingSubmit}>
            Login
          </button>

        </form>
        
        {isLoading && <p style={{color:'white'}}>Loading...</p>}
          {isSuccess && <p style={{color:'white'}}>Login successful!</p>}
      </div>
    </div>
  );
}

export default Login;