import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./styles/index.css"

import navigation from './constants/navigation.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: navigation.map(({ href, element }) => ({
      path: href === '/' ? '' : href.slice(1),
      element,
    })),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
