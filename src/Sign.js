import React from "react";

const Sign = ({signContainer, nameRef, emailRef, passwdRef, signUp,emailDesc, nameDesc, pwDesc})=>{
    return(
        <div className="signContainer" ref={signContainer}>
            <small onClick={()=>{
                signContainer.current.style.display="none";
            }}>X</small>
            <p>
                Name
                <input type="text" ref={nameRef}/><br/>
                <small ref={nameDesc}></small>
            </p>
            <p>
                Email
                <input type="text" ref={emailRef}/><br/>
                <small ref={emailDesc}></small>
            </p>
            <p>
                passwd
                <input type="text" ref={passwdRef}/><br/>
                <small ref={pwDesc}></small>
            </p>
            <button  className="sign item" onClick={()=>{
                    const str01 = emailRef.current.value.includes("@");
                    const str02 = emailRef.current.value.includes(".com");

                    if(nameRef.current.value !== ""){
                        if(str01&&str02 === true){
                            if(passwdRef.current.value !== ""){
                                signUp();
                            }
                            else{
                                alert("비밀번호를 입력하세요");
                            pwDesc.current.innerHTML = "비밀번호를 입력하세요";
                            pwDesc.current.style.color = "red";
                            }
                        }
                        else{
                            alert("이메일을 형식에 맞게 적어주세요 ex)123@abc.com");
                            emailDesc.current.innerHTML = "@, .com 필수입력";
                            emailDesc.current.style.color = "red";
                            emailRef.current.value="";
                        }
                    }
                    else{
                        alert("이름을 적어주세요");
                        nameDesc.current.innerHTML="이름을 적어주세요"
                        nameDesc.current.style.color="red";
                    }
            }}>회원가입</button>
        </div>
)}; export default Sign;