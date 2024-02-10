import Button from "./Button";

export default function ProjectsSidebar() {
    return (
        <aside className="w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button>+ Add projects</Button>
            </div>
            <ul></ul>
        </aside>
    );
}