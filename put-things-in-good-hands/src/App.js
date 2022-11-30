import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home, Login, Register  } from './components';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logowanie" element={<Login />} />
            <Route path="/rejestracja" element={<Register />} />
        </Routes>
    </BrowserRouter>
)

export default App;