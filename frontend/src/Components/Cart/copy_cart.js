return (
    <div class="container py-5 my-5">
        <div className="mb-5">
            <h1 className='title'>Panier</h1>
        </div>
        <div class="row">
            <div class="col-lg-7 mx-auto">
            <ul className="list-group shadow">
            {items.products.map((product) => (
            <li className="list-group-item">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <h3 className="mt-4 font-weight-bold mb-2">{product.name}</h3>
                        <p className="text-muted">{product.description}</p>
                        <h5 className="font-weight-bold my-2">{product.price}€</h5>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className='box "my-3'>
                            <img src={product.item.image} alt={product.name} width="150" className='picture'/>
                        </div>
                        <div className="my-3">
                            <Button type="button" name={product.name} id={product._id} variant="btn btn-outline-success"  onClick={notifyBasket}>Ajouter au panier</Button>                                    </div>
                    </div>
                </div>
            </div>
        </li>
        ))}
            </ul>
            </div>
            <p>{items.totalPrice}€</p>
            <Button type="button" variant="btn btn-outline-success"  onClick={this.cleanUp}>Vider le panier</Button>
        </div>
    </div>

)