

import './App.css';

import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  let dotIconStyle = { background: '#06D6A0' };
  return (
     <div className='dotted-box'>
      <h1 className='title'>Dates and Schedule</h1>
      <VerticalTimeline>
        {
        timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.description}
            dateClassName="date"
            iconStyle={dotIconStyle} 
            
          >
            <h3 className='vertical-timeline-element-title'>{element.title}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      
    </div>
    
    
  );
}

export default App;
