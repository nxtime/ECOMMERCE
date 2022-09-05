import IconButton from "@/components/molecules/IconButton";
import StyledAddress from "./styles";

export default function Address() {
    return (
        <StyledAddress>
            <div className="address">
                <div className="address__info">
                    <h2>Casa</h2>
                    <h4>Rua: São Nunca, 17</h4>
                </div>
                <div className="address__actions">
                    <IconButton icon="clarity:edit-solid">Editar</IconButton>
                    <IconButton icon="ep:close-bold" color="secondary">
                        Remover
                    </IconButton>
                </div>
            </div>
        </StyledAddress>
    );
}
