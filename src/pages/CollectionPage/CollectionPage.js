import React from 'react'
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './CollectionPage.styles'
const CollectionPage = ({collection}) => {
  
  if(collection===null){
    return(
      <div>
       <p>wait</p>
     </div>
   )
  }
  const {title,items}=collection
  return (
    <CollectionPageContainer>
      <CollectionTitle >{title}</CollectionTitle>
      <CollectionItemsContainer>
        {
          items.map(item=>(
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
}

const mapStateToProps=(state,ownProps)=>({
  collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
