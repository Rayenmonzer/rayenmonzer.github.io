import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages Components
import HomeFR from './components/pages/pagesFR/home';
import HomeEN from './components/pages/pagesEN/homeEN';
import MenuFR from './components/pages/pagesFR/menu';
import MenuEN from './components/pages/pagesEN/menuEN';
import OrderFR from './components/pages/pagesFR/order';
import OrderEN from './components/pages/pagesEN/orderEN';
import ContactFR from './components/pages/pagesFR/contact';
import ContactEN from './components/pages/pagesEN/contactEN';

//General Use Components
import NavBar from './components/genComp/navBar';
import Footer from './components/genComp/footer';

const App = () => {

  const routes = [
    { path: "/", element: <HomeFR /> },
    { path: "/en", element: <HomeEN /> },
    { path: "/home", element: <HomeFR /> },
    { path: "/menu", element: <MenuFR /> },
    { path: "/order", element: <OrderFR /> },
    { path: "/contact", element: <ContactFR /> },
    { path: "/home/en", element: <HomeEN /> },
    { path: "/menu/en", element: <MenuEN /> },
    { path: "/order/en", element: <OrderEN /> },
    { path: "/contact/en", element: <ContactEN /> }
  ];


  return (
    <Router>
      <NavBar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element}/>
          ))}
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
