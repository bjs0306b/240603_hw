import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

function convertStringToInt(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str.charCodeAt(i);
    }
    return sum;
}

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ];

    const toggle = () => {
        setModal(!modal);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index);
    };

    const handleDelete = () => {
        deleteTask(index);
    };

    const category = taskObj.Category || "";  // Default to empty string if undefined
    const colorIndex = convertStringToInt(category) % colors.length;

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{ backgroundColor: colors[colorIndex].primaryColor }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ backgroundColor: colors[colorIndex].secondaryColor, borderRadius: "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>
                <p className="mt-3"><strong>Category:</strong> {taskObj.Category}</p>
                <div style={{ position: "absolute", top: "160px", left: "160px" }}>
                    <button style={{ color: colors[colorIndex].primaryColor, cursor: "pointer" }} onClick={() => setModal(true)}>Edit</button>
                    <button style={{ color: colors[colorIndex].primaryColor, cursor: "pointer" }} onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};

export default Card;
