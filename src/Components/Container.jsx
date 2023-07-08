import Cards from './Card'
import React from 'react'
import { game2, spades } from '../assets'
import { Hearts } from '../assets'
import { Solitare } from '../assets'

const Container = () => {
  return (
    <>
    <div className='container p-3 border-solid rounded-2xl  my-5 block sm:w-[90%] m-auto'>
    <h1 className='text-2xl p-5'>Trending Games</h1>
    <div className='grid grid-flow-col grid-cols-4 h-[max] space-x-3  '>
       <Cards title={'Solitare'} image={Solitare} link2={"https://cardgames.io/solitaire/"} link={'https://kadhaipaneer.github.io/CodeScript1/'}/>
       <Cards title={'Hearts'} image={Hearts} link2={"https://cardgames.io/hearts/" } link={'https://kadhaipaneer.github.io/codescript2/'}/>
       <Cards title={'Rummy'} image={game2}  link2={'https://cardgames.io/ginrummy/'} link={'https://kadhaipaneer.github.io/web4codescript4/'}/>
       <Cards title={'Spades'} image={spades} link2={'https://cardgames.io/ginrummy/'} link={'https://kadhaipaneer.github.io/web3codescript3/'}/>
      



    </div>


    </div>
    </>
  )
}

export default Container