'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const NavLink = ({children, href, className}) => {
    const pathName=usePathname();
    const isActive=pathName===href;
  return (
    <div>
      <Link href={href}
       className={`${className} ${isActive? 'text-amber-400 border-b delay-300' : ''}`}>
      {children}
      </Link>
    </div>
  );
};

export default NavLink;