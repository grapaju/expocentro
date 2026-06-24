
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { 
  Download, Calendar
} from 'lucide-react';

function DashboardPage() {
  const handleExport = () => {
    toast.success("Executive Summary exported to PDF.");
  };

  const nextEvents = [
    {
      evento: 'Feira Construir SC 2026',
      empresa: 'Feira Construir SC',
      data: '2026-07-15',
      financialStatus: 'Paid',
      mainPending: 'Operational Checklist'
    },
    {
      evento: 'Congresso Saúde e Tecnologia',
      empresa: 'Associação Médica',
      data: '2026-07-28',
      financialStatus: 'Partial',
      mainPending: 'Awaiting Payment'
    },
    {
      evento: 'Expo Turismo Litoral',
      empresa: 'Expo Turismo Eventos',
      data: '2026-08-10',
      financialStatus: 'Open',
      mainPending: 'Pending Contract'
    },
    {
      evento: 'Formatura Medicina 2026',
      empresa: 'Formaturas Premium',
      data: '2026-08-22',
      financialStatus: 'Partial',
      mainPending: 'Technical Meeting'
    },
  ];

  const getBadgeForFinancial = (status) => {
    switch (status) {
      case 'Paid': return <Badge className="badge-status-green">Pago</Badge>;
      case 'Partial': return <Badge className="badge-status-yellow">Parcial</Badge>;
      case 'Overdue': return <Badge className="badge-status-red">Atrasado</Badge>;
      case 'Open': return <Badge className="badge-status-neutral">Em Aberto</Badge>;
      default: return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  const getBadgeForPending = (status) => {
    switch (status) {
      case 'Awaiting Payment': 
      case 'Pending Contract': 
      case 'Post-Event Closing':
        return <Badge className="badge-status-red text-xs">{status}</Badge>;
      case 'Operational Checklist':
      case 'Technical Meeting':
        return <Badge className="badge-status-yellow text-xs">{status}</Badge>;
      default:
        return <Badge className="badge-status-green text-xs">{status}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Resumo Executivo - Expocentro</title>
      </Helmet>

      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Painel Executivo</h1>
            <p className="text-muted-foreground">Indicadores e controle de riscos do Expocentro Balneário Camboriú</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-card border rounded-md px-3 py-1.5 shadow-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <Select defaultValue="month">
                <SelectTrigger className="h-7 border-0 shadow-none focus:ring-0 p-0 text-sm font-medium w-32">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Este Mês</SelectItem>
                  <SelectItem value="year">Este Ano</SelectItem>
                  <SelectItem value="custom">Personalizado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              Exportar Resumo
            </Button>
          </div>
        </div>

        <section className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
          <div className="bg-muted/50 p-4 border-b border-border">
            <h2 className="text-lg font-bold">Riscos Controlados pelo Sistema</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y lg:divide-y-0 lg:divide-x divide-border">
            {[
              { label: 'Contratos Sem Assinatura', val: '3', danger: true },
              { label: 'Retornos Vencidos', val: '5', danger: true },
              { label: 'Eventos sem Reunião Técnica', val: '2', danger: true },
              { label: 'Despesas Pós-Evento Não Cobradas', val: 'R$ 12,5k', danger: true },
              { label: 'Parcelas Vencidas', val: 'R$ 8,3k', danger: true },
              { label: 'Checklist Operacional Incompleto', val: '4', danger: true },
            ].map((item, i) => (
              <div key={i} className="p-4 flex flex-col justify-between hover:bg-muted/20 transition-colors">
                <span className="text-xs font-medium text-muted-foreground leading-tight mb-2">{item.label}</span>
                <span className={`text-xl font-bold tabular-nums ${item.danger ? 'text-destructive' : 'text-foreground'}`}>{item.val}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <Card className="shadow-sm">
            <CardHeader className="bg-muted/30 border-b border-border">
              <CardTitle>Próximos Eventos em Calendário</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/20">
                      <TableHead>Evento</TableHead>
                      <TableHead>Empresa</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Status Financeiro</TableHead>
                      <TableHead>Pendência Principal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {nextEvents.map((evento, index) => (
                      <TableRow key={index} className="table-row-tall">
                        <TableCell className="font-semibold text-foreground">{evento.evento}</TableCell>
                        <TableCell>{evento.empresa}</TableCell>
                        <TableCell>{new Date(evento.data).toLocaleDateString('pt-BR')}</TableCell>
                        <TableCell>{getBadgeForFinancial(evento.financialStatus)}</TableCell>
                        <TableCell>{getBadgeForPending(evento.mainPending)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
