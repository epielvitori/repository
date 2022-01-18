import "./estilo.css"

function Cards({producto, ml, precio, comprar}) {
    return (<div className="card">
        <p>Producto: {producto}</p>
        <p>Ml: {ml}</p>
        <p>Precio: {precio}</p>
        <button onClick={comprar}>Agregar al carrito</button>
    </div>
    );
}

export default Cards;
