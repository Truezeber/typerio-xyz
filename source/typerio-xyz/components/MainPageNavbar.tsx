import styles from "@/styles/mainPageNavbar.module.css";

const PageNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img
          className={styles.navbarLogoIcon}
          src="./typerio-logo.svg"
          alt="typerio logo"
        />
        <p className={styles.navbarLogoText}>Typerio</p>
      </div>
      <div className={styles.navbarLinks}>
        <div className={styles.navbarLinksLinkWrapper}>
          <a className={styles.navbarLinksLink} id="docs" href="/docs">
            docs
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
