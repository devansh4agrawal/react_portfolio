import React from 'react'
import './Qualification.css'
import { useState } from 'react'

const Qualification = () => {
    const [toggleState, setToggleSate] = useState(1)

    const toggleTab = (index) => {
        setToggleSate(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section_title">
            Qualification
        </h2>
        <span className="section_subtitle">My Education Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div onClick = {() => toggleTab(1) } className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex" }>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>
                <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex" } onClick = {() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>
            <div className="qualification_section">
                <div className={ toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                    <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                    <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        
                    </div>
                </div>

                <div className={ toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Python Developer</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                    <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                    <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">CBSE</h3>
                            <span className="qualification_subtitle">Institute</span>
                            <div className="qualification_calendar"><i className="uil uil-calendar-alt"></i>2021-Present</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification