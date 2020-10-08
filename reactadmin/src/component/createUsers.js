import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin';

const createUsers = (props) => {
    return (
        <Create title="creating the post...." {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Create >
    );
};

export default createUsers;
