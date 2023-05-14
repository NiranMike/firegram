import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState(null);
    
    const fileExtension = ["image/png", "image/jpeg",'image/jpg'];
    
    const changeHandler = (e) => {
        const selectedFile = e.target.files[0];
        if(selectedFile && fileExtension.includes(selectedFile.type)){
          setFile(selectedFile);
          setFileError('')
        } else {
          setFile(null);
          setFileError("Please select a valid file");
        }
        
      if (!selectedFile) {
        setFileError("")
      }
        
    }
  return (
    <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className='output'>
        {fileError && <div className='error'>{fileError}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={ file } setFile={setFile} />}
        </div>
    </form>
  )
}

export default UploadForm