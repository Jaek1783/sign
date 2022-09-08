import './App.css';
import React,{useEffect, useRef, useState} from 'react';
import Sign from './Sign';
import Login from './Login';
import Mypage from './Mypage';

//전체 로직
import {auth,db} from "./firebase";
import {collection, addDoc, getDocs, where, query, connectFirestoreEmulator} from "firebase/firestore";
//회원가입 로직
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

//로그인 로직
import {signInWithEmailAndPassword} from "firebase/auth";
function App() {
//회원가입 Ref
  const emailRef = useRef(null);
  const passwdRef = useRef(null);
  const nameRef = useRef(null);
  const emailDesc = useRef(null);
  const nameDesc = useRef(null);
  const pwDesc = useRef(null);

//로그인 Ref & State
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
//마이페이지 State
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");

//회원가입 function
  const signUp = async ()=>{
    const emailStr = emailRef.current.value;
    const passwdStr = passwdRef.current.value;
    const nameStr = nameRef.current.value;
    const user = await createUserWithEmailAndPassword(auth,emailStr,passwdStr);
    console.log(user);
    const user_doc = await addDoc(collection(db,"users"),{
      user_id: user.user.email, 
      name:nameStr});
      console.log(user_doc.id);
      console.log(emailRef.current.value);
      console.log(passwdRef.current.value);
      nameRef.current.value="";
      emailRef.current.value="";
      passwdRef.current.value="";
  };
  //로그인 function
    const loginFB = async()=>{
      const user = await signInWithEmailAndPassword(
        auth,
        idRef.current.value,
        pwRef.current.value
      );
      idRef.current.value="";
      pwRef.current.value="";
      console.log(user);
      const user_id = await getDocs(query(
        collection(db,"users"),where("user_id","==",user.email)
      ));
      user_id.forEach((u)=>{
        console.log(u.data());
        setMyName(u.data().name);
        setMyEmail(u.data().user_id);
      });
    };

    const loginCheck = async (user)=>{

      if(user){
        setIsLogin(true);
        const user_id = await getDocs(query(
          collection(db,"users"),where("user_id","==",user.email)
        ));
        user_id.forEach((u)=>{
          console.log(u.data());
          setMyName(u.data().name);
          setMyEmail(u.data().user_id);
        });
      }
      else{
        setIsLogin(false);
      }
    };
    useEffect(()=>{
      onAuthStateChanged(auth, loginCheck);
    },[]);
    console.log(isLogin);
  return (
    <div className="App">
      <div className="container">
        <Sign 
          signUp={signUp}
          nameRef={nameRef}
          emailRef={emailRef}
          passwdRef={passwdRef}
          emailDesc={emailDesc}
          nameDesc={nameDesc}
          pwDesc={pwDesc}
        />
        <Login
          auth={auth}
          loginFB={loginFB}
          idRef={idRef}
          pwRef={pwRef}
          isLogin={isLogin}
          signOut={signOut}
        />
        {isLogin ? 
        <Mypage 
          myName={myName}
          myEmail={myEmail}
        /> 
        : ""
        }
      </div>
    </div>
  );
}

export default App;
