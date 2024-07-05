import "@/styles/_global.scss";
import "@/styles/docs.scss";
import "@/styles/atom-one-dark.css";
import "remark-github-blockquote-alert/alert.css";

import Navbar from "@/components/DocsNavbar";
import Footer from "@/components/Footer";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="page">{children}</div>
      <Footer />
    </>
  );
}
