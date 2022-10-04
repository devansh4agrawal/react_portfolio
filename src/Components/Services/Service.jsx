import React, {useState} from 'react'
import './Service.css'

const Service = () => {
    const [closetoggle, setCloseToggle] = useState(0)

    const toggleTab = (index) =>{
        setCloseToggle(index)
    }

  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>

        <div className="service_container container grid">
            <div className="service_content">
                <div>
                    <i className="uil uil-web-grid service_icon"></i>
                    <h3 className="service_title">Product Designer</h3>
                </div>

                <span className="service_button" onClick={()=> toggleTab(1)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={closetoggle === 1 ? "service_modal active-modal" : "service_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times service_modal-close"></i>

                        <h3 className="service_modal-title">Product Designer</h3>
                        <p className="service_modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                    
                        <ul className="service_modal-service grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service_content">
                <div>
                    <i className="uil uil-arrow service_icon"></i>
                    <h3 className="service_title">UI / UX Designer</h3>
                </div>

                <span className="service_button" onClick={()=> toggleTab(2)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={closetoggle === 2 ? "service_modal active-modal" : "service_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times service_modal-close"></i>

                        <h3 className="service_modal-title">UI UX Designer</h3>
                        <p className="service_modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                    
                        <ul className="service_modal-service grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="service_content">
                <div>
                    <i className="uil uil-edit service_icon"></i>
                    <h3 className="service_title">Visual Designer</h3>
                </div>

                <span className="service_button" onClick={()=> toggleTab(3)}>View More <i className="uil uil-arrow-right service_button-icon"></i></span>

                <div className={closetoggle === 3 ? "service_modal active-modal" : "service_modal"}>
                    <div className="service_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times service_modal-close"></i>

                        <h3 className="service_modal-title">Visual Designer</h3>
                        <p className="service_modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>
                    
                        <ul className="service_modal-service grid">
                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>

                            <li className="service_modal-service">
                                <i className="uil uil-check-circle service_modal-icon"></i>
                                <p className="service_modal-info">I develop the user Interface</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service