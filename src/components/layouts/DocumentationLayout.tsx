import { Link } from "react-router";
import type { ReactNode } from "react";

const DocumentationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fundamental"> Fundamental</Link>
            </li>
            <li>
              <Link to="/plugins"> Plugins</Link>
            </li>
            <li>
              <Link to="/features-tools"> Features & Tools</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <article>{children}</article>
      </main>
    </>
  );
};

export default DocumentationLayout;
