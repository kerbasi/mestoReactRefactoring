import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className='header page__header'>
      <img src={logo} alt='лого место' className='header__logo' />
    </header>
  );
};

export default Header;
