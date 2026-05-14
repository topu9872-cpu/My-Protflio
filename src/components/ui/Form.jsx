import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Contact Form</div>
        <form className="form">
          <label className='flex text-cyan-500 text-lg font-bold'>Name:</label>
          <input placeholder="Name" id="name" name="name" type="text" className="input text-lg text-purple-500 font-semibold" required />
          
          <label className='flex text-cyan-500 text-lg font-bold mt-2'>Email:</label>
          <input placeholder="E-mail" id="email" name="email" type="email" className="input text-lg text-purple-500 font-semibold" required />

          <label className='flex text-cyan-500 text-lg font-bold mt-2'>Message:</label>
          <textarea rows='4' cols='5' placeholder="Message" id="text-area" name="text-area" className='w-full placeholder:text-taupe-400 shadow-[0_0_10px_white] text-lg text-purple-500 font-semibold mt-2 rounded-2xl px-2 border-2' />

          <button type="submit" className="login-button">Send Message</button>
        </form>

      
        <div className="social-account-container">
          <span className="title">Or Contact in with</span>
          <div className="social-accounts">
            
            <a href="mailto:mehedihasant270@gmail.com" className="social-button google">
              <Image src="/assrts/tool iccons/icons8-gmail-logo-100.png" height={40} width={40} alt="gmail" className='object-cover' />
            </a>

            <a href="https://wa.me/8801770977764" target="_blank" rel="noreferrer" className="social-button apple">
              <Image src="/assrts/tool iccons/icons8-whatsapp-94.png" height={40} width={40} alt="whatsapp" className='object-cover' />
            </a>

            <a href="https://t.me/topu9872" target="_blank" rel="noreferrer" className="social-button twitter">
              <Image src="/assrts/tool iccons/icons8-telegram-94.png" height={40} width={40} alt="telegram" className='object-cover' />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .container {
    width: 100%;
   width: 450px; /* Reset to 450px for better look */
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid cyan;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
    box-sizing: border-box;
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
    box-sizing: border-box;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  /* RESTORED SOCIAL UI STYLES */
  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
    margin-bottom: 10px;
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
    
  .social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 5px;
    border-radius: 100%;
    width: 45px; /* Size for the icon circle */
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    .container {
      padding: 20px 15px;
      margin: 10px;
    }
  }
`;

export default Form;