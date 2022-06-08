import { Route, Routes } from 'react-router-dom';
import Characters from './pages/Characters';

function App() {
  <Routes>
    <Route path='/characters/' element={<Characters />} />
    <Route path='/characters/:id' element={''} />
  </Routes>;
}

export default App;
