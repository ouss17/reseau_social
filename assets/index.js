import React from "react";
import { createRoot } from 'react-dom/client';

import "./styles/app.css";

import App from "./app.js";
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "./Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ReduxProvider store={store}> */}
            <Router>
                <App />
            </Router>
        {/* </ReduxProvider> */}
    </React.StrictMode>
    
);
