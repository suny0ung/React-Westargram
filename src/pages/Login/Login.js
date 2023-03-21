import React from "react";
import "./Login.css";

function handleInput () {

};

function handleButton () {

};

function Login() {
  return(
    <div>
      <div className = "loginPageBox">
        <div className = "logo" >Westagram</div>

        <from className = "loginContent-wrap">
          <input onChange={ handleInput } id="user-id" className="input" type="text" placeholder="전화번호,사용자 이름 또는 이메일"></input>
          <input onChange={ handleInput } id="user-pw" className="input" type="password" placeholder="비밀번호"></input>
          <button onClick={ handleButton } className="button" type="button" disabled>로그인</button>
        </from>

        <div className="find-pw">
          <a href="" target="_blank" title="비밀번호 찾기">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;