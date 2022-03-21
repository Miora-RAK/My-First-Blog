import type { NextPage } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

function Second() {
  return (
    <>
      <Layout>
        <div className={styles.description}>
          <p>Second Article</p>

          <section>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              ipsam, doloremque excepturi quasi culpa ut. Placeat, dolor
              incidunt. Cumque ipsum at blanditiis cum excepturi vel, deserunt
              ratione modi repellat distinctio?
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
}
export default Second;
