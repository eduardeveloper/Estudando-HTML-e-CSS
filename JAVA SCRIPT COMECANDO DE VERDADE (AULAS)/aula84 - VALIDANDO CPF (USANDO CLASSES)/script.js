class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpflimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
}

const validacpf