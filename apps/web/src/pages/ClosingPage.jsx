
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, FileCheck, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

function ClosingPage() {
  const metrics = [
    { title: 'Eventos em Fechamento', value: '4', icon: Clock, color: 'text-warning' },
    { title: 'Vistorias Pendentes', value: '2', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Danos Registrados', value: '5', icon: FileCheck, color: 'text-warning' },
    { title: 'Despesas Não Cobradas', value: 'R$ 12.500', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Notas de Débito Pendentes', value: '3', icon: FileCheck, color: 'text-warning' },
    { title: 'Fechamentos Concluídos', value: '18', icon: CheckCircle2, color: 'text-success' },
  ];

  const closingEvents = [
    {
      id: 1,
      evento: 'Feira Construir SC 2026',
      empresa: 'Feira Construir SC',
      data: '2026-06-20',
      vistoria: 'Concluída',
      danos: 'R$ 3.500',
      despesas: 'R$ 8.200',
      notaDebito: 'Pendente',
      status: 'Em andamento'
    },
    {
      id: 2,
      evento: 'Congresso Saúde e Tecnologia',
      empresa: 'Associação Médica Regional',
      data: '2026-06-18',
      vistoria: 'Pendente',
      danos: '-',
      despesas: '-',
      notaDebito: 'Não iniciada',
      status: 'Atrasado'
    },
    {
      id: 3,
      evento: 'Expo Turismo Litoral',
      empresa: 'Expo Turismo Litoral Eventos',
      data: '2026-06-15',
      vistoria: 'Concluída',
      danos: 'R$ 0',
      despesas: 'R$ 4.300',
      notaDebito: 'Emitida',
      status: 'Aguardando Pgto'
    }
  ];

  const checklists = [
    { task: 'Vistoria Concluída', status: 'completed' },
    { task: 'Termo de Devolução Assinado', status: 'completed' },
    { task: 'Danos Registrados', status: 'completed' },
    { task: 'Despesas Pós-Evento Lançadas', status: 'in-progress' },
    { task: 'Nota de Débito Emitida', status: 'pending' },
    { task: 'Acompanhamento de Pagamento', status: 'pending' },
    { task: 'Encerramento Final', status: 'pending' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Concluída':
      case 'Emitida':
        return <Badge className="badge-status-green">{status}</Badge>;
      case 'Em andamento':
      case 'Aguardando Pgto':
      case 'Pendente':
        return <Badge className="badge-status-yellow">{status}</Badge>;
      case 'Atrasado':
      case 'Não iniciada':
        return <Badge className="badge-status-red">{status}</Badge>;
      default:
        return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  const renderChecklistIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-warning" />;
      case 'pending': return <AlertCircle className="h-5 w-5 text-muted-foreground opacity-50" />;
      default: return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Fechamento Pós-Evento - Expocentro Gestão 360`}</title>
      </Helmet>
      
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Fechamento Pós-Evento</h1>
            <p className="text-muted-foreground">Controle de avarias, repasse de despesas e encerramento operacional</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {metrics.map((metric, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 flex flex-col items-start gap-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-xs font-medium text-muted-foreground leading-none">{metric.title}</span>
                </div>
                <span className="text-2xl font-bold tabular-nums">{metric.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle>Eventos em Fechamento</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Evento / Empresa</TableHead>
                    <TableHead>Data Fim</TableHead>
                    <TableHead>Vistoria</TableHead>
                    <TableHead>Danos & Despesas</TableHead>
                    <TableHead>Status Geral</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {closingEvents.map((evt) => (
                    <TableRow key={evt.id} className="table-row-tall">
                      <TableCell>
                        <div className="font-semibold text-foreground">{evt.evento}</div>
                        <div className="text-xs text-muted-foreground">{evt.empresa}</div>
                      </TableCell>
                      <TableCell>{new Date(evt.data).toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>{getStatusBadge(evt.vistoria)}</TableCell>
                      <TableCell>
                        <div className="text-sm">D: {evt.danos}</div>
                        <div className="text-sm">E: {evt.despesas}</div>
                      </TableCell>
                      <TableCell>{getStatusBadge(evt.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-sm bg-muted/20">
            <CardHeader>
              <CardTitle>Checklist de Fechamento Padrão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {checklists.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {renderChecklistIcon(item.status)}
                    <span className={`text-sm ${item.status === 'pending' ? 'text-muted-foreground' : 'font-medium text-foreground'}`}>
                      {item.task}
                    </span>
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
