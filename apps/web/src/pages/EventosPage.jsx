
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, CalendarCheck, CalendarDays, FileSignature, Wallet, ClipboardList } from 'lucide-react';

function EventosPage() {
  const metrics = [
    { title: 'Eventos Confirmados', value: '23', icon: CalendarCheck, color: 'text-success' },
    { title: 'Em Negociação', value: '12', icon: CalendarDays, color: 'text-warning' },
    { title: 'Contrato Pendente', value: '5', icon: FileSignature, color: 'text-destructive' },
    { title: 'Financeiro em Aberto', value: '8', icon: Wallet, color: 'text-warning' },
    { title: 'Em Operação (Atuais)', value: '2', icon: ClipboardList, color: 'text-primary' },
  ];

  const eventos = [
    {
      id: 1,
      evento: 'Feira Construir SC 2026',
      empresa: 'Feira Construir SC',
      data: '15/07/2026',
      espaco: 'Pavilhão Norte',
      valor: 'R$ 285.000',
      receita: 'R$ 171.000',
      status: 'Confirmado',
      pendencia: 'Aguardando Pagamento'
    },
    {
      id: 2,
      evento: 'Congresso Saúde e Tecnologia',
      empresa: 'Congresso Saúde e Tecnologia',
      data: '28/07/2026',
      espaco: 'Torre Norte',
      valor: 'R$ 95.000',
      receita: 'R$ 95.000',
      status: 'Confirmado',
      pendencia: 'Ok'
    },
    {
      id: 3,
      evento: 'Expo Turismo Litoral',
      empresa: 'Expo Turismo Litoral',
      data: '10/08/2026',
      espaco: 'Pavilhão Sul',
      valor: 'R$ 220.000',
      receita: 'R$ 0',
      status: 'Em Negociação',
      pendencia: 'Contrato Pendente'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Confirmado': return <Badge className="badge-status-green">{status}</Badge>;
      case 'Em Negociação': return <Badge className="badge-status-yellow">{status}</Badge>;
      default: return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  const getPendingBadge = (pendencia) => {
    switch(pendencia) {
      case 'Aguardando Pagamento':
      case 'Contrato Pendente':
        return <Badge className="badge-status-red text-xs">{pendencia}</Badge>;
      case 'Ok':
        return <Badge className="badge-status-green text-xs">{pendencia}</Badge>;
      default:
        return <Badge className="badge-status-neutral text-xs">{pendencia}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Eventos - Pipeline - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Pipeline de Eventos</h1>
            <p className="text-muted-foreground">Visão geral do cronograma e status de locações</p>
          </div>
          <Button className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" />
            Novo Evento
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-xs font-medium text-muted-foreground">{metric.title}</span>
                </div>
                <span className="text-2xl font-bold tabular-nums text-foreground">{metric.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Evento</TableHead>
                  <TableHead>Locatário</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Espaço Locado</TableHead>
                  <TableHead>Vlr Contratado</TableHead>
                  <TableHead>Receita Rec.</TableHead>
                  <TableHead>Status Geral</TableHead>
                  <TableHead>Pendência Principal</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eventos.map((evento) => (
                  <TableRow 
                    key={evento.id} 
                    className={`table-row-tall ${evento.pendencia !== 'Ok' ? 'bg-warning/5 hover:bg-warning/10' : 'even:bg-muted/10'}`}
                  >
                    <TableCell className="font-semibold">{evento.evento}</TableCell>
                    <TableCell className="text-muted-foreground">{evento.empresa}</TableCell>
                    <TableCell>{evento.data}</TableCell>
                    <TableCell>{evento.espaco}</TableCell>
                    <TableCell className="tabular-nums font-medium">{evento.valor}</TableCell>
                    <TableCell className="tabular-nums font-medium text-success">{evento.receita}</TableCell>
                    <TableCell>{getStatusBadge(evento.status)}</TableCell>
                    <TableCell>{getPendingBadge(evento.pendencia)}</TableCell>
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
      </div>
    </>
  );
}

export default EventosPage;
