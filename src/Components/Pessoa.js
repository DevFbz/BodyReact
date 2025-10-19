function Pessoa({nome, idade,profissao,foto}){
    return(
        <div>
            <img src= {foto} alt= {nome}/>
            <h1>nome: {nome}</h1>
            <p>profissao: {profissao}</p>
            <p>idade: {idade}</p>
        </div>
    )
}

export default Pessoa