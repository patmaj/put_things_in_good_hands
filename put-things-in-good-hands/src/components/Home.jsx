import React from "react";
import { HomeColumns, HomeHeader, HomeLoginRegister, HomeNavigation } from './';

const Home = () => {
    return (
        <div>
            <HomeHeader>
                <HomeLoginRegister></HomeLoginRegister>
                <HomeNavigation></HomeNavigation>
            </HomeHeader>
            <HomeColumns>
            </HomeColumns>

        </div>
    );
};

export default Home;