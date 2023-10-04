import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  let [darkmode, setDarkmode] = useState(false);

  //Logical && -->

  return (
    <div className={"app " + (darkmode && "dark")}>
      <div className="ease-in duration-300 dark:bg-stone-900">
        <Outlet context={[darkmode, setDarkmode]} />
      </div>
    </div>
  );
}

export default App;
