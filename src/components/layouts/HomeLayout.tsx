import { Link } from "react-router";
import type { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
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

export default HomeLayout;
