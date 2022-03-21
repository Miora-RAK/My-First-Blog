import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

function Blog() {
  return (
    <>
      <Layout>
        <p className={styles.description}>Some articles</p>

        <div className={styles.grid}>
          <a href="/blog/first-article" className={styles.card}>
            <h2>First article &rarr;</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              libero itaque accusantium aspernatur nesciunt quia reiciendis
              repellat voluptas quae dicta. Culpa corporis laboriosam id
              consequatur aspernatur illum assumenda, repellat voluptas?
            </p>
          </a>

          <a href="/blog/second-article" className={styles.card}>
            <h2>Second article &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste repudiandae aperiam, soluta molestiae odio numquam.
              Cupiditate mollitia natus eligendi repellendus dignissimos eaque
              blanditiis similique quas. Esse recusandae veniam quam!
            </p>
          </a>
        </div>
      </Layout>
    </>
  );
}
export default Blog;
