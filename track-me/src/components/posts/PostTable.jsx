import posts from "@/data/posts"
import { Table, TableBody, TableCell, TableCaption, TableHeader, TableRow, TableHead } from "../ui/table"
import Link from "next/link"
import {Edit} from 'lucide-react'

export const PostTable = ({tittle}) => {
  return (
    <div className="mt-1">
        <h3 className="text-xl mb-2 font-semibold">{tittle ? tittle : "Posts"}</h3>
        <Table>
            <TableCaption>A list of recent posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Tittle</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead className='hidden md:table-cell'>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post)=>(
                    <TableRow key={post.id}>
                        <TableCell>{post.title}</TableCell>
                        <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                        <TableCell className='hidden md:table-cell'>{post.date}</TableCell>
                        <Link href={`/posts/edit/${posts.id}`}>
                            <span className="items-center justify-center text-center">
                                <Edit className="text-slate-500"/>
                            </span>
                        </Link>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    </div>
  )
}
