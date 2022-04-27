
export default function ProductCard(props){
    return (
        <div className="card">
            <img src={props.img} style={{ objectFit:"cover",height:"180px" }} alt="" className="w-100" />
            <div className="card-body">
                <h2>{props.name}</h2>
                <h4>{props.discount_price} <del>{props.price}</del></h4>
                <small className="text-muted">{props.category}</small>
            </div>
        </div>
    )
}