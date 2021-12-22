import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='home'>
                    <div className='container'>
                        <h2 className='center' >Notre histoire</h2>

                        <p >L'application Bangoo a été créée en 2021 par des étudiants en Technologie de l'Informatique. 
                            Dans le cadre d'un de leur cours, il leurs a été demandé de répondre à une problématique liée aux objectifs de développement durable,
                            en intégrant plusieurs technologies.
                        </p>

                        <h2 className='center'>Nos objectifs</h2>
                        <p >L'équipe de Bangoo a pour but de limiter le gaspillage de nourritures. Pour ce faire, Bangoo met à la disposition
                            de magasins partenaires (<a href="/Vendeurs">voir nos partenaires</a>) l'opportunité de remettre en vente les produits qui arrivent à la fin de leur date
                            de péremption.
                            Il y a effectivement une ressemblance vis-à-vis d'autres applications proposant ces services, cependant Bangoo permet de choisir les articles désirés, ansi
                            que leur quantité (suivant les stocks disponibles) pour un faible prix.

                        </p>

                        <h2 className='center'>F.A.Q</h2>
                        <h4><span className='question'>Comment puis-je acheter des produits ?</span></h4>
                        <p>Deux façons possibles, soit via votre smartphone, il vous suffira de vous inscrire et  de vous connecter. Ensuite de naviguer dans l'onglet "Articles"
                            pour choisir les produits que vous souhaitez acheter.
                            Soit directement depuis votre ordinateur, de même que pour le smartphone, inscrivez-vous ou connectez-vous si vous possédez déjà un compte.
                            Il vous suffit alors de naviguer vers l'onglet "Articles" pour choisir les produits de votre choix. 
                            Pour finaliser votre achat, rendez-vous dans votre panier, payez et profitez !
                        </p>
                        <h4><span className='question'>Si j'ai acheté des produits, comment les récupérer ?</span></h4>
                        <p>Rendez vous à notre magasin participant le plus proche, montrez votre preuve de paiement, il vous suffira alors de récupérer le paquet qui sera déjà prêt avant
                            votre arrivée.
                        </p>
                        <h4><span className='question'>Que fait-on de mes données ?</span></h4>
                        <p>Bangoo utilise uniquement et strictement vos données dans un cadre technique. Pour naviguer, nous avons besoin que vos données soient enregistrés, qu'elles ne se pertent pas en cours de
                            route, ce serait dommage et ça nous compliquerait la vie... 
                            De plus Bangoo met à votre disposition, un bouton, plutôt visible, qui vous permet de supprimer TOTALEMENT votre compte et vos données liées à celui-ci.
                            Vos données de paiement sont protégés par Stripe. 
                            Lors de votre inscription, très peu de données vous sont demandées, afin de maximiser l'anonymat de nos clients.
                        </p>
                        <h4><span className='question'>Que faire si j'ai un soucis ou une question ?</span></h4>
                        <p>Si vous avez la moindre question, concernant l'application ou nos partenaires ou encore qui est le plus beau parmis l'équipe Bangoo. Il vous suffit
                            de nous contacter via l'onglet dans le pied de la page "Nous contacter".
                        </p>
                    </div>
                </div>

            </>
        )
    }
}
