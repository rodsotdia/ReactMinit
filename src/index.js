import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById("app")
);
