import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Posts = (props) => {
    const [PostList, setPostList] = useState([]);
    let submitHandler = props.submitHandler;
    let setSubmitHandler = props.setSubmitHandler;

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then(response => {
                console.log(response);
                setPostList(response.data.results);
            })
            .catch(error => console.log(error));
    }, [submitHandler])

    const deletePost = (id)=>{
        let result = window.confirm("Want to delete?");
        if (result) {
        axios.delete(`http://localhost:8000/api/posts/delete/${id}`)
            .then(response=>{
                console.log(response);
                setSubmitHandler(!submitHandler);
            })
            .catch(error=>console.log(error));
        }
    }

    PostList.sort((a, b) => {
        let fa = a.createdAt.toLowerCase();
        let fb = b.createdAt.toLowerCase();
        if (fa > fb) return -1;
        if (fa < fb) return 1;
        return 0;
    });

    return (
        <div>
            {
                PostList.map((PostObj)=>{
                    return (
                        <div className='d-flex justify-content-center postSize' key = {PostObj._id}>
                        <div className="card bg-dark text-light col m-3 postSize">
                            <div className="card-body">
                                <h3 className="card-title bg-dark text-light">
                                        {PostObj.Title} <span className='afterText'>Posted by</span> {PostObj.User_id?.firstName}
                                </h3>
                                <p className="card-text bg-dark text-light"> 
                                    {PostObj.ImgUrl!==""?
                                        <img src={PostObj.ImgUrl} alt="" className='w-50'></img>
                                        :null
                                    }
                                </p>
                                <p className="card-text bg-dark text-light">
                                    {PostObj.Message}
                                </p>
                                <button onClick = {()=>deletePost(PostObj._id)} className='btn btn-danger m-3'>
                                    Delete {PostObj.title}
                                </button>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Posts;