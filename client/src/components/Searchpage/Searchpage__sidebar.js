import "../../style/Searchpage/Searchpage__sidebar.scss";

import React from "react";

const Searchpage__sidebar = () => {
  return (
    <div>
      <div className="searchpage-sb-container">
        <div className="searchpage-sb-wrapper">
          <div className="searchpage-sb-listsearch">
            <h1 className="searchpage-sb-listtitle">Search</h1>
          </div>
          <div className="searchpage-sb-listresult"></div>
        </div>
      </div>
    </div>
  );
};

export default Searchpage__sidebar;
