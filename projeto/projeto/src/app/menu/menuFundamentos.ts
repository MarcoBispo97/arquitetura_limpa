import TerminalUtil from '../../util/TerminalUtil';
import { terminal } from 'terminal-kit';

export default async function menuFundamentos() {
    while (true) {
        TerminalUtil.titulo('Fundamentos');

        const resposta = await terminal.singleColumnMenu([
            '1. Polimorfismo',
            'Voltar'
        ]).promise;

        if (!resposta) { return; }

        switch(resposta.selectedIndex) {
            case 0:
                terminal.yellow('\nOpção "Polimorfismo" ainda não implementada.\n');
                await terminal.enterToContinue() ;
                break;
            case 1: return;
        }
    }
}