import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 mx-auto object-contain"
        src={noProjectImage}
        alt="An Empty task list"
      ></img>
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      <p className="mt-8">
        <Button>Create a New Project</Button>
      </p>
    </div>
  );
}
