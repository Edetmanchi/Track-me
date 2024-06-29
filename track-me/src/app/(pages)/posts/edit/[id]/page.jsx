"use client"
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import BackButton from "@/components/BackButton"
import {
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
  FormField
} from '@/components/ui/form'
import { Input} from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required'
  }),
  body: z.string().min(1, {
    message: 'Body is required'
  }),
  author: z.string().min(1, {
    message: 'Author is required'
  }),
  date: z.string().min(1, {
    message: 'Date is required'
  }),


})

export default function PostEditPage({params}) {
  const post = posts.find((post) =>post.id === params.id)
  console.log(post)
  return (
    <div>
      <BackButton text='Back to Post' link='/posts'/>
      <span>this is the edit button for Post</span>
    </div>
  )
}
