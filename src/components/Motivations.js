import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const MotivationGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
 {gridItems.map(item => (
      <p className="purposeItem" key={item} >
            {item.reason}
      </p>
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
