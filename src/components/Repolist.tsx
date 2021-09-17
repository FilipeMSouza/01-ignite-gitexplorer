import { Repositoryitem } from "./RepoItem";
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos
import "../styles/repositories.scss"

interface Repository {
    name: string,
    description: string,
    html_url: string,
}


export function Repositorylist(){

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))

    },[]);


    return(
        <section className = "RepoList">
            <h1>Repository List</h1>
            <ul>
            {repositories.map(repository => {
                return(
                    <Repositoryitem key={repository.name} repository = {repository}/>
                )
                })}
            </ul>
        </section>
    );
}