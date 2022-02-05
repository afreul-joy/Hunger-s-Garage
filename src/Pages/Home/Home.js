import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import Tabs from './Tabs/Tabs';
import TabsNav from './Tabs/TabsNav/TabsNav';




const Home = () => {
    return (
        <>
        <Banner></Banner>
        <TabsNav></TabsNav>
        <About></About>
        <Tabs></Tabs>
        </>
    );
};

export default Home;