// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={timelineItemsList}
            scrollable
          >
            {timelineItemsList.map(item =>
              item.categoryId === 'COURSE' ? (
                <CourseTimeLineCard courseTimeLineCardDetails={item} />
              ) : (
                <ProjectTimeLineCard projectTimeLineCardDetails={item} />
              ),
            )}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
