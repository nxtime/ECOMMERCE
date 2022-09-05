const navlinksConfig = [
    {
        label: "Categorias",
        href: "/produtos",
        submenus: [
            {
                name: "Sexo",
                categories: [
                    {
                        label: "Homem",
                        link: "/produtos/categorias?categoria=homem"
                    },
                    {
                        label: "Mulher",
                        link: "/produtos/categorias?categoria=mulher"
                    },
                    {
                        label: "Unissex",
                        link: "/produtos/categorias?categoria=unissex"
                    }
                ]
            },
            {
                name: "Infantil",
                categories: [
                    {
                        label: "Bebês",
                        link: "/produtos/categorias?categoria=bebe"
                    },
                    {
                        label: "Crianças",
                        link: "/produtos/categorias?categoria=criança"
                    }
                ]
            },
            {
                name: "Estação",
                categories: [
                    {
                        label: "Verão",
                        link: "/produtos/categorias?categoria=verao"
                    },
                    {
                        label: "Inverno",
                        link: "/produtos/categorias?categoria=inverno"
                    },
                    {
                        label: "Outono",
                        link: "/produtos/categorias?categoria=outono"
                    }
                ]
            }
        ]
    },
    {
        label: "Produtos",
        href: "/produtos",
        submenus: [
            {
                name: "Roupas",
                categories: [
                    {
                        label: "Calças",
                        link: "/produtos/categorias?categoria=calcas"
                    },
                    {
                        label: "Camisas",
                        link: "/produtos/categorias?categoria=camisas"
                    },
                    {
                        label: "Blusas",
                        link: "/produtos/categorias?categoria=blusas"
                    }
                ]
            }
        ]
    }
];

export default navlinksConfig;
