import "../styles/Post.css"
const PostItem = (props) => {


    let { title, body } = props.post

    return (
        <div className='post'>
            <div className="post__content">
                <div className="title">{props.id}.<b>{title}</b></div>
                <div className="description">{body}</div>
            </div>
            <div className="post__btns">
                <button onClick={() => props.remove(props.post)}>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;