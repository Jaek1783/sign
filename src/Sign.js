import React from "react";

const Sign = ({nameRef, emailRef, passwdRef, signUp, setEmail, setPasswd})=>{
    return(
        <div className="signContainer">
            <p>
                Name
                <input type="text" ref={nameRef}/>
            </p>
            <p>
                Email
                <input type="text" ref={emailRef}/><br/>
                <small>'@' , '.com' 필수 입력</small>
            </p>
            <p>
                passwd
                <input type="password" ref={passwdRef}/>
            </p>
            <button  className="sign item" onClick={()=>{
                    const str01 = emailRef.current.value.includes("@");
                    const str02 = emailRef.current.value.includes(".com");
                    if(str01&&str02 === true){
                        signUp();
                    }
                    else{
                        alert("이메일을 형식에 맞게 적어주세요 ex)123@abc.com");
                    }
            }}>회원가입</button>
        </div>
)}; export default Sign;