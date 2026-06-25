import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Edit, FileText } from 'lucide-react';

function EventoDetalhePage() {
  const { id } = useParams();

  const evento = {
    id: id || '1',
    nome: 'Feira Construir SC 2026',
    locatario: 'Feira Construir SC Ltda.',
    tipoEvento: 'Feira',
    tipoContrato: 'Locação onerosa',
    periodoMontagem: '14/07/2026',
    periodoEvento: '15/07/2026 a 18/07/2026',
    periodoDesmontagem: '19/07/2026',
    horarioContratado: '08:00 às 22:00',
    valorContratado: 285000,
    receitaRecebida: 171000,
    statusContratual: 'Assinado',
    statusFinanceiro: 'Parcial',
    statusOperacional: 'Montagem em acompanhamento',
    pendenciaPrincipal: 'Aguardando pagamento',
  };

  const espacosPeriodos = [
    { espaco: 'Pavilhão Norte', montagem: '14/07 08:00 às 22:00', evento: '15/07 a 18/07 08:00 às 22:00', desmontagem: '19/07 08:00 às 18:00', valor: 180000 },
    { espaco: 'Pavilhão Sul', montagem: '14/07 09:00 às 20:00', evento: '15/07 a 18/07 09:00 às 21:00', desmontagem: '19/07 08:00 às 16:00', valor: 0 },
    { espaco: 'Torre Norte', montagem: '14/07 10:00 às 18:00', evento: '16/07 a 18/07 09:00 às 20:00', desmontagem: '19/07 08:00 às 14:00', valor: 0 },
    { espaco: 'Torre Sul', montagem: '14/07 10:00 às 18:00', evento: '16/07 a 18/07 09:00 às 20:00', desmontagem: '19/07 08:00 às 14:00', valor: 0 },
    { espaco: 'Auditório Torre 1', montagem: '14/07 12:00 às 18:00', evento: '15/07 a 18/07 09:00 às 19:00', desmontagem: '19/07 08:00 às 12:00', valor: 20000 },
    { espaco: 'Auditório Torre 2', montagem: '14/07 12:00 às 18:00', evento: '15/07 a 18/07 09:00 às 19:00', desmontagem: '19/07 08:00 às 12:00', valor: 15000 },
    { espaco: 'Salas modulares', montagem: '14/07 09:00 às 17:00', evento: '15/07 a 18/07 09:00 às 18:00', desmontagem: '19/07 08:00 às 12:00', valor: 9500 },
    { espaco: 'Credenciamento', montagem: '14/07 07:00 às 20:00', evento: '15/07 a 18/07 07:00 às 22:00', desmontagem: '19/07 07:00 às 12:00', valor: 7000 },
    { espaco: 'Praça de alimentação', montagem: '14/07 10:00 às 20:00', evento: '15/07 a 18/07 10:00 às 23:00', desmontagem: '19/07 08:00 às 14:00', valor: 45000 },
    { espaco: 'Área comum', montagem: '14/07 08:00 às 22:00', evento: '15/07 a 18/07 08:00 às 22:00', desmontagem: '19/07 08:00 às 18:00', valor: 8500 },
  ];

  const contrato = {
    numero: 'CONT-2026-023',
    locador: 'Consórcio BC Eventos SPE Ltda.',
    representanteLegal: 'Paulo Henrique de Oliveira',
    cnpj: '11.222.333/0001-44',
    email: 'juridico@feiraconstruir.com.br',
    telefone: '(47) 99999-1111',
    objeto: 'Locação de espaços para realização de feira de construção civil.',
    periodoLocacao: '14/07/2026 a 19/07/2026',
  };

  const parcelas = [
    { item: '1/3', vencimento: '15/06/2026', valor: 85500, status: 'Pago' },
    { item: '2/3', vencimento: '01/07/2026', valor: 114000, status: 'Pago' },
    { item: '3/3', vencimento: '20/07/2026', valor: 85500, status: 'Aguardando pagamento' },
  ];

  const operacional = [
    { fase: 'Pré-evento', situacao: 'Concluída', detalhe: 'Reunião técnica realizada e documentação validada.' },
    { fase: 'Montagem', situacao: 'Em andamento', detalhe: 'Controle de acesso e segurança em operação.' },
    { fase: 'Durante o evento', situacao: 'Programada', detalhe: 'Equipe operacional escalada por turno.' },
    { fase: 'Desmontagem', situacao: 'Programada', detalhe: 'Janela contratada para 19/07 até 18h.' },
    { fase: 'Pós-evento', situacao: 'A iniciar', detalhe: 'Aguardando vistoria final e termo de devolução.' },
  ];

  const despesasPosEvento = [
    { categoria: 'Energia elétrica', valor: 'R$ 4.500', status: 'Lançada' },
    { categoria: 'Ar-condicionado', valor: 'R$ 1.200', status: 'Lançada' },
    { categoria: 'Limpeza', valor: 'R$ 8.500', status: 'Lançada' },
    { categoria: 'Danos/avarias', valor: 'R$ 3.500', status: 'Pendente de cobrança' },
    { categoria: 'Materiais não retirados', valor: 'R$ 1.100', status: 'Pendente de cobrança' },
  ];

  const historico = [
    { data: '01/06/2026', acao: 'Proposta enviada', responsavel: 'Comercial' },
    { data: '10/06/2026', acao: 'Contrato assinado', responsavel: 'Jurídico' },
    { data: '14/06/2026', acao: 'Parcela 1 recebida', responsavel: 'Financeiro' },
    { data: '30/06/2026', acao: 'Parcela 2 recebida', responsavel: 'Financeiro' },
    { data: '10/07/2026', acao: 'Reunião técnica realizada', responsavel: 'Operacional' },
  ];

  const getBadge = (status) => {
    if (status === 'Assinado' || status === 'Pago' || status === 'Concluída') return <Badge className="badge-status-green">{status}</Badge>;
    if (status === 'Parcial' || status === 'Em andamento' || status === 'Programada' || status === 'Lançada') return <Badge className="badge-status-yellow">{status}</Badge>;
    if (status.includes('Aguardando') || status.includes('Pendente') || status === 'A iniciar') return <Badge className="badge-status-red">{status}</Badge>;
    return <Badge className="badge-status-neutral">{status}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>{`${evento.nome} - Expocentro Gestão 360`}</title>
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
              <p className="text-muted-foreground">{evento.locatario}</p>
            </div>
          </div>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Editar evento
          </Button>
        </div>

        <Tabs defaultValue="resumo" className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-11 w-max justify-start">
              <TabsTrigger value="resumo">Resumo</TabsTrigger>
              <TabsTrigger value="espacos">Espaços e períodos</TabsTrigger>
              <TabsTrigger value="contrato">Contrato</TabsTrigger>
              <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
              <TabsTrigger value="operacional">Operacional</TabsTrigger>
              <TabsTrigger value="fechamento">Fechamento pós-evento</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="resumo">
            <Card>
              <CardHeader>
                <CardTitle>Resumo executivo do evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div><p className="text-sm text-muted-foreground">Nome do evento</p><p className="font-semibold">{evento.nome}</p></div>
                  <div><p className="text-sm text-muted-foreground">Locatário / empresa</p><p className="font-semibold">{evento.locatario}</p></div>
                  <div><p className="text-sm text-muted-foreground">Tipo de evento</p><p className="font-semibold">{evento.tipoEvento}</p></div>
                  <div><p className="text-sm text-muted-foreground">Período de montagem</p><p className="font-semibold">{evento.periodoMontagem}</p></div>
                  <div><p className="text-sm text-muted-foreground">Período do evento</p><p className="font-semibold">{evento.periodoEvento}</p></div>
                  <div><p className="text-sm text-muted-foreground">Período de desmontagem</p><p className="font-semibold">{evento.periodoDesmontagem}</p></div>
                  <div><p className="text-sm text-muted-foreground">Horário contratado</p><p className="font-semibold">{evento.horarioContratado}</p></div>
                  <div><p className="text-sm text-muted-foreground">Valor contratado</p><p className="font-semibold">R$ {evento.valorContratado.toLocaleString('pt-BR')}</p></div>
                  <div><p className="text-sm text-muted-foreground">Receita recebida</p><p className="font-semibold">R$ {evento.receitaRecebida.toLocaleString('pt-BR')}</p></div>
                  <div><p className="text-sm text-muted-foreground">Tipo de contrato</p><p className="font-semibold">{evento.tipoContrato}</p></div>
                  <div><p className="text-sm text-muted-foreground">Situação contratual</p>{getBadge(evento.statusContratual)}</div>
                  <div><p className="text-sm text-muted-foreground">Situação financeira</p>{getBadge(evento.statusFinanceiro)}</div>
                  <div><p className="text-sm text-muted-foreground">Situação operacional</p>{getBadge(evento.statusOperacional)}</div>
                  <div><p className="text-sm text-muted-foreground">Pendência-chave</p>{getBadge(evento.pendenciaPrincipal)}</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espacos">
            <Card>
              <CardHeader>
                <CardTitle>Espaços e períodos contratados (múltiplos)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Espaço locado</TableHead>
                      <TableHead>Montagem</TableHead>
                      <TableHead>Evento</TableHead>
                      <TableHead>Desmontagem</TableHead>
                      <TableHead>Valor por espaço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {espacosPeriodos.map((item) => (
                      <TableRow key={item.espaco}>
                        <TableCell className="font-medium">{item.espaco}</TableCell>
                        <TableCell>{item.montagem}</TableCell>
                        <TableCell>{item.evento}</TableCell>
                        <TableCell>{item.desmontagem}</TableCell>
                        <TableCell>R$ {item.valor.toLocaleString('pt-BR')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contrato">
            <Card>
              <CardHeader>
                <CardTitle>Dados contratuais vinculados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div><p className="text-sm text-muted-foreground">Número do contrato</p><p className="font-semibold">{contrato.numero}</p></div>
                  <div><p className="text-sm text-muted-foreground">Locador</p><p className="font-semibold">{contrato.locador}</p></div>
                  <div><p className="text-sm text-muted-foreground">Representante legal</p><p className="font-semibold">{contrato.representanteLegal}</p></div>
                  <div><p className="text-sm text-muted-foreground">CNPJ</p><p className="font-semibold">{contrato.cnpj}</p></div>
                  <div><p className="text-sm text-muted-foreground">E-mail</p><p className="font-semibold">{contrato.email}</p></div>
                  <div><p className="text-sm text-muted-foreground">Telefone</p><p className="font-semibold">{contrato.telefone}</p></div>
                  <div className="md:col-span-2"><p className="text-sm text-muted-foreground">Objeto/finalidade</p><p className="font-semibold">{contrato.objeto}</p></div>
                  <div><p className="text-sm text-muted-foreground">Período de locação</p><p className="font-semibold">{contrato.periodoLocacao}</p></div>
                </div>
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/propostas-contratos/1">
                    <FileText className="h-4 w-4" />
                    Abrir detalhe completo do contrato
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Valor da locação</p><p className="text-2xl font-bold">R$ 285.000</p></CardContent></Card>
              <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Caução (20%)</p><p className="text-2xl font-bold">R$ 57.000</p></CardContent></Card>
              <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Receita recebida</p><p className="text-2xl font-bold">R$ 171.000</p></CardContent></Card>
              <Card><CardContent className="p-6"><p className="text-sm text-muted-foreground">Saldo pendente</p><p className="text-2xl font-bold text-destructive">R$ 114.000</p></CardContent></Card>
            </div>

            <Card>
              <CardHeader><CardTitle>Parcelas e vencimentos</CardTitle></CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Parcela</TableHead>
                      <TableHead>Vencimento</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Situação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {parcelas.map((parcela) => (
                      <TableRow key={parcela.item}>
                        <TableCell className="font-medium">{parcela.item}</TableCell>
                        <TableCell>{parcela.vencimento}</TableCell>
                        <TableCell>R$ {parcela.valor.toLocaleString('pt-BR')}</TableCell>
                        <TableCell>{getBadge(parcela.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operacional">
            <Card>
              <CardHeader><CardTitle>Situação operacional por fase</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {operacional.map((item) => (
                  <div key={item.fase} className="rounded-md border border-border bg-muted/20 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold">{item.fase}</p>
                      {getBadge(item.situacao)}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.detalhe}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fechamento" className="space-y-6">
            <Card>
              <CardHeader><CardTitle>Fechamento pós-evento</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-md border border-border p-4">
                    <p className="text-sm text-muted-foreground">Termo de devolução</p>
                    <p className="font-semibold">Pendente de assinatura</p>
                  </div>
                  <div className="rounded-md border border-border p-4">
                    <p className="text-sm text-muted-foreground">Nota de débito</p>
                    <p className="font-semibold">Em emissão</p>
                  </div>
                  <div className="rounded-md border border-border p-4">
                    <p className="text-sm text-muted-foreground">Prazo de pagamento da nota de débito</p>
                    <p className="font-semibold">15 dias</p>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Categoria de despesa</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Situação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {despesasPosEvento.map((item) => (
                      <TableRow key={item.categoria}>
                        <TableCell className="font-medium">{item.categoria}</TableCell>
                        <TableCell>{item.valor}</TableCell>
                        <TableCell>{getBadge(item.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico">
            <Card>
              <CardHeader><CardTitle>Histórico</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {historico.map((item) => (
                  <div key={`${item.data}-${item.acao}`} className="rounded-md border border-border p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium">{item.acao}</p>
                      <p className="text-xs text-muted-foreground">{item.data}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Responsável: {item.responsavel}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default EventoDetalhePage;
