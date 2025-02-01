import Image from "next/image";
import styles from "./page.module.css";
import prisma from "../lib/prisma";

export default async function Home() {
  await prisma.code.create({
    data: {
      title: "Set Cookie",
      description: "Function to get a cookie",
      url: "https://www.w3schools.com/js/js_cookies.asp",
      code: `function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}`,
    },
  });
  await prisma.code.create({
    data: {
      title: "Get Cookie",
      description: "Function to get a cookie",
      url: "https://www.w3schools.com/js/js_cookies.asp",
      code: `function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}`,
    },
  });
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', gap: '10px' }}>
          <Image
            src="/img/AdvHTML5_CSS3_sp.jpg"
            alt="Michael Hefner"
            width={115}
            height={115}
            style={{ borderRadius: "20px" }}
          />
          <Image
            src="/img/comptia-a-ce-certification.1.png"
            alt="Michael Hefner"
            width={115}
            height={115}
            style={{ borderRadius: "20px" }}
          />
          <Image
            src="/img/site_dev_assoc.jpg"
            alt="Michael Hefner"
            width={115}
            height={115}
            style={{ borderRadius: "20px" }}
          />
          <Image
            src="/img/UserInterface_sp.jpg"
            alt="Michael Hefner"
            width={115}
            height={115}
            style={{ borderRadius: "20px" }}
          />
        </div>
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
