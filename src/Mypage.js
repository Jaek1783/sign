import React from "react";
const Mypage = ({
    myEmail,
    myName,
    // pic,
    modalRef,
    myImg
    })=>{
    return(
     <div className="MypageContainer">
        <h2>마이페이지</h2>
        <div className="descContainer">
            <div className="MyPic">
                { myImg !== null ? <img src={myImg} alt={'이미지'}></img> :
                    <p className="pic"></p>}
                    <button onClick={()=>{
                        modalRef.current.style.display="block";
                    }}>이미지 업로드</button>

            </div>
            <div className="MyDesc">
                <p>이름: {myName}</p>
                <p>이메일{"(ID)"}: {myEmail}</p>
            </div>
        </div>
     </div>   
    )
}; export default Mypage;