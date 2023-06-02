import { useWindowSize } from "../../Hooks/useWindowSize";
import "./Stories.css";

function BannerFinal({ className, title, textLink, data }: any) {
    const window = useWindowSize();

    return (
        window.width && window.width > 900 ?
            (
                <div className={className ? className + " container banner-bg" : "container"}>
                    {title ? <h2>{title}</h2> : ""}
                    {data.map((item: any) => (
                        <div className="card">
                            {
                                item.image ? (
                                    <picture>
                                        <img src={item.href} alt="" width={"100%"} />
                                    </picture>
                                )
                                    : ""
                            }
                            <h4 className="title">{item.name}</h4>
                            <h5 className="description">
                                {item.description}
                            </h5>
                            <a href={item.Link} className="links">item.{textLink}</a>
                        </div>
                    ))}
                </div>
            )
            :
            (
                <div className={className ? className + "container" : "container"}>
                    {title ? <h2>{title}</h2> : ""}
                    {data.map((item: any) => (
                        <div className="card">
                            {
                                item.image ? (
                                    <picture>
                                        <img src={item.href} alt="" width={"100%"} />
                                    </picture>
                                )
                                    : ""
                            }
                            <h4>{item.name}</h4>
                        </div>
                    ))}
                </div>
            )
    );
}

export default BannerFinal;
