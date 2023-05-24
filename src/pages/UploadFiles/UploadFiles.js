import React from 'react';
import UploadFiles from '../../components/upload-files.component';
import Header from '../../components/Header/Header';
const UploadFilesPage = () => {
  return (
    <React.Fragment>
    <Header />
    <div className='flex justify-center w-screen h-screen items-center'>
      <div className='w-1/2 h-1/2 flex items-center justify-center rounded-3xl' style={{
        backdropFilter: "blur(20px)",
        border: "3px dashed #8460d6",
        minWidth: "360px",
        maxWidth: "1080px",
        maxHeight: "665px"
      }}>
        <UploadFiles />
      </div>
      
    </div>
    </React.Fragment>
  );
};

export default UploadFilesPage;