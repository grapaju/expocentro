
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Edit, FileText } from 'lucide-react';

function EventoDetalhePage() {
  const { id } = useParams();

  const evento = {
    nome: 'Feira Construir SC 2026',
    empresa: 'Feira Construir SC',
    tipo: 'Feira',
    dataInicial: '2026-07-15',
    dataFinal: '2026-07-18',
    publicoEstimado: 15000,
    valorContratado: 285000,
    statusComercial: 'Confirmado',
    statusContratual: 'Assinado',
    statusFinanceiro: 'Parcial',
    statusOperacional: 'Em andamento',
  };

  const espacosPeriodos = [
    {
      espaco: 'Pavilhão Norte',
      periodo: '15/07 a 18/07',
      horario: '08:00 - 20:00',
      valor: 180000,
      observacoes: 'Montagem dia 14/07',
      servicosInclusos: 'Limpeza, segurança, energia',
    },
    {
      espaco: 'Praça de alimentação',
      periodo: '15/07 a 18/07',
      horario: '10:00 - 22:00',
      valor: 45000,
      observacoes: 'Área exclusiva',
      servicosInclusos: 'Limpeza, mesas e cadeiras',
    },
    {
      espaco: 'Credenciamento',
      periodo: '15/07 a 18/07',
      horario: '07:00 - 21:00',
      valor: 15000,
      observacoes: 'Sistema próprio',
      servicosInclusos: 'Estrutura básica',
    },
  ];

  const contrato = {
    numero: 'CONT-2026-023',
    dataEmissao: '2026-06-01',
    dataAssinatura: '2026-06-10',
    locatario: 'Feira Construir Santa Catarina Ltda.',
    representanteLegal: 'Paulo Oliveira',
    objeto: 'Locação de espaços para feira de construção',
    finalidade: 'Feira comercial do setor de construção civil',
    valorTotal: 285000,
    formaPagamento: '3 parcelas',
    caucao: 28500,
    contratoAnexado: true,
    contratoAssinado: true,
    regulamentoEntregue: true,
    pendenciasContratuais: 'Nenhuma',
  };

  const parcelas = [
    {
      parcela: '1/3',
      vencimento: '2026-06-15',
      valor: 95000,
      status: 'Pago',
      dataPagamento: '2026-06-14',
      comprovante: 'Anexado',
    },
    {
      parcela: '2/3',
      vencimento: '2026-07-01',
      valor: 95000,
      status: 'Pago',
      dataPagamento: '2026-06-30',
      comprovante: 'Anexado',
    },
    {
      parcela: '3/3',
      vencimento: '2026-07-20',
      valor: 95000,
      status: 'Pendente',
      dataPagamento: null,
      comprovante: null,
    },
  ];

  const checklistAntes = [
    { item: 'Contrato assinado', concluido: true },
    { item: 'Pagamento primeira parcela', concluido: true },
    { item: 'Regulamento entregue', concluido: true },
    { item: 'Planta baixa aprovada', concluido: true },
    { item: 'Seguro contratado', concluido: true },
    { item: 'Alvará de funcionamento', concluido: false },
    { item: 'Corpo de bombeiros notificado', concluido: false },
  ];

  const checklistDurante = [
    { item: 'Credenciamento funcionando', concluido: false },
    { item: 'Segurança posicionada', concluido: false },
    { item: 'Limpeza em andamento', concluido: false },
    { item: 'Energia estabilizada', concluido: false },
    { item: 'Internet funcionando', concluido: false },
  ];

  const checklistApos = [
    { item: 'Vistoria final realizada', concluido: false },
    { item: 'Danos identificados', concluido: false },
    { item: 'Nota de débito emitida', concluido: false },
    { item: 'Devolução de caução', concluido: false },
    { item: 'Termo de encerramento assinado', concluido: false },
  ];

  const despesasPosEvento = [
    {
      categoria: 'Limpeza',
      descricao: 'Limpeza profunda pós-evento',
      quantidade: 1,
      valorUnitario: 8500,
      valorTotal: 8500,
      responsavel: 'Equipe operacional',
      data: '2026-07-19',
      statusCobranca: 'A lançar',
      observacoes: '',
    },
    {
      categoria: 'Manutenção',
      descricao: 'Reparo de piso danificado',
      quantidade: 45,
      valorUnitario: 120,
      valorTotal: 5400,
      responsavel: 'Equipe manutenção',
      data: '2026-07-20',
      statusCobranca: 'A lançar',
      observacoes: 'Área pavilhão norte',
    },
  ];

  const historico = [
    {
      data: '2026-06-01',
      tipo: 'Proposta',
      descricao: 'Proposta comercial enviada',
      responsavel: 'Marina Silva',
    },
    {
      data: '2026-06-05',
      tipo: 'Contato',
      descricao: 'Reunião para ajustes na proposta',
      responsavel: 'Marina Silva',
    },
    {
      data: '2026-06-10',
      tipo: 'Contrato',
      descricao: 'Contrato assinado',
      responsavel: 'Marina Silva',
    },
    {
      data: '2026-06-14',
      tipo: 'Pagamento',
      descricao: 'Primeira parcela recebida',
      responsavel: 'Financeiro',
    },
    {
      data: '2026-06-30',
      tipo: 'Pagamento',
      descricao: 'Segunda parcela recebida',
      responsavel: 'Financeiro',
    },
  ];

  const getStatusBadge = (status, type) => {
    const variants = {
      contratual: {
        'Assinado': 'default',
        'Pendente': 'secondary',
      },
      financeiro: {
        'Quitado': 'default',
        'Parcial': 'secondary',
        'Pago': 'default',
        'Pendente': 'secondary',
      },
      operacional: {
        'Concluído': 'default',
        'Em andamento': 'secondary',
      },
      cobranca: {
        'A lançar': 'outline',
        'Lançado': 'secondary',
        'Pago': 'default',
      },
    };

    return <Badge variant={variants[type]?.[status] || 'outline'}>{status}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>{`${evento.nome} - Expocentro Gestão 360`}</title>
        <meta name="description" content="Detalhes completos do evento" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/eventos">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">{evento.nome}</h1>
              <p className="text-muted-foreground">{evento.empresa}</p>
            </div>
          </div>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Editar
          </Button>
        </div>

        <Tabs defaultValue="resumo" className="space-y-6">
          <TabsList>
            <TabsTrigger value="resumo">Resumo</TabsTrigger>
            <TabsTrigger value="espacos">Espaços e Períodos</TabsTrigger>
            <TabsTrigger value="contrato">Contrato</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
            <TabsTrigger value="operacional">Operacional</TabsTrigger>
            <TabsTrigger value="despesas">Despesas Pós-Evento</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="resumo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Nome do evento</p>
                    <p className="text-foreground">{evento.nome}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Empresa</p>
                    <p className="text-foreground">{evento.empresa}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Tipo</p>
                    <p className="text-foreground">{evento.tipo}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Data inicial</p>
                    <p className="text-foreground">{new Date(evento.dataInicial).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Data final</p>
                    <p className="text-foreground">{new Date(evento.dataFinal).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Público estimado</p>
                    <p className="text-foreground">{evento.publicoEstimado.toLocaleString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Valor contratado</p>
                    <p className="text-foreground">R$ {evento.valorContratado.toLocaleString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status comercial</p>
                    {getStatusBadge(evento.statusComercial, 'comercial')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status contratual</p>
                    {getStatusBadge(evento.statusContratual, 'contratual')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status financeiro</p>
                    {getStatusBadge(evento.statusFinanceiro, 'financeiro')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Status operacional</p>
                    {getStatusBadge(evento.statusOperacional, 'operacional')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espacos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Espaços e períodos locados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Espaço</TableHead>
                        <TableHead>Data/período</TableHead>
                        <TableHead>Horário</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Observações</TableHead>
                        <TableHead>Serviços inclusos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {espacosPeriodos.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.espaco}</TableCell>
                          <TableCell>{item.periodo}</TableCell>
                          <TableCell>{item.horario}</TableCell>
                          <TableCell>R$ {item.valor.toLocaleString('pt-BR')}</TableCell>
                          <TableCell>{item.observacoes}</TableCell>
                          <TableCell>{item.servicosInclusos}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contrato" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações contratuais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Número do contrato</p>
                    <p className="text-foreground">{contrato.numero}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Data de emissão</p>
                    <p className="text-foreground">{new Date(contrato.dataEmissao).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Data de assinatura</p>
                    <p className="text-foreground">{new Date(contrato.dataAssinatura).toLocaleDateString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Locatário</p>
                    <p className="text-foreground">{contrato.locatario}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Representante legal</p>
                    <p className="text-foreground">{contrato.representanteLegal}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Valor total</p>
                    <p className="text-foreground">R$ {contrato.valorTotal.toLocaleString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Forma de pagamento</p>
                    <p className="text-foreground">{contrato.formaPagamento}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Caução</p>
                    <p className="text-foreground">R$ {contrato.caucao.toLocaleString('pt-BR')}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Objeto</p>
                    <p className="text-foreground">{contrato.objeto}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Finalidade</p>
                    <p className="text-foreground">{contrato.finalidade}</p>
                  </div>
                  <div className="md:col-span-2 flex gap-6">
                    <div className="flex items-center gap-2">
                      <Checkbox checked={contrato.contratoAssinado} disabled />
                      <span className="text-sm">Contrato assinado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox checked={contrato.regulamentoEntregue} disabled />
                      <span className="text-sm">Regulamento entregue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox checked={contrato.contratoAnexado} disabled />
                      <span className="text-sm">Contrato anexado</span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm font-medium text-muted-foreground mb-1">Pendências contratuais</p>
                    <p className="text-foreground">{contrato.pendenciasContratuais}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Valor contratado</p>
                  <p className="text-2xl font-bold text-foreground">R$ 285.000</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Valor sem caução</p>
                  <p className="text-2xl font-bold text-foreground">R$ 256.500</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Caução</p>
                  <p className="text-2xl font-bold text-foreground">R$ 28.500</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                  <Badge variant="secondary" className="mt-1">Parcial</Badge>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Parcelas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Parcela</TableHead>
                        <TableHead>Vencimento</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data de pagamento</TableHead>
                        <TableHead>Comprovante</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parcelas.map((parcela, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{parcela.parcela}</TableCell>
                          <TableCell>{new Date(parcela.vencimento).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>R$ {parcela.valor.toLocaleString('pt-BR')}</TableCell>
                          <TableCell>{getStatusBadge(parcela.status, 'financeiro')}</TableCell>
                          <TableCell>{parcela.dataPagamento ? new Date(parcela.dataPagamento).toLocaleDateString('pt-BR') : '-'}</TableCell>
                          <TableCell>
                            {parcela.comprovante ? (
                              <Button variant="ghost" size="sm" className="gap-2">
                                <FileText className="h-4 w-4" />
                                Ver
                              </Button>
                            ) : '-'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operacional" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Checklist antes do evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checklistAntes.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox checked={item.concluido} />
                      <span className={item.concluido ? 'text-foreground' : 'text-muted-foreground'}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checklist durante o evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checklistDurante.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox checked={item.concluido} />
                      <span className={item.concluido ? 'text-foreground' : 'text-muted-foreground'}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checklist após o evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {checklistApos.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checkbox checked={item.concluido} />
                      <span className={item.concluido ? 'text-foreground' : 'text-muted-foreground'}>
                        {item.item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="despesas" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Despesas pós-evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>Valor unitário</TableHead>
                        <TableHead>Valor total</TableHead>
                        <TableHead>Responsável</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Status de cobrança</TableHead>
                        <TableHead>Observações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {despesasPosEvento.map((despesa, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{despesa.categoria}</TableCell>
                          <TableCell>{despesa.descricao}</TableCell>
                          <TableCell>{despesa.quantidade}</TableCell>
                          <TableCell>R$ {despesa.valorUnitario.toLocaleString('pt-BR')}</TableCell>
                          <TableCell>R$ {despesa.valorTotal.toLocaleString('pt-BR')}</TableCell>
                          <TableCell>{despesa.responsavel}</TableCell>
                          <TableCell>{new Date(despesa.data).toLocaleDateString('pt-BR')}</TableCell>
                          <TableCell>{getStatusBadge(despesa.statusCobranca, 'cobranca')}</TableCell>
                          <TableCell>{despesa.observacoes || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico do evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {historico.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0">
                      <div className="flex-shrink-0 w-24 text-sm text-muted-foreground">
                        {new Date(item.data).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2">{item.tipo}</Badge>
                        <p className="text-foreground mb-1">{item.descricao}</p>
                        <p className="text-sm text-muted-foreground">{item.responsavel}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default EventoDetalhePage;
