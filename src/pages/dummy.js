import React from 'react'
import Layout from '../components/layout'

function dummy() {
  return (
    <Layout showBanner={true} fixFooter={true} pageTitle={"About"}>
        <p className='dark:text-slate-300'>Should eventually redirect to portfolio page</p>
    </Layout>
  )
}

export default dummy