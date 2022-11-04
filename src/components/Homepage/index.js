import React from 'react';
import Header from './pages/Header';
import SectionOne from './pages/SectionOne';
import SectionTwo from './pages/SectionTwo';
import SectionThree from './pages/SectionThree';
import Head from './pages/Nav';
import SectionFour from './pages/SectionFour';
// import SectionFive from './pages/SectionFive';
// import SectionFour from './pages/SectionFour';
// import SectionSix from './pages/SectionSix';

function Home({data}) {
    return (
        <div>
            <Head/>
            <Header/>
            <SectionOne/>
            <SectionThree />
            <SectionTwo/>
            <SectionFour/>
            {/* <SectionFive/> */}
            {/* <SectionSix/> */}
        </div>
    );
}

export default Home;