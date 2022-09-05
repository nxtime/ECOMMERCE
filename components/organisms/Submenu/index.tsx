/* eslint-disable max-len */
import Link from "next/link";
import StyledSubmenu from "./styles";

export default function Submenu({ options }: { options: any }) {
    return (
        <StyledSubmenu>
            {options.map((submenu: any, index: number) => (
                <div className="submenu" key={index}>
                    <h2>{submenu.name}</h2>
                    <ul key={index}>
                        {submenu.categories.map(({ label, link }: any, ind: number) => (
                            <li className="submenu__nav-item" key={ind}>
                                <Link href={link}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </StyledSubmenu>
    );
}
