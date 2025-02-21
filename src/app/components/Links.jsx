import Image from "next/image";
import { sideBarLinks } from "../utils/dummyData";
import Link from "next/link";

export const Links = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex sm:flex-col sm:justify-between">
      {
        sideBarLinks.map((i) => {
          return (
            <div key={i.id} className="flex items-center gap-4 sm:flex sm:flex-col sm:gap-1 sm:items-start">
              <Link href={i.path} className="flex items-center gap-4 sm:flex sm:flex-col sm:gap-1 sm:items-start">
                <Image src="/pics/e.png" alt="Dashboard" width={16} height={16}/>
                <p className="text-[#00000080] text-[12px] font-[400] sm:hidden">{i.name}</p>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}