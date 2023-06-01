import React, { useState, useContext } from 'react';
import Loading from '../../../Loading';
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../Context/AppContext";

function Researcher(props: any) {
    const [searchTerm, setSearchTerm] = useState("");
    const [display, setDisplay] = useState("none");
    const { IrAoItem } = useContext(AppContext);
    const { NovoItem } = useContext(AppContext);
    const navigate = useNavigate();

    const filteredProducts = props.data?.filter((product: any) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function getProduct(product: any) {
        const clusterHighlights = product.clusterHighlights
        const productClusters = product.productClusters
        const result = Object.entries({ ...clusterHighlights, ...productClusters }).reduce((acc: any, [key, value]) => {
            if (!acc.hasOwnProperty(key)) {
                acc[key] = value;
            }
            return acc;
        }, {});

        const newFlag = Object.entries(result).map(([key, value]) => {
            return { id: key, label: value };
        });
        const productItem = [
            {
                "productId": product.productId,
                "productName": product.productName,
                "productBrand": product.brand,
                "productDescription": product.description,
                "imageProduct": product.items[0].images[0].imageUrl,
                "flags": newFlag,
                "ListPrice": product.items[0].sellers[0].commertialOffer.ListPrice,
                "Price": product.items[0].sellers[0].commertialOffer.Price,
                "installmentOptionsCount": product.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count,
                "installmentOptionsValue": product.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value
            }
        ]

        return productItem;
    }


    const pageProduct = (product: any) => {
        const productItem = getProduct(product);
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    }

    if (!props.error) {
        return (
            !props.loading === true ?
                <div className={props.className ? "searchBox " + props.className : " searchBox"}>
                    <div className='group-input'>
                        <div className="box-input" style={{ display: display }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="box-input__content-button">
                                <button className="search" onClick={(e) => setDisplay("none")}>
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0,0,256,256"><g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path></g></g></svg>
                                </button>
                                <div className="box-input__content">
                                    <ul className="box-input__content-um">
                                        <li><strong>Discover</strong></li>
                                        <li><a className='links' href="/">Jewelry</a></li>
                                        <li><a className='links' href="/">Gifts</a></li>
                                        <li><a className='links' href="/">Store Locator</a></li>
                                    </ul>
                                    <ul className="box-input__content-dois">
                                        <li><strong>Need Help?</strong></li>
                                        <li><a href="/">Contact Client Care</a></li>
                                        <li><a href="/">Call 800 843 3269</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button className="search" onClick={(e) => setDisplay("flex")}>
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="16"
                                height="16"
                                viewBox="0 0 256 256">
                                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(5.33333,5.33333)">
                                        <path d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>

                    <div className='answer-search' style={{ display: !searchTerm ? "none" : "" }}>
                        {filteredProducts.map((product: any) => (
                            <div key={product.productId} style={{ display: !searchTerm ? "none" : "" }} onClick={() => pageProduct(product)}>
                                <img alt="" width="100%" src={product.items[0].images[0].imageUrl} />
                                <h4>{product.productName}</h4>
                                <p>{product.brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
                : <Loading type="spinningBubbles" color="black" />
        );
    }
    return <></>
}

export default Researcher;
