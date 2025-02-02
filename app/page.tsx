import Certs from "./certs";
import styles from "./page.module.css";
import Link from "next/link";
import prisma from "../lib/prisma";
// import data from "../data/data"

export default async function Home() {
  await prisma.code.findMany();
  console.log(await prisma.code.findMany());
  // data.forEach(async (item) => {
  //   await prisma.code.create({ data: item });
  // })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.fiftyfifty}>
          <div>
            <h2>
              Check Out My Persional Cheat Sheet
            </h2>
            <p>
              I have been compiling some of my most used functions into one page for quick reference.
            </p>
          </div>
          <div>
            <Link
              className={styles.ctaLink}
              href='/code'>Check It Out</Link>
          </div>
        </article>


        <article className={styles.fiftyfifty}>
          <div>
            <h2>
              Public Repositories
            </h2>
            <p>
              I have a few public repositories that you can check out.
            </p>
          </div>
          <div>
            <Link
              className={styles.ctaLink}
              href='https://github.com/michaelhefner'>Check It Out</Link>
          </div>
        </article>

        <Certs />

      </main>

    </div>
  );
}
