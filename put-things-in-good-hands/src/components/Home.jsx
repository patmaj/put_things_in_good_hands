import { HomeColumns, HomeHeader, HomeSteps, HomeAbout, HomeContact } from './';
import HomeFoundation from "./Foundation/HomeFoundation";

const Home = () => {
    return (
        <>
            <HomeHeader />
              <main>
                  <HomeColumns />
                  <HomeSteps />
                  <HomeAbout />
                  <HomeFoundation />
              </main>
              <footer>
                  <HomeContact />
              </footer>
        </>
    );
};

export default Home;