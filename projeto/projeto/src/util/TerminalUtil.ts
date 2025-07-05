import { terminal } from 'terminal-kit';
export default class TerminalUtil {
    static titulo(titulo: string) {
        terminal.clear()
        terminal.magenta(`${titulo}\n`)
        terminal.magenta('='.repeat(titulo.length) + '\n')
    }
}