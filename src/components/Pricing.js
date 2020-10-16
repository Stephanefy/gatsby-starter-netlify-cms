import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
 
  <div className="columns">
    {data.map((price) => (
      <div className="card" style={{margin: '0 0.5rem'}}>
      <div className="card-content" style={{padding: '0 0rem'}}>
      <div key={price.plan} className="column block mx-4">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {price.plan}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            {price.price}
          </h2>
          <p className="has-text-weight-semibold">{price.description}</p>
          <ul>
            {price.items.map((item) => (
              <li key={item} className="is-size-5">
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
