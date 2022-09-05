import Perfil, { Addresses, Payments, Profile, Orders } from "@/components/pages/Perfil";
import { GetStaticPaths, GetStaticProps } from "next";
import { PropsWithChildren } from "react";

// type Props = {
//     url: string;
//     Page: JSX.Element;
// };

const Page = ({ children }: PropsWithChildren) => {
    switch (children) {
        case "enderecos":
            return <Addresses />;
        case "pagamentos":
            return <Payments />;
        case "pedidos":
            return <Orders />;
        case "profile":
            return <Profile />;
        default:
            return <h2>Não foi encontrado</h2>;
    }
};

export const PerfilPage = ({ option }: any) => {
    console.log(option);
    return (
        <Perfil>
            <Page>{option}</Page>
        </Perfil>
    );
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [],
    fallback: true
});

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
    const { option } = params as { option: string };
    return { props: { option: option || null } };
};

export default PerfilPage;
