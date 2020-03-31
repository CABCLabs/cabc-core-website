import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const MotivationGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
  <ol class="custom-counter">{gridItems.map(item => (
      <li key={item} >
            {item.reason}
      </li>
    ))}
    </ol>
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