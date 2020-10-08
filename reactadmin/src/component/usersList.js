import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const usersList = (props) => {
    return (
        <List {...props} >
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <EditButton source="/users" />
                <DeleteButton source="/users" />
            </Datagrid>

        </List >
    );
};

export default usersList;
