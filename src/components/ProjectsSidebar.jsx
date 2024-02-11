import Button from "./Button.jsx";

export default function ProjectsSidebar({projects, selectedProjectId, onAddProject, onProjectSelect}) {
    return (
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onAddProject}>+ Add projects</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    const currentProjectId = project.id;
                    let cssClass = "w-full text-left px-2 py-1 my-1 rounded-sm hover:text-stone-200 hover:bg-stone-800";

                    if (currentProjectId === selectedProjectId) {
                        cssClass += " bg-stone-800 text-stone-200"
                    } else {
                        cssClass += " text-stone-500"
                    }

                    return (
                        <li key={project.id}>
                            <button className={cssClass} onClick={() => onProjectSelect(project.id)}>{project.title}</button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}