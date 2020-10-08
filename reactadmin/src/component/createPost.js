import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin';

const createPost = (props) => {
    return (
        <Create title="creating the post...." {...props}>
            <SimpleForm>
                <TextInput source="id" />
                <TextInput source="title" />
                <TextInput multiline source="comment" />
                <DateInput source="publishedAt" />
            </SimpleForm>
        </Create >
    );
};

export default createPost;
