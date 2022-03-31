import React, {useState, useEffect} from 'react';
import axios from 'axios';


const PostForm = (props) => {
    let loggedInUser = props.loggedInUser;
    let [Title,setTitle] = useState("");
    let [Message,setMessage] = useState("");
    let [ImgUrl,setImgUrl] = useState("");
    let [User_id,setUser_id] = useState("");
    let [errorHandler, setErrorHandler] = useState({})


    useEffect(() => {
        setUser_id(loggedInUser._id);
    }, [setUser_id, loggedInUser._id])

    const createPost = (e)=>{
        e.preventDefault();
        let info = {Title, Message, ImgUrl, User_id};
        axios.post("http://localhost:8000/api/posts/new",info)
            .then( response => {
                console.log(response);
                props.setSubmitHandler(!props.submitHandler);
                if(response.data.error) {setErrorHandler(response.data.error.errors); return};
                setTitle("");
                setMessage("");
                setImgUrl("");
                setErrorHandler({});
            })
            .catch( error => console.log(error));
    }

    return (
        <div className='d-flex justify-content-center'>
            <form onSubmit={createPost}>
                <div className="form-group">
                    <label htmlFor="">Post Title</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={Title}/>
                    <p className="text-danger">{errorHandler.Title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Post Message</label>
                    <input type="text" className="form-control" onChange={(e)=>{setMessage(e.target.value)}} value={Message}/>
                    <p className="text-danger">{errorHandler.Message?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Add ImgUrl</label>
                    <input type="text" className="form-control" onChange={(e)=>{setImgUrl(e.target.value)}} value={ImgUrl}/>
                    <p className="text-danger">{errorHandler.ImgUrl?.message}</p>
                </div>
                <input type="submit" className='btn btn-success' value="Add Post" />
            </form>
        </div>
    );
}
export default PostForm;
