import TerminalUtil from '@/util/TerminalUtil';
import menuFundamentos from './menuFundamentos';
import { terminal } from 'terminal-kit';

export default async function menuPrincipal() {
    // Usar um laço `while` é melhor que recursão para menus,
    // pois evita o estouro de pilha (stack overflow).
    while (true) {
        TerminalUtil.titulo('Menu Principal');
        const resposta = await terminal.singleColumnMenu([
            '1. Fundamentos',
            'Sair'
        ]).promise

        // Se o usuário pressionar ESC, a resposta será undefined.
        if ( !resposta ) {
            terminal.green( '\nAté mais!\n' ) ;
            process.exit( 0 ) ;
        }
    
        switch(resposta.selectedIndex) {
            case 0:
                await menuFundamentos();
                break;
            case 1: process.exit(0);
        }
    }
}