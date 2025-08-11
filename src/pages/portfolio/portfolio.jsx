import React from 'react'
import { portfolio } from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './portfolio.css'

function Portfolio() {
  return (
    <div>
      <section className="portfolio section" id='portfolio'>
        <h2 className="section_title">My <span>Project</span></h2>

        <div className="portfolio_container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
