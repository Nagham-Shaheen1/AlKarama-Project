import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import { About, Home, News, OnLive , Matches,DashBoard,ContactUs,Login,History } from "../pages";
import { Hom1,About1,News1,History1,Matches1} from '../pages/DashBoard/index'
// import AboutTeamDetail from "../Sections/About_team/AboutTeamDetail";
import MorePage from "../Sections/About_team/AboutTeamDetail";
import AboutTeamDetail from "../Sections/About_team/AboutTeamDetail";



const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/news',
          element: <News />
        },
        {
          path: '/onlive',
          element: <OnLive />
        },
        {
          path: '/matches',
          element: <Matches />
        },
        {
          path: '/contactus',
          element: <ContactUs />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/history',
          element: <History />
        },


      
        {
          path: '/more',
          element: <AboutTeamDetail />
        },

  

        {
          path: '/dashboard',
          element: <DashBoard />,
          children: [
            {
              path: 'home', // Relative path for the dashboard home
              element: <Hom1 />
            },
            {
              path: 'about', // Relative path for the about page under dashboard
              element: <About1 />
            },
            {
              path: 'matches', // Relative path for the matches page under dashboard
              element: <Matches1 />
            },
            {
              path: 'news', // Relative path for the news page under dashboard
              element: <News1 />
            },
            {
                path: 'history', // Relative path for the news page under dashboard
                element: <History1 />
              }
          ]
        }
      ]
    }
  ]);
export default router