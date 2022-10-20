import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Main from './Layout/Main';
import Register from './Components/Register/Register'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Register></Register>
      },
      {
        path:'/register',
        element:<Login></Login>
      }
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
