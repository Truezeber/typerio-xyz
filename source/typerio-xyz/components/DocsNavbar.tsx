import "@/styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <p className="navbar-title">
          <a href="/docs">Typerio Docs</a>
        </p>
        <div className="navbar-maingroup">
          <p className="navbar-maingroup-title">Getting started</p>
          <a href="/docs/typerio" className="navbar-link">
            typerio
          </a>
          <a href="/docs/typerio-react" className="navbar-link">
            typerio-react
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
