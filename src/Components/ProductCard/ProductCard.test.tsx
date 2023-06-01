import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

const jsonItem :any =     {
    "productId": "18",
    "productName": "vitrine um Emulsión Reafirmante 350ml",
    "brand": "Bagovit",
    "brandId": 2000012,
    "brandImageUrl": null,
    "linkText": "bagovit-a-cuidado-emulsion-reafirmante-350ml-9957487",
    "productReference": "9957487",
    "productReferenceCode": "9957487",
    "categoryId": "28",
    "productTitle": "Emulsión Reafirmante 350ml",
    "metaTagDescription": "Su exclusiva fórmula hipoalergénica que combina pura Vitamina A con Pepha-Tight, un complejo biotecnológico marino de última generación, que forma una fina película sobre la piel ejerciendo un efecto tensor.\r\n\r\nCon el uso regular se mejora la microcirculación y se estimula la regeneración celular fortaleciendo las fibras de sostén, ayudando a redefinir el contorno corporal, afectado por la edad, fluctuaciones de peso o embarazo.\r\n\r\nEl Pepha-Tight es rico en vitamina C y B12 con un efecto tensor inmediato sobre la piel y un aumento de la firmeza y tonicidad a largo plazo. Repara y mantiene la Matriz Extra Celular aumentando la proliferación de fibroblastos y estimulando la síntesis de Colágeno Tipo I.",
    "releaseDate": "2022-02-17T00:00:00Z",
    "clusterHighlights": {
        "210": "40%",
        "271": "BLACK FRIDAY"
    },
    "productClusters": {
        "210": "40%",
        "271": "BLACK FRIDAY"
    },
    "searchableClusters": {},
    "categories": [
        "/Cuidado Personal/Cuidado de la Piel/",
        "/Cuidado Personal/"
    ],
    "categoriesIds": [
        "/24/28/",
        "/24/"
    ],
    "link": "/bagovit-a-cuidado-emulsion-reafirmante-350ml-9957487/p",
    "description": "Su exclusiva fórmula hipoalergénica que combina pura Vitamina A con Pepha®-Tight, un complejo biotecnológico marino de última generación, que forma una fina película sobre la piel ejerciendo un efecto tensor.\r\n\r\nCon el uso regular se mejora la microcirculación y se estimula la regeneración celular fortaleciendo las fibras de sostén, ayudando a redefinir el contorno corporal, afectado por la edad, fluctuaciones de peso o embarazo.\r\n\r\nEl Pepha®-Tight es rico en vitamina C y B12 con un efecto tensor inmediato sobre la piel y un aumento de la firmeza y tonicidad a largo plazo. Repara y mantiene la Matriz Extra Celular aumentando la proliferación de fibroblastos y estimulando la síntesis de Colágeno Tipo I.\r\n\r\nHidrata La Piel A La Vez Que La Tonifica\r\nAyuda A Redefinir El Contorno Corporal, Afectado Por La Edad, Fluctuaciones De Peso O Embarazo\r\nExclusiva Formula Hipoalergenica, Con Vitamina A Y Pepha*-Tight\r\nEl Pepha*-Tight Es Rico En Vitamina C Y B12 Con Un Efecto Tensor Sobre La Piel Y Aumento De La Firmeza Y Tonicidad A Largo Plazo\r\nResultados Comprobados En 7 Días.\r\n\r\nPresentacion: 350ml",
    "items": [
        {
            "itemId": "20",
            "name": "Emulsión Reafirmante 350ml",
            "nameComplete": "Emulsión Reafirmante 350ml",
            "complementName": "",
            "ean": "7790375267803",
            "referenceId": [
                {
                    "Key": "RefId",
                    "Value": "9957487"
                }
            ],
            "sellers": [
                {
                    "sellerId": "1",
                    "sellerName": "Elias Gabe1",
                    "sellerDefault": true,
                    "commertialOffer": {
                        "DeliverySlaSamplesPerRegion": {
                            "0": {
                                "DeliverySlaPerTypes": [],
                                "Region": null
                            }
                        },
                        "Installments": [
                            {
                                "Value": 3036.0,
                                "InterestRate": null,
                                "TotalValuePlusInterestRate": 3036.0,
                                "NumberOfInstallments": 1,
                                "PaymentSystemName": "American Express",
                                "PaymentSystemGroupName": "creditCardPaymentGroup",
                                "Name": "American Express"
                            }
                        ],
                        "DiscountHighLight": [],
                        "GiftSkuIds": [],
                        "Teasers": [],
                        "BuyTogether": [],
                        "ItemMetadataAttachment": [],
                        "Price": 3036.0,
                        "ListPrice": 3036.0,
                        "PriceWithoutDiscount": 3036.0,
                        "RewardValue": 0.0,
                        "PriceValidUntil": "2023-11-26T18:11:43Z",
                        "AvailableQuantity": 4,
                        "IsAvailable": true,
                        "Tax": 0.0,
                        "DeliverySlaSamples": [
                            {
                                "DeliverySlaPerTypes": [],
                                "Region": null
                            }
                        ],
                        "GetInfoErrorMessage": null,
                        "CacheVersionUsedToCallCheckout": "1FD2C5BF76604B13BEF64DBD341369D1_",
                        "PaymentOptions": {
                            "installmentOptions": [
                                {
                                    "paymentSystem": "1",
                                    "bin": null,
                                    "paymentName": "American Express",
                                    "paymentGroupName": "creditCardPaymentGroup",
                                    "value": 303600,
                                    "installments": [
                                        {
                                            "count": 1,
                                            "hasInterestRate": null,
                                            "interestRate": null,
                                            "value": 303600,
                                            "total": 303600,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "EliasGabe1",
                                                    "count": 1,
                                                    "hasInterestRate": null,
                                                    "interestRate": null,
                                                    "value": 303600,
                                                    "total": 303600
                                                }
                                            ]
                                        },
                                        {
                                            "count": 3,
                                            "hasInterestRate": null,
                                            "interestRate": null,
                                            "value": 129354,
                                            "total": 303600,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "EliasGabe1",
                                                    "count": 3,
                                                    "hasInterestRate": null,
                                                    "interestRate": null,
                                                    "value": 129354,
                                                    "total": 303600
                                                }
                                            ]
                                        },
                                        {
                                            "count": 6,
                                            "hasInterestRate": null,
                                            "interestRate": null,
                                            "value": 76695,
                                            "total": 303600,
                                            "sellerMerchantInstallments": [
                                                {
                                                    "id": "EliasGabe1",
                                                    "count": 6,
                                                    "hasInterestRate": null,
                                                    "interestRate": null,
                                                    "value": 76695,
                                                    "total": 303600
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "paymentSystems": [
                                {
                                    "id": 127,
                                    "name": "MercadoPagoPro",
                                    "groupName": "MercadoPagoProPaymentGroup",
                                    "validator": null,
                                    "stringId": "127",
                                    "template": "MercadoPagoProPaymentGroup-template",
                                    "requiresDocument": false,
                                    "isCustom": false,
                                    "description": null,
                                    "requiresAuthentication": false,
                                    "dueDate": "2022-12-03T18:01:42.6968047Z",
                                    "availablePayments": null
                                }
                            ],
                            "payments": [],
                            "giftCards": [],
                            "giftCardMessages": [],
                            "availableAccounts": [],
                            "availableTokens": []
                        }
                    }
                }
            ],
            "measurementUnit": "un",
            "unitMultiplier": 1.0000,
            "modalType": null,
            "isKit": false,
            "images": [
                {
                    "imageId": "531507",
                    "imageLabel": "",
                    "imageUrl": "https://i.postimg.cc/y6Q4PJnJ/rimell.png",
                    "imageText": "170",
                    "imageLastModified": "2022-08-02T18:35:36.6030000Z"
                }
            ],
            "Videos": [],
            "estimatedDateArrival": null
        }
    ]
}

test('renders learn react link', () => {
  render(<ProductCard key={1} text="vitrine" item={jsonItem} />);
  const linkElement = screen.getByText(/vitrine um Emulsión/i);
  expect(linkElement).toBeInTheDocument();
});
