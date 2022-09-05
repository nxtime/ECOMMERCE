import Banner from "@/components/atoms/Banner";
import StyledBannerText from "./styles";

interface BannerTextType {
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
    subtitle: string;
}

export default function BannerText({ src, width, height, title, subtitle, alt }: BannerTextType) {
    return (
        <StyledBannerText>
            <div className="banner-info">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </div>
            <Banner src={src} width={width} height={height} alt={alt} />
        </StyledBannerText>
    );
}
