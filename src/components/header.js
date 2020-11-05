import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <div className="container--header">
        <Link to="/">Лантуун дохио ТББ</Link>
        <div className="container--header--nav">
          <Link to="/sign-up">Судалгаа</Link>
          <Link to="/login">Нэвтрэх</Link>
        </div>
      </div>
    </Router>
  );
};

export default Header;
