import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserByEmail } from '../Redux/actions';
import { useLocation } from 'react-router-dom';
const Profile = ({  user, loading, error, fetchUserByEmail }) => {

  const location = useLocation();
  const { id: username } = location.state;
  useEffect(() => {

    
    console.log('loc:',location.state.id);
  
  
    fetchUserByEmail(location.state.id);
  }, [fetchUserByEmail, location.state.id]);
  console.log('user:', user);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h5>{user.username}</h5>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { user } = state.user || {}; 

  return {
    user: user || {}, 
    loading: state.user ? state.user.loading : false,
    error: state.user ? state.user.error : null
  };
};



const mapDispatchToProps = {
  fetchUserByEmail

};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
