import React from "react";

import ReactDom from "react-dom";

function Index(){
  return <h3>
    Hello World
  </h3>
}

ReactDom.render(<Index/>,document.getElementById("root"));