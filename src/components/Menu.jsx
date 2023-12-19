import React from "react";
import "../App.css";

const Menu = ({ title, description, urlToImage }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-black "
      style={{ height: "45px", gap: "60px" }}
    >
      {[
        "https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png",
        "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=1060&t=st=1702963868~exp=1702964468~hmac=cd9875fe74b9b937661420513fef4e6528bb875ec07b429db1f4717ec96bcff7",
        "https://e1.pxfuel.com/desktop-wallpaper/918/504/desktop-wallpaper-tiktok-logo-tik-tok-people.jpg",
        "https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png",
        "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
      ].map((i) => (
        <div className="social_icon">
          <img
            style={{ height: "auto", width: "100%" }}
            className=""
            src={i}
            alt=""
            srcset=""
          />
        </div>
      ))}
    </div>
  );
};

export default Menu;
