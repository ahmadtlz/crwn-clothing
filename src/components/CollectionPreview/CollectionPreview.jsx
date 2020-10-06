import React from 'react'

import CollectionItem from '../CollectionItem/CollectionItem'

import {TitleContainer,CollectionPreviewContainer,PreviewContainer} from './CollectionPreview.styles'



const CollectionPreview = ({title,items}) => {
  
  const filterList=items.filter((_,idx)=>idx<4)
  return (
    <CollectionPreviewContainer>
      <TitleContainer >{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {
          filterList.map((item)=>(
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview
