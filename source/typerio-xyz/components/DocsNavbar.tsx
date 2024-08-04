"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "@/styles/docsNavbar.scss";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <div className="navbar">
      <div className="navTop">
        <h1 className="title">
          <Link href="/docs">Typerio Docs</Link>
        </h1>
      </div>
      <div className="section">
        <h2 className="title">Typerio</h2>
        <ul>
          <li>
            <Link
              className={`link active ${
                pathname === "/docs/typerio-html/instalation" ? "active" : ""
              }`}
              href="/docs/typerio-html/instalation"
            >
              Instalation
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio-html/basic-usage" ? "active" : ""
              }`}
              href="/docs/typerio-html/basic-usage"
            >
              Basic usage
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio-html/advanced-usage" ? "active" : ""
              }`}
              href="/docs/typerio-html/advanced-usage"
            >
              Advanced usage
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio-html/examples" ? "active" : ""
              }`}
              href="/docs/typerio-html/examples"
            >
              Examples
            </Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <h2 className="title">Typerio Reacy</h2>
        <ul>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio-react/instalation" ? "active" : ""
              }`}
              href="/docs/typerio-react/instalation"
            >
              Instalation
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio/usage" ? "active" : ""
              }`}
              href="/docs/typerio/usage"
            >
              Component usage
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio/typescript" ? "active" : ""
              }`}
              href="/docs/typerio/typescript"
            >
              Typescript
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/typerio/examples" ? "active" : ""
              }`}
              href="/docs/typerio/examples"
            >
              Examples
            </Link>
          </li>
        </ul>
      </div>
      <div className="section">
        <h2 className="title">Contributing</h2>
        <ul>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/contributing/coc" ? "active" : ""
              }`}
              href="/docs/contributing/coc"
            >
              Code of conduct
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/contributing/chosing-project"
                  ? "active"
                  : ""
              }`}
              href="/docs/contributing/chosing-project"
            >
              Chosing a project
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/contributing/issues" ? "active" : ""
              }`}
              href="/docs/contributing/issues"
            >
              Reporting issues
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/docs/contributing/pull request" ? "active" : ""
              }`}
              href="/docs/contributing/pull request"
            >
              Pull requests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
