import PerfilTemplate, { Addresses, Orders, Payments, Profile } from "@/components/pages/Perfil";
import { useRouter } from "next/router";

const PerfilOption = ({ option }: { option?: string }) => {
    switch (option) {
        case "enderecos":
            return <Addresses />;
        case "pedidos":
            return <Orders />;
        case "pagamentos":
            return <Payments />;
        default:
            return <Profile />;
    }
};

export default function PerfilOptionPage() {
    const { asPath } = useRouter();
    const activePage = asPath.split("/").pop();

    return (
        <PerfilTemplate activeOption={activePage!}>
            <PerfilOption option={activePage} />
        </PerfilTemplate>
    );
}
