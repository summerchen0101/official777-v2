import Layout from '@/components/layout/Layout'
import PageBanner from '@/components/layout/PageBanner'
import React from 'react'

function RechargeRec() {
  return (
    <Layout>
      <PageBanner />
      <section>
        <div className="w-[860px] mx-auto py-10">
          <h1 className="text-3xl mb-6 text-white text-center tracking-widest">
            儲值紀錄
          </h1>
          <table className="w-full text-gray-500 shadow">
            <thead>
              <tr>
                <th className="w-1/3">平台</th>
                <th className="w-1/3">金額</th>
                <th className="w-1/3">日期</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((t, i) => (
                <tr key={i}>
                  <td>Google Play</td>
                  <td>$1,200</td>
                  <td>2021-09-01 11:22:00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}

export default RechargeRec
