import React from "react";

const Mypage = ({myEmail, myName})=>{
    return(
     <div className="MypageContainer">
        <h2>마이페이지</h2>
        <div className="descContainer">
            <div className="MyPic">이미지 예정</div>
            <div className="MyDesc">
                <p>이름: {myName}</p>
                <p>이메일:{myEmail}</p>
            </div>
        </div>
     </div>   
    )
}; export default Mypage;