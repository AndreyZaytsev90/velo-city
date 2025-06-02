import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";

function App() {


    return (
        <>
            <main className="app">
                <Header/>
                <HomePage/>
                <Footer/>
            </main>
        </>
    );
}

export default App;
