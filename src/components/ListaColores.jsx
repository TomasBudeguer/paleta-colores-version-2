import ItemColor from "./ItemColor";

const ListaColores = ({arregloColores}) => {
    return (
        <div className="row">
            {
                arregloColores.map((color, posicion)=> <ItemColor key={posicion} nombreColor={color}></ItemColor>)
            }
        </div>
    );
};

export default ListaColores;