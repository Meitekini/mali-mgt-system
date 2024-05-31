import React from 'react'
import { Input } from './ui/input'

const Search = () => {
  return (
    <div className='flex max-w-full'>
        <Input type='text' placeholder='Search everything' className='w-full'/>
    </div>
  )
}

export default Search