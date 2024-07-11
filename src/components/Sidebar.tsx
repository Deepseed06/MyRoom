'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className='sticky left-0 top-0 h-screen flex 
    justify-between bg-dark-1 text-white pt-26 p-6 
    flex-col w-fit max-sm:hidden lg:w-[264px] '>
        <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((link) => {
                const isActive = pathname===link.route || pathname.startsWith(`${link.route}/`);
                
                return(
                    <Link href={link.route}
                    key={link.label}
                    className={cn('flex gap-2 items-center p-4 rounded-lg justify-start',{'bg-blue-1' : isActive})}
                    >
                    <Image 
                    src={link.imgUrl}
                    alt={link.label}
                    width={24}
                    height={24}
                    />
                    <p className='text-lg font-semibold max-lg:hidden'>
                    {link.label}
                    </p>
                    </Link>
                )
            })}
        </div>
        
    </section>
  )
}

export default Sidebar