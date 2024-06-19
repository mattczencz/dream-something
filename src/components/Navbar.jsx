import cliqueLogo from '../assets/Logo.svg';
import searchIcon from '../assets/search.svg';

const Navbar = () => {
  const utilityNavLinks = ['About Us', 'Careers', 'Contact Us'];
  const primaryNavLinks = [
    'Portfolio',
    'Our Focus',
    'The Blog',
    'Partnerships',
  ];

  return (
    <header>
      {/* Utility navbar */}
      <nav className="utility-nav">
        <div className="angled-bg">
          <ul className="nav-links">
            {utilityNavLinks.map((link) => (
              <li key={`utility-navlink-${link.replace(' ', '-')}`}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
          <form className="search-form">
            <input type="search" placeholder="Search this site" />
            <button type="submit">
              <img src={searchIcon} alt="Search icon" />
            </button>
          </form>
        </div>
      </nav>

      {/* Primary navbar */}
      <nav className="primary-nav">
        <a href="/">
          <img src={cliqueLogo} alt="Clique branded logo" />
        </a>

        <div>
          <ul className="nav-links">
            {primaryNavLinks.map((link) => (
              <li key={`primary-navlink-${link.replace(' ', '-')}`}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
          <button className="cta">Get started</button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
