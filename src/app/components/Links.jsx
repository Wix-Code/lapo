import Image from "next/image";
import { sideBarLinks } from "../utils/dummyData";

export const Links = () => {
  return (
    <div className="flex flex-col gap-4">
      {
        sideBarLinks.map((i) => {
          return (
            <div key={i.id} className="flex items-center gap-4">
              <Image src="/pics/e.png" alt="Dashboard" width={16} height={16}/>
              <a className="text-[#00000080] text-[12px] font-[400]" href={i.path}>{i.name}</a>
            </div>
          )
        })
      }
    </div>
  )
}