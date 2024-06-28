import Image from "next/image";
import { DashboardCards} from "@/components/dashboard/DashboardCards";
import {Folder, User, MessageCircle, Newspaper} from 'lucide-react'
import { PostTable } from "@/components/posts/PostTable";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsCharts";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row gap-5 mb-5">
        <DashboardCards tittle='Posts' count={100} icon={<Newspaper className=' text-slate-600 mb-4' size={72}/>}/>
        <DashboardCards tittle='Categories' count={12} icon={<Folder className=' text-slate-600 mb-4' size={72}/>}/>
        <DashboardCards tittle='Users' count={750} icon={<User className=' text-slate-600 mb-4' size={72}/>}/>
        <DashboardCards tittle='Comments' count={132} icon={<MessageCircle className=' text-slate-600 mb-4' size={72}/>}/>
      </div>
      <AnalyticsChart/>
      <div>
        <PostTable tittle='Latest Posts' limit={5}/>
      </div>
    </>
  );
}
