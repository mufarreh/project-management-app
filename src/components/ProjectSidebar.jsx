import Button from "./Button";

export default function ProjectSidebar({
  onAddProject,
  projects,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((innerObject) => (
          <li key={innerObject.id}>
            <button
              onClick={() => onSelectProject(innerObject.id)}
              className=" w-full text-left px-2 py-2 mt-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-sm"
            >
              {innerObject.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
