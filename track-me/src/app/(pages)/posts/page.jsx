import { PostTable } from "@/components/posts/PostTable"
import BackButton from "@/components/BackButton"
import PostPagination from "@/components/posts/PostPagination"

export default function PostsPage() {
  return (
    <div>
      <BackButton link='./' text='Go Back' />
      <PostTable/>
      <PostPagination/>

    </div>
  )
}
