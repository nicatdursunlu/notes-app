import React from 'react';

import { NoteCreation } from "../../components";

export const Create = ({ history: { push } }) => {

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#494d9e" }}>Fill Data</h1>
            <NoteCreation push={push} />
        </div>
    );
};