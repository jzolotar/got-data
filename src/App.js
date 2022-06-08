import { Route, Routes } from 'react-router-dom';
import CharactersList from './components/charactersList/CharactersList';

function App() {
  <Routes>
    <Route path='/characters/' element={<CharactersList />} />
    <Route path='/characters/:id' element={''} />
  </Routes>;
}

export default App;
