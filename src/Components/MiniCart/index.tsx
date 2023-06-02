import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../Hooks/useWindowSize";
import "./minicart.css";


const Minicart: React.FC = () => {
    const { cart, removeItemFromCart } = useContext(AppContext);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [total, setTotal] = useState('');
    const navigate = useNavigate();

    const handleRemoveItem = (itemId: string) => {
        removeItemFromCart(itemId);
    };

    const window: any = useWindowSize();

    const MiniCartSvg: React.FC = () => {
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="16px"
                height="16px"
                viewBox="0 0 256 256">
                <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                    <g transform="scale(5.12,5.12)">
                        <path d="M25,1c-5.53516,0 -10,4.46484 -10,10v2h-7.90625l-0.09375,0.875l-4,35l-0.125,1.125h44.25l-0.125,-1.125l-4,-35l-0.09375,-0.875h-7.90625v-2c0,-5.53516 -4.46484,-10 -10,-10zM25,3c4.46484,0 8,3.53516 8,8v2h-16v-2c0,-4.46484 3.53516,-8 8,-8zM8.90625,15h6.09375v2.28125c-0.59766,0.34766 -1,0.98047 -1,1.71875c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2c0,-0.73828 -0.40234,-1.37109 -1,-1.71875v-2.28125h16v2.28125c-0.59766,0.34766 -1,0.98047 -1,1.71875c0,1.10547 0.89453,2 2,2c1.10547,0 2,-0.89453 2,-2c0,-0.73828 -0.40234,-1.37109 -1,-1.71875v-2.28125h6.09375l3.78125,33h-39.75z"></path>
                    </g>
                </g>
            </svg>
        );
    };

    const handleMouseEnter = () => {
        setIsCartVisible(true);
    };

    const handleMouseLeave = () => {
        setIsCartVisible(false);
    };

    const handleClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    const sumTotal = (data:  Array<any>) => {
        let valorTotal = 0;

        for (const item of data) {
            for (const produto of item) {
                valorTotal += produto.Price;
            }
        }
        return valorTotal.toFixed(2);
    }

    useEffect(() => {
        setTotal(sumTotal(cart))
    }, [cart]);

    const pageProduct = () => {
        setIsCartVisible(false);
        const dataStr = JSON.stringify(cart);
        document.cookie = `data=${encodeURIComponent(
            dataStr
        )}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
        navigate("/checkout");
    };

    const mergeDuplicateItems = (data: any[]): any[] => {
        const mergedItems: { [key: string]: any } = {};
        data.forEach((group) => {
            group.forEach((item: any) => {
                const { productId, quantidade } = item;
                if (mergedItems[productId]) {
                    mergedItems[productId].quantidade += quantidade;
                } else {
                    mergedItems[productId] = { ...item };
                }
            });
        });
        const mergedArray = Object.values(mergedItems);
        return mergedArray;
    };

    const mergedProductItems = mergeDuplicateItems(cart);

    return (
        <div className="container-minicart"
            onClick={handleClick}
            onMouseEnter={window.width && window.width > 900 ? handleMouseEnter : undefined}
            onMouseLeave={window.width && window.width > 900 ? handleMouseLeave : undefined}
        >
            <button className={`container-minicart-button ${cart.length > 0 ? "colorirBag" : ""}`}>
                <MiniCartSvg />
            </button>
            <div className={`mini-cart ${isCartVisible ? "visible" : ""}`}>
                {cart.length > 0 ? (
                    <div className="minicart__box-signin">
                        <p>To speed up the checkout process, sign in now.</p>
                        <a href="/signIn" className="links">Sign In<span className="icon-dropdown-right"></span></a>
                    </div>
                ) : (
                    ""
                )}
                <ul>
                    {mergedProductItems.length > 0 ? (
                        mergedProductItems.map((item: any, index: number) => (
                            <li key={index}>
                                <div className="minicart__d-flex">
                                    <picture>
                                        <img alt="" width="100%" src={item.imageProduct} />
                                    </picture>
                                    <div className="minicart__items-product">
                                        <p className="minicart__description-item">
                                            {item.productName}
                                        </p>
                                        <p className="minicart__description-price">${item.Price} (unit)</p>
                                        <p className="minicart__description-quantidade">quantity: {item.quantidade} (unit)</p>
                                        <p
                                            className="links cursor-pointer minicart__description-remove"
                                            onClick={() => handleRemoveItem(item.productId)}
                                        >
                                            remove
                                            <span className="icon-dropdown-right"></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <div className="carrinhovazio">
                            <h3>Your Shopping Bag</h3>
                            <span>Your shopping bag is empty.</span>
                            <p>For faster checkout, sign in to your account.</p>
                            <a href="/signIn" className="links">Sign In<span className="icon-dropdown-right"></span></a>
                        </div>
                    )}
                </ul>
                {cart.length > 0 ? (
                    <h5
                        className="encerrar-compra cursor-pointer"
                        onClick={() => pageProduct()}
                    >
                        <span className="encerrar-compra-total">Estimated Total: {total}</span>Checkout
                    </h5>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Minicart;
