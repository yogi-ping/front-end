import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Home 컴포넌트 import
import { Plan } from './pages/Plan';
import Login from './pages/Login'; // Login 컴포넌트 import
import Join from './pages/Join'; // Join 컴포넌트 import (추가)
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* 기본 경로에 Home 컴포넌트를 보여줌 */}
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/plan' element={<Plan />} />
                <Route path='/join' element={<Join />} />{' '}
                {/* Join 페이지 경로 추가 */}
            </Routes>
        </Router>
    );
}

export default App;
