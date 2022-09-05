import { useState } from "react";
// import { Icon } from "@iconify/react";
import Link from "next/link";
import navlinksConfig from "@/config/navlinks";
import Submenu from "@/components/organisms/Submenu";
import Button from "@/components/atoms/Button";
import StyledHeader from "./styles";

export default function Header() {
    const [currentSelected, setCurrentSelected] = useState<null | number>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <StyledHeader>
            <nav className="header" onMouseLeave={() => setCurrentSelected(null)}>
                <Link href="/">
                    <div className="header__logo">
                        <h2>DudaShop</h2>
                    </div>
                </Link>
                <div className="header__action">
                    <Button onClick={() => setIsMenuOpen((s) => !s)}>{isMenuOpen ? "Fechar" : "Abrir"}</Button>
                </div>
                <ul className={`header__nav-items ${!isMenuOpen && "menu-closed"}`}>
                    {navlinksConfig.map(({ label, href }, index: number) => (
                        <li className="nav-item" key={index} onMouseEnter={() => setCurrentSelected(index)}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                    <li className="nav-item cart">
                        C {2}
                        {/* <Icon icon="eva:shopping-cart-fill" /> */}
                    </li>
                    <li className="nav-item perfil">
                        <div className="perfil__img" />
                        <Link href="/perfil">Marcos</Link>
                    </li>
                </ul>
                <div className="header__submenu">{currentSelected !== null && <Submenu options={navlinksConfig[currentSelected!].submenus} />}</div>
            </nav>
        </StyledHeader>
    );
}
