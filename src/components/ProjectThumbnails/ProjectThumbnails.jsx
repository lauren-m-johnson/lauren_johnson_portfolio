import { Link } from "react-router-dom"

export default function ProjectThumbnails() {
    return(
        <>
            <div id='thumbnail-container'>
                <Link to='/project0'>
                    <img src="images/thumbnail-0.png" />
                </Link>
                <Link to='/project1'>
                    <img src="images/thumbnail-1.png" />
                </Link>
                <Link to='/project2'>
                    <img src="images/thumbnail-2.png" />
                </Link>
                <Link to='/project3'>
                    <img src="images/thumbnail-3.png" />
                </Link>
                <Link to='/project4'>
                    <img src="images/thumbnail-4.png" />
                </Link>
            </div>
            </>
    )
}