import { useWindowSize } from "../../Hooks/useWindowSize";
import "./Stories.css";

function Stories({ className, title, data, icon }: any) {
    const window = useWindowSize();

    return (
        window.width && window.width > 900 ?
            (
                <div className={className ? className + " container banner-bg" : "container"}>
                    {title ? <h2>{title}</h2> : ""}
                    <div className="stories__content-cards container-patter">
                        {data.map((item: {
                            image: boolean;
                            href: string;
                            title: string;
                            description: string;
                            link: string;
                            linkText: string;
                        },index: number) => (
                            <div className="stories__card" key={index}>
                                {item.image ? (
                                    <picture>
                                        <img className="stories__image" src={item.href} alt="" width={"100%"} />
                                    </picture>
                                ) : null}
                                <div className="stories__box-text">
                                    <h4 className="stories__title">{item.title}</h4>
                                    <p className="stories__description">
                                        {item.description}
                                    </p>
                                    <a href={item.link} className="links">
                                        {item.linkText}
                                        {icon === true ? <span className="icon-dropdown-right"></span> : ""}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
            :
            (
                <div className={className ? className + "container" : "container"}>
                    {title ? <h2>{title}</h2> : ""}
                    <div className="stories__content-cards container-patter">
                        {data.map((item: {
                            image: boolean;
                            href: string;
                            title: string;
                        },index: number) => (
                            <div className="stories__card" key={index}>
                                {item.image ? (
                                    <picture>
                                        <img className="stories__image" src={item.href} alt="" width={"100%"} />
                                    </picture>
                                ) : null}
                                <h4 className="stories__title">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            )
    );
}

export default Stories;
