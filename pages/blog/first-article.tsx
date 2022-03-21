import type { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

function First() {
  return (
    <>
      <Layout>
        <div className={styles.description}>
          <p>First Article</p>

          <section>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              maiores perferendis illo? Illum harum laborum sint impedit aperiam
              nostrum, alias a nisi, rem accusamus molestiae molestias nobis
              inventore veniam quasi!
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default First;
