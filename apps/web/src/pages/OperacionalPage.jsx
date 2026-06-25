import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarCheck, Hammer, PlayCircle, Truck, Flag } from 'lucide-react';

function OperacionalPage() {
  const fases = [
    {
      id: 'pre',
      titulo: 'Pré-evento',
      icon: CalendarCheck,
      color: 'border-t-primary',
      itens: [
        'Contrato assinado',
        'Regulamento técnico entregue',
        'Normas de montagem/desmontagem entregues',
        'Termo de responsabilidade assinado',
        'Caução definida',
        'Reunião técnica realizada',
        'Espaços confirmados',
        'Período de montagem confirmado',
        'Período de desmontagem confirmado',
        'Horários contratados confirmados',
        'Serviços adicionais definidos',
        'Internet definida',
        'Energia/demanda informada',
        'Ar-condicionado definido',
        'Segurança definida',
        'Limpeza definida',
        'Controle de acesso definido',
      ],
    },
    {
      id: 'montagem',
      titulo: 'Montagem',
      icon: Hammer,
      color: 'border-t-warning',
      itens: [
        'Equipe identificada',
        'Uso de EPI orientado',
        'Proibição de crianças nos pavilhões informada',
        'Proibição de entrada sem calçado adequado informada',
        'Fumódromo orientado',
        'Proibição de serrar, lixar e pintar nos pavilhões/salas informada',
        'Corredores desobstruídos',
        'Portas de emergência desobstruídas',
        'Painéis elétricos desobstruídos',
        'Ligações elétricas autorizadas',
        'Andaimes com rodinhas',
        'Proibição de fixar materiais nas paredes informada',
        'Limpeza de materiais somente em local apropriado',
        'Permanência limitada ao horário contratado',
      ],
    },
    {
      id: 'durante',
      titulo: 'Durante o evento',
      icon: PlayCircle,
      color: 'border-t-primary',
      itens: [
        'Liberação do espaço',
        'Acompanhamento operacional',
        'Registro de ocorrências',
        'Controle de horas excedentes',
        'Solicitações extras registradas',
        'Suporte técnico acompanhado',
        'Consumo de energia acompanhado',
        'Controle de acesso acompanhado',
      ],
    },
    {
      id: 'desmontagem',
      titulo: 'Desmontagem',
      icon: Truck,
      color: 'border-t-muted-foreground',
      itens: [
        'Horário de desmontagem respeitado',
        'Retirada de materiais acompanhada',
        'Corredores e saídas liberados',
        'Vistoria inicial realizada',
        'Registro de danos/avarias',
        'Materiais esquecidos registrados',
        'Espaço liberado para vistoria final',
      ],
    },
    {
      id: 'pos',
      titulo: 'Pós-evento',
      icon: Flag,
      color: 'border-t-success',
      itens: [
        'Vistoria final realizada',
        'Termo de devolução assinado',
        'Avarias registradas',
        'Despesas adicionais lançadas',
        'Nota de débito emitida',
        'Prazo de pagamento acompanhado',
        'Fechamento financeiro concluído',
        'Encerramento operacional concluído',
      ],
    },
  ];

  const completed = new Set([
    'Contrato assinado',
    'Regulamento técnico entregue',
    'Normas de montagem/desmontagem entregues',
    'Termo de responsabilidade assinado',
    'Caução definida',
    'Reunião técnica realizada',
    'Espaços confirmados',
    'Período de montagem confirmado',
    'Período de desmontagem confirmado',
    'Horários contratados confirmados',
    'Serviços adicionais definidos',
    'Energia/demanda informada',
    'Controle de acesso definido',
    'Equipe identificada',
    'Uso de EPI orientado',
    'Corredores desobstruídos',
    'Portas de emergência desobstruídas',
    'Painéis elétricos desobstruídos',
    'Ligações elétricas autorizadas',
    'Liberação do espaço',
    'Acompanhamento operacional',
    'Registro de ocorrências',
  ]);

  return (
    <>
      <Helmet>
        <title>Controle Operacional - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Controle Operacional</h1>
          <p className="text-muted-foreground">Checklist real baseado no regulamento técnico e normas de montagem/desmontagem</p>
        </div>

        <Card className="shadow-sm border-border bg-muted/20">
          <CardContent className="p-4 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Evento</label>
              <Select defaultValue="feira-sc">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="feira-sc">Feira Construir SC 2026</SelectItem>
                  <SelectItem value="congresso">Congresso Saúde e Tecnologia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Fase</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="pre">Pré-evento</SelectItem>
                  <SelectItem value="montagem">Montagem</SelectItem>
                  <SelectItem value="durante">Durante o evento</SelectItem>
                  <SelectItem value="desmontagem">Desmontagem</SelectItem>
                  <SelectItem value="pos">Pós-evento</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Situação</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="done">Concluídos</SelectItem>
                  <SelectItem value="open">Pendentes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {fases.map((fase) => (
            <Card key={fase.id} className={`shadow-sm border-t-4 ${fase.color}`}>
              <CardHeader className="py-4 border-b border-border bg-muted/10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <fase.icon className="h-5 w-5" />
                  {fase.titulo}
                  <Badge variant="outline" className="ml-auto">
                    {fase.itens.filter((item) => completed.has(item)).length}/{fase.itens.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {fase.itens.map((item) => {
                    const done = completed.has(item);
                    return (
                      <div key={item} className="p-3 flex items-center gap-3 hover:bg-muted/20">
                        <Checkbox checked={done} />
                        <p className={`text-sm ${done ? 'text-foreground line-through' : 'text-foreground'}`}>
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default OperacionalPage;
