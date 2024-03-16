import React from 'react'

// Component
import HeaderComponent from './component/aHeaderComponent';
import FooterComponent from './component/bFooterComponent';
import brand from '@/love/dFunction/gBrand';


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  // JSX
  return (
    <React.Fragment>
      <HeaderComponent Redux={Redux} />
      { children }
      <FooterComponent Redux={Redux} />
    </React.Fragment>
  )
}

export default GlobalComponent