import React, { Fragment } from 'react'
import Hero1 from '../../Hero/Hero1/Hero1'
import InfinityScroll from '../../InfinityScroll/InfinityScroll'

const Home = () => {
  return (
    <Fragment>
      <Hero1/>
      <InfinityScroll></InfinityScroll>
    </Fragment>
  )
}

export default Home