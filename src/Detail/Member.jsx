'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Suggest from './Suggest'

export default function ShadowInputs() {
  return (
<div className='flex flex-row space-x-[300px]'>
    <div className=' w-[500px] sm:ml-[120px] h-[100%] flex flex-col space-y-3 p-12 my-[20px] bg-slate-500'>
    <form className="flex max-w-md flex-col gap-4 ">
      <div >
        <div className="mb-2 block ">
          <Label
            htmlFor="Name"
            value="Your Name"
          />
        </div>
        <TextInput
          id="email2"
          placeholder="Enter Your Name"
          required
          shadow
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="Phone Number"
            value="Your Number"
          />
        </div>
        <TextInput
          id="password1"
          placeholder="Enter Your Phone"
          required
          shadow
          type="text"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="Timings"
            value="Preferd Date"
          />
        </div>
        <TextInput
          id="timings"
          placeholder="Enter Timings"
          required
          shadow
          type="Timings"
          />
      </div>
      
      <Button type="submit">
        Book Now
      </Button>
    </form>
    </div>

    <Suggest/>

</div>
  )
}


