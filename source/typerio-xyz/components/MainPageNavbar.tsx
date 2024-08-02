import "@/styles/navbar.scss";

const PageNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          className="navbar-logo-icon"
          src="./typerio-logo.svg"
          alt="typerio logo"
        />
        <p className="navbar-logo-text">Typerio</p>
      </div>
      <div className="navbar-links">
        <div className="navbar-links-linkWrapper">
          <a className="navbar-links-link" id="news" href="/news">
            news
          </a>
        </div>
        <div className="navbar-links-linkWrapper">
          <a className="navbar-links-link" id="docs" href="/docs">
            docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
