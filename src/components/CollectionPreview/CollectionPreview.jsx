import React from 'react'

import CollectionItem from '../CollectionItem/CollectionItem'

import './CollectionPreview.styles.scss'

const CollectionPreview = ({title,items}) => {
  
  const filterList=items.filter((_,idx)=>idx<4)
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          filterList.map((item)=>(
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview
