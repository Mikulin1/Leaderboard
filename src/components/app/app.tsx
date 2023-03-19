import React from 'react';
import Header from "../header/header";
import MainContent from "../main-content/main-content";
import HeaderContent from "../header-content/header-content";
import Footer from "../footer/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
    return (
        <div>
            <Header/>
            <HeaderContent/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
