import React from 'react'
import './Blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'
import Article from '../../components/article/Article'
import Section4 from '../../components/section4/Section4'
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Explore the future, <br />KINSS Brings The Future With VR</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Explore the future of Virtual Reality with KINSS Technology?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Explore the future of Virtual Reality with KINSS Technology?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Explore the future of Virtual Reality with KINSS Technology?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Explore the future of Virtual Reality with KINSS Technology?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Explore the future of Virtual Reality with KINSS Technology?" />
      </div>
    </div>
    <Section4/>
  </div>
  )
}

export default Blog
