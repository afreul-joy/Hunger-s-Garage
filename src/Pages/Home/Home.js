import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import TabsNav from './Tabs/TabsNav/TabsNav';




const Home = () => {
    return (
        <>
        <Banner></Banner>
        <TabsNav></TabsNav>
        <About></About>
        </>
    );
};

export default Home;