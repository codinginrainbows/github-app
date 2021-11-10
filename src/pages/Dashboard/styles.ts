import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    border: 1px solid #fff;

    &:focus, &:hover {
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: box-shadow 0.1s;
    }

    ${props => props.hasError && css`
      border: 1px solid #ff0000;
      border-right: 0;
      animation: shake 0.50s cubic-bezier(.36,.07,.19,.97) both ;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;

      @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        
        20%, 80% {
          transform: translate3d(1px, 0, 0);
        }

        30%, 50%, 70% {
          transform: translate3d(-2px, 0, 0);
        }

        40%, 60% {
          transform: translate3d(2px, 0, 0);
        }
      }
    `}
  }

  &::placeholder {
      color: #a8a8b3;
    }

  button {
    width: 210px;
    height: 70px;
    background: #4169e1;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.1s;

    &:hover {
      background: ${shade(0.1, '#4169e1')};
    }

    &:active {
      transform: scale(0.96);
    }
  }
`

export const Error = styled.span `
  display: block;
  color: #ff0000;
  margin-top: 12px;
  font-size: 14px;
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    transition: transform 0.1s;

    & + a {
        margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;
      
      strong {
        font-size: 20px;
        color: #3D3D4D;
      }
      
      p {
        font-size: 18px;
        color: #A8A8B3;
        margin-top: 4px;
      }
    }

    svg {
        margin: 0 16px;
        color: #CBCDD6;
    }
  }
`