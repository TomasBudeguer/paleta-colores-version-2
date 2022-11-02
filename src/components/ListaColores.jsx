import ItemColor from "./ItemColor";

const ListaColores = ({color, setColor}) => {
    
    return (
        <div className="row">
            {
                color.map((color)=> <ItemColor key={color._id} color={color} setColor={setColor}></ItemColor>)
            }
        </div>
    );
};

export default ListaColores;