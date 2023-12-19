import React from "react";

const UserBadge = () => {
  const [badge, setBadge] = React.useState(1);
  return (
    <>
      <div
        className="d-flex px-5 py-4 "
        style={{ justifyContent: "space-evenly" }}
      >
        <div className="d-flex ">
          <div className="search_i">
            <img
              src="https://img.freepik.com/free-psd/3d-realistic-tiktok-icon_125540-2052.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="px-3 py-2 " style={{ border: "1px solid" }}>
            {" "}
            <input style={{ height: "35px" }} placeholder={"Adidas"} />
          </div>
        </div>

        <div className="d-flex">
          <div className="search_i">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="px-3 py-2 " style={{ border: "1px solid" }}>
            {" "}
            <input style={{ height: "35px" }} placeholder={"Adidas"} />
          </div>
        </div>

        <div className="d-flex">
          <div className="search_i">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="px-3 py-2 " style={{ border: "1px solid" }}>
            {" "}
            <input style={{ height: "35px" }} placeholder={"Adidas"} />
          </div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50px" }}
      >
        <button
          className={`badge ${badge == 1 && "badgeClicked"} mx-2`}
          onClick={() => setBadge(1)}
        >
          {" "}
          Actionable Insights{" "}
        </button>
        <button
          className={`badge ${badge == 2 && "badgeClicked"}`}
          onClick={() => setBadge(2)}
        >
          {" "}
          My favorite View{" "}
        </button>
      </div>
      <hr />
    </>
  );
};

export default UserBadge;
