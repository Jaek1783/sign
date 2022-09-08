import React,{useEffect} from "react";
const Login = ({idRef, pwRef, loginFB, isLogin, signOut, auth})=>{
    return(
    <div>
        {isLogin? (
            <div className="loginContainer">
                <button onClick={()=>{
                    signOut(auth);
                }}>로그아웃</button>
                
            </div>
        ):(
            <div className="loginContainer">
                <p>Email<input type="text" ref={idRef}/></p>
                <p>passwd<input type="text" ref={pwRef}/></p>
                <button onClick={()=>{
                     loginFB();
                }}>로그인</button>
            </div>
        )}
    </div>
)};export default Login;