import HeaderLoginRegister from "./HeaderLoginRegister";
import HeaderNavbar from "./HeaderNavbar";

const Login = () => {
    return (
        <section className="login">
          <div className="header__right--column">
              <HeaderLoginRegister />
              <HeaderNavbar />
          </div>
        </section>
    );
};

export default Login;