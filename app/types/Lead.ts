export interface LeadWaitlist {
  tipo: "waitlist";
  email: string;
  telefone: string;
  nome: string;
  hp?: string;
}

export interface LeadContato {
  tipo: "contato";
  nome: string;
  email: string;
  telefone?: string;
  escola?: string;
  tipo_escola?: string;
  mensagem?: string;
  hp?: string;
}
