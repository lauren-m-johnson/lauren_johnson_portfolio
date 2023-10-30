import ProjectThumbnails from "../ProjectThumbnails/ProjectThumbnails";
import { Link } from "react-router-dom";

export default function Project0() {
    return (
        <div id='main-container'>
            <div id='projects'>
                <h1>Projects</h1>
            </div>
            <section id='project-container'>
                <div id='project-img'>
                    <h1>Small Business Website</h1>
                    <img src="images/thumbnail-0.png" alt='webpage image' />
                </div>
                <div id='project-info'>
                    <h2>North Coast Junk Removal | October 2023</h2>
                    <h3>Client based website for a local small business.</h3>
                    <p>Worked with the client to agree upon design and created a wireframe. I utalized React for speed, JavaScript, HTML and CSS.</p>
                    <a href="https://northstatejunkremoval.com/" target="_blank" rel='noreferrer'>Live Link</a>
                    <a href="https://github.com/lauren-m-johnson/north_state_junk" target="_blank" rel='noreferrer'>Visit GitHub</a>
                </div>
            </section>
                <div id='projects-button'>
                    <Link to='/projects'>
                        <button>Back to Projects</button>
                    </Link>
                </div>
                <div id='more-projects'>
                    <h3>Click a Project to View more</h3>
                    <ProjectThumbnails />
                </div>
        </div>
    )
}