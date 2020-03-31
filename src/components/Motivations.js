import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const MotivationGrid = ({ gridItems }) => (
  <div className="columns is-multiline">{gridItems.map(item => (
    <div className="seedBox is-parent column is-3" key={item.id}>
    <img className="seedImage" src={item.imageReason.image }/>
      <p className="reasonDescription" key={item} >
            {item.reason}
      </p>
      </div>
    ))}
  </div>
)

MotivationGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default MotivationGrid
