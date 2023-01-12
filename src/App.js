// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/Counter";
// import PostItem from "./components/PostItem";
import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Select from "./components/US/select/Select";

import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    { title: 'aasasas1', description: 'dffsf1', id: 1 },
    { title: 'dsdsfsf2', description: 'fff2', id: 2 },
    { title: 'fgfhlplp3', description: 'bvbvkgkg3', id: 3 }
  ])

const [selecttedSort, setSelecttedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPost =(sort)=>{
    setSelecttedSort(sort)
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <PostForm create={createPost} />
      <hr></hr>
      <Select
        value={selecttedSort}
        onChange={sortPost}
        defaultValue={'Sorting'}
        options={[
          { value: 'title', name: 'Sort name' },
          { value: 'description', name: 'Sort description' }
        ]}
      ></Select>
      <hr></hr>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title={'Post list'} />
        :
        <h3 style={{ textAlign: 'center' }}>Posts not found</h3>
      }

    </div>
  );
}

export default App;
