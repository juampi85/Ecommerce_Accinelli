import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Faq from './pages/Faq';
import NotFound from './pages/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products/' element={<ItemListContainer/>}/>
          <Route path='/productos/:category' element={<ItemListContainer/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;