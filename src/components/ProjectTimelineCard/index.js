// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {projectTimeLineCardDetails} = props

  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectTimeLineCardDetails

  return (
    <div className="card-container">
      <img src={imageUrl} alt="project" className="image-url" />
      <h1>{projectTitle}</h1>
      <AiFillCalendar />
      <p>{duration}</p>
      <p>{description}</p>
      <a href={projectUrl} target="blank">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
