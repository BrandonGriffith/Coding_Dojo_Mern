import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Authors = (props) => {
    const [authorList, setAuthorList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response);
                setAuthorList(response.data.results);
            })
            .catch(error => console.log(error));
    }, [props.submitHandler])


    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(response => {
                console.log(response);
                history.push("/");
                props.setSubmitHandler(!props.submitHandler);
            })
            .catch(error => console.log(error));
    }


    return (
        <div>
            <Link to="/new" className='btn btn-success m-2'>
                Add a new author
            </Link>
            {
                authorList.map((authorObj) => {
                    return (
                        <div key = {authorObj._id}>
                            <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Authors</th>
                                <th scope="col">Authors Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><h1>
                                    <Link to={`/author/${authorObj._id}`}>{authorObj.firstName} {authorObj.lastName}
                                    </Link>
                                    </h1>
                                </td>
                                <td>
                                    <Link to={`/edit/${authorObj._id}`} className='btn btn-info m-1'>
                                    Edit
                                    </Link>
                                    <button onClick = {()=>deleteAuthor(authorObj._id)} className='btn btn-danger m-1'>
                                    Delete
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Authors;