import React from 'react'
import './Skill.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Analysis from './Analysis'
import Programming from './Programming'


const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
    
        <div className="skill_container container grid">
            <Frontend/>
            <Backend/>
            <Analysis/>
            <Programming/>

        </div>
    </section>
  )
}

export default Skill