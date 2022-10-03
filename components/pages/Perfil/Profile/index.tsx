import Button from "@/components/atoms/Button";
import { TextField } from "@/components/atoms/Textfield";
// import Fieldset from "@/components/molecules/Fieldset";
import { useState } from "react";
import StyledProfile from "./styles";

interface UserProps {
    name: string;
    email: string;
    street: string;
}

export default function Profile() {
    const [currentUser, setCurrentUser] = useState<UserProps>({
        name: "Marcos",
        email: "marcos@email.com",
        street: "Rua de São Nunca"
    });

    const { name, email, street } = currentUser;
    return (
        <StyledProfile>
            <TextField
                name="nome_usuario"
                label="Nome do usuário"
                id="nome_usuario"
                defaultValue={name}
                onChange={(inputValue: string) => setCurrentUser((user) => ({ ...user, name: inputValue }))}
                // onInputChange={(inputValue: string) => setCurrentUser(inputValue)}
                disabled
                edit
            />
            <TextField
                name="email_usuario"
                label="Email do usuário"
                id="email_usuario"
                defaultValue={email}
                onChange={(inputValue: string) => setCurrentUser((user) => ({ ...user, email: inputValue }))}
                // onInputChange={(inputValue: string) => setCurrentUser(inputValue)}
                disabled
                edit
            />
            <TextField
                name="rua_usuario"
                label="Logradouro"
                id="rua_usuario"
                defaultValue={street}
                onChange={(inputValue: string) => setCurrentUser((user) => ({ ...user, street: inputValue }))}
                // onInputChange={(inputValue: string) => setCurrentUser(inputValue)}
                disabled
                edit
            />
            <Button
                style={`
                    margin-left: auto;
                `}
            >
                Salvar
            </Button>
        </StyledProfile>
    );
}
