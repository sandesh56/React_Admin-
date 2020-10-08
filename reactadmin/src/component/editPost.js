import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

const editPost = (props) => {
    return (
        <Edit title="Editing the post...." {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="comment" />
                <DateInput disabled source="publishedAt" />
                <DateInput source="updatedAt" />
            </SimpleForm>
        </Edit >
    );
};

export default editPost;
