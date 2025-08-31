import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import AnimatedContainer from "../../container/AnimatedContainer";

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
      <div className="bg-blue-500 min-h-screen w-full flex items-center justify-center">
        <button
          className="h-[50px] w-[200px] cursor-pointer bg-red-500 text-white"
          onClick={handleExitAnimation}
        >
          Page 1
        </button>
      </div>
    </AnimatedContainer>
  );
}
