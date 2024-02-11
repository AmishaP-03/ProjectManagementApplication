import Button from "./Button.jsx";
import Tasks from "./Tasks.jsx";

export default function SelectedProject({project, tasks, onDelete, onAddTask, onDeleteTask}) {
    console.log(tasks);
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button onClick={onDelete}>Delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{new Date(project.dueDate).toLocaleDateString()}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p> {/* whitespace-pre-wrap -> makes sure that the whitespaces are retained */}
            </header>
            <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
        </div>
    );
}