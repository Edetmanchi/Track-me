import Image from "next/image"
import Link from "next/link"
import Logo from '../img/Logo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export const Navbar = () => {
  return (
    <div className="bg-slate-70 dark:bg-dark-700 border-b-2 py-4 px-5 flex justify-between text-white">
        <Link href='/'> 
        <Image src={Logo} alt="my-FOOD-logo" width={70} />
        </Link>
        <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className='text-black'>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/Profile'>
                    Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/Billings'>
                    Billing
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href='/auth'>
                    Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}
