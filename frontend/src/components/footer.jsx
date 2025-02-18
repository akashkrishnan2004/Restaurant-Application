import React from "react";
import "./css/footer.css";

export default function Footer () {
  return (
    <footer className="footerBody">
      {/* <div className="footerBodyContainer"> */}
        <p className="footerBodyCopyright">
          &copy; {new Date().getFullYear()} Deepnetsoft Solutions. All rights reserved.
        </p>
        <p className="footerBodyTerms">
            Terms & Conditions Privacy Policy
        </p>
      {/* </div> */}
    </footer>
  );
};
