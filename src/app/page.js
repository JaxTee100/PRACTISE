import Image from "next/image";


export default function Home() {
  
  return (
    <div className="flex gap-[100px] ">
      <div className="flex-1 flex flex-col gap-[50px]">
        <h1 className="text-[96px] font-bold">Creative Thoughts Agency.</h1>
        <p className="text-[20px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
        <div className=" flex gap-[20px]">
          <button className="p-[20px] min-w-[120px] pointer border-none bg-[#3673fd] text-white font-semibold">Learn More</button>
          <button className="p-[20px] min-w-[120px] pointer border-none bg-white text-black font-semibold" >Contact</button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale">
          <Image src='/brands.png' alt='' fill className="" />
        </div>
      </div>
      <div className="relative flex-1">
        <Image src='/hero.gif' alt='' fill className="" />
      </div>
    </div>
  );
}
