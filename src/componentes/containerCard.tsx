import { type ReactNode } from "react";
import styles from "./containerCard.module.css";

type ContainerCardProps = {
    tituloContainer: string;
    descripcionContainer: string;
    children: ReactNode;

}

function ContainerCard (props: ContainerCardProps){
    const {tituloContainer, descripcionContainer, children} = props;
    return (
    <section className={styles.container}>
        <h2 className={styles.titulo}>{tituloContainer}</h2>
        <p className={styles.descripcion}>{descripcionContainer}</p>
        <div className={styles.postContainer}>{children}</div>
    </section>
    );
}

export default ContainerCard;