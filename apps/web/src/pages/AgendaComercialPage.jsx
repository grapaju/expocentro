
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { CalendarClock, AlertCircle, PhoneOff, FileWarning, Plus, Eye } from 'lucide-react';

function AgendaComercialPage() {
  const metrics = [
    { title: 'Retornos para Hoje', value: '4', icon: CalendarClock, color: 'text-warning' },
    { title: 'Retornos Atrasados', value: '5', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Propostas sem Resposta (7+ dias)', value: '3', icon: FileWarning, color: 'text-destructive' },
    { title: 'Sem Contato (15+ dias)', value: '12', icon: PhoneOff, color: 'text-muted-foreground' },
  ];

  const agenda = [
    {
      id: 1,
      empresa: 'Organizadora de Feiras Brasil',
      contato: 'Carlos Mendes',
      dataContato: '2026-06-15',
      proximaAcao: 'Acompanhar aprovação da proposta',
      dataRetorno: '2026-06-23', // Today
      prioridade: 'Alta',
      status: 'Para Hoje'
    },
    {
      id: 2,
      empresa: 'Eventos Corporativos Sul',
      contato: 'Ana Paula Costa',
      dataContato: '2026-06-10',
      proximaAcao: 'Agendar visita técnica',
      dataRetorno: '2026-06-18', // Past
      prioridade: 'Urgente',
      status: 'Atrasado'
    },
    {
      id: 3,
      empresa: 'Congresso Saúde',
      contato: 'Roberto Silva',
      dataContato: '2026-06-20',
      proximaAcao: 'Enviar aditivo',
      dataRetorno: '2026-06-25', // Future
      prioridade: 'Média',
      status: 'Pendente'
    },
    {
      id: 4,
      empresa: 'Associação Regional',
      contato: 'Lucia Fernandes',
      dataContato: '2026-06-22',
      proximaAcao: 'Finalizado',
      dataRetorno: '-',
      prioridade: 'Baixa',
      status: 'Concluído'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Para Hoje': return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Hoje</Badge>;
      case 'Atrasado': return <Badge className="badge-status-red text-xs px-2 py-0.5">Atrasado</Badge>;
      case 'Concluído': return <Badge className="badge-status-green text-xs px-2 py-0.5">Concluído</Badge>;
      default: return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Pendente</Badge>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'Urgente': return <Badge variant="destructive" className="text-xs px-2 py-0.5">Urgente</Badge>;
      case 'Alta': return <Badge className="bg-primary hover:bg-primary text-xs px-2 py-0.5">Alta</Badge>;
      default: return <Badge variant="outline" className="text-xs px-2 py-0.5">{priority}</Badge>;
    }
  };

  const getRowClass = (status) => {
    switch(status) {
      case 'Atrasado': return 'bg-destructive/5 hover:bg-destructive/10 border-l-4 border-l-destructive';
      case 'Para Hoje': return 'bg-warning/5 hover:bg-warning/10 border-l-4 border-l-warning';
      case 'Concluído': return 'opacity-60';
      default: return 'border-l-4 border-l-transparent';
    }
  };

  return (
    <>
      <Helmet>
        <title>Agenda Comercial - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Central de Atividades</h1>
            <p className="text-muted-foreground">Prioridades comerciais, próximos retornos e follow-ups críticos</p>
          </div>
          <Button onClick={() => toast("Modal de registro em breve.")} className="gap-2 shadow-md" size="lg">
            <Plus className="h-5 w-5" />
            Registrar Novo Contato
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  <span className="text-sm font-medium text-muted-foreground">{metric.title}</span>
                </div>
                <span className="text-3xl font-bold tabular-nums text-foreground">{metric.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="pl-6 w-[24%] text-[11px] uppercase tracking-wide">Empresa</TableHead>
                  <TableHead className="w-[16%] text-[11px] uppercase tracking-wide">Contato</TableHead>
                  <TableHead className="hidden xl:table-cell w-[12%] text-[11px] uppercase tracking-wide">Data contato</TableHead>
                  <TableHead className="w-[24%] text-[11px] uppercase tracking-wide">Próxima ação comercial</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Data retorno</TableHead>
                  <TableHead className="w-[8%] text-[11px] uppercase tracking-wide">Prioridade</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                  <TableHead className="w-[3%] text-right text-[11px] uppercase tracking-wide">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agenda.map((item) => (
                  <TableRow key={item.id} className={`table-row-tall h-auto align-top ${getRowClass(item.status)}`}>
                    <TableCell className="font-semibold pl-6 py-5">
                      <div className="text-sm leading-tight break-words">{item.empresa}</div>
                      <div className="xl:hidden text-[11px] text-muted-foreground mt-1">Contato em {new Date(item.dataContato).toLocaleDateString('pt-BR')}</div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight break-words">{item.contato}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell py-5 text-muted-foreground">{new Date(item.dataContato).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight break-words">{item.proximaAcao}</div>
                    </TableCell>
                    <TableCell className="font-medium py-5">{item.dataRetorno !== '-' ? new Date(item.dataRetorno).toLocaleDateString('pt-BR') : '-'}</TableCell>
                    <TableCell className="py-5">{getPriorityBadge(item.prioridade)}</TableCell>
                    <TableCell className="py-5">{getStatusBadge(item.status)}</TableCell>
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
      </div>
    </>
  );
}

export default AgendaComercialPage;
