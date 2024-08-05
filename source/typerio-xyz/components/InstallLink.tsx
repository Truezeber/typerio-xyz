"use client";
import styles from "@/styles/InstallLink.module.scss";
interface ComponentProps {
  name: string;
  iconLink: string;
  command: string;
  npmLink: string;
  gitLink: string;
}

const InstallLink: React.FC<ComponentProps> = ({
  name,
  iconLink,
  command,
  npmLink,
  gitLink,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      alert("Command copied!");
    } catch (error) {
      console.error(`Cannot copy: ${error}`);
    }
  };
  return (
    <div className={styles.InstallLinkComponent}>
      <div className={styles.topWrapper}>
        <h2 className={styles.title}>{name}</h2>
        <img className={styles.techIcon} src={iconLink} alt="" />
      </div>
      <p className={styles.commandWrapper}>
        <span className={styles.command}>{command}</span>
        <img
          className={styles.icon}
          src="/icon--copy.svg"
          title="copy command"
          alt=""
          onClick={handleCopy}
        />
      </p>
      <p className={styles.linksWrapper}>
        <a title="NPM page" href={npmLink} className={styles.link}>
          <img className={styles.linkIcon} src="/icon--npm.svg" alt="" />
        </a>
        <a title="GitHub repository" href={gitLink} className={styles.link}>
          <img className={styles.linkIcon} src="/icon--github.svg" alt="" />
        </a>
      </p>
    </div>
  );
};

export default InstallLink;
