
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Books from './components/Books/Books';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Main from './layout/Main';
const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {path: '/', element: <Home></Home>},
      {path: '/home', element: <Home></Home>},
      {path: '/books', element: <Books></Books>},
      {path: '/price', element: <Pricing></Pricing>},
      {path: '/about', element: <About></About>}
    ]
  }
])

function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
