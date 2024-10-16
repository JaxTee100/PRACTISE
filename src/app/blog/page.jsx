import PostCard from '@/components/postCard/postCard'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='grid grid-cols-2 gap-[20px]  p-6'>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default BlogPage