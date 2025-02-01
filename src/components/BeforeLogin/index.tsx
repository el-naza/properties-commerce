import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Welcome to the Admin Dashboard!</b>
        {' Only site admins can log in to manage this website.'}
      </p>
    </div>
  )
}

export default BeforeLogin
