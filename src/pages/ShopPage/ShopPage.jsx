import React ,{useEffect}from 'react';
import {Route} from 'react-router-dom'
import {connect}from 'react-redux'

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer'
import CollectionsPageContainer from '../CollectionPage/CollectionsPageContainer'

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const ShopPage=({match,fetchCollectionsStart})=>{
  useEffect(()=>{
    fetchCollectionsStart()
  },[fetchCollectionsStart])

  return( 
    <div className="shop-page"> 
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/> 
      <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer}/>
    </div>
    )

 }


const mapDispatchTopProps=dispatch=>({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
})



export default connect(null,mapDispatchTopProps)(ShopPage);
