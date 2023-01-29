import { useState } from 'react';
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', description: '' })

    const addNewPost = () => {
        const newPost = { ...post, id: Math.random() }
        create(newPost)
        setPost({ title: '', description: '' })
    }


    return (
        <form>
            <Input
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Post name" />
            <Input
                value={post.description}
                onChange={e => setPost({ ...post, description: e.target.value })}
                type="text"
                placeholder="Post description" />
            <Button type="button" onClick={addNewPost}>
                Create post
            </Button>
        </form>
    );
};

export default PostForm;