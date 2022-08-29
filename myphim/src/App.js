import React from 'react';
import './App.css';


const myUser = [
    {
        name: 'Luffy',
        avatar: require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
    {
        name: 'Luffy 1',
        avatar: require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
    {
        name: 'Luffy 2',
        avatar:require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
    {
        name: 'Luffy 3',
        avatar: require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
    {
        name: 'Luffy 4 ',
        avatar: require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
    {
        name: 'Luffy 5',
        avatar: require('./image/zoro.jpg'),
        introduce: 'Zoro is a muscular man of average height with lightly tanned skin. He always carries his three swords along with him, bundled up with a green haramaki over his right hip.',
        link: 'http://truyenqqpro.com/truyen-tranh/dao-hai-tac-128',     
    },
];

function app() {
    return (
        <div className="app" >
            <ul className='content row'>
                {
                    myUser.map((user,index) =>(<li key={index} className='col-6'>
                    <div className="card" style={{width: '18rem'}}>
                        <img className='img' src={user.avatar}/>
                        <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.introduce}</p>
                        <a href={user.link} className="btn btn-primary">More info</a>
                    </div>
                    </div>
                </li>))
                }
            </ul>
        </div>
    );
}

export default app;