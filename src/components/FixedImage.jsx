import React from "react";

const FixedImage = ({ src, alt }) => {
  return (
    <div style={{ position: 'absolute', top: '0px', right: '0px', zIndex: '9999' }}>
      <img src={src} alt={alt} style={{ width: '320px', height: '320px' }} />
    </div>
  );
};

export default FixedImage;