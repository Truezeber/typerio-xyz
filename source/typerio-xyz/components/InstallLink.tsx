import "@/styles/InstallLink.scss";
interface ComponentProps {
  name: string;
  command: string;
}

const InstallLink: React.FC<ComponentProps> = ({ name, command }) => {
  return (
    <div className="InstallLinkComponent">
      <h2>{name}</h2>
      <p>{command}</p>
    </div>
  );
};

export default InstallLink;
