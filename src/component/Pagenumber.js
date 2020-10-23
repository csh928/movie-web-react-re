import React from "react";

function Pagenumber({ nowpage }) {
  let i;
  let pageContainer = "";
  for (i = 0; i < 10; i++) {
    pageContainer += `<li>${i}</li>`;
  }
  return <>{pageContainer}</>;
}

export default Pagenumber;
