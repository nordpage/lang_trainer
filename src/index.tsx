import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Provider} from "react-redux";
import {store} from "./services/store";

const root = ReactDOM.createRoot(document.querySelector("#root")!!);

root.render(
  <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
          <App />
      </DndProvider>
  </Provider>
);
