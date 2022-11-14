import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './components';
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
)

export default App;