import { Navigate, Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';
import House from './pages/House';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/characters' />} />
      <Route path='/characters/' element={<Characters />} />
      <Route path='/characters/:id' element={<House />} />
      <Route path='*' element={<Navigate replace to='/characters' />} />
    </Routes>
  );
}

export default App;
