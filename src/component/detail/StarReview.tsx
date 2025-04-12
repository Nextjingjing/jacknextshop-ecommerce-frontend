import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons/faStarHalfStroke";

interface ComponentProp {
  rating: number
}

const StarReview: React.FC<ComponentProp> = ({ rating }) => {
  const stars = [];

  while (rating > 0) {
    if (rating - 1 >= 0) {
      stars.push(<FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#FFD43B", }} />)
      rating--
    }
    else if (rating - 0.5 > 0) {
      stars.push(<FontAwesomeIcon icon={faStar} size="sm" style={{ color: "#FFD43B", }} />)
      rating -= 0.5
    }
    else if (rating - 0.5 == 0) {
      stars.push(<FontAwesomeIcon icon={faStarHalfStroke} size="sm" style={{ color: "#FFD43B", }} />)
      rating -= 0.5
    }
    else {
      break
    }
  }

  return (
    <div>
      {stars}
    </div>
  )
}

export default StarReview