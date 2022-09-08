import React from "react";
import { storage } from "./firebase";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
const ImgFile = ({
    modalRef,
    pic,
    setPic,
    fileUpload
    })=>{
 //이미지 업로드 function
    const uploadFB = async(e)=>{
        console.log(e.target.files);
        const uploadFiles = await uploadBytes(ref(storage,`images/${e.target.files[0].name}`),
        e.target.files[0]
        );
        const filesURL = await getDownloadURL(uploadFiles.ref);
        setPic(filesURL);
    };
    return(
        <div className="modal" ref={modalRef}>
            <p onClick={()=>{
                modalRef.current.style.display="none";
            }}>X</p>
            미리보기
            <div className="modalContainer">
                { pic !== "" ? <img src={pic} alt={'이미지'}></img> :
                    <p className="pic"></p>}
            <input type="file" onChange={uploadFB}/>
            </div>
            <button className="save" onClick={()=>{
                fileUpload();
                modalRef.current.style.display="none";
            }}>저장</button>
        </div>
    )
}; export default ImgFile;