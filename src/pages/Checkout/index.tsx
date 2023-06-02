import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./checkout.css";

interface MergedProductItem {
  imageProduct: string;
  productName: string;
  Price: number;
  quantidade: number;
}


function Checkout(): JSX.Element {
  const { cart, clearCart } = useContext(AppContext);
  const [compraFeita, setCompraFeita] = useState(false);

  function handleCompraFeita() {
    clearCart();
    setCompraFeita(true);
  }

  // const handleChange = (itemId: number, value: number) => {
  //   atualizarCart(itemId, value);
  // }


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
  const sumTotal = (data: any) => {
    let valorTotal = 0;

    for (const item of data) {
      for (const produto of item) {
        valorTotal += produto.Price;
      }
    }
    return valorTotal.toFixed(2);
  }

  return (
    <div className="checkout">
      <h1>CARRINHO DE COMPRAS</h1>
      {!compraFeita ? (
        <>
          <ul>
            {cart.length > 0 ? (
              mergedProductItems.map((item: MergedProductItem, index: number) => (
                <li key={index}>
                  <img alt="" width="200px" src={item.imageProduct} />
                  {item.productName} <br /> <br /> ${item.Price} <br />
                  Quantity: {item.quantidade} <br />
                </li>
              ))

            ) : (
              <div className="carrinhovazio">O CHECKOUT ESTÁ VAZIO</div>
            )}
          </ul>
          {cart.length > 0 ? (
            <div >
              <p className="total-checkout"> O valor do seu carrinho o total é <span className="checkout-redColor">${sumTotal(cart)}</span></p>
              <button className="encerrar-compra-checkout" onClick={handleCompraFeita}>
                ENCERRAR COMPRA
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div>
          <h1>COMPRA FEITA</h1>
          <a href="/">voltar ao inicio</a>
        </div>
      )}
    </div>
  );
}

export default Checkout;
