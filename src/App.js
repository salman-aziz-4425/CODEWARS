
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import ChallengeReq from './pages/ChallengeReq';
import YourChallenge from './pages/YourChallenges';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/Ranking",
    element: (
      <Ranking/>
    ),
  },
  {
    path: "/Challenge",
    element: (
      <ChallengeReq/>
    ),
  },
  {
    path: "/YourChallenge",
    element: (
      <YourChallenge/>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
