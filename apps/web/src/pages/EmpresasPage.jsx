
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, Users, Building, PhoneOff, RefreshCw, Briefcase } from 'lucide-react';

function EmpresasPage() {
  const metrics = [
    { title: 'Total de Empresas', value: '142', icon: Building, color: 'text-primary' },
    { title: 'Clientes Ativos (12m)', value: '38', icon: Users, color: 'text-success' },
    { title: 'Em Negociação', value: '15', icon: Briefcase, color: 'text-warning' },
    { title: 'Sem Contato (15+ dias)', value: '24', icon: PhoneOff, color: 'text-destructive' },
    { title: 'Clientes Recorrentes', value: '26', icon: RefreshCw, color: 'text-primary' },
  ];

  const empresas = [
    {
      id: 1,
      nome: 'Organizadora de Feiras Brasil Ltda.',
      cnpj: '12.345.678/0001-90',
      cidade: 'Florianópolis',
      ultimoContato: '2026-06-20',
      proximaAcao: 'Enviar Proposta',
      dataRetorno: '2026-06-25',
      valorHistorico: 'R$ 850.000',
      status: 'Em negociação'
    },
    {
      id: 2,
      nome: 'Eventos Corporativos Sul S.A.',
      cnpj: '23.456.789/0001-01',
      cidade: 'Balneário Camboriú',
      ultimoContato: '2026-06-01',
      proximaAcao: 'Acompanhamento',
      dataRetorno: '2026-06-15',
      valorHistorico: 'R$ 120.000',
      status: 'Sem contato recente'
    },
    {
      id: 3,
      nome: 'Congresso Saúde e Tecnologia',
      cnpj: '34.567.890/0001-12',
      cidade: 'Joinville',
      ultimoContato: '2026-06-22',
      proximaAcao: 'Assinatura de Contrato',
      dataRetorno: '2026-06-24',
      valorHistorico: 'R$ 450.000',
      status: 'Cliente Ativo'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Cliente Ativo': return <Badge className="badge-status-green text-xs px-2 py-0.5">Cliente ativo</Badge>;
      case 'Em negociação': return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Negociação</Badge>;
      case 'Sem contato recente': return <Badge className="badge-status-red text-xs px-2 py-0.5">Sem contato</Badge>;
      default: return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Análise</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Empresas - Expocentro Gestão 360</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Relacionamento Comercial</h1>
            <p className="text-muted-foreground">Gestão estratégica de locatários e organizadores</p>
          </div>
          <Button className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" />
            Nova Empresa
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
            <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[23%] text-[11px] uppercase tracking-wide">Empresa</TableHead>
                  <TableHead className="hidden xl:table-cell w-[13%] text-[11px] uppercase tracking-wide">CNPJ</TableHead>
                  <TableHead className="hidden xl:table-cell w-[11%] text-[11px] uppercase tracking-wide">Cidade</TableHead>
                  <TableHead className="hidden 2xl:table-cell w-[10%] text-[11px] uppercase tracking-wide">Último contato</TableHead>
                  <TableHead className="w-[20%] text-[11px] uppercase tracking-wide">Próxima ação</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Retorno</TableHead>
                  <TableHead className="hidden 2xl:table-cell w-[10%] text-[11px] uppercase tracking-wide">Valor histórico</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                  <TableHead className="w-[3%] text-right text-[11px] uppercase tracking-wide">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {empresas.map((empresa) => (
                  <TableRow 
                    key={empresa.id} 
                    className={`table-row-tall h-auto align-top ${empresa.status === 'Em negociação' ? 'bg-warning/5 hover:bg-warning/10' : ''}`}
                  >
                    <TableCell className="py-5">
                      <div className="font-semibold text-sm leading-tight break-words">{empresa.nome}</div>
                      <div className="xl:hidden text-[11px] text-muted-foreground mt-1">{empresa.cidade}</div>
                      <div className="xl:hidden text-[11px] text-muted-foreground">{empresa.cnpj}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell py-5 text-muted-foreground">{empresa.cnpj}</TableCell>
                    <TableCell className="hidden xl:table-cell py-5">{empresa.cidade}</TableCell>
                    <TableCell className="hidden 2xl:table-cell py-5">{new Date(empresa.ultimoContato).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="py-5">
                      <div className="font-medium leading-tight break-words">{empresa.proximaAcao}</div>
                      <div className="2xl:hidden text-[11px] text-muted-foreground mt-1">Último contato: {new Date(empresa.ultimoContato).toLocaleDateString('pt-BR')}</div>
                    </TableCell>
                    <TableCell className="py-5">{new Date(empresa.dataRetorno).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="hidden 2xl:table-cell py-5 tabular-nums font-medium">{empresa.valorHistorico}</TableCell>
                    <TableCell className="py-5">{getStatusBadge(empresa.status)}</TableCell>
                    <TableCell className="text-right py-5">
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-60 cursor-not-allowed hover:bg-transparent" title="Detalhes em breve" disabled>
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

export default EmpresasPage;
