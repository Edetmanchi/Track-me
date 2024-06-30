"use client"
import * as z from 'zod'
import { useForm , useFormContext} from 'react-hook-form'
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
import posts from '@/data/posts'
import { resolve } from 'styled-jsx/css'



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
  console.log(post);

  // const form = useForm<z.infer<typeof formSchema>>({
  const form = useForm  ({
    resolver: zodResolver(formSchema),
    defaultvalues: {
      title: post?.tittle || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "", 
    }
  }) 

  const handleSubmit = (data)=>{
    console.log(date)
  }




  return (
    <>
      <BackButton text='Back to Post' link='/posts'/>
      <h2 className="text-2xl mb-3">Edit posts</h2>
        <form onSubmit={handleSubmit} action="submit" className="space-y-8">
          <FormField
            control={form.control}
            name="tittle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='uppercase text-s font-bold text-zinc-500 dark:text-secondary/70'>tittle</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
    </>
  )
}
