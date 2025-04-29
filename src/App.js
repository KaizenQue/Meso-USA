/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MesoOne from "./Components/Meso-one/MesoOne";
import Header from "./Components/Header/Header";
import MesoMain from "./Components/Meso-MainPage/MesoMain";
import HomeSix from "./Components/Home-six/HomeSix";

import Womenandmesothelioma from "./Components/Womenandmesothelioma"
import AutoMobile from "./Components/AutoMobile"
import MesoConstruction from "./Components/MesoConstruction"
import Hometwo from "./Components/Home-two/Hometwo";
import MesothMainPage from "./Components/MesotheliomaPage/MesothMainPage/MesothMainPage";
import AboutMain from "./Components/AboutMain"
import HomeEight from "./Components/Home-Eight/HomeEight"
import ClaimForm from "./Components/ClaimForm/ClaimForm"
import "leaflet/dist/leaflet.css";

import React from "react";

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <MesoMain />,
    },
    {
      path: '/MesoOne',
      element: <MesoOne />,
    },
    {
      path: '/Header',
      element: <Header />,
    },
    {
      path: '/HomeSix',
      element: <HomeSix />,
    },
    {
      path: '/HomeEight',
      element: <HomeEight />,
    },
    {
      path: '/Hometwo',
      element: <Hometwo />,
    },

    {
      path: '/MesothMainPage',
      element: <MesothMainPage />,
    },
    {
      path: '/AboutMain',
      element: <AboutMain />,
    },
    {
      path: '/ClaimForm',
      element: <ClaimForm />,
    },
    {
      path: '/Womenandmesothelioma',
      element: <Womenandmesothelioma />,
    },
    {
      path: '/automobileandmesothelioma',
      element: <AutoMobile />,
    },
    {
      path: '/asbestosandconstruction',
      element: <MesoConstruction />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
