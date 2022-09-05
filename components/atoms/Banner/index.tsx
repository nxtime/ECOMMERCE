import Image from "next/image";
import StyledBanner from "./styles";

interface BannerType {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export default function Banner({ src, width, height, alt }: BannerType) {
    return (
        <StyledBanner>
            <Image src={src} width={width} height={height} alt={alt} draggable={false} />
        </StyledBanner>
    );
}
