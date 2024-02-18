import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './screens/home'
import { Header } from './components/header';

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
