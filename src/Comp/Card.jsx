import React from 'react'
import { Card } from 'flowbite-react'
// import { th } from '../Asset'
import { Button } from 'flowbite-react'

const Cards = (props) => {
  return (
    <div className="sm:w-[350px] h-[350px]  p-3">
    <Card imgSrc={props.image1} >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <Button color='warning'>Explore </Button>
    </Card>
  </div>
  )
}

export default Cards