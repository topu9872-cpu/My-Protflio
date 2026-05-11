"use client";

import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span className="typing-text text-[#00ffffff]">I'm a</span>

        <div className="words">
          <div className="word-list">
            <span className="word">Full Stack Developer</span>
            <span className="word">MERN Stack Developer</span>
            <span className="word">React.js Developer</span>
            <span className="word">Next.js Developer</span>
            <span className="word">UI Focused Developer</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 600;

    color: white;
  }

  .typing-text {
    position: relative;
  }

  .typing-text::after {
    content: "";
    position: absolute;
    right: -8px;
    top: 5px;

    width: 2px;
    height: 80%;

    background: #8b5cf6;

    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .words {
    height: 45px;
    overflow: hidden;
    position: relative;
  }

  .word-list {
    display: flex;
    flex-direction: column;

    animation: slide 10s infinite;
  }

  .word {
    height: 45px;
    color: #8b5cf6;
  }

  @keyframes slide {
    0%,
    15% {
      transform: translateY(0);
    }

    20%,
    35% {
      transform: translateY(-45px);
    }

    40%,
    55% {
      transform: translateY(-90px);
    }

    60%,
    75% {
      transform: translateY(-135px);
    }

    80%,
    95% {
      transform: translateY(-180px);
    }

    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    .loader {
      font-size: 22px;
      flex-direction: column;
      align-items: flex-start;
    }

    .words {
      height: 35px;
    }

    .word {
      height: 35px;
    }
  }
`;

export default Loader;