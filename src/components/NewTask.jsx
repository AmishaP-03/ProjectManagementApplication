import { useState } from "react";
import Button from "./Button.jsx";

export default function NewTask({onAdd}) {
    /**
     * Here, we could have used ref instead of state but then we would be violating the idea of React being a declarative programming language.
     * This is because to reset the task input field, we would be setting an empty value to the input component explicitly
     */
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() !== '') {
            onAdd(enteredTask);
        }
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" value={enteredTask} onChange={handleChange}/>
            <Button onClick={handleClick}>Add task</Button>
        </div>
    );
}