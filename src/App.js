import './App.css';
import { Contacts } from "./components/Contacts"
import { Phonebook } from "./components/Phonebook"
import * as React from "react";
import { useIsClient, useIdle } from "@uidotdev/usehooks";

function App() { 
    const isClient = useIsClient();
    const idle = useIdle(5000);
    return <div className="container">
          <Phonebook/>
          <Contacts/>
            <div className='app-div'>
                <h2 className='app-title1'>useIsClient</h2>
                <h6 className='app-title2'>Is Client? </h6>
                <p className='app-text'>{isClient ? "If you can see this ... you already know" : "No"}</p>
        </div>
            <div className="app-div2">
                <h1 className="app-title3">useIdle</h1>
                <div>
                    <span className={idle ? "idle" : ""} />
                    <label>Status: {idle ? "Idle" : "Active"}</label>
                </div>
                {idle ? <p>Time to move your mouse</p> : <p>Hold still and wait</p>}
            </div>
      </div>
}

export default App;
