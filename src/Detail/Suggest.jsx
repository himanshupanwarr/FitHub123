import { Label, Textarea } from 'flowbite-react';

export default function TextareaElement() {
  return (
    <div
      className="w-[400px] mt-[40px] p-[20px]"
      id="textarea"
    >
      <div className="mb-2 block ">
        <Label
          htmlFor="comment"
          value="Your Prefrence"
          className='text-2xl'
        />
      </div>
      <Textarea
        id="comment"
        className='w-[500px] h-[200px] p-[15px]'
        placeholder="Leave a comment..."
        required
        rows={4}
      />
    </div>
  )
}
