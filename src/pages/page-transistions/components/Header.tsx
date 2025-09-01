import { FaCartShopping } from "react-icons/fa6";

export default function Header(){
    return(
        <div className="h-fit w-full px-[20px] md:px-[50px] py-5 flex items-center justify-between fixed top-0 left-0 z-[99]">
            <div className="cursor-pointer">
                <img
                    src="/images/head-2.png"
                    alt=""
                    className="h-[60px]"
                />
            </div>
            {/* <div className="flex items-center justify-center gap-7">
                <p className="font-medium cursor-pointer">Waitlist</p>
                <p className="font-medium cursor-pointer">Collections</p>
            </div> */}
            <div className="flex items-center gap-3">
                <button
                    className="h-[50px] flex items-center gap-2 px-[30px] rounded-full cursor-pointer bg-[#FF648B] text-white font-medium"
                    
                    >
                    Cart
                    <FaCartShopping size={20} />
                </button>
                {/* <button
                    className="h-[50px] flex items-center gap-2 px-[30px] rounded-full cursor-pointer bg-[#FF648B] text-white font-medium"
                    
                    >
                    Saved
                    <FaCartShopping size={20} />
                </button> */}
            </div>
        </div>
    )
}