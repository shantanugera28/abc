import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.jpg'
import program_icon_2 from '../../assets/program-icon-2.jpg'
import program_icon_3 from '../../assets/program-icon-3.jpg'

const Programs = () => {
  return (
    <div className="programs" >
        <div className="program">
            <img src={program_1} alt="program1" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="program2" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="program3" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
