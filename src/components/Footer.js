import React from "react";
import "../styles/Footer.css";

function FooterTest() {
  return (
    <footer className="all-footer">
      <div className="test-superfuds">
        <div className="information">
          <p className="author">Author: Sara Marín Mejía</p>
          <p className="email-author">
            <a href="sarammejia.11@gmail.com" className="email">
              sarammejia.11@gmail.com
            </a>
          </p>
        </div>
        <p className="text-adludio">Test SuperFüds</p>
      </div>
    </footer>
  );
}

export default FooterTest;
