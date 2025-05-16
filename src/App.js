/* eslint-disable no-undef */
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';
// import { setupAPILogger } from './utils/apiLogger';
import MesoOne from "./Components/Meso-one/MesoOne";
import Header from "./Components/Header/Header";
import MesoMain from "./Components/Meso-MainPage/MesoMain";
import HomeSix from "./Components/Home-six/HomeSix";
import Womenandmesothelioma from "./Components/Womenandmesothelioma"
import Disclaimer from "./Components/Disclaimer"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import AutoMobile from "./Components/AutoMobile"
import MesoConstruction from "./Components/MesoConstruction"
import Hometwo from "./Components/Home-two/Hometwo";
import MesothMainPage from "./Components/MesotheliomaPage/MesothMainPage/MesothMainPage";
import AboutMain from "./Components/AboutMain"
import HomeEight from "./Components/Home-Eight/HomeEight"
import ClaimForm from "./Components/ClaimForm/ClaimForm"
import "leaflet/dist/leaflet.css";
import MesotheliomaLandingPage from "./Components/FigmaDesign/MesotheliomaLandingPage.jsx"
import MesoAutoMobile from "./Components/MesoAutoMobile.jsx"

import Veterans from "./Components/Veterans"
import HeavyMachineryPlants from "./Components/HeavyManufacturingPlants"
import OilRefineries from "./Components/OilRefinery"
import PaperMills from "./Components/PaperMills"
import PowerPlants from "./Components/PowerPlant"
import Shipyards from "./Components/Shipyard"
import SteelMills from "./Components/SteelMills"
import USNavyPersonal from "./Components/USNavyPersonal"
import MesoConstructionLander from "./Components/MesoConstructionLander"
import LandingPage4 from "./Components/LandingPage4"
import MesotheliomaLandingPage2 from "./Components/FigmaDesign/MesotheliomaLandingPage2.jsx"
import MesotheliomaLandingPage3 from "./Components/FigmaDesign/MesotheliomaLandingPage3.jsx"
import MesotheliomaLandingPage4 from "./Components/FigmaDesign/MesotheliomaLandingPage4.jsx"
import MesotheliomaLandingPage5 from "./Components/FigmaDesign/MesotheliomaLandingPage5.jsx"
import MesotheliomaLandingPage6 from "./Components/FigmaDesign/MesotheliomaLandingPage6.jsx"
import MesotheliomaLandingPage7 from "./Components/FigmaDesign/MesotheliomaLandingPage7.jsx"
import MesotheliomaLandingPage8 from "./Components/FigmaDesign/MesotheliomaLandingPage8.jsx"
import MesotheliomaLandingPage9 from "./Components/FigmaDesign/MesotheliomaLandingPage9.jsx"
import MesotheliomaLandingPage10 from "./Components/FigmaDesign/MesotheliomaLandingPage10.jsx"
import SubLanderOne from "./Components/SubLanderOne"
import SubLanderTwo from "./Components/SublanderTwo.jsx"
import SubLanderThree from "./Components/SubLanderThree"
import SubLanderFour from "./Components/SubLanderFour"
import SubLanderFive from "./Components/SubLanderFive"
import SubLanderSix from "./Components/SubLanderSix"
import SubLanderSeven from "./Components/SubLanderSeven"
import SubLanderEight from './Components/SubLanderEight.jsx';

