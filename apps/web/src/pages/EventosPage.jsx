
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, CalendarCheck, CalendarDays, FileSignature, Wallet, ClipboardList, Hammer, Truck } from 'lucide-react';

function EventosPage() {
  const metrics = [
    { title: 'Eventos confirmados', value: '23', icon: CalendarCheck, color: 'text-success' },
    { title: 'Com montagem em andamento', value: '6', icon: Hammer, color: 'text-warning' },
    { title: 'Com desmontagem programada', value: '4', icon: Truck, color: 'text-primary' },
    { title: 'Contratos pendentes', value: '5', icon: FileSignature, color: 'text-destructive' },
    { title: 'Financeiro em aberto', value: '8', icon: Wallet, color: 'text-warning' },
    { title: 'Operação ativa', value: '2', icon: ClipboardList, color: 'text-primary' },
  ];

  const eventos = [
    {
      id: 1,
      evento: 'Feira Construir SC 2026',
      empresa: 'Feira Construir SC Ltda.',
      tipoEvento: 'Feira',
      espaco: 'Pavilhão Norte, Credenciamento 1 e Praça de Alimentação',
      dataEvento: '15/07/2026 a 18/07/2026',
      periodoMontagem: '14/07/2026',
      periodoOperacao: '15/07/2026 a 18/07/2026',
      periodoDesmontagem: '19/07/2026',
      horario: '08:00 às 22:00',
      valor: 'R$ 285.000',
      receita: 'R$ 171.000',
      tipoContrato: 'Locação onerosa',
      statusContratual: 'Assinado',
      statusFinanceiro: 'Parcial',
      statusOperacional: 'Montagem em acompanhamento',
      statusGeral: 'Em acompanhamento',
      pendencia: 'Aguardando pagamento'
    },
    {
      id: 2,
      evento: 'Congresso Saúde e Tecnologia',
      empresa: 'Associação Médica Regional',
      tipoEvento: 'Congresso',
      espaco: 'Torre Norte e Auditório Torre 2',
      dataEvento: '28/07/2026',
      periodoMontagem: '27/07/2026',
      periodoOperacao: '28/07/2026',
      periodoDesmontagem: '29/07/2026',
      horario: '07:00 às 20:00',
      valor: 'R$ 95.000',
      receita: 'R$ 95.000',
      tipoContrato: 'Pacote corporativo',
      statusContratual: 'Assinado',
      statusFinanceiro: 'Quitado',
      statusOperacional: 'Pronto para operação',
      statusGeral: 'Conforme planejamento',
      pendencia: 'Ok'
    },
    {
      id: 3,
      evento: 'Expo Turismo Litoral',
      empresa: 'Expo Turismo Eventos',
      tipoEvento: 'Exposição',
      espaco: 'Pavilhão Sul',
      dataEvento: '10/08/2026 a 12/08/2026',
      periodoMontagem: '08/08/2026 a 09/08/2026',
      periodoOperacao: '10/08/2026 a 12/08/2026',
      periodoDesmontagem: '13/08/2026',
      horario: '09:00 às 21:00',
      valor: 'R$ 220.000',
      receita: 'R$ 0',
      tipoContrato: 'Compensação de IPTU',
      statusContratual: 'Contrato pendente',
      statusFinanceiro: 'Em aberto',
      statusOperacional: 'Aguardando reunião técnica',
      statusGeral: 'Ponto de atenção',
      pendencia: 'Contrato pendente'
    }
  ];

  const getOverallBadge = (status) => {
    switch(status) {
      case 'Conforme planejamento': return <Badge className="badge-status-green text-xs px-2 py-0.5">Conforme</Badge>;
      case 'Em acompanhamento': return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Acompanhamento</Badge>;
      case 'Ponto de atenção': return <Badge className="badge-status-red text-xs px-2 py-0.5">Atenção</Badge>;
      default: return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Status</Badge>;
    }
  };

  const getPendingBadge = (pendencia) => {
    switch(pendencia) {
      case 'Aguardando pagamento':
      case 'Contrato pendente':
        return <Badge className="badge-status-red text-xs px-2 py-0.5">Pendente</Badge>;
      case 'Ok':
        return <Badge className="badge-status-green text-xs px-2 py-0.5">Ok</Badge>;
      default:
        return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Análise</Badge>;
    }
  };

  const getContractTypeBadge = (value) => {
    if (value === 'Locação onerosa') return <Badge className="badge-status-green text-xs px-2 py-0.5">Onerosa</Badge>;
    if (value === 'Locação não onerosa') return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Não onerosa</Badge>;
    if (value === 'Compensação de IPTU') return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Compensação IPTU</Badge>;
    return <Badge variant="outline" className="text-xs px-2 py-0.5">{value}</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>Eventos e Locações - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Eventos e Locações</h1>
            <p className="text-muted-foreground">Agenda consolidada de eventos, contratos e pendências críticas</p>
          </div>
          <Button className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" />
            Novo Evento
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
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
            <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[18%] text-[11px] uppercase tracking-wide">Evento</TableHead>
                  <TableHead className="w-[16%] text-[11px] uppercase tracking-wide">Locatário</TableHead>
                  <TableHead className="hidden xl:table-cell w-[14%] text-[11px] uppercase tracking-wide">Data do evento</TableHead>
                  <TableHead className="w-[17%] text-[11px] uppercase tracking-wide">Espaço locado</TableHead>
                  <TableHead className="hidden xl:table-cell w-[12%] text-[11px] uppercase tracking-wide">Tipo de contrato</TableHead>
                  <TableHead className="w-[11%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                  <TableHead className="w-[9%] text-[11px] uppercase tracking-wide">Pendência-chave</TableHead>
                  <TableHead className="w-[3%] text-right text-[11px] uppercase tracking-wide">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eventos.map((evento) => (
                  <TableRow 
                    key={evento.id} 
                    className={`table-row-tall h-auto align-top ${evento.pendencia !== 'Ok' ? 'bg-warning/5 hover:bg-warning/10' : 'even:bg-muted/10'}`}
                  >
                    <TableCell className="py-5">
                      <div className="font-semibold text-sm leading-tight break-words">{evento.evento}</div>
                      <div className="text-[11px] text-muted-foreground mt-1">{evento.tipoEvento}</div>
                      <div className="xl:hidden text-[11px] text-muted-foreground mt-1">{evento.dataEvento}</div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight break-words text-muted-foreground">{evento.empresa}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell py-5">
                      <div className="leading-tight break-words">{evento.dataEvento}</div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight break-words">{evento.espaco}</div>
                      <div className="xl:hidden mt-1">{getContractTypeBadge(evento.tipoContrato)}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell py-5">{getContractTypeBadge(evento.tipoContrato)}</TableCell>
                    <TableCell className="py-5">{getOverallBadge(evento.statusGeral)}</TableCell>
                    <TableCell className="py-5">
                      <div className="space-y-1">
                        <div>{getPendingBadge(evento.pendencia)}</div>
                        <p className="text-[11px] text-muted-foreground leading-tight break-words">{evento.pendencia}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-5">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild title="Ver detalhes">
                        <Link to={`/eventos/${evento.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
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
