
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Corvette } from './components/Corvette.jsx';
import { HondaNSX } from './components/HondaNSX.jsx';
import { KoegniseggCCX } from './components/KoegniseggCCX.jsx';
import { MclarenF1gtr } from './components/MclarenF1gtr.jsx';
import { PaganiUtopia } from './components/PaganiUtopia.jsx';
import { RimacNevera } from './components/RimacNevera.jsx';
import { Navigation } from './components/Navigation.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>

        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/chevrolet_corvette_c8' element={<Corvette className='main-img-container'/>}/>
            <Route path='/honda_nsx' element={<HondaNSX className='main-img-container'/>} />
            <Route path='/koegnisegg_ccx' element={<KoegniseggCCX className='main-img-container'/>} />
            <Route path='/mclaren_f1gtr' element={<MclarenF1gtr className='main-img-container'/>} />
            <Route path='/pagani_utopia' element={<PaganiUtopia className='main-img-container'/>} />
            <Route path='/rimac_nevera' element={<RimacNevera className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
