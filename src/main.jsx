import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import { PageNotFound, SelectPlayer, PlayerMenu, PlayerAbout, PlayerProject, PlayerConnect } from './pages/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />
  },
  {
    path: 'players',
    element: <SelectPlayer />,
  },
  {
    path: 'players/:playerId',
    element: <PlayerMenu />,
    children: [
      { path: 'about', element: <PlayerAbout /> },
      { path: 'project', element: <PlayerProject /> },
      { path: 'connect', element: <PlayerConnect /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
