import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectIsCollectionsLoaded}from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionsPage from './CollectionPage';

const mapStateToProps=createStructuredSelector({
  isLoading:state=>!selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer=compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsPage);

export default CollectionsPageContainer