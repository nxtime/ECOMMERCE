/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";
import Link from "next/link";
import navlinksConfig from "@/config/navlinks";
import Submenu from "@/components/organisms/Submenu";
import Button from "@/components/atoms/Button";
import { Icon } from "@iconify/react";
import CartMenu from "@/components/molecules/CartMenu";
import Typography from "@/components/atoms/Typography";
import { Product, userCartStore } from "@/store/userCart";
import { getProductByID } from "@/lib/get_products";
import IconButton from "@/components/molecules/IconButton";
import Image from "next/image";
import StyledHeader from "./styles";

// const MOCK_CART = [
//     {
//         id: 1,
//         image: "/images/home_page_banner.png",
//         name: "Camis",
//         price: 22.17,
//         qty: 3
//     },
//     {
//         id: 2,
//         image: "/images/home_page_banner.png",
//         name: "Chapéu",
//         price: 82.47,
//         qty: 7
//     },
//     {
//         id: 3,
//         image: "/images/home_page_banner.png",
//         name: "Calça",
//         price: 10.28,
//         qty: 1
//     }
// ];

export default function Header() {
    const { products } = userCartStore((state) => state);
    const removeFromCart = userCartStore((state) => state.removeFromCart);

    console.log("aqui", products);

    const [cartItems, setCartItems] = useState<any>([]);
    const [isBrowser, setIsBrowser] = useState(false);
    const [currentSelected, setCurrentSelected] = useState<null | number>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCart, setIsCart] = useState(false);

    useEffect(() => {
        if (!isBrowser) setIsBrowser(true);
    });

    useEffect(() => {
        const productsData = products.map<Product>((value: any) => ({ ...value, ...getProductByID(value.id) }));
        setCartItems(productsData);
        console.log(productsData);
        // return () => products;
    }, [JSON.stringify(products)]);

    const removeItemFromCart = (id: string) => {
        cartItems.length === 1 && setIsCart(false);
        removeFromCart(id.toString());
    };

    if (!isBrowser) return null;

    return (
        <StyledHeader onMouseLeave={() => setCurrentSelected(null)}>
            <nav className="header">
                <Link href="/">
                    <div className="header__logo">
                        <h2>DudaShop</h2>
                    </div>
                </Link>
                <div className="header__action">
                    <div className="nav-item cart">
                        <Button
                            style={{ display: "flex", gap: "0.5rem" }}
                            color={isCart ? "secondary" : "primary"}
                            onClick={() => setIsCart((prev: boolean) => (cartItems.length > 0 ? !prev : prev))}
                        >
                            <Icon icon="eva:shopping-cart-fill" />
                            <Typography>({cartItems.length})</Typography>
                        </Button>
                        {isCart && <CartMenu products={cartItems} removeItem={(itemId: string) => removeItemFromCart(itemId)} />}
                    </div>
                    <IconButton onClick={() => setIsMenuOpen((s) => !s)} icon={isMenuOpen ? "ep:close-bold" : "charm:menu-hamburger"} />
                </div>
                <ul className={`header__nav-items ${!isMenuOpen && "menu-closed"}`}>
                    {navlinksConfig.map(({ label, href }, index: number) => (
                        <li className="nav-item" key={index} onMouseEnter={() => setCurrentSelected(index)}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                    <li className="nav-item cart">
                        <Button
                            style={{ display: "flex", gap: "0.5rem" }}
                            color={isCart ? "secondary" : "primary"}
                            onClick={() => setIsCart((prev: boolean) => (cartItems.length > 0 ? !prev : prev))}
                        >
                            <Icon icon="eva:shopping-cart-fill" />
                            <Typography>({cartItems.length})</Typography>
                        </Button>
                        {isCart && <CartMenu products={cartItems} removeItem={(itemId: string) => removeItemFromCart(itemId)} />}
                    </li>
                    <li className="nav-item perfil">
                        <Link href="/perfil">
                            <a>
                                <div className="perfil__img">
                                    <Image src="/images/blank-profile.svg" height={16} width={16} alt="User" />
                                </div>
                                <Typography>Marcos</Typography>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={`header__submenu ${isCart ? "cart-submenu" : ""}`}>
                {currentSelected !== null && <Submenu options={navlinksConfig[currentSelected!].submenus} />}
            </div>
        </StyledHeader>
    );
}
