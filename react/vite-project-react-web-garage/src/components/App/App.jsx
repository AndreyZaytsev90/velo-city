import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import React from "react";

function App() {

    const [clicks, setClicks] = React.useState(0);
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    return (
        <>
            <main className="app">
                <Header clicks={clicks}
                        isDarkMode={isDarkMode}
                        setIsDarkMode={setIsDarkMode}/>
                <HomePage
                    clicks={clicks}
                    setClicks={setClicks}
                    isDarkMode={isDarkMode}
                    message={"Message from HomePage"}
                />
                <Footer isDarkMode={isDarkMode}/>
            </main>
        </>
    );
}

export default App;
