import ProductCard from "../ProductCard";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "../../Hooks/useWindowSize";
import "./vitrine.css";

export interface VitrineProps {
    quantidadeItem?: number;
    quantidadeItemMobile?: number;
    text?: string;
    data: {
        data?: [] | undefined;
        productId: number;
        item: {
            productId: number;
            productName: string;
            brand: string;
            description: string;
            items: {
                images: {
                    imageUrl: string;
                }[];
                sellers: {
                    commertialOffer: {
                        ListPrice: number;
                        Price: number;
                        PaymentOptions: {
                            installmentOptions: {
                                installments: {
                                    count: number;
                                    value: number;
                                }[];
                            }[];
                        };
                    };
                }[];
            }[];
            clusterHighlights: Record<string, string>;
            productClusters: Record<string, string>;
        };
    }[];
}

const Vitrine: React.FC<VitrineProps> = (props) => {
    const [currentProducts, setCurrentProducts] = useState<
        VitrineProps["data"]
    >([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const window = useWindowSize();

    const productsPerPage: number | any = window.width && window.width > 900 ? props.quantidadeItem : props.quantidadeItemMobile;

    const handleNext = () => {
        const lastIndex = props.data.length - productsPerPage;
        currentIndex === lastIndex
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + productsPerPage);
    };

    const handlePrev = () => {
        const lastIndex = props.data.length - productsPerPage;
        currentIndex === 0
            ? setCurrentIndex(lastIndex)
            : setCurrentIndex(currentIndex - productsPerPage);
    };

    useEffect(() => {
        setCurrentProducts(
            props.data.slice(currentIndex, currentIndex + productsPerPage)
        );
    }, [currentIndex, props.data, productsPerPage]);

    return (
        <>
            <div className="container product-carousel-container vitrine home__vitrinedeprodutos">
                {props.text ? <h3>{props.text}</h3> : ""}
                <div className="product-carousel-slide list-products">
                    {currentProducts.map((item: any) => (
                        <ProductCard key={item.productId} text="vitrine" item={item} />
                    ))}
                </div>
                <button className="handlePrev" onClick={handlePrev}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0,0,256,256">
                        <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M30.28125,8.28125l-16,16l-0.6875,0.71875l0.6875,0.71875l16,16l1.4375,-1.4375l-15.28125,-15.28125l15.28125,-15.28125z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
                <button className="handleNext" onClick={handleNext}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0,0,256,256">
                        <g fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(5.12,5.12)">
                                <path d="M19.71875,8.28125l-1.4375,1.4375l15.28125,15.28125l-15.28125,15.28125l1.4375,1.4375l16,-16l0.6875,-0.71875l-0.6875,-0.71875z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </>
    );
};

export default Vitrine;
