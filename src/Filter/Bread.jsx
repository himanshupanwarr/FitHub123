import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function DefaultBreadcrumb() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item
        href="#"
        icon={HiHome}
      >
        <p>
          Home
        </p>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Filter
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}