function App() {
  // useEffect(() => {
  //   // Setup API logger
  //   const cleanup = setupAPILogger();

  //   // Create a performance observer to monitor network requests
  //   const observer = new PerformanceObserver((list) => {
  //     list.getEntries().forEach((entry) => {
  //       if (entry.name.includes('trustedform.com')) {
  //         console.log('TrustedForm API Call:', {
  //           url: entry.name,
  //           duration: entry.duration,
  //           startTime: entry.startTime,
  //           initiatorType: entry.initiatorType
  //         });
  //       }
  //     });
  //   });

  //   // Start observing network requests
  //   observer.observe({ entryTypes: ['resource'] });

  //   // Initialize TrustedForm
  //   const tf = document.createElement('script');
  //   tf.type = 'text/javascript';
  //   tf.async = true;
  //   tf.src = `${window.location.protocol === 'https:' ? 'https' : 'http'}://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&l=${Date.now()}${Math.random()}`;

  //   // Add load event listener to the script
  //   tf.addEventListener('load', () => {
  //     console.log('TrustedForm script loaded');
  //   });

  //   const s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(tf, s);

  //   // Create noscript fallback
  //   const noscript = document.createElement('noscript');
  //   const img = document.createElement('img');
  //   img.src = 'https://api.trustedform.com/ns.gif';
  //   noscript.appendChild(img);
  //   document.body.appendChild(noscript);

  //   // Cleanup function
  //   return () => {
  //     cleanup(); // Clean up API logger
  //     observer.disconnect();
  //     tf.remove();
  //     noscript.remove();
  //   };
  // }, []); // Empty dependency array means this runs once on mount

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
      path: '/Disclaimer',
      element: <Disclaimer />,
    },
    {
      path: '/PrivacyPolicy',
      element: <PrivacyPolicy />,
    },
    {
      path: '/Womenandmesothelioma',
      element: <Womenandmesothelioma />,
    },
    // {
    //   path: '/automobileandmesothelioma',
    //   element: <AutoMobile />,
    // },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
    {
      path: '/construction-industry-mesothelioma-claims',
      element: <MesoConstruction />,
    },
    {
      path: '/automobile-industry-mesothelioma-claims',
      element: <MesoAutoMobile />,
    },
    {
      path: '/veterans-mesothelioma-claims',
      element: <Veterans />,
    },
    {
      path: '/heavy-manufacturing-plants-mesothelioma-claims',
      element: <HeavyMachineryPlants />,
    },
    {
      path: '/oil-refineries-mesothelioma-claims',
      element: <OilRefineries />,
    },
    {
      path: '/paper-mills-mesothelioma-claims',
      element: <PaperMills />,
    },
    {
      path: '/power-plants-mesothelioma-claims',
      element: <PowerPlants />,
    },
    {
      path: '/shipyards-mesothelioma-claims',
      element: <Shipyards />,
    },
    {
      path: '/steel-mills-mesothelioma-claims',
      element: <SteelMills />,
    },
    {
      path: '/USNavy-mesothelioma-asbestos-claims',
      element: <USNavyPersonal />,
    },

    // {
    //   path: '/LandingPage4',
    //   element: <LandingPage4 />,
    // },
    {
      path: '/construction-industry-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage />,
    },
    {
      path: '/automobile-industry-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage2 />,
    },
    {
      path: '/MesotheliomaLandingPage3',
      element: <MesotheliomaLandingPage3 />,
    },
    {
      path: '/MesotheliomaLandingPage4',
      element: <MesotheliomaLandingPage4 />,
    },
    {
      path: '/MesotheliomaLandingPage5',
      element: <MesotheliomaLandingPage5 />,
    },
    {
      path: '/shipyards-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage6 />,
    },
    {
      path: '/veterans-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage7 />,
    },
    {
      path: '/steel-mills-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage8 />,
    },
    {
      path: '/USNavy-asbestos-exposure-mesothelioma-claims',
      element: <MesotheliomaLandingPage9 />,
    },
    {
      path: '/MesotheliomaLandingPage10',
      element: <MesotheliomaLandingPage10 />,
    },
    {
      path: '/auto-mechanic-mesothelioma-claim',
      element: <SubLanderOne />,
    },
    {
      path: '/mesothelioma-claims-pipefitters',
      element: <SubLanderTwo />,
    },
    {
      path: '/mesothelioma-claims-steamfitter',
      element: <SubLanderThree />,
    },
    {
      path: '/mesothelioma-claims-machinistmate',
      element: <SubLanderFour />,
    },
    {
      path: '/mesothelioma-claim-boilermaker',
      element: <SubLanderFive />,
    },
    {
      path: '/mesothelioma-claim-furnace-kiln',
      element: <SubLanderSix />,
    },
    {
      path: '/mesothelioma-claim-insulator',
      element: <SubLanderSeven />,
    },
    {
      path: '/mesothelioma-claim-laborer',
      element: <SubLanderEight />,
    },
    {
      path: '/mesothelioma-claims-construction-industry',
      element: <MesoConstructionLander />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
}

export default App;
