import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

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
    projects: [],

    tasks: []
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
      id: 'PROJECT-' + uuid().slice(0, 8) // 8 characters long unique Id
    };

    setProjectsState((currentState) => {
      return {
        ...currentState,
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

  function handleSelectProject(projectId) {
    setProjectsState((currentState) => {
      return {
        ...currentState,
        selectedProjectId: projectId
      };
    });
  }

  function handleProjectDeletion() {
    setProjectsState((currentState) => {
      return {
        ...currentState,
        selectedProjectId: undefined,
        projects: currentState.projects.filter((project) => project.id !== currentState.selectedProjectId)
      };
    });
  }

  function handleAddTask(enteredTask) {
    setProjectsState((currentState) => {
      const newTask = {
        text: enteredTask,
        projectId: currentState.selectedProjectId,
        id: 'TASK-' + uuid().slice(0, 8) // 8 characters long unique Id
      };

      return {
        ...currentState,
        tasks: [
          ...currentState.tasks,
          newTask
        ]
      };
    });
  }

  function handleDeleteTask() {

  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onSave={handleFinishAddingProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddingProject} />;
  } else {
    const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);
    content = <SelectedProject project={selectedProject} tasks={projectsState.tasks} onDelete={handleProjectDeletion} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projectsState.projects} selectedProjectId={projectsState.selectedProjectId} onAddProject={handleStartAddingProject} onProjectSelect={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
