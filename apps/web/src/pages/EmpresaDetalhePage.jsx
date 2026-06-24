
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Edit } from 'lucide-react';

function EmpresaDetalhePage() {
  const { id } = useParams();

  const empresa = {
    nomeFantasia: 'Organizadora de Feiras Brasil',
    razaoSocial: 'Organizadora de Feiras Brasil Ltda.',
    cnpj: '12.345.678/0001-90',
    ie: '123.456.789',
    cidade: 'Florianópolis',
    estado: 'SC',
    endereco: 'Av. Beira Mar Norte, 1234',
    responsavel: 'Carlos Mendes',
    cargo: 'Diretor Comercial',
    telefone: '(48) 3234-5678',
    whatsapp: '(48) 99876-5432',
    email: 'carlos@feirasbrasil.com.br',
    segmento: 'Feiras e Exposições',
    origemContato: 'Indicação',
    statusComercial: 'Cliente ativo',
    observacoes: 'Cliente desde 2023. Realiza eventos de grande porte.',
  };

  const historicoContatos = [
    {
      data: '2026-06-15',
      canal: 'Ligação',
      responsavel: 'Marina Silva',
      resumo: 'Discussão sobre novo evento para setembro',
      proximaAcao: 'Enviar proposta comercial',
      dataRetorno: '2026-06-20',
      statusRetorno: 'Pendente',
    },
    {
      data: '2026-05-28',
      canal: 'Reunião presencial',
      responsavel: 'Marina Silva',
      resumo: 'Apresentação de novos espaços disponíveis',
      proximaAcao: 'Aguardar definição de datas',
      dataRetorno: '2026-06-10',
      statusRetorno: 'Concluído',
    },
    {
      data: '2026-05-10',
      canal: 'WhatsApp',
      responsavel: 'Pedro Santos',
      resumo: 'Confirmação de pagamento da última parcela',
      proximaAcao: 'Nenhuma',
      dataRetorno: null,
      statusRetorno: 'Concluído',
    },
  ];

  const eventosVinculados = [
    {
      nome: 'Feira Construir SC 2026',
      data: '2026-07-15',
      espaco: 'Pavilhão Norte',
      status: 'Confirmado',
    },
    {
      nome: 'Expo Tecnologia 2025',
      data: '2025-11-20',
      espaco: 'Pavilhão Sul',
      status: 'Realizado',
    },
  ];

  const propostasContratos = [
    {
      numero: 'PROP-2026-047',
      tipo: 'Proposta',
      data: '2026-06-01',
      valor: 'R$ 285.000,00',
      status: 'Aprovada',
    },
    {
      numero: 'CONT-2026-023',
      tipo: 'Contrato',
      data: '2026-06-10',
      valor: 'R$ 285.000,00',
      status: 'Assinado',
    },
  ];

  const historicoFinanceiro = {
    valorContratado: 'R$ 285.000,00',
    valorRecebido: 'R$ 171.000,00',
    valorPendente: 'R$ 114.000,00',
    despesas: 'R$ 12.300,00',
  };

  const getStatusBadge = (status) => {
    const variants = {
      'Pendente': 'secondary',
      'Concluído': 'default',
      'Sem resposta': 'destructive',
      'Reagendado': 'outline',
      'Cancelado': 'destructive',
      'Confirmado': 'default',
      'Realizado': 'outline',
      'Aprovada': 'default',
      'Assinado': 'default',
    };

    return <Badge variant={variants[status] || 'outline'}>{status}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>{`${empresa.nomeFantasia} - Expocentro Gestão 360`}</title>
        <meta name="description" content="Detalhes completos da empresa" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/empresas">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">{empresa.nomeFantasia}</h1>
              <p className="text-muted-foreground">{empresa.razaoSocial}</p>
            </div>
          </div>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
        </div>

        <Tabs defaultValue="dados" className="space-y-6">
          <TabsList>
            <TabsTrigger value="dados">Dados cadastrais</TabsTrigger>
            <TabsTrigger value="historico">Histórico de contatos</TabsTrigger>
            <TabsTrigger value="eventos">Eventos vinculados</TabsTrigger>
            <TabsTrigger value="propostas">Propostas e contratos</TabsTrigger>
            <TabsTrigger value="financeiro">Histórico financeiro</TabsTrigger>
          </TabsList>

          <TabsContent value="dados" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações da empresa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Nome fantasia</p>
                    <p className="text-foreground">{empresa.nomeFantasia}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Razão social</p>
                    <p className="text-foreground">{empresa.razaoSocial}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">CNPJ</p>
                    <p className="text-foreground">{empresa.cnpj}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Inscrição Estadual</p>
                    <p className="text-foreground">{empresa.ie}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Endereço</p>
                    <p className="text-foreground">{empresa.endereco}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Cidade / Estado</p>
                    <p className="text-foreground">{empresa.cidade} / {empresa.estado}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Responsável</p>
                    <p className="text-foreground">{empresa.responsavel}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Cargo</p>
                    <p className="text-foreground">{empresa.cargo}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Telefone</p>
                    <p className="text-foreground">{empresa.telefone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">WhatsApp</p>
                    <p className="text-foreground">{empresa.whatsapp}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">E-mail</p>
                    <p className="text-foreground">{empresa.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Segmento</p>
                    <p className="text-foreground">{empresa.segmento}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Origem do contato</p>
                    <p className="text-foreground">{empresa.origemContato}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status comercial</p>
                    <Badge variant="default">{empresa.statusComercial}</Badge>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Observações</p>
                    <p className="text-foreground">{empresa.observacoes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de contatos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Canal</TableHead>
                        <TableHead>Responsável</TableHead>
                        <TableHead>Resumo</TableHead>
                        <TableHead>Próxima ação</TableHead>
                        <TableHead>Data de retorno</TableHead>
                        <TableHead>Status do retorno</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historicoContatos.map((contato, index) => (
                        <TableRow key={index}>
                          <TableCell>{new Date(contato.data).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>{contato.canal}</TableCell>
                          <TableCell>{contato.responsavel}</TableCell>
                          <TableCell>{contato.resumo}</TableCell>
                          <TableCell>{contato.proximaAcao}</TableCell>
                          <TableCell>{contato.dataRetorno ? new Date(contato.dataRetorno).toLocaleDateString('pt-BR') : '-'}</TableCell>
                          <TableCell>{getStatusBadge(contato.statusRetorno)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eventos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Eventos vinculados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Espaço</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {eventosVinculados.map((evento, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{evento.nome}</TableCell>
                          <TableCell>{new Date(evento.data).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>{evento.espaco}</TableCell>
                          <TableCell>{getStatusBadge(evento.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="propostas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Propostas e contratos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Número</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {propostasContratos.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.numero}</TableCell>
                          <TableCell>{item.tipo}</TableCell>
                          <TableCell>{new Date(item.data).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>{item.valor}</TableCell>
                          <TableCell>{getStatusBadge(item.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumo financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Valor contratado</p>
                    <p className="text-2xl font-bold text-foreground">{historicoFinanceiro.valorContratado}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Valor recebido</p>
                    <p className="text-2xl font-bold text-green-600">{historicoFinanceiro.valorRecebido}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Valor pendente</p>
                    <p className="text-2xl font-bold text-yellow-600">{historicoFinanceiro.valorPendente}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Despesas</p>
                    <p className="text-2xl font-bold text-red-600">{historicoFinanceiro.despesas}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default EmpresaDetalhePage;
