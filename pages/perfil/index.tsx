import { GetStaticProps } from "next";

export default function none() {}
// eslint-disable-next-line import/prefer-default-export
export const getStaticProps: GetStaticProps = () => ({
    redirect: {
        destination: "/perfil/profile",
        permanent: false
    }
});
