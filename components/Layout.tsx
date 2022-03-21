import React from "react";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        {/*------------ Navbar start-------------*/}
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">LOGO</a>
            </Link> */}
        <nav className="bg bg-dark ">
          <ul className="nav justify-content-center ">
            <li className="nav-item ">
              <Link href="/">
                <a
                  className="nav-link active text-secondary"
                  aria-current="page"
                >
                  Logo
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/blog">
                <a className="nav-link active text-secondary">
                  Blog
                  <span className="visually-hidden">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/blog/first-article">
                <a className="nav-link text-secondary">First Article</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/blog/second-article">
                <a className="nav-link text-secondary">Second Article</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* </div>
        </nav> */}

        {/*------------ Navbar end -------------*/}
      </header>

      {/*------------ Article start-------------*/}
      <article>{children}</article>
      {/*------------ Article end -------------*/}

      {/*------------ Footer start-------------*/}
      <footer className="text-secondary">
        <Link href="#">
          <a>
            {/* <span className={styles.logo}>
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
            {/* </span>  */}
          </a>
        </Link>
      </footer>
      {/*------------ Footer end-------------*/}
    </>
  );
};
export default Layout;
