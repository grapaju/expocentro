
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
      case 'Cliente Ativo': return <Badge className="badge-status-green">{status}</Badge>;
      case 'Em negociação': return <Badge className="badge-status-yellow">{status}</Badge>;
      case 'Sem contato recente': return <Badge className="badge-status-red">{status}</Badge>;
      default: return <Badge className="badge-status-neutral">{status}</Badge>;
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
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Empresa</TableHead>
                  <TableHead>CNPJ</TableHead>
                  <TableHead>Cidade</TableHead>
                  <TableHead>Último Contato</TableHead>
                  <TableHead>Próxima Ação</TableHead>
                  <TableHead>Data Retorno</TableHead>
                  <TableHead>Valor Histórico</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {empresas.map((empresa) => (
                  <TableRow 
                    key={empresa.id} 
                    className={`table-row-tall ${empresa.status === 'Em negociação' ? 'bg-warning/5 hover:bg-warning/10' : ''}`}
                  >
                    <TableCell className="font-semibold">{empresa.nome}</TableCell>
                    <TableCell className="text-muted-foreground">{empresa.cnpj}</TableCell>
                    <TableCell>{empresa.cidade}</TableCell>
                    <TableCell>{new Date(empresa.ultimoContato).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="font-medium">{empresa.proximaAcao}</TableCell>
                    <TableCell>{new Date(empresa.dataRetorno).toLocaleDateString('pt-BR')}</TableCell>
                    <TableCell className="tabular-nums font-medium">{empresa.valorHistorico}</TableCell>
                    <TableCell>{getStatusBadge(empresa.status)}</TableCell>
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

export default EmpresasPage;
