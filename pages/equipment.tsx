import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function EquipmentPage() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="lg:w-[860px] mx-auto">
          <p className="title">需求配備</p>
          <div className="form-box text-gray-300 space-y-2 text-lg">
            <p>OS系統：10以上</p>
            <p>Android系統： 8.0以上</p>
            <p>CPU：雙核以上</p>
            <p> 記憶體：2G以上</p>
            <p>內存空間：1G以上</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EquipmentPage
