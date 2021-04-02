import React from 'react'
import Layout from '../components/LayoutMaster'
import CardHeader from '../components/Create-header.js'
import Form from '../components/Create-form.js'

export default function create () {
  return (
    <Layout>
      <div className='container-fluid create-background'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4 p-0'>
                <CardHeader />
              </div>
              <div className='col-12 col-md-8 p-0'>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
