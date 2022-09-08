import React from "react";

const Mypage = ({myEmail, myName})=>{
    return(
     <div className="MypageContainer">
        <div className="MyPic"></div>
        <div className="MyDesc">
            <p>이름: {myName}</p>
            <p>이메일:{myEmail}</p>
        </div>
     </div>   
    )
}; export default Mypage;