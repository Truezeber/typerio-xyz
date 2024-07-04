import "@/styles/_global.scss";
import "@/styles/docs.scss";
import Navbar from "@/components/DocsNavbar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <Navbar />
      {children}
    </div>
  );
}
