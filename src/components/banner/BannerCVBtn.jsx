import React from "react";
import styled from "styled-components";

const BannerCVButton = () => {
  return (
    <StyledWrapper>
      <button className="text-nowrap items-center flex">
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>{" "}
        Downlod CV
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
  
    display: flex;
    color:white;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-family: inherit;
    font-size: 18px;
    text-size: 20px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #endregion;
    background-color: var(--color-purple-500);
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(255, 255, 255, 0.333);
    border-radius: 40px 40px 40px 40px;
    padding: 16px 24px 16px 28px;
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow:
      -4px -2px 16px 0px #ffffff,
      4px 2px 16px 0px rgb(95 157 231 / 48%);
  }

  button:hover {
    color: #516d91;
    background-color: #00ffff;
    box-shadow:
      -2px -1px 8px 0px var(--color-purple-500),
      2px 1px 8px 0px rgb(95 157 231 / 48%);
  }

  button:active {
    box-shadow: none;
  }
`;

export default BannerCVButton;
