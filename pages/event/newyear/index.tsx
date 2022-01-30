import { GetServerSideProps, GetStaticProps } from 'next'
import React from 'react'

function EventNewYear() {
  return <div></div>
}

export default EventNewYear

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: { permanent: false, destination: '/event/newyear/1' },
  }
}
