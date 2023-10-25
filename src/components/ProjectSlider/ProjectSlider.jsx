import { useKeenSlider } from "keen-slider/react";
import { Link } from 'react-router-dom';
import "keen-slider/keen-slider.min.css";
import "./ProjectSlider.css";

export default function ProjectSlider() {
    const [sliderRef] = useKeenSlider(
    {
        loop: true,
    },
    [
        (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 4000)
            }
        slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })
            nextTimeout()
            })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
        },
    ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <Link to='/project0'>
                        <img src="images/thumbnail-0.png" />
                    </Link>
                    <h2>Small Business Website</h2>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <Link to='/project1'>
                        <img src="images/thumbnail-1.png" />
                    </Link>
                    <h2>Online Forum</h2>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <Link to='/project2'>
                        <img src="images/thumbnail-2.png" />
                    </Link>
                    <h2>Communication Software</h2>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <Link to='/project3'>
                        <img src="images/thumbnail-3.png" />
                    </Link>
                    <h2>Online Journal</h2>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <Link to='/project4'>
                        <img src="images/thumbnail-4.png" />
                    </Link>
                    <h2>Browser Game</h2>
                </div>
            </div>
        </>
    )
}