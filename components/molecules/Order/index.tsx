import Button from "@/components/atoms/Button";
import Link from "next/link";
import StyledOrder from "./styles";

export default function Order() {
    return (
        <StyledOrder>
            <div className="order">
                <img src="/images/home_page_banner.png" alt="Imagem" />
                <div className="order__info">
                    <h3>Blusa</h3>
                    <h5>R$ 14,42</h5>
                </div>
                <div className="order__uuid">
                    <h3>Pedido nº: 123</h3>
                    <Link href="/perfil/pedidos">
                        <h5>Mais informações</h5>
                    </Link>
                </div>
                <Button>Fechar</Button>
            </div>
        </StyledOrder>
    );
}
