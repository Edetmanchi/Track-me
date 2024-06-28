import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BackButton({text, link}) {
  return (
    <button className="mb-3 rounded-lg border p-2 border-slate-600">

        <Link href={link} className="text-gray-500 hover:underline flex items-center gap-2 font-bold  ">
            <ArrowLeft size={20} />
            {text}
        </Link>     

    </button>
    
  )
}
