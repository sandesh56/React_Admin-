import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

const postList = (props) => {
    return (
        <List {...props} >
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" />
                <DateField source="publishedAt" />
                <DateField source="updatedAt" />
                <EditButton source="/post" />
                <DeleteButton source="/post" />
            </Datagrid>

        </List >
    );
};

export default postList;
