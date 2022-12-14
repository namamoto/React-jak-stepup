import React from "react";
import "./styles.css";
import { RecoilRoot } from "recoil";

import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>  
  );
}
