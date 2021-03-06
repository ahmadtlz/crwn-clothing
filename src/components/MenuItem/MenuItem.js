import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './MenuItem.styles'
const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => {
  return (
  <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl} className='background-image'/>
    <ContentContainer>
      <ContentTitle >{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle >Shop now</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
  )
}


export default withRouter(MenuItem) 
