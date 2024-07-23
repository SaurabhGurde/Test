import React from 'react'

const Card = ({ title, description, img, price }) => {
  return (
    <div style={{ backgroundColor: "#cfcfd6" }} className='mb-2 col col-12 col-md-6 col-lg-3 col-sm-6'>
      <div className="card" style={{ width: "15rem", height: "500px", backgroundColor: "#cfcfd6" }}>
        <img style={{ height: "40%" }} className="card-img-top" src={img} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">${price}</a>
        </div>
      </div>
    </div>
  )
}

export default Card;