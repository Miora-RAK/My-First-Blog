import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1 className={styles.title}>This is the home page</h1>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
