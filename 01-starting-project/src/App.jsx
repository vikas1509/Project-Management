import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SlectedProject from "./components/SlectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[],
tasks:[],
  });

console.log(projectState,"project State")

function handleAddTask(text){
  console.log(text,"in handleAddTask function")
  setProjectState((prevState) =>{
     const taskId = Math.random();

    const newTask ={
    text:text,
    projectId:prevState.selectedProjectId,
      id:taskId,
    };

    return {
...prevState,tasks:[newTask, ...prevState.tasks]
    }
  })
}
function handleDeleteTask(id){
  setProjectState((prevState)=>{
    return {
      ...prevState,
      selectedProjectId:undefined,
      tasks:prevState.tasks.filter((task)=>task.id !== id)
    }
  })
}


  function handleDeleteProject(){
    setProjectState((prevState)=>{
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=>project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((prevState)=>{
    return {
      ...prevState,
      selectedProjectId:id,
    }
    })
  }

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectId:null,
      }
    });
  }

  function handleAddProject (projectData){
    setProjectState((prevState) =>{
     
      const newProject ={
        ...projectData,
        id:Math.random()
      };

      return {
...prevState,selectedProjectId:undefined ,projects:[...prevState.projects,newProject]
      }
    })
  }


function handleCancel(){
  setProjectState(prevState =>{
    return {
      ...prevState,
      selectedProjectId:undefined,
    }
  });
}


console.log(projectState)

const selectedProject = projectState.projects.find(project =>project.id === projectState.selectedProjectId);

let content= <SlectedProject
 project={selectedProject}
 onDelete={handleDeleteProject}
 onAddTask={handleAddTask}
 onDeleteTask={handleDeleteTask}
 tasks={projectState.tasks} />
if(projectState.selectedProjectId===null){
  content=<NewProject OnAdd={handleAddProject} onCancel={handleCancel}/>
}else if(projectState.selectedProjectId === undefined){
  content =<NoProjectSelected  onStartAddProject={handleStartAddProject}/>
}

  return (
    <main className="h-screen my-8  flex gap-8"  >
      <ProjectSidebar   onStartAddProject={handleStartAddProject} 
      projects={projectState.projects}
      onSelectProject={handleSelectProject}/>
   
       {content}

        </main>
  );
}

export default App;
