import './App.css'
import {MyName} from "../MyName/MyName.jsx";

function App() {
    const name = 'Andrey'
    return (
        <>
            <div>React Web Garage</div>
            <MyName name={name}/>
        </>
    )
}

export default App
