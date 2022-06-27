import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Routers />
      </div>
    </Provider>
  );
}
