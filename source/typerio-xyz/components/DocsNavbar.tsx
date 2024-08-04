import "@/styles/docsNavbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-top">
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
          <div className="navbar-maingroup">
            <p className="navbar-maingroup-title">Other</p>
            <a href="/docs/contributing" className="navbar-link">
              Contributing
            </a>
          </div>
        </div>
        <div className="navbar-bottom">
          <p className="navbar-title">
            <a href="https://typerio.xyz/">Homepage</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
