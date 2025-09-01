import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import AnimatedContainer from "../../container/AnimatedContainer";
import HeroLargeText from "./components/HeroLargeText";

export default function Page2() {
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
        navigate("/page-1");
      },
    });
  };

  return (
    <AnimatedContainer>
      <div className="bg-red-500 min-h-screen w-full flex items-center justify-center flex-col space-y-10  bg-cover" style={{background: `url(images/clouds.jpeg)`}}>
        <HeroLargeText text="Page 2" />
        <div className="text-center max-w-[750px] mx-auto">
          
        </div>
        <button
          className="h-[50px] w-[200px] cursor-pointer bg-blue-500 text-white"
          onClick={handleExitAnimation}
        >
          Page 2
        </button>
      </div>
    </AnimatedContainer>
  );
}
