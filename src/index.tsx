import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";

// project imports
import App from "./App";

// themes
import ThemeProvider from "./styles/theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
