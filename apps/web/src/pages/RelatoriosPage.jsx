
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

function RelatoriosPage() {
  const indicators = [
    { title: 'Relatórios Gerados no Mês', value: '14', icon: FileText, color: 'text-primary' },
    { title: 'Último Fechamento', value: '31/05/2026', icon: Calendar, color: 'text-success' },
    { title: 'Inadimplência Atual', value: 'R$ 38.5k', icon: AlertCircle, color: 'text-destructive' },
    { title: 'Taxa Ocupação Espaços', value: '64%', icon: TrendingUp, color: 'text-primary' },
  ];

  const reports = [
    {
      title: 'Relatório de contratos por tipo',
      desc: 'Distribuição de contratos por modalidade: onerosa, não onerosa, IPTU e parcerias.',
    },
    {
      title: 'Relatório de locações não onerosas',
      desc: 'Consolidado de eventos, espaços e contrapartidas vinculadas a locações não onerosas.',
    },
    {
      title: 'Relatório de compensações de IPTU',
      desc: 'Controle dos contratos com compensação de IPTU e status de validação.',
    },
    {
      title: 'Relatório de cauções e termos de responsabilidade',
      desc: 'Situação de cauções, termos assinados e pendências por locatário.',
    },
    {
      title: 'Relatório de notas de débito emitidas',
      desc: 'Notas emitidas por evento com prazo e status de pagamento.',
    },
    {
      title: 'Relatório de despesas pós-evento',
      desc: 'Consolidação de energia, ar-condicionado, limpeza, segurança, avarias e demais categorias.',
    },
    {
      title: 'Relatório de pendências operacionais',
      desc: 'Pendências por fase: pré-evento, montagem, durante, desmontagem e pós-evento.',
    },
    {
      title: 'Relatório de montagem e desmontagem',
      desc: 'Conformidade com normas técnicas e acompanhamento dos horários contratados.',
    },
    {
      title: 'Relatório de ocupação por espaço',
      desc: 'Taxa de ocupação e recorrência por pavilhões, torres, auditórios e áreas de apoio.',
    },
    {
      title: 'Relatório comparativo anual',
      desc: 'Comparativo ano a ano de contratos, receitas, despesas e fechamento pós-evento.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Relatórios Executivos - Expocentro</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Relatórios Gerenciais</h1>
          <p className="text-muted-foreground">Extração de inteligência e dados consolidados do Expocentro</p>
        </div>

        <Card className="shadow-sm bg-muted/20">
          <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Período</label>
              <Select defaultValue="month">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Este Mês</SelectItem>
                  <SelectItem value="year">Este Ano</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Espaço Locado</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue placeholder="Todos" /></SelectTrigger>
                <SelectContent><SelectItem value="all">Todos</SelectItem></SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Locatário / Empresa</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue placeholder="Todas" /></SelectTrigger>
                <SelectContent><SelectItem value="all">Todas</SelectItem></SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {indicators.map((ind, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ind.icon className={`h-5 w-5 ${ind.color}`} />
                  <span className="text-sm font-medium text-muted-foreground">{ind.title}</span>
                </div>
                <span className="text-2xl font-bold tabular-nums text-foreground">{ind.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((rep, i) => (
            <Card key={i} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <h3 className="text-lg font-bold leading-tight mb-2 text-primary">{rep.title}</h3>
                    <p className="text-muted-foreground text-sm">{rep.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex-1 shadow-sm gap-2">
                      <FileText className="h-4 w-4" /> Visualizar
                    </Button>
                    <Button className="flex-1 shadow-sm gap-2">
                      <Download className="h-4 w-4" /> Exportar PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default RelatoriosPage;
