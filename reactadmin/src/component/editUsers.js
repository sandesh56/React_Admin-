import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin';

const editUsers = (props) => {
    return (
        <Edit title="Editing the post...." {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
            </SimpleForm>
        </Edit >
    );
};

export default editUsers;
