import React from "react";
import "./ContainerBannerMid.css";

const ContainerBannerMid: React.FC = () => {
  return (
    <div className="container">
      <div className="container-box__video-mid">
        <video
          style={{ zIndex: "-1", position: "relative" }}
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          data-preload="true"
          src="//media.tiffany.com/is/content/tiffanydm/TiffanyLandmark_6sCutdownFloral_1920x1080"
          className="load-lazily b-loaded"
          poster="//media.tiffany.com/is/image/tiffanydm/2023-LM_ROW-HP-FWMH-HERO-Desktop?$tile$&&hei=900"
        >
        </video>
        <div className="box-video-mid">
          <h2>Now Open: The Landmark</h2>
          <p >A legacy of brilliance continues with The Landmark. Discover a new Tiffany & Co. for a new era at 727 Fifth Avenue, New York.</p>
          <a className="button-video-mid links cta secondary" href="https://www.tiffany.com/jewelry/shop/tiffany-hardwear/" target="_self">
                Learn More 
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContainerBannerMid;
