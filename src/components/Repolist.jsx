import { Repositoryitem } from "./RepoItem";

const repository = {
    name: 'Eng Software',
    description: 'Projeto Engenria de Software',
    link: "https://github.com/vhgomes/projeto-engsoftware",
}

export function Repositorylist(){

    return(
        <section className = "RepoList">
            <h1>Repository List</h1>
            <ul>
              <Repositoryitem repository = {repository}/>
              <Repositoryitem repository = {repository}/>
              <Repositoryitem repository = {repository}/>
              <Repositoryitem repository = {repository}/>
            </ul>
        </section>
    );
}