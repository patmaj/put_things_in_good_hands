import { HomeColumns, HomeHeader, HomeSteps, HomeAbout, HomeFoundation, HomeContact } from './';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;