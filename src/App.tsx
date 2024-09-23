import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header'; // Header 컴포넌트 올바르게 import
import Contents from './components/home/Contents';
import { Plan } from './pages/Plan';
import Login from './components/login/Login'; // Login 컴포넌트 import
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  return (
    <div>
      {/* 로그인 페이지가 아닐 때만 Header 렌더링 */}
      {location.pathname !== '/login' && <Header />}

      <main>
        <Routes>
          {/* 기본 경로에 Contents를 보여줌 */}
          <Route path='/' element={<Contents />} />
          {/* 로그인 페이지로 이동 */}
          <Route path='/login' element={<Login />} />
          <Route path='/plan' element={<Plan/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
