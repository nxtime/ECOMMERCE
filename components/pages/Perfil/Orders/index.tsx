import Order from "@/components/molecules/Order";
import StyledOrders from "./styles";

export default function Orders() {
    return (
        <StyledOrders>
            <Order />
            <Order />
        </StyledOrders>
    );
}
