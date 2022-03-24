import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {
    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [quote,setQuote] = useState("");
    let [errorHandler, setErrorHandler] = useState({})
    const history = useHistory();

    const createAuthor = (e)=>{
        e.preventDefault();
        let info = {firstName, lastName, quote};
        axios.post("http://localhost:8000/api/authors/new",info)
            .then( response => {
                console.log(response);
                setFirstName("");
                setLastName("");
                setQuote("");
                props.setSubmitHandler(!props.submitHandler);
                if(response.data.error) {setErrorHandler(response.data.error.errors); return};
                setErrorHandler({});
                history.push("/");
            })
            .catch( error => console.log(error));
    }

    return (
        <div>
            <Link to="/" className='btn btn-success m-2'>
                Home
            </Link>
            <h1>Add an author:</h1>
            <form onSubmit={createAuthor}>
                <div className="form-group">
                    <label htmlFor="">firstName:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
                    <p className="text-danger">{errorHandler.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">lastName:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
                    <p className="text-danger">{errorHandler.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">quote:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setQuote(e.target.value)}} value={quote}/>
                    <p className="text-danger">{errorHandler.quote?.message}</p>
                </div>
                <Link to="/" className='btn btn-danger m-2'>
                Cancel
                </Link>
                <input type="submit" className='btn btn-success m-3' value="Create a new Author" />
            </form>
        </div>
    );
}
export default AuthorForm;