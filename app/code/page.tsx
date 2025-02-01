import Link from "next/link";
import Code from "../../components/code";
import prisma from "../../lib/prisma";
import { CodeType } from "../../lib/types";

const Page = async () => {
  const data = await prisma.code.findMany();
  const returnData = () => {
    return data.map((item: CodeType) => {
      const key = item.id;
      return (
          <div id={key} key={key}>
            {item.title &&(<h2>{item.title}</h2>)}
            <p>{item.description}</p>
            {item.url && (<Link
              href={item.url}
            >
              View Code
            </Link>)}
            <Code code={item.code} />
          </div>
      )
    });
  }
  return (
    <>
      {returnData()}
    </>
  )
}
export default Page;