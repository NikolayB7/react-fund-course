// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import React, { useEffect, useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

import "./styles/App.css"
import PostServise from "./API/PostServise";

function App() {

  const [posts, setPosts] = useState([
    { title: 'aasasas1', body: 'dffsf1', id: 1 },
    { title: 'dsdsfsf2', body: 'fff2', id: 2 },
    { title: 'fgfhlplp3', body: 'bvbvkgkg3', id: 3 }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [sortedPost, filter.query])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPost()
  }, [])

  async function fetchPost() {
    const posts = await PostServise.getAll()
    setPosts(posts)
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <PostForm create={createPost} />
      <hr></hr>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      ></PostFilter>
      <hr></hr>
      {sortedAndSearchedPost.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPost} title={'Post list'} />
        :
        <h3 style={{ textAlign: 'center' }}>Posts not found</h3>
      }

    </div>
  );
}

export default App;
