import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css"
import StarterFile from "./Components/Starter/StarterFile";
import Home from "./Components/Home/Home";
import NewsPage from "./Components/NewsPage/NewsPage";
import Error from "./Components/Error/Error";
import About from "./Components/About/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StarterFile />,
      errorElement: <Error />,
      children: [
      
        {
          path: "/", 
          element: <Home />
        },
        {
          path: "/world",
          element: <NewsPage />
        },
        {
          path: "/nation",
          element: <NewsPage />
        },
        {
          path: "/business",
          element: <NewsPage />
        },
        {
          path: "/technology",
          element: <NewsPage />
        },
        {
          path: "/entertainment",
          element: <NewsPage />
        },
        {
          path: "/sports",
          element: <NewsPage />
        },
        {
          path: "/science",
          element: <NewsPage />
        },
       
        {
          path:"/health",
          element: <NewsPage/>
        }
      ],
    },
    {
      path: "/about",
      element: <About/>,
      errorElement: <Error />,
    }
  ]);

  return (
  
      <RouterProvider router={router} />
   
  );
}

export default App;
