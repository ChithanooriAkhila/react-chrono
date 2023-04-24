// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {courseTimeLineCardDetails} = props
  const {
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseTimeLineCardDetails

  return (
    <div className="card-container">
      <h1>{courseTitle}</h1>
      <AiFillClockCircle />
      <p>{duration}</p>
      <p>{description}</p>

      {tagsList.map(listItem => (
        <p>{listItem.name}</p>
      ))}
    </div>
  )
}

export default CourseTimeLineCard
