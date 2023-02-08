import React from "react";

function Header({ children }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      {children}
    </header>
  );
}

export default Header;
