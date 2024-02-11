import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    /**
     * Id of the currently selected project (from a list of multiple existing projects)
     * null -> want to add a new project
     * undefined -> not creating a new project and also not selecting any existing project
     */
    selectedProjectId: undefined, 

    /**
     * List of projects added by the user
     */
    projects: []
  });

  function handleStartAddingProject() {
    setProjectsState((currentState) => {
      return {
        ...currentState,
        selectedProjectId: null
      };
    });
  }

  function handleFinishAddingProject(projectData) {
    const newProject = {
      ...projectData,
      id: uuid().slice(0, 8) // 8 characters long unique Id
    };

    setProjectsState((currentState) => {
      return {
        selectedProjectId: undefined, // So that we go back to the fallback screen once we are done adding a new project
        projects: [
          ...currentState.projects,
          newProject
        ]
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((currentState) => {
      return {
        ...currentState,
        selectedProjectId: undefined
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleFinishAddingProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddingProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleStartAddingProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
