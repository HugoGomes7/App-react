import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header (){
    const currentDate = format (new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
});

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>A melhor central de Podcast sobre o mundo DEV. 
                Aqui você encontra discurssões acaloradas sobre programação, 
                design, ux, sistemas, aplicações 
                e as últimas modinhas da tecnologia.</p>

            <span>{currentDate}</span>
        </header>
    );

}