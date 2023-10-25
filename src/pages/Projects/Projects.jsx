import ProjectSlider from '../../components/ProjectSlider/ProjectSlider';
import ProjectThumbnails from '../../components/ProjectThumbnails/ProjectThumbnails';
import './Projects.css';


export default function Projects() {
    return (
        <div id='main-container'>
            <div id='projects'>
                <h1>Projects</h1>
                <h3>Click a Project to View more</h3>
                <ProjectSlider />
                <ProjectThumbnails />
            </div>
        </div>
    )
}