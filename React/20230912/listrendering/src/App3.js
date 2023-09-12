import React, {useState} from 'react'

function UserItem({user}) {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <li onClick={() => setShowInfo(!showInfo)}>
      {/* 익명함수에 감싸서 함수 자체를 넘겨주는 모양으로 => setShowInfo(!showInfo)만 있으면 함수를 보내는 게 아니라 그 결과를 보내게 됨 */}
      {user.name}
      {showInfo ? <div>
          <div>email : {user.email}</div>
          <div>job : {user.job}</div>
      </div> : null}
    </li>
  )
}

function UserList({users}) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />
      })}
    </ul>
  );
}

export default function App3() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
    { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
]

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users}/>

    </div>
  )
}
