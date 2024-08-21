import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./Context/Theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light")
  };

  //  actual change in theme , we target the html of card here
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      {/* step 3 */}
      {/* from here we are sending one variable/const and two functions. */}
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Header />

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">

            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>

          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
