import Item from "./Item"

function List(){
    return(
    <>
      <h1>Minha Lista
        <ul>
            
        <Item marca="Ferrari" ano_lancamento={1992}></Item>
        <Item marca="McLaren" ano_lancamento={1805}></Item>
        <Item/>

        </ul>
        </h1>  
    </>
    )
}

export default List
