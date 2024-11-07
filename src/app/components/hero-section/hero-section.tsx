import Image from "next/image";


const HeroSection =()=>{
    return(
        <section>
            <div className="bg-[#FFFFFF]  flex mt-40 "  >
                {/* left section */}
                <div className=" flex flex-col justify-center items-start  ml-20 w-[60%]" >
                    <h1 className=" w-[496px] h-[189px] font-abc font-[700] text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000]" >
                         IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                    <p className=" w-[902] h-[147px] font-abc font-500 text-[30px] leading-[49.35px] tracking-[2.5%] mt-5">
                         An example of intricate workmanship and detail, elegant necklaces and long and short
                         chains form a part of our desirable collection.</p>

                    <button className="  w-[288px] h-[58px] p-10 rounded-[10px] bg-[#A29875] font-abc font-[500] text-[30px]  text-[#FFFFFF] flex justify-center items-center mt-7"> Explore Now </button>    
                </div>

                {/* right srction */}
                <div className=" flex justify-center items-center w-1/2">
                    <Image src={"/image/figma-pic.png"} alt="pic" height={647} width={462} ></Image>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;