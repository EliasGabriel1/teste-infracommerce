import { useWindowSize } from "../../Hooks/useWindowSize";
import "./BannerFinal.css";

function BannerFinal({ className, title, description, textLink, Link, url,flexDirection }: any) {
    const window = useWindowSize();

    return (
        window.width && window.width > 900 ?
            (
                <div className={className ? className + " container banner-bg" : "container"} style={{ backgroundImage: `url(${url})` }}>
                    <div className="container-patter"  style={{justifyContent: flexDirection }}>
                        <div className={className ? className + "-group-text group-text" : "group-text"}>
                            <h2 className={className ? className + "-group-text__title" : "group-text__title"}>{title}</h2>
                            <p className={className ? className + "-group-text__description" : "group-text__description"}>{description}</p>
                            <a className={className ? className + "-group-text__link group-text__link links" : "group-text__link"} href={Link}>{textLink}</a>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className={className ? className + "container" : "container"}>
                    <div className="container-patter">
                        <img src={url} alt="" width={"100%"} />
                        <div className={className ? className + "-group-text group-text" : "group-text"}>
                            <h2 className={className ? className + "-group-text__title" : "group-text__title"}>{title}</h2>
                            <p className={className ? className + "-group-text__description" : "group-text__description"}>{description}</p>
                            <a className={className ? className + "-group-text__link group-text__link links" : "group-text__link"} href={Link}>{textLink}</a>
                        </div>
                    </div>
                </div>
            )
    );
}

export default BannerFinal;
