import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }
  *:focus{
    outline: none;
    cursor: pointer;
  }
  body{
    background: #0a192f;
    font-family: "Calibre","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif
  }
  button{
    background: transparent;
    border: 2px solid #00FFFF;
    height: 60px;
    width: 120px;
    color: #00FFFF;
    border-radius: 10px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 1.1rem;
    &:hover{
      opacity: 0.8;
      cursor: pointer;
    }
  }
  h2{
      font-weight: lighter;
      font-size: 3rem;
      padding: 1rem 0rem;
      font-weight: bold;
    }
  h3{
      /* font-weight: lighter; */
      font-size: 4rem;
      padding: 1rem 0rem;
      color: #ccd6f6;
  }
  h4{
      /* font-weight: lighter; */
      font-size: 1.5rem;
      padding: 1rem 0rem 0rem 0rem;
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
    word-wrap: break-word;
  }
  .fa-instagram:hover{
    color: #00FFFF;
  }
  .fa-linkedin-in:hover{
    color: #00FFFF;
  }
  .fa-twitter:hover{
    color: #00FFFF;
  }
  .fa-github-square:hover{
    color: #00FFFF;
  }

`;

export default GlobalStyle;