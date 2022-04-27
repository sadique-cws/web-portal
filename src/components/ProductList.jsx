import ProductCard from "./ProductCard";

export default function ProductList(){
    return (
        <>
            <div className="row mt-3">
                <div className="col-3"><ProductCard name="clinic plus" price="50/-" discount_price="30"/></div>
                <div className="col-3"><ProductCard name="clinic plus" price="50/-" discount_price="30"/></div>
                <div className="col-3"><ProductCard name="clinic plus" price="50/-" discount_price="30"/></div>
                <div className="col-3"><ProductCard name="clinic plus" price="50/-" discount_price="30"/></div>
            </div>
        </>
    )
}