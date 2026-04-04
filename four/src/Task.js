function Task(props){
    let {task} = props;

    return (
        <div className="task">
            {task.text}
        </div>
    )
}

export default Task;