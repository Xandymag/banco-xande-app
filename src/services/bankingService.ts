import { mockUsuario, mockConta, mockTransacoes } from './mockData';
import { Transacao } from '../types';

// Simula o tempo de carregamento da internet (1 segundo)
const delay = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

export const BankingService = {
  login: async (cpf: string, senha: string) => {
    await delay();
    if (cpf === '12345678900' && senha === '123456') {
      return mockUsuario;
    }
    throw new Error('CPF ou senha inválidos.');
  },

  getConta: async (usuarioId: string) => {
    await delay(500); // Responde um pouco mais rápido
    if (usuarioId === mockUsuario.id) {
      return mockConta;
    }
    throw new Error('Conta não encontrada.');
  },

  getExtrato: async (contaId: string): Promise<Transacao[]> => {
    await delay(800);
    if (contaId === mockConta.id) {
      // Retorna as transações ordenadas da mais recente para a mais antiga
      return mockTransacoes.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    }
    return [];
  }
};