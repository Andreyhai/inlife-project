import React from 'react';

const Profile = () => {

    return (
        <div className='text-center my-5'>
            <div className='m-2 text-2xl'>emailID: {localStorage.getItem("mail")}</div>
            <div className='m-2 text-2xl'>Firstname: {localStorage.getItem("firstName")}</div>
            <div className='m-2 text-2xl'>LastName: {localStorage.getItem("lastName")}</div>
            <div className='m-2 text-2xl'>Password: {localStorage.getItem("password")}</div>
        </div>
    );
};

export default Profile;