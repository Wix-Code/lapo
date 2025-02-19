import Image from "next/image"

export const LogoutIcon = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <Image src="/pics/e.png" alt="Dashboard" width={16} height={16} />
        <span className="text-[#121212] text-[12px]">Logout</span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#808080] text-[9px] font-normal">POWERED BY</p>
        <Image src="/pics/Vector.png" alt="Dashboard" width={93} height={41} />
      </div>
    </div>
  )
}