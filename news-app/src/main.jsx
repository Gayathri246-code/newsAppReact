import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'


{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar12 from './components/navbar.jsx';
import App from './App.jsx';
import Categories from './components/categories.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar12/>
    <App/> */}
    <Categories/>
  </StrictMode>,
)
