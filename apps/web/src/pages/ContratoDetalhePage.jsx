import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit } from 'lucide-react';

function ContratoDetalhePage() {
  const { id } = useParams();

  const contrato = {
    numero: `CONT-2026-0${id || '23'}`,
    evento: 'Feira Construir SC 2026',
    locador: 'Consórcio BC Eventos SPE Ltda.',
    locatario: 'Feira Construir SC Ltda.',
    representanteLegal: 'Paulo Henrique de Oliveira',
    cnpj: '11.222.333/0001-44',
    email: 'juridico@feiraconstruir.com.br',
    telefone: '(47) 99999-1111',
    tipoContrato: 'Locação onerosa',
    objeto: 'Locação de espaços para realização de feira setorial.',
    dataEvento: '15/07/2026 a 18/07/2026',
    periodoLocacao: '14/07/2026 a 19/07/2026',
    formaPagamento: '3 parcelas (30%, 40%, 30%)',
    valorTotal: 285000,
    caucaoPadrao: 57000,
    termoResponsabilidade: 'Assinado digitalmente em 10/06/2026',
    regulamentoEntregue: true,
    normasEntregues: true,
    contratoAssinado: true,
    observacoes: 'Contrato com aditivo para ampliação de área de credenciamento.',
  };

  const espacos = [
    { espaco: 'Pavilhão Norte', periodo: '14/07 a 19/07', valor: 180000 },
    { espaco: 'Credenciamento 1', periodo: '14/07 a 19/07', valor: 12000 },
    { espaco: 'Praça de Alimentação', periodo: '15/07 a 18/07', valor: 45000 },
    { espaco: 'Área comum', periodo: '15/07 a 18/07', valor: 48000 },
  ];

  const parcelas = [
    { parcela: '1/3', vencimento: '15/06/2026', valor: 85500, status: 'Pago' },
    { parcela: '2/3', vencimento: '01/07/2026', valor: 114000, status: 'Pago' },
    { parcela: '3/3', vencimento: '20/07/2026', valor: 85500, status: 'Aguardando pagamento' },
  ];

  const pendencias = [
    'Aguardando pagamento da parcela 3/3.',
    'Conferir assinatura do termo de devolução no fechamento pós-evento.',
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Pago':
        return <Badge className="badge-status-green">Pago</Badge>;
      case 'Aguardando pagamento':
        return <Badge className="badge-status-red">Aguardando pagamento</Badge>;
      default:
        return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Contrato ${contrato.numero} - Expocentro Gestão 360`}</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/propostas-contratos">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">Contrato {contrato.numero}</h1>
              <p className="text-muted-foreground">{contrato.evento}</p>
            </div>
          </div>
          <Button className="gap-2">
            <Edit className="h-4 w-4" />
            Editar contrato
          </Button>
        </div>

        <Tabs defaultValue="dados-gerais" className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-11 w-max justify-start">
              <TabsTrigger value="dados-gerais">Dados gerais</TabsTrigger>
              <TabsTrigger value="locatario">Locatário</TabsTrigger>
              <TabsTrigger value="espacos-periodos">Espaços e períodos contratados</TabsTrigger>
              <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
              <TabsTrigger value="caucao">Caução / termo de responsabilidade</TabsTrigger>
              <TabsTrigger value="documentos">Documentos entregues</TabsTrigger>
              <TabsTrigger value="pendencias">Pendências</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dados-gerais">
            <Card>
              <CardHeader>
                <CardTitle>Dados gerais do contrato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Número do contrato</p>
                    <p className="font-semibold">{contrato.numero}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tipo de contrato</p>
                    <p className="font-semibold">{contrato.tipoContrato}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Evento</p>
                    <p className="font-semibold">{contrato.evento}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Locador</p>
                    <p className="font-semibold">{contrato.locador}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Objeto/finalidade</p>
                    <p className="font-semibold">{contrato.objeto}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Data do evento</p>
                    <p className="font-semibold">{contrato.dataEvento}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Período de locação</p>
                    <p className="font-semibold">{contrato.periodoLocacao}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Observações</p>
                    <p className="font-semibold">{contrato.observacoes}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="locatario">
            <Card>
              <CardHeader>
                <CardTitle>Dados do locatário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Locatário</p>
                    <p className="font-semibold">{contrato.locatario}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Representante legal</p>
                    <p className="font-semibold">{contrato.representanteLegal}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CNPJ</p>
                    <p className="font-semibold">{contrato.cnpj}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <p className="font-semibold">{contrato.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-semibold">{contrato.telefone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espacos-periodos">
            <Card>
              <CardHeader>
                <CardTitle>Espaços e períodos contratados</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Espaço locado</TableHead>
                      <TableHead>Período contratado</TableHead>
                      <TableHead>Valor por espaço</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {espacos.map((item) => (
                      <TableRow key={item.espaco}>
                        <TableCell className="font-medium">{item.espaco}</TableCell>
                        <TableCell>{item.periodo}</TableCell>
                        <TableCell>R$ {item.valor.toLocaleString('pt-BR')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Valor total</p>
                  <p className="text-2xl font-bold">R$ {contrato.valorTotal.toLocaleString('pt-BR')}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Forma de pagamento</p>
                  <p className="text-base font-semibold">{contrato.formaPagamento}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">Vencimentos</p>
                  <p className="text-base font-semibold">15/06, 01/07 e 20/07</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Parcelas</CardTitle>
              </CardHeader>
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
                      <TableRow key={parcela.parcela}>
                        <TableCell className="font-medium">{parcela.parcela}</TableCell>
                        <TableCell>{parcela.vencimento}</TableCell>
                        <TableCell>R$ {parcela.valor.toLocaleString('pt-BR')}</TableCell>
                        <TableCell>{getStatusBadge(parcela.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="caucao">
            <Card>
              <CardHeader>
                <CardTitle>Caução e termo de responsabilidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Caução padrão de 20%</p>
                    <p className="font-semibold">R$ {contrato.caucaoPadrao.toLocaleString('pt-BR')}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Termo de responsabilidade</p>
                    <p className="font-semibold">{contrato.termoResponsabilidade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentos">
            <Card>
              <CardHeader>
                <CardTitle>Documentos entregues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={contrato.regulamentoEntregue} disabled />
                    <span>Regulamento técnico entregue</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox checked={contrato.normasEntregues} disabled />
                    <span>Normas de montagem e desmontagem entregues</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox checked={contrato.contratoAssinado} disabled />
                    <span>Contrato assinado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pendencias">
            <Card>
              <CardHeader>
                <CardTitle>Pendências</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendencias.map((pendencia) => (
                    <div key={pendencia} className="rounded-md border border-border bg-muted/20 p-3 text-sm">
                      {pendencia}
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

export default ContratoDetalhePage;
