import React from 'react';
import Task from './task';
import '../../css/list.css'

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            listArray: [
                {
                    title: 'Learn Vue JS',
                    id: 0
                },

                {
                    title: 'Learn React JS',
                    id: 1
                },

                {
                    title: 'Learn Angular JS',
                    id: 2
                }
            ],
            isAddSectionOpened: false,
            textarea: ''
        };
        this.toggleAddSection = this.toggleAddSection.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        let localArr = this.state.listArray;
        localArr.push({
            title: this.state.textarea,
            id: localArr.length
        });
        this.setState({
            listArray: localArr,
            textarea: ''
        })
    }

    handleTextArea(e) {
        console.log('fdsfdsf')
        this.setState({
            textarea: e.target.value
        })
    }

    toggleAddSection() {
        this.setState({
            isAddSectionOpened: !this.state.isAddSectionOpened
        })
    }

    render() {
        return (
            <div className={'list'}>
                {this.state.listArray.map((task, index) => { {/*метод map возращает новый массив и трансфармирует эелементы*/}
                    return <div key={index}>
                               <Task task={task}/>
                           </div>
                })}
                {this.state.isAddSectionOpened ?
                <div className={'add-card-opened'}>
                    <textarea value={this.state.textarea} onChange={this.handleTextArea}/>
                    <button onClick={this.addTask}>Add</button>
                    <button onClick={this.toggleAddSection}>X</button>
                </div> : <div className='add-card' onClick={this.toggleAddSection}>Add Card +</div> }
            </div>
        )
    }
}

export default List;