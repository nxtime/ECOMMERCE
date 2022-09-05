import navlinksConfig from "@/config/navlinks";
import StyledCategories from "./styles";

export default function Categories() {
    return (
        <StyledCategories>
            <h1>Categorias</h1>
            {navlinksConfig[0].submenus.map((routes: any, index: number) => (
                <div className="" key={index}>
                    <h2>{routes.name}</h2>
                    <ul>
                        {routes.categories.map(({ label }: any, ind: number) => (
                            <li className="" key={ind}>
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </StyledCategories>
    );
}
