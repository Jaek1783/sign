import React from "react";
const Login = ({loginContainer, idRef, pwRef, loginFB, isLogin, signOut, auth})=>{
    return(
    <>
        {isLogin? (
            <div className="loginContainer" ref={loginContainer}>
                <button onClick={()=>{
                    signOut(auth);
                    loginContainer.current.style.display="none";
                }}>로그아웃</button>
                
            </div>
        ):(
            <div className="loginContainer" ref={loginContainer}>
                <small onClick={()=>{
                    loginContainer.current.style.display="none";
                }}>X</small>
                <p>Email<input type="text" ref={idRef}/></p>
                <p>passwd<input type="text" ref={pwRef}/></p>
                <button onClick={()=>{
                     loginFB();
                }}>로그인</button>
            </div>
        )}
    </>
)};export default Login;