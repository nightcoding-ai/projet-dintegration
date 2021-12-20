/** 
function CardSection() {

  return (

    <div className='form_test'>
      <div className="col-lg-6">
                            <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Résumé de commande</div>
                            <div className="p-4">
                            <p className="mb-4"><em>Les coûts supplémentaires sont calculés sur base du montant de votre commande.</em></p>
                            <ul className="list-unstyled mb-4">
                                <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="fw-bold"><span id='totalPrice'>{Cart.items.totalPrice}</span>€</h5>
                                </li>
                            </ul><a href="/Checkout" className="btn btn-dark rounded-pill py-2 d-md-block">Passer au paiement</a>
                            </div>
                        </div>
      <div className="cart">
        <div className="py-5">
          <div className="container px-4 px-lg-5 mb-5">

            <label>
                Name
                <input name="name" type="text" placeholder="Jane Doe" required />
            </label>
            <label>
                Email
                <input name="email" type="email" placeholder="jane.doe@example.com" required/>
            </label>
            </div>

            <label>
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </label>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Payer</button>

        </div>
      </div>
    </div>

  );
}*/

<div className="cart">
        
      </div>
    </div>

    