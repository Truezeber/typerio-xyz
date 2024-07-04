import "@/styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <p className="navbar-title">Typerio Docs</p>
        <div className="navbar-maingroup">
          <p className="navbar-maingroup-title">Getting started</p>
          <a href="" className="navbar-link">
            typerio
          </a>
          <a href="" className="navbar-link">
            typerio-react
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
