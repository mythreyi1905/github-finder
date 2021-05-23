import React, {useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
//Bring in the context
import GithubContext from '../../context/github/githubContext';

//searchUsers, showClear, clearUsers ,setAlert are the props that are being passed to this functionaly component, they are destructured and getting passed. 
const Search = () => {
    //Initialize the context 
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);


    const [text, setText] = useState('');


  const  onSubmit = (e) => {
        e.preventDefault();
        if (text === '')
        {
            alertContext.setAlert(' Please enter something', 'light');
        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }
        
    }

    const onChange = (e) => setText(e.target.value);
        
   
        
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {githubContext.users.length > 0 &&
                    (
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}> Clear </button>)}
        
            </div>
        )
    
}


export default Search
