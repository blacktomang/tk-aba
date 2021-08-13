import React, { useEffect, useState } from 'react';
import useFirestorenStorage from '../context/useFirestorenStorage';
const ProgressBar = ({ bgcolor, file, setFile, folder, data, setUrl }) => {
  const { url, progress } = useFirestorenStorage(folder, file, data);
  const containerStyles = {
    height: 5,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };
  useEffect(() => {
    if (url) {
      setUrl(url);
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
