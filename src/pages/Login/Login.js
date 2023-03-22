import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';

import "./Login.scss";


function Login() {
  // const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate('/Main');
  // };
  const handle = () => {
    alert("안녕!")
  }

  return(
    <div className="login">
      <div className = "loginPageBox">
        <div className = "logo" >Westagram</div>

        <from className = "loginContent-wrap">
          <input onChange={ handle } id="user-id" className="input" type="text" placeholder="전화번호,사용자 이름 또는 이메일"></input>
          <input onChange={ handle } id="user-pw" className="input" type="password" placeholder="비밀번호"></input>
          <button onClick={ handle } className="button" type="button" disabled>로그인</button>
        </from>

        <div className="find-pw">
          {/* <Link>비밀번호를 잊으셨나요?</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Login;