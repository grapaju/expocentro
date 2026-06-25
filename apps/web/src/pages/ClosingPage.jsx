import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, FileCheck, CheckCircle2, AlertCircle, Clock, CircleDollarSign } from 'lucide-react';

function ClosingPage() {
  const metrics = [
    { title: 'Eventos em fechamento', value: '4', icon: Clock, color: 'text-warning' },
    { title: 'Vistorias pendentes', value: '2', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Danos/avarias registrados', value: '5', icon: FileCheck, color: 'text-warning' },
    { title: 'Despesas não cobradas', value: 'R$ 12.500', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Notas de débito pendentes', value: '3', icon: FileCheck, color: 'text-warning' },
    { title: 'Fechamentos concluídos', value: '18', icon: CheckCircle2, color: 'text-success' },
    { title: 'Valores aguardando pagamento', value: 'R$ 22.400', icon: CircleDollarSign, color: 'text-destructive' },
  ];

  const closingEvents = [
    {
      id: 1,
      eventoLocatario: 'Feira Construir SC 2026 / Feira Construir SC Ltda.',
      dataTermino: '20/06/2026',
      vistoria: 'Concluída',
      termoDevolucao: 'Pendente de assinatura',
      danosAvarias: 'R$ 3.500',
      despesasAdicionais: 'R$ 8.200',
      notaDebito: 'Emitida',
      prazoPagamento: '05/07/2026',
      statusGeral: 'Aguardando pagamento',
    },
    {
      id: 2,
      eventoLocatario: 'Congresso Saúde e Tecnologia / Associação Médica Regional',
      dataTermino: '18/06/2026',
      vistoria: 'Pendente',
      termoDevolucao: 'Não iniciado',
      danosAvarias: 'R$ 0',
      despesasAdicionais: 'R$ 0',
      notaDebito: 'Não iniciada',
      prazoPagamento: '03/07/2026',
      statusGeral: 'Atrasado',
    },
    {
      id: 3,
      eventoLocatario: 'Expo Turismo Litoral / Expo Turismo Eventos',
      dataTermino: '15/06/2026',
      vistoria: 'Concluída',
      termoDevolucao: 'Assinado',
      danosAvarias: 'R$ 1.100',
      despesasAdicionais: 'R$ 4.300',
      notaDebito: 'Emitida',
      prazoPagamento: '30/06/2026',
      statusGeral: 'Em conferência',
    },
  ];

  const categoriasDespesas = [
    'Energia elétrica',
    'Ar-condicionado',
    'Internet',
    'Ponto de energia',
    'Ponto de água',
    'Horas excedentes',
    'Limpeza',
    'Segurança',
    'Ambulância',
    'Gerador',
    'Hidráulica',
    'Danos/avarias',
    'Materiais não retirados',
    'Outros',
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Concluída':
      case 'Emitida':
      case 'Assinado':
        return <Badge className="badge-status-green text-xs px-2 py-0.5">{status}</Badge>;
      case 'Em conferência':
      case 'Conferência':
      case 'Pendente de assinatura':
      case 'Termo pendente':
      case 'Aguardando pagamento':
      case 'Aguard. pagto.':
      case 'Pendente':
        return <Badge className="badge-status-yellow text-xs px-2 py-0.5">{status}</Badge>;
      case 'Atrasado':
      case 'Não iniciada':
      case 'Não iniciado':
        return <Badge className="badge-status-red text-xs px-2 py-0.5">{status}</Badge>;
      default:
        return <Badge className="badge-status-neutral text-xs px-2 py-0.5">{status}</Badge>;
    }
  };

  const getShortStatus = (status) => {
    if (status === 'Pendente de assinatura') return 'Termo pendente';
    if (status === 'Aguardando pagamento') return 'Aguard. pagto.';
    if (status === 'Em conferência') return 'Conferência';
    return status;
  };

  return (
    <>
      <Helmet>
        <title>Fechamento Pós-Evento - Expocentro Gestão 360</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Fechamento Pós-Evento</h1>
          <p className="text-muted-foreground">Conferência final de vistoria, despesas e encerramento financeiro por evento</p>
        </div>

        <Card className="shadow-sm bg-muted/20">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Prazo de pagamento da nota de débito: 15 dias</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.title} className="shadow-sm">
              <CardContent className="p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-xs font-medium text-muted-foreground leading-tight">{metric.title}</span>
                </div>
                <span className="text-xl font-bold tabular-nums">{metric.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <Card className="xl:col-span-3 shadow-sm">
            <CardHeader>
              <CardTitle>Eventos em fechamento</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="w-[28%] text-[11px] uppercase tracking-wide">Evento / locatário</TableHead>
                    <TableHead className="hidden xl:table-cell w-[10%] text-[11px] uppercase tracking-wide">Término</TableHead>
                    <TableHead className="w-[17%] text-[11px] uppercase tracking-wide">Vistoria e termo</TableHead>
                    <TableHead className="w-[22%] text-[11px] uppercase tracking-wide">Financeiro pós-evento</TableHead>
                    <TableHead className="hidden 2xl:table-cell w-[10%] text-[11px] uppercase tracking-wide">Prazo pagto.</TableHead>
                    <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                    <TableHead className="w-[3%] text-right text-[11px] uppercase tracking-wide">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {closingEvents.map((evt) => (
                    <TableRow key={evt.id} className="table-row-tall h-auto align-top">
                      <TableCell className="py-5">
                        <div className="font-semibold text-sm leading-tight break-words">{evt.eventoLocatario.split(' / ')[0]}</div>
                        <div className="text-[11px] text-muted-foreground mt-1 leading-tight break-words">{evt.eventoLocatario.split(' / ')[1]}</div>
                        <div className="xl:hidden text-[11px] text-muted-foreground mt-1">Término: {evt.dataTermino}</div>
                      </TableCell>
                      <TableCell className="hidden xl:table-cell py-5">{evt.dataTermino}</TableCell>
                      <TableCell className="py-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-muted-foreground">Vistoria</span>
                          {getStatusBadge(evt.vistoria)}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-muted-foreground">Termo</span>
                          {getStatusBadge(getShortStatus(evt.termoDevolucao))}
                        </div>
                      </TableCell>
                      <TableCell className="py-5">
                        <div className="text-sm leading-tight break-words">Danos: {evt.danosAvarias}</div>
                        <div className="text-sm leading-tight break-words">Despesas: {evt.despesasAdicionais}</div>
                        <div className="mt-1">{getStatusBadge(getShortStatus(evt.notaDebito))}</div>
                        <div className="2xl:hidden text-[11px] text-muted-foreground mt-1">Prazo: {evt.prazoPagamento}</div>
                      </TableCell>
                      <TableCell className="hidden 2xl:table-cell py-5">{evt.prazoPagamento}</TableCell>
                      <TableCell className="py-5">{getStatusBadge(getShortStatus(evt.statusGeral))}</TableCell>
                      <TableCell className="text-right py-5">
                        <Button variant="ghost" size="icon" className="h-8 w-8" title="Ver detalhes">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Categorias de despesas pós-evento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {categoriasDespesas.map((item) => (
                  <div key={item} className="rounded-md border border-border bg-muted/20 px-3 py-2 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ClosingPage;
