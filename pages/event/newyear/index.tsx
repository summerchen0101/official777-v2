import { GetStaticProps } from 'next'
import React from 'react'

function EventNewYear() {
  return <div></div>
}

export default EventNewYear

export const getStaticProps: GetStaticProps = async () => {
  return { redirect: { permanent: false, destination: 'newyear/1' } }
}
