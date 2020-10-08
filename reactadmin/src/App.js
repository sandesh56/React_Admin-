import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './component/postList';
import createPost from './component/createPost.js';
import editPost from './component/editPost';
import usersList from './component/usersList';
import createUsers from './component/createUsers.js';
import editUsers from './component/editUsers';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')} >
      <Resource
        name="posts"
        list={PostList}
        create={createPost}
        edit={editPost}
      />
      <Resource
        name="users"
        list={usersList}
        create={createUsers}
        edit={editUsers}
      />
    </Admin>
  );
}

export default App;
