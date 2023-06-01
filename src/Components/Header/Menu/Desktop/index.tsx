import Categoria from "../Categoria";
import Subcategoria from "../Subcategoria";

function Menu1(props : any) {
    var api = props.api;

    return (
        <div className="desktop">
            <div className="container-patter">
                <div className="categoria">
                    <ul>
                        {
                            api.map((item: any, index: any) => {
                                return (
                                    <li key={index}>
                                        <Categoria content={item} nolink={true} />
                                        <div className="subcategoria">
                                            <Subcategoria content={item.children} item={item} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu1;
