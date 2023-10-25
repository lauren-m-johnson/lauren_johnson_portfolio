import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./ProjectSlider.css"

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
                <div className="keen-slider__slide number-slide1"><img src="images/supernatural.png" /><h3>Test</h3></div>
                <div className="keen-slider__slide number-slide2"><img src="images/supernatural.png" /><h3>Test</h3></div>
                <div className="keen-slider__slide number-slide3"><img src="images/pawfolio.png" /><h3>Test</h3></div>
                <div className="keen-slider__slide number-slide4"><img src="images/chronicles.png" /><h3>Test</h3></div>
                <div className="keen-slider__slide number-slide5"><img src="images/slotmachine.png" /><h3>Test</h3></div>
            </div>
        </>
    )
}