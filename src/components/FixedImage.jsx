import React from "react";

const FixedImage = ({ src, alt }) => {
  return (
    <div style={{ position: 'absolute', top: '0px', right: '0px', zIndex: '9999' }}>
      <img src={src} alt={alt} style={{ width: '420px', height: '420px' }} />
    </div>
  );
};

export default FixedImage;