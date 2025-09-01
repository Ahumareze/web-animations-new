import gsap from "gsap";
import { useEffect, type JSX } from "react";
import Header from "../pages/page-transistions/components/Header";

export default function AnimatedContainer({children}:{children: JSX.Element}){

    useEffect(() => {
        handleIntroAnimation()
    }, []);

    const handleIntroAnimation = () => {
        let tl = gsap.timeline();

        tl.to('#intro-bars', {
            height: 0,
            stagger: {
                amount: -0.4
            },
            onComplete: () => {}
        })
    }

    return(
        <div className="min-h-screen w-full">
            <Header />
            <div className="fixed top-0 left-0 z-[1000] w-full grid grid-cols-10">
                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                    <div
                        className="h-0 w-full bg-[#88C0FF]"
                        id="exit-bars"
                        key={i}
                    />
                ))}
            </div>
            <div className="fixed top-0 left-0 z-[1000] w-full grid grid-cols-10">
                {[1,2,3,4,5,6,7,8,9,10].map(i => (
                    <div
                        className="h-screen w-full bg-[#88C0FF]"
                        id="intro-bars"
                        key={i}
                    />
                ))}
            </div>
            {children}
        </div>
    )
}