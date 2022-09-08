import './App.css';
import React,{useEffect, useRef, useState} from 'react';
import Sign from './Sign';
import Login from './Login';
import Mypage from './Mypage';
import ImgFile from './ImgFIle';
//전체 로직
import {auth,db} from "./firebase";
import {collection, addDoc,doc, updateDoc, getDocs, where, query} from "firebase/firestore";
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
  const signContainer = useRef(null);
  const emailRef = useRef(null);
  const passwdRef = useRef(null);
  const nameRef = useRef(null);
  const emailDesc = useRef(null);
  const nameDesc = useRef(null);
  const pwDesc = useRef(null);

//로그인 Ref & State
  const loginContainer = useRef(null);
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const [isLogin, setIsLogin] = useState(false);
  const [pic, setPic] = useState("");
//마이페이지 State
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myImg, setMyImg] = useState(null);
//이미지 업로드 Ref
const modalRef = useRef(null);
const [id, setId] = useState("");

//회원가입 function
  const signUp = async ()=>{
    const emailStr = emailRef.current.value;
    const passwdStr = passwdRef.current.value;
    const nameStr = nameRef.current.value;
    const user = await createUserWithEmailAndPassword(auth,emailStr,passwdStr);
    const user_doc = await addDoc(collection(db,"users"),{
      user_id: user.user.email, 
      name:nameStr,
      myImg:null
    });
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
          setMyName(u.data().name);
          setMyEmail(u.data().user_id);
          // console.log(u.id);
          setId(u.id);
          setMyImg(u.data().img);
        });
      }
      else{
        setIsLogin(false);
      }
    };
//이미지 업로드 funcrion
const fileUpload = async (user)=>{
  const docRef = doc(db, "users", id);
  const user_doc = await updateDoc(docRef,{
    "img":pic
  });
};
    useEffect(()=>{
      onAuthStateChanged(auth, loginCheck);
    },[]);
  return (
    <div className="App">
      <h1>회원가입로직</h1>
      <div className="container">
      <div className="buttonContainer">
        <button className="sign" onClick={()=>{
          signContainer.current.style.display = "flex";
          loginContainer.current.style.display = "none";
        }}>회원가입</button>
        <button className="login" onClick={()=>{
          loginContainer.current.style.display = "flex";
        }}>로그인</button>
      </div>
        <Sign 
          signContainer = {signContainer}
          loginContainer = {loginContainer}
          signUp={signUp}
          nameRef={nameRef}
          emailRef={emailRef}
          passwdRef={passwdRef}
          emailDesc={emailDesc}
          nameDesc={nameDesc}
          pwDesc={pwDesc}
        />
        <Login
          loginContainer = {loginContainer}
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
          // pic={pic}
          modalRef={modalRef}
          myImg={myImg}
        />
        : ""
        }
      </div>
      <ImgFile
        modalRef={modalRef}
        pic={pic}
        setPic={setPic}
        fileUpload={fileUpload}
      />
    </div>
  );
}

export default App;
