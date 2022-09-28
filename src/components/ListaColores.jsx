import ItemColor from "./ItemColor";

const ListaColores = ({arregloColores, borrarColor}) => {
    return (
        <div className="row">
            {
                arregloColores.map((color, posicion)=> <ItemColor key={posicion} nombreColor={color} borrarColor={borrarColor}></ItemColor>)
            }
        </div>
    );
};

export default ListaColores;