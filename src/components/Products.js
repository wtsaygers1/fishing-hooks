function Products(props){
    return(
      <div className="row">
        <div className="col-3">
            <h3>{props.product.name}</h3>
        </div>
      </div>
    )
}

export default Products;