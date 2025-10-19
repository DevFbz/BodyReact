import Button from './evento/Button'
function Evento({ numero }){

    function meuEvento(){
        console.log(`Ativadooo primeiro evento`)
        alert(`Ativadooo primeiro evento`)
    }

    return(
<div>
    <p>Clique aqui para Ativar</p>
    <Button event={meuEvento} text="Primeiro Evento"/>
    <button onClick= {meuEvento} >Ativar</button>
</div>
    )
}

export default Evento