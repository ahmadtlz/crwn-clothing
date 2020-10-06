import React from 'react'
import {connect} from 'react-redux';

import {createStructuredSelector}from 'reselect'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'

import {CollectionsOverviewContainer} from './CollectionsOverview.styles'

const CollectionsOverview = ({collections}) => {
  return (
    <CollectionsOverviewContainer >
       {collections.map(({id,...otherCollectionProps})=>{
            return(
              <CollectionPreview key={id} {...otherCollectionProps}/>
            )
          })
        }
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps=createStructuredSelector({
  collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
