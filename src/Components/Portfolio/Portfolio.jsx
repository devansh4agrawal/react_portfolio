import React,{useState} from 'react'
import './Portfolio.css'
import Menu from './Menu'

const Portfolio = () => {
    const [items, setItems] = useState(Menu) 
    
    const filterItem=(categoryItem) => {
        const updatedItems = Menu.filter((curElem)=>{
            return curElem.category === categoryItem
        })
        setItems(updatedItems)
    }
  return (
    <section className='work container section' id="portfolio">
        <h2 className="section_title">
            Portfolio
        </h2>
        <span className="section_subtitle">My Projects</span>

        <div className="work_filter">
            <span className="work_item" onClick={() => setItems(Menu)}>All</span>
            <span className="work_item" onClick={() => filterItem("Category1")}>HTML / CSS / JS</span>
            <span className="work_item" onClick={() => filterItem("Category2")}>ReactJS</span>
            <span className="work_item" onClick={() => filterItem("Category3")}>Fullstack</span>
        </div>

        <div className="work_container grid">
            {items.map((e)=>{
                const{id,image,title,category} = e;
                return(
                    <div className="work_card" key={id}>
                        <div className="work_thumbnail">
                            <img src={image} alt="" className='work_img'/>
                            <div className="work_mask"></div>
                        </div>

                        <span className="work_category">{category}</span>
                        <h3 className="work_title">{title}</h3>
                        <a href="" className="work_button"><i class="uil uil-link"></i></a>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Portfolio