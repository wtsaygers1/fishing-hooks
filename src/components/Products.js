function Products(props){
    return(
        <div>
        <div className="col m-1 pb-3">
            <h4 className="fw-bold">
                {props.productsList.name}
            </h4>
            <div className="fs-6 fst-italic">
                Price: ${(props.productsList.price).toFixed(2)}
            </div>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => props.addToCart(props.index)}>Add to Cart</button>
        </div>
    </div>
    )
}