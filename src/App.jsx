import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleClick() {
    setProjectState((prevProject) => {
      return { ...prevProject, selectedProjectId: null };
    });
  }

  function handleAddProject(projectData) {
    if (
      projectData.title.trim() === undefined ||
      projectData.title.trim() === ""
    ) {
      return alert("Enter Valid Data");
    }
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects],
      };
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancel}></NewProject>
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleClick={handleClick}></NoProjectSelected>;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectState.projects}
        handleClick={handleClick}
      ></ProjectSidebar>
      <div className="w-2/3">{content}</div>
    </main>
  );
}

export default App;
