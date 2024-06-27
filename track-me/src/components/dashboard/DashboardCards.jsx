import { Card,CardContent} from '../ui/card'
import {Newspaper} from 'lucide-react'
import {LucideIcon} from 'lucide-react'



export const DashboardCards = ({tittle, count, icon}) => {
  return (
    <Card className='bg-slate-100 dark:bg-slate-800 p-1 pb-4'>
        <CardContent className='p-4'>
            <h3 className='text-center text-2xl font-bold text-slate-500 dark:text-slate-200 mb-2'>{tittle}</h3>
            <div className='flex gap-4 items-center justify-center p1'>
                {icon}
                <h3 className='text-5xl text-slate-600 dark:text-slate-200 font-semibold'>{count}</h3>
            </div>
        </CardContent>
    </Card>
    
  )
}
