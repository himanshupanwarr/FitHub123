
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
export default function ControlButtonText() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center text-center">
      <Pagination
        currentPage={1}
        layout="pagination"
        nextLabel="Go forward"
        onPageChange={page=>{setCurrentPage(page)}}
        previousLabel="Go back"
        showIcons
        totalPages={1000}
      />
    </div>
  )
}