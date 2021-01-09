import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
 
  <div className="columns" >
  {data.map((price) => (
      <div key={price.plan} className="card" style={{margin: '0 0.5rem'}} data-sal="fade" data-sal-duration="500">
      <div key={price.plan} className="card-content" style={{padding: '0 0rem'}}>
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold has-text-info">
            {price.plan}
          </h4>
          <p className="has-text-weight-semibold is-size-5 has-text-info">{price.description}</p>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-6">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
      </div>

    </div>
    ))}

  </div>


)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
