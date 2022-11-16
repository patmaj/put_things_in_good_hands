import { HomeColumns, HomeHeader, HomeSteps, HomeAbout, HomeFundation, HomeContact } from './';

const Home = () => {
    return (
        <div>
            <HomeHeader />
              <main>
                  <HomeColumns />
                  <HomeSteps />
                  <HomeAbout />
                  <HomeFundation />
              </main>
              <footer>
                  <HomeContact />
              </footer>
        </div>
    );
};

export default Home;