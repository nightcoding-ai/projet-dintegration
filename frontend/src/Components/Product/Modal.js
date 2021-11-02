import './Product.css';


const Modal = ({ handleClose, show, name, description, brand, stock, price, urlImage }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} id="add_Product" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add a product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="addProduct-id">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name's product" onChange={name}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Description</label>
                                <input type="text" class="form-control" id="description" placeholder="Enter description" onChange={description}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Brand</label>
                                <input type="text" class="form-control" id="brand" placeholder="Enter brand's product" onChange={brand}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Stock</label>
                                <input type="text" class="form-control" id="stock" placeholder="Enter stock" onChange={stock}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Price</label>
                                <input type="text" class="form-control" id="price" placeholder="Enter price" onChange={price}></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Url image</label>
                                <input type="text" class="form-control" id="urlImage" placeholder="Enter url image" onChange={urlImage}></input>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" class="btn btn-primary">Add product</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;