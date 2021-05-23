import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
//initialise the context with capital G
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  //call it here with usecontext 
  const githubContext = useContext(GithubContext);
  
  const { loading, users } = githubContext;

  
  if (loading)
  {
    return <Spinner/>
  }
  else {

    return (
      <div style={userStyle}>
            {users.map(user => (
              <UserItem key={user.id} user={user}/>
            ))}
          
        </div>
        );
  }
 
  }


//refer to "Lists & Passing State With Props" video from 6th minute onwards  
// Users.propTypes = {
//   users: PropTypes.array.isRequired,
//   loading:PropTypes.bool.isRequired,
// }
const userStyle = {

  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'

}

export default Users;
