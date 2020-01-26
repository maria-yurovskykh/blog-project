import React from 'react';

const BreadCrumbs = ({category}) => {
  return (
    <div className="breadcrumbs">
      <span>My blog</span>/<span>{category}</span>
    </div>
  )
}

export default BreadCrumbs;
