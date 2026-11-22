import { Usuario, Conta, Transacao } from '../types';

export const mockUsuario: Usuario = {
  id: 'u1',
  nome: 'Xande',
  cpf: '12345678900',
  email: 'xande@email.com'
};

export const mockConta: Conta = {
  id: 'c1',
  usuarioId: 'u1',
  agencia: '0001',
  numeroConta: '77777-7',
  saldo: 15420.50,
  chavePix: '12345678900'
};

export const mockTransacoes: Transacao[] = [
  {
    id: 't1',
    contaOrigemId: 'c1',
    tipo: 'DEPOSITO',
    valor: 15000.00,
    descricao: 'Depósito Inicial',
    data: new Date(Date.now() - 86400000 * 5).toISOString() // 5 dias atrás
  },
  {
    id: 't2',
    contaOrigemId: 'c2',
    contaDestinoId: 'c1',
    tipo: 'PIX_RECEBIDO',
    valor: 500.50,
    descricao: 'Pix de Maria',
    data: new Date(Date.now() - 86400000 * 2).toISOString() // 2 dias atrás
  },
  {
    id: 't3',
    contaOrigemId: 'c1',
    contaDestinoId: 'c3',
    tipo: 'PIX_ENVIADO',
    valor: 80.00,
    descricao: 'Pagamento de Internet',
    data: new Date().toISOString() // Hoje
  }
];