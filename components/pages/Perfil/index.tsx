import Button from "@/components/atoms/Button";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Profile from "./Profile";
import Addresses from "./Addresses";
import Payments from "./Payments";
import Orders from "./Orders";
import StyledPerfil from "./styles";

export default function PerfilTemplate({ children, activeOption }: PropsWithChildren & { activeOption?: string }) {
    return (
        <StyledPerfil className="perfil">
            <div className="perfil__header">
                <div>
                    <h2>Marcos Paulo</h2>
                    <h5>São Paulo, SP</h5>
                </div>
                <Button>Sair</Button>
            </div>
            <div className="perfil__container">
                <aside>
                    <ul className="perfil__container__links">
                        <li className={activeOption === "profile" || activeOption === undefined ? "active" : ""}>
                            <Link href="/perfil/profile">Profile</Link>
                        </li>
                        <li className={activeOption === "pedidos" ? "active" : ""}>
                            <Link href="/perfil/pedidos">Pedidos</Link>
                        </li>
                        <li className={activeOption === "enderecos" ? "active" : ""}>
                            <Link href="/perfil/enderecos">Endereços</Link>
                        </li>
                        <li className={activeOption === "pagamentos" ? "active" : ""}>
                            <Link href="/perfil/pagamentos">Pagamentos</Link>
                        </li>
                    </ul>
                </aside>
                <div className="perfil__container__option">{children}</div>
            </div>
        </StyledPerfil>
    );
}

export { Addresses, Payments, Profile, Orders };
