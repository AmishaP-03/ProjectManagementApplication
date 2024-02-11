import Button from "./Button";

export default function ProjectsSidebar({onAddProject, projects}) {
    return (
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onAddProject}>+ Add projects</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 my-1 rounded-sm text-stone-500 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
                </li>)}
            </ul>
        </aside>
    );
}