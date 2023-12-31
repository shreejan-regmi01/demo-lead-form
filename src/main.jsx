import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoanDetails from './views/lead-application/LoanDetails.jsx';
import CarInMind from './views/lead-application/CarInMind.jsx';
import PurchaseInformation from './views/lead-application/PurchaseInformation.jsx';
import Usage from './views/lead-application/Usage.jsx';
import SelectTheCar from './views/lead-application/SelectTheCar.jsx';
import ApplicationSubmitted from './views/lead-application/ApplicationSubmitted.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LoanDetails />,
      },
      {
        path: 'car-in-mind',
        element: <CarInMind />,
      },
      {
        path: 'purchase-information',
        element: <PurchaseInformation />,
      },
      {
        path: 'usage',
        element: <Usage />,
      },
      {
        path: 'select-the-car',
        element: <SelectTheCar />,
      },
      {
        path: 'submission-success',
        element: <ApplicationSubmitted />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
