import { GetStaticProps } from 'next'
import React from 'react'

function EventNewYear() {
  return <div></div>
}

export default EventNewYear

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { redirect: { permanent: false, destination: 'newyear/1' } }, // will be passed to the page component as props
  }
}
