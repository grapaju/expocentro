
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, PlayCircle, Flag, Clock } from 'lucide-react';

function OperacionalPage() {
  const checklists = {
    before: [
      { task: 'Contrato Assinado', status: 'completed', resp: 'Jurídico', date: '01/06/2026' },
      { task: 'Regulamento Entregue', status: 'completed', resp: 'Comercial', date: '05/06/2026' },
      { task: 'Termo Responsabilidade Assinado', status: 'completed', resp: 'Jurídico', date: '06/06/2026' },
      { task: 'Reunião Técnica Realizada', status: 'pending', resp: 'Operacional', date: '10/06/2026' },
      { task: 'Energia/Demanda Informada', status: 'overdue', resp: 'Locatário', date: '08/06/2026' },
    ],
    during: [
      { task: 'Acompanhamento Montagem', status: 'pending', resp: 'Operacional', date: '14/07/2026' },
      { task: 'Liberação do Espaço', status: 'pending', resp: 'Operacional', date: '14/07/2026' },
      { task: 'Controle Horas Extras', status: 'pending', resp: 'Operacional', date: '15/07/2026' },
    ],
    after: [
      { task: 'Vistoria Concluída', status: 'pending', resp: 'Operacional', date: '19/07/2026' },
      { task: 'Registro de Avarias', status: 'pending', resp: 'Manutenção', date: '19/07/2026' },
      { task: 'Lançamento Despesas', status: 'pending', resp: 'Financeiro', date: '20/07/2026' },
    ]
  };

  const getStatusVisual = (status) => {
    switch (status) {
      case 'completed': return { checked: true, color: 'text-success line-through' };
      case 'overdue': return { checked: false, color: 'text-destructive font-medium' };
      default: return { checked: false, color: 'text-foreground' };
    }
  };

  return (
    <>
      <Helmet>
        <title>Operacional - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Controle Operacional</h1>
          <p className="text-muted-foreground">Checklists de execução por fases do evento</p>
        </div>

        <Card className="shadow-sm border-border bg-muted/20">
          <CardContent className="p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Evento</label>
              <Select defaultValue="feira-sc">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="feira-sc">Feira Construir SC 2026</SelectItem>
                  <SelectItem value="congresso">Congresso Saúde</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Responsável</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue placeholder="Todos" /></SelectTrigger>
                <SelectContent><SelectItem value="all">Todos</SelectItem></SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Prazo</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue placeholder="Qualquer prazo" /></SelectTrigger>
                <SelectContent><SelectItem value="all">Qualquer prazo</SelectItem></SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="shadow-sm border-t-4 border-t-primary">
            <CardHeader className="bg-muted/10 border-b border-border py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                PRÉ-EVENTO
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {checklists.before.map((item, i) => {
                  const visual = getStatusVisual(item.status);
                  return (
                    <div key={i} className="p-4 flex items-start gap-3 hover:bg-muted/30 transition-colors">
                      <Checkbox checked={visual.checked} className="mt-1" />
                      <div className="flex-1">
                        <p className={`text-sm ${visual.color}`}>{item.task}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span>Resp: {item.resp}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {item.date}</span>
                        </div>
                      </div>
                      {item.status === 'overdue' && <Badge className="badge-status-red text-[10px] px-1.5 py-0">Atrasado</Badge>}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-t-4 border-t-warning">
            <CardHeader className="bg-muted/10 border-b border-border py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-warning" />
                DURANTE O EVENTO
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {checklists.during.map((item, i) => {
                  const visual = getStatusVisual(item.status);
                  return (
                    <div key={i} className="p-4 flex items-start gap-3 hover:bg-muted/30 transition-colors">
                      <Checkbox checked={visual.checked} className="mt-1" />
                      <div className="flex-1">
                        <p className={`text-sm ${visual.color}`}>{item.task}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span>Resp: {item.resp}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {item.date}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-t-4 border-t-muted-foreground">
            <CardHeader className="bg-muted/10 border-b border-border py-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Flag className="h-5 w-5 text-muted-foreground" />
                PÓS-EVENTO
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {checklists.after.map((item, i) => {
                  const visual = getStatusVisual(item.status);
                  return (
                    <div key={i} className="p-4 flex items-start gap-3 hover:bg-muted/30 transition-colors">
                      <Checkbox checked={visual.checked} className="mt-1" />
                      <div className="flex-1">
                        <p className={`text-sm ${visual.color}`}>{item.task}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span>Resp: {item.resp}</span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3"/> {item.date}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default OperacionalPage;
