interface RepositoryiteProps{
    repository:{
        name: string,
        description: string,
        html_url: string,
    }
}

export function Repositoryitem(props: RepositoryiteProps){
    return(
        <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href = {props.repository.html_url} target = "_balnck">
            Access Repository
        </a>
    </li>
    );
}