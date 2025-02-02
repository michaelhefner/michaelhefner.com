'use client'
import Link from "next/link";
import Code from "../../components/code/code";
import './code.scss';
import data from "../../data/data";
import { useEffect, useState } from "react";

const Page = () => {
  const [displayData, setDisplayData] = useState();
  useEffect(() => {
    console.log("USE EFFECT")
    setDisplayData(() => {
      return data.map((item) => {
        const key = item.id;
        return (
          <div className="code-item" id={key} key={key}>
            {item.title && (<h2>{item.title}</h2>)}
            <p>{item.description}</p>
            {item.attributionURL && (<Link
              href={item.attributionURL}
            >
              Found on {item.attributionText}
            </Link>)}
            <Code code={item.code} />
          </div>
        )
      })
    });
  },[])
  // const returnData = () => {
  //   return data.map((item) => {
  //     const key = item.id;
  //     return (
  //       <div className="code-item" id={key} key={key}>
  //         {item.title && (<h2>{item.title}</h2>)}
  //         <p>{item.description}</p>
  //         {item.attributionURL && (<Link
  //           href={item.attributionURL}
  //         >
  //           Found on {item.attributionText}
  //         </Link>)}
  //         <Code code={item.code} />
  //       </div>
  //     )
  //   });
  // }

  const links = data.map((item, key) => {
    // console.log(`${key}-${item.id}`);
    return (
      <>
        <li id={`${key}`} key={`${key}-${item.id}`}>
          <a href={`#${item.id}`}>{item.title}</a>
        </li>
      </>
    );
  });
  return (
    <>
      <ul>
        {links}
      </ul>
      <div className="code-container">
        {displayData}
      </div>
    </>
  )
}
export default Page;