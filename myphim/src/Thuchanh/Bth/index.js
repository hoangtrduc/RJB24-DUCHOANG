import React from 'react'



export default function Index({myUser}) {
  return (
      <>
        {
          myUser.map((user, index) => (<li key={index} className='col-6'>
            <div className="card" style={{ width: '18rem' }}>
              <img className='img' src={user.avatar} />
              <div className="card-body">
                <p style={{ color: user.id % 2 === 0 ? "red" : "blue" }}>{user.id}</p>
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.introduce}</p>
                <a href={user.link} className="btn btn-primary">Click</a>
              </div>
            </div>
          </li>))
        }
      </>
  )
}
