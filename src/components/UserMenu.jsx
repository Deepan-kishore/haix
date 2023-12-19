import React, { useState } from "react";

const UserMenu = () => {
  const [uchoice, setuchoice] = useState(0);

  const handleChoice = (e, newValue) => {
    setuchoice(newValue);
  };
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a
          class={`nav-link ${uchoice == 0 ? "active" : ""}`}
          aria-current="page"
          onClick={() => {
            setuchoice(0);
          }}
          href="#"
        >
          User-Account Insights
        </a>
      </li>
      <li class="nav-item">
        <a
          class={`nav-link ${uchoice == 1 ? "active" : ""}`}
          href="#"
          onClick={() => {
            setuchoice(1);
          }}
        >
          User-Tagged Insights
        </a>
      </li>
      <li class="nav-item">
        <a
          class={`nav-link ${uchoice == 2 ? "active" : ""}`}
          href="#"
          onClick={() => {
            setuchoice(2);
          }}
        >
          Hashtag Insights
        </a>
      </li>
    </ul>
  );
};

export default UserMenu;
