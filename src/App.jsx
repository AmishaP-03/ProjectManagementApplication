import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

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

  function handleAddProject() {
    setProjectsState((currentState) => {
      return {
        ...currentState,
        selectedProjectId: null
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
