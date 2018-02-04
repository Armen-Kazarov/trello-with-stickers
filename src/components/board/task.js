import React from 'react';
import '../../css/task.css';

class Task extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className={'task'}>{this.props.task.title && this.props.task.title}</div>
        )
    }
}

export default Task;