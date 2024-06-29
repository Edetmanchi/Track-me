import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import Link from "next/link";
  import {LayoutDashboard, Newspaper, Folder, CreditCard, Settings, User} from 'lucide-react'



export const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none h-screen'>
        <CommandInput placeholder="Type a command or search..." />
            <CommandList className=''>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                <CommandItem>
                    <LayoutDashboard className="pr-2 h-6 w-6"/> 
                    <Link href='/Dashboard'>Dashboard</Link>
                </CommandItem>
                <CommandItem>
                    <Newspaper className="pr-2 h-6 w-6"/> 
                    <Link href='/posts'>Post</Link>
                </CommandItem>
                <CommandItem>
                    <Folder className="pr-2 h-6 w-6"/> 
                    <Link href='/'>Categories</Link>
                </CommandItem>  
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                <CommandItem>
                    <User className="mr-2 h-6 w-4"/> 
                    <Link href='/'>Profile</Link>
                    <CommandShortcut>p</CommandShortcut>
                </CommandItem>
                <CommandItem>
                    <CreditCard className="mr-2 h-6 w-4"/> 
                    <Link href='/'>Billing</Link>
                    <CommandShortcut>B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                    <Settings className="mr-2 h-6 w-4"/> 
                    <Link href='/'>Settings</Link>
                    <CommandShortcut>S</CommandShortcut>
                </CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>

  )
}
