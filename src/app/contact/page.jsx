// "use client";
import Image from "next/image";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <div className='flex gap-[100px]'>
      <div className='flex  flex-1 relative h-[500px]'>
        <Image src="/contact.png" alt="" fill className='flex object-contain' />
      </div>
      <div className=''>
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className='flex flex-col gap-[20px] '>
          <input type="text" placeholder="Name and Surname" className="p-[20px] rounded-[5px] border-none outline-none  bg-[#2d2b42] text-white"/>
          <input type="text" placeholder="Email Address" className="p-[20px] rounded-[5px] border-none outline-none  bg-[#2d2b42] text-white"/>
          <input type="text" placeholder="Phone Number (Optional)" className="p-[20px] rounded-[5px] border-none outline-none  bg-[#2d2b42] text-white"/>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-[20px] rounded-[5px] border-none outline-none  bg-[#2d2b42] text-white"
          ></textarea>
          <button className="p-[20px] bg-[#3673fd] font-bold text-white rounded-[5px] cursor-pointer">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;