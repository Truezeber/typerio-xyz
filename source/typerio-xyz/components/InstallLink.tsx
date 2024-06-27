import ReactMarkdown from "react-markdown";
import "@/styles/InstallLink.scss";
interface ComponentProps {
  name: string;
  command: string;
}

const InstallLink: React.FC<ComponentProps> = ({ name, command }) => {
  return (
    <div className="InstallLinkComponent">
      <h2>{name}</h2>
      <ReactMarkdown>{`\`\`\`console\n${command}\n\`\`\``}</ReactMarkdown>
    </div>
  );
};

export default InstallLink;
