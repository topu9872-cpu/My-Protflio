import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Contact Form</div>
        <form className="form" >
               <label className='flex text-cyan-500 text-lg font-bold'>Name:</label>
          <input placeholder="Name" id="name" name="name" type="text" className="input text-lg text-purple-500 font-semibold" required />
            <label className='flex text-cyan-500 text-lg font-bold mt-2'>Email:</label>
          <input placeholder="E-mail" id="email" name="email" type="email" className="input text-lg text-purple-500 font-semibold" required />
        
           <label className='flex text-cyan-500 text-lg font-bold mt-2'>Message:</label>
          <textarea rows='4' cols='5' placeholder="Message" id="text-area" name="text-area" type="text " className='w-full placeholder:text-taupe-400 shadow-[0_0_10px_white] text-lg text-purple-500 font-semibold mt-2 rounded-2xl px-2 border-2' />

          <button type="submit" className="login-button" >Send Message</button>
        </form>
        <div className="social-account-container">
          <span className="title">Or Contact in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <Image src="/assrts/tool iccons/icons8-gmail-logo-100.png" height={40} width={40} alt="gmail" className='object-cover' />
            </button>
            <button className="social-button apple">
               <Image src="/assrts/tool iccons/icons8-whatsapp-94.png" height={40} width={40} alt="gmail" className='object-cover' />
            </button>
            <button className="social-button twitter">
                <Image src="/assrts/tool iccons/icons8-telegram-94.png" height={40} width={40} alt="gmail" className='object-cover' />
            </button>
          </div>
        </div>

      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 450px;
   
   
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid cyan;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: rgb(16, 137, 211);
  }

  .form {
    margin-top: 20px;
  }

  .form .input {
    width: 100%;
   background:none;
    border: none;
    padding: 15px 20px;
    border-radius: 16px;
    margin-top: 10px;
    box-shadow: #cff0ff 0px 0px 10px 5px;
    border-inline: 2px solid transparent;
  }

  .form .input::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input::placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12b1d1;
  }

  

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(
      45deg,
      rgb(16, 137, 211) 0%,
      rgb(18, 177, 209) 100%
    );
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
  }
    
  .social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 2px;
    border-radius: 100%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .Image {
    fill: white;
    margin: auto;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 9px;
  }`;

export default Form;
