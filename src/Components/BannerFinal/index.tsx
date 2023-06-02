import React from 'react';
import { useWindowSize } from "../../Hooks/useWindowSize";
import "./BannerFinal.css";

interface BannerFinalProps {
    className?: string;
    title: string;
    description: string;
    textLink: string;
    Link: string;
    url: {
        imagedesktop?: string;
        imagemobile?: string;
    };
    flexDirection?: string;
    icon?: boolean;
}

const BannerFinal: React.FC<BannerFinalProps> = ({
    className,
    title,
    description,
    textLink,
    Link,
    url,
    flexDirection,
    icon
}) => {
    const window = useWindowSize();
    
    return (
        window.width && window.width > 900 ?
            (
                <div className={className ? className + " container banner-bg" : "container"} style={{ backgroundImage: `url(${url.imagedesktop})` }}>
                    <div className="container-patter" style={{ justifyContent: flexDirection }}>
                        <div className={className ? className + "-group-text group-text" : "group-text"}>
                            <h2 className={className ? className + "-group-text__title" : "group-text__title"}>{title}</h2>
                            <p className={className ? className + "-group-text__description" : "group-text__description"}>{description}</p>
                            <a className={className ? className + "-group-text__link group-text__link links" : "group-text__link"} href={Link}>
                                {textLink}
                                {icon === true ? <span className="icon-dropdown-right"></span> : ""}
                            </a>
                        </div>
                    </div>
                </div>
            )
            :
            (
                <div className={className ? className + "container" : "container"}>
                    <div className="container-patter">
                        <img src={url.imagemobile} alt="" width={"100%"} />
                        <div className={className ? className + "-group-text group-text" : "group-text"}>
                            <h2 className={className ? className + "-group-text__title" : "group-text__title"}>{title}</h2>
                            <p className={className ? className + "-group-text__description" : "group-text__description"}>{description}</p>
                            <a className={className ? className + "-group-text__link group-text__link links" : "group-text__link"} href={Link}>
                                {textLink}
                                {icon === true ? <span className="icon-dropdown-right"></span> : ""}
                            </a>
                        </div>
                    </div>
                </div>
            )
    );
}

export default BannerFinal;
