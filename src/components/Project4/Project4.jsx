import ProjectThumbnails from "../ProjectThumbnails/ProjectThumbnails";
import { Link } from "react-router-dom";

export default function Project4() {
    return (
        <div id='main-container'>
            <div id='projects'>
                <h1>Projects</h1>
            </div>
            <section id='project-container'>
                <div id='project-img'>
                    <h1>Browser Game</h1>
                    <img src="images/thumbnail-4.png" alt='webpage image' />
                </div>
                <div id='project-info'>
                    <h2>Slot Machine Game | June 2023</h2>
                    <h3>Slot machine browser game.</h3>
                    <p>Showcasing the flexibily of Vanilla JavaScript, HTML and CSS.</p>
                    <a href="https://lauren-m-johnson.github.io/Project-1-Slot-Machine/" target="_blank" rel='noreferrer'>Live Link</a>
                    <a href="https://github.com/lauren-m-johnson/Project-1-Slot-Machine" target="_blank" rel='noreferrer'>Visit GitHub</a>
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