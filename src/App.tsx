import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Albums from "./pages/Albums/Albums";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Link from "./pages/Link/Link";
import People from "./pages/Writing/Writing";
import NotFound from "./pages/NotFound";

function App() {

  const mdTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          >
            <Route path="home" element={<Home />} />
            <Route path="journal" element={<Journal />} />
            <Route path="albums" element={<Albums />} />
            <Route path="people" element={<People />} />
            <Route path="link" element={<Link />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
