import AppNavigations from "./pages/App-navigations";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once:false
    });
  }, []);
  return (
    <div className="global-background">
      <AppNavigations/>
    </div>
  );
}

export default App;
