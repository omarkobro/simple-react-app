import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Layout from './Layout/Layout';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact';
import Notfound from './Notfound/Notfound';


function App() {
  let router = createHashRouter([{
    path: "", element:<Layout></Layout>, children:[  
      {path: "", element:<Home></Home>},
      {path: "about", element:<About></About>},
      {path: "portfolio", element:<Portfolio></Portfolio>}, 
      {path: "contact", element:<Contact></Contact>},
      {path: "*", element:<Notfound></Notfound>},
    ]
  }])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
