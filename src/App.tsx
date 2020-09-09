import React from "react";
import ChatContainer from "./Container/ChatContainer/ChatContainer";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ChatContainer />
      </div>
    </Provider>
  );
}

export default App;
