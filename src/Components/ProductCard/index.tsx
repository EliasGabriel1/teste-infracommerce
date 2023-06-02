import "./productCard.css";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, Props } from "../../Context/AppContext";

interface ProductItem {
    productId: string;
    productName: string;
    productBrand: string;
    productDescription: string;
    imageProduct: string;
    flags: Flag[];
    ListPrice: number;
    Price: number;
    quantidade: number;
}

interface Flag {
    id: string;
    label: string;
}


function ProductCard(props: Props) {
    const [background, setBackground] = useState("#000");
    const { addItemToCart, IrAoItem, NovoItem, addFav, fav } = useContext(AppContext);

    const navigate = useNavigate();

    const item = props.item;
    const clusterHighlights = item.clusterHighlights;
    const productClusters = item.productClusters;

    const result = {
        ...clusterHighlights,
        ...productClusters
    };

    const newFlag = Object.entries(result).map(([key, value]) => ({
        id: key,
        label: value
    }));

    const pageProduct = () => {
        NovoItem();
        IrAoItem(productItem);
        navigate("/Producto");
    };

    useEffect(() => {
        fav.map((itemfav: any) => {
            return itemfav === item.productId ? setBackground("red") : ""
        })
    })

    const favoreitei = () => {
        addFav(item.productId)
        setBackground("red")
    }

    const productItem: ProductItem[] = [
        {
            productId: item.productId,
            productName: item.productName,
            productBrand: item.brand,
            productDescription: item.description,
            imageProduct: item.items[0].images[0].imageUrl,
            flags: newFlag,
            ListPrice: item.items[0].sellers[0].commertialOffer.ListPrice,
            Price: item.items[0].sellers[0].commertialOffer.Price,
            quantidade: 1,
        },
    ];

    function removeSpacesAndPercentage(str:string) {
        let result = str;
      
        // Verifica se a string contém números
        if (/\d/.test(result)) {
          // Adiciona uma flag no início do texto
          result = `FLAG${result}`;
      
          // Remove a porcentagem
          result = result.replace('%', '');
          return result;
        }

        result = str.replace(/\s/g, '');
        return result;
      }

    return (
        <li className="item-product">
            <div className="Card box-item">

                <div className="Card__link">
                    <span className="Card__flags">
                        {newFlag.map((flag, i) => {
                            return (<p className={`flag ${flag.id} ${removeSpacesAndPercentage(flag.label)}`} key={i + 1}>{flag.label}</p>)
                        })}
                    </span>
                    <span className="Card__favorite" style={{ color: background, cursor: "pointer" }} onClick={() => { favoreitei() }}>
                        ❤
                    </span>

                    <picture className="Card__product-image" onClick={pageProduct}>
                        <img src={item.items[0].images[0].imageUrl}
                            width="100%" alt={item.items[0].images[0].label} />
                    </picture>

                </div>

                <div className="Card__content_product">
                    <div className="Card__product-info">

                        <div className="Card__product-info-link Card__link" onClick={pageProduct}>

                            <span className="Card__product-name">
                                <span className="Card__product-brand">
                                    {item.brand}®
                                </span>
                                {item.productName}
                            </span>
                        </div>

                        {/*<div className="Card__product-price">


                            <span className="Card__product-list-price">{item.items[0].sellers[0].commertialOffer.ListPrice}</span>


                        <span className="Card__installment">
                                {item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].count} cuotas de <span className="nowrap">$ {item.items[0].sellers[0].commertialOffer.PaymentOptions.installmentOptions[0].installments[2].value}</span>
                            </span> 

                        </div>*/}

                    </div>

                    <div className="Card__comprar">
                        <button className="Card__comprar-button" onClick={() => addItemToCart(productItem)}>
                            <span className="Card__product-best-price">
                                ${item.items[0].sellers[0].commertialOffer.Price}
                            </span>
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProductCard;