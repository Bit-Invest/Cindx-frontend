import React from 'react';

const ROOT_CLASS = 'rating';

export const Rating = props => {
  const renderRating = () => {
    let circles = [];
    for (let i = 0; i < 5; i++) {
      circles.push(
        <div
          className={`${ROOT_CLASS}__${i < props.rating ? "full-circle" : "full-empty"}`}
          key={i}
        />
      );
    }
    return circles;
  }

  return (
    <div className={ROOT_CLASS}>
        {renderRating()}
    </div>
  );
};
