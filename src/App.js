import React, { useState } from "react";
import Bookstore from "./Components/Bookstore";

import "./Components/style.scss";
function App() {
  const [background, setBackground] = useState(false);

  return (
    <div className={background ? "light-app" : "App"}>
      <Bookstore background={background} setBackground={setBackground} />
    </div>
  );
}

export default App;
