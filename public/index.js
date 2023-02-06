"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom/client");
require("./index.css");
const App_1 = require("./App");
const reportWebVitals_1 = require("./reportWebVitals");
const toolkit_1 = require("@reduxjs/toolkit");
const reducers_1 = require("./reducers");
const react_redux_1 = require("react-redux");
const store = (0, toolkit_1.configureStore)({ reducer: reducers_1.reducers });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(App_1.default, null))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
//# sourceMappingURL=index.js.map