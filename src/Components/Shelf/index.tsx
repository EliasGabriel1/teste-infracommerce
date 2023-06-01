import React from "react";
import Vitrine from "../../Components/Vitrine";
import Loading from "../../Components/Loading";

export interface VitrineProps {
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

interface DataComponentProps {
    data: VitrineProps["data"] | null;
    loading: boolean;
    error: any;
    text: string;
    quantidadeItem: number;
    quantidadeItemMobile: number;
}

const ShelfCustom: React.FC<DataComponentProps> = ({ data, loading, text,error,quantidadeItem,quantidadeItemMobile }) => {
    return (
        <>
            {error === null ? (
                !loading ? (
                    data !== null ? (
                        <Vitrine data={data} text={text} quantidadeItem={quantidadeItem}  quantidadeItemMobile={quantidadeItemMobile}/>
                    ) : (
                        <>ERRO!</>
                    )
                ) : (
                    <Loading type="spinningBubbles" color="black" />
                )
            ) : (
                <p>ERRO!</p>
            )}
        </>
    );
};

export default ShelfCustom;
