import './App.css';
import { Stockoverview } from './frontend/pages/Stockoverview';
import { Header } from './frontend/pages/Header';
import { Footer } from './frontend/pages/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Stockdetail } from './frontend/pages/Stockdetail';
import { WatchListContextProvider } from './frontend/context/W.Lcontext';
import { Error } from './frontend/pages/Error';
function App() {
  return (
    <WatchListContextProvider>
    <BrowserRouter>
      <div className='container-sm' style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
<header>
<Header />
</header>
  
  <main style={{flexGrow: 1}}>
    <Routes>
   <Route path='/' element={<Stockoverview />}/>
   <Route path='/stock-detail/:symbol' element={<Stockdetail />}/>
   <Route path='/error' element={<Error />}/>
   

    </Routes>

  </main>
<footer>
<Footer/>
</footer>

    </div>
    </BrowserRouter>
      </WatchListContextProvider>
  );
}

export default App;
