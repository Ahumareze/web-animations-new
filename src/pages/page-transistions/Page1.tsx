import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import AnimatedContainer from "../../container/AnimatedContainer";
import HeroLargeText from "./components/HeroLargeText";
import HeroSubText from "./components/SubText";
import { FiChevronRight } from "react-icons/fi";

export default function Page1() {
  const navigate = useNavigate();

  const handleExitAnimation = () => {
    let tl = gsap.timeline();

    tl.to("#exit-bars", {
      height: "100vh",
      stagger: {
        amount: -0.4,
      },
      onComplete: () => {
        // Navigate once animation finishes
        navigate("/page-2");
      },
    });
  };

  return (
    <AnimatedContainer>
      <div className="bg-[#F8EAD2] min-h-screen w-full flex items-center justify-center flex-col relative">
        <HeroLargeText text="Collect the Chaos." />
        <HeroSubText />

        <button
          className="h-[50px] flex items-center gap-2 px-[30px] rounded-full cursor-pointer bg-[#FF648B] text-white font-medium mt-10"
          onClick={handleExitAnimation}
        >
          Browse
          <FiChevronRight size={20} />
        </button>
        <img
          src="images/head-1.png"
          alt=""
          className="absolute left-20 bottom-20 rotate-[-25deg] hover:rotate-[-5deg] hover:scale-110 duration-200 ease-out"
        />
        <img
          src="images/head-2.png"
          alt=""
          className="absolute right-20 bottom-20 rotate-[25deg] hover:rotate-[5deg] hover:scale-110 duration-200 ease-out"
        />
      </div>
    </AnimatedContainer>
  );
}
