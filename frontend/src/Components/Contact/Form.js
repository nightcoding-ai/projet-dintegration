import './ContactAdmin.css';


const Modal = ({ handleShow, show, send }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} id="add_Product" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Réponse de requête</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleShow}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="addProduct-id">
                            <div className="form-group">
                                <label for="id">Identifiant</label><br></br>
                                <text id="id-form"></text>
                            </div>
                            <div className="form-group">
                                <label for="sujet">Sujet</label><br></br>
                                <text id="subject-form"></text>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label><br></br>
                                <text id="message-form"></text>
                            </div>
                            <div className="form-group">
                                <label for="response">Réponse</label><br></br>
                                <text id="response-form-text"></text><br></br>
                                <textarea type="text" className="form-control" id="response-form" placeholder="Entrer réponse"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <p id="warning"></p>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleShow}>Fermer</button>
                        <button type="button" className="btn btn-primary" onClick={send}>Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;