import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
