import React from 'react'


//CardImg,userName,userAddress

const UserProfile = ({cardImg,userName,useAddress}) => {
    return (
        <>
            <div>
                <h6>user profile detais</h6>
      <img alt='profile' src={cardImg}/>
      <h1>{userName}</h1>
      <p>{useAddress}</p>
    </div>
        </>
    )
}

export default UserProfile
