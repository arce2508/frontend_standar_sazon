import React from 'react'
import Layout from '../components/LayoutMaster'
import CardHeaderLogin from '../components/Login-header'
import FormLogin from '../components/Login-form'

export default function login () {
  return (
    <Layout>
      <div className='container-fluid section-login'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4 p-0'>
                <CardHeaderLogin />
              </div>
              <div className='col-12 col-md-8 p-0'>
                <FormLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
