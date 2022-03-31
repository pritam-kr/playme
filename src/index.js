import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  VideoContextProvider,
  AuthContextProvider,
  LikesContextProvider,
  HistoryContextProvider,
  WatchLaterContextProvider, PlayListContextProvider
} from "./Context/Index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <VideoContextProvider>
          <LikesContextProvider>
            <HistoryContextProvider>
              <WatchLaterContextProvider>
              <PlayListContextProvider>
              <App />
              </PlayListContextProvider>
              </WatchLaterContextProvider>
            </HistoryContextProvider>
          </LikesContextProvider>
        </VideoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
