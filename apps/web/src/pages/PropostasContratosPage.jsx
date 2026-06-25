
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Eye, FileSignature, FileWarning, HandCoins, ShieldAlert, CircleDollarSign } from 'lucide-react';

function PropostasContratosPage() {
  const metrics = [
    { title: 'Contratos onerosos', value: '26', icon: CircleDollarSign, color: 'text-success' },
    { title: 'Contratos não onerosos', value: '7', icon: HandCoins, color: 'text-warning' },
    { title: 'Compensação de IPTU', value: '4', icon: FileSignature, color: 'text-primary' },
    { title: 'Pendentes de assinatura', value: '5', icon: FileWarning, color: 'text-destructive' },
    { title: 'Termos de responsabilidade pendentes', value: '3', icon: ShieldAlert, color: 'text-destructive' },
  ];

  const contratos = [
    {
      id: 1,
      numero: 'CONT-2026-023',
      tipoContrato: 'Locação onerosa',
      empresa: 'Feira Construir SC Ltda.',
      evento: 'Feira Construir SC 2026',
      valor: 'R$ 285.000',
      pendencia: 'Aguardando pagamento da parcela 3/3',
      status: 'Assinado'
    },
    {
      id: 2,
      numero: 'CONT-2026-026',
      tipoContrato: 'Locação não onerosa',
      empresa: 'Associação Empresarial Regional',
      evento: 'Encontro Empresarial Regional',
      valor: 'R$ 0',
      pendencia: 'Contrato pendente de assinatura',
      status: 'Pendente'
    },
    {
      id: 3,
      numero: 'CONT-2026-031',
      tipoContrato: 'Compensação de IPTU',
      empresa: 'Instituto Cultural Litoral',
      evento: 'Mostra Cultural de Inverno',
      valor: 'R$ 198.000',
      pendencia: 'Termo de responsabilidade pendente',
      status: 'Em validação'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Assinado': return <Badge className="badge-status-green text-xs px-2 py-0.5">Assinado</Badge>;
      case 'Pendente': return <Badge className="badge-status-red text-xs px-2 py-0.5">Pendente</Badge>;
      case 'Em validação': return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Validação</Badge>;
      default: return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Status</Badge>;
    }
  };

  const getContractTypeBadge = (value) => {
    if (value === 'Locação onerosa') return <Badge className="badge-status-green text-xs px-2 py-0.5">Onerosa</Badge>;
    if (value === 'Locação não onerosa') return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Não onerosa</Badge>;
    if (value === 'Compensação de IPTU') return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Compensação IPTU</Badge>;
    return <Badge variant="outline" className="text-xs">{value}</Badge>;
  };

  const getPendingBadge = (pendencia) => {
    if (pendencia.includes('assinatura')) return <Badge className="badge-status-red text-xs px-2 py-0.5">Assinatura</Badge>;
    if (pendencia.includes('pagamento')) return <Badge className="badge-status-red text-xs px-2 py-0.5">Pagamento</Badge>;
    if (pendencia.includes('responsabilidade')) return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Termo</Badge>;
    return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Pendência</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>Propostas e Contratos - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Propostas e Contratos</h1>
            <p className="text-muted-foreground">Painel de formalização contratual, garantias e riscos de assinatura</p>
          </div>
          <Button className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" />
            Nova Proposta
          </Button>
        </div>

        <Card className="shadow-sm bg-muted/20">
          <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Tipo de contrato</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="onerosa">Locação onerosa</SelectItem>
                  <SelectItem value="nao-onerosa">Locação não onerosa</SelectItem>
                  <SelectItem value="iptu">Compensação de IPTU</SelectItem>
                  <SelectItem value="pacote">Pacote corporativo</SelectItem>
                  <SelectItem value="parceria">Parceria institucional</SelectItem>
                  <SelectItem value="cortesia">Cortesia institucional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Status</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="signed">Assinado</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="validation">Em validação</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Pendência principal</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-card"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="assinatura">Pendentes de assinatura</SelectItem>
                  <SelectItem value="termo">Termo de responsabilidade</SelectItem>
                  <SelectItem value="pagamento">Aguardando pagamento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((metric, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-xs font-medium text-muted-foreground">{metric.title}</span>
                </div>
                <span className="text-xl font-bold tabular-nums text-foreground">{metric.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[14%] text-[11px] uppercase tracking-wide">Nº contrato</TableHead>
                  <TableHead className="hidden xl:table-cell w-[12%] text-[11px] uppercase tracking-wide">Tipo de contrato</TableHead>
                  <TableHead className="w-[18%] text-[11px] uppercase tracking-wide">Locatário</TableHead>
                  <TableHead className="w-[22%] text-[11px] uppercase tracking-wide">Evento</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Valor</TableHead>
                  <TableHead className="w-[9%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                  <TableHead className="w-[12%] text-[11px] uppercase tracking-wide">Pendência-chave</TableHead>
                  <TableHead className="w-[3%] text-right text-[11px] uppercase tracking-wide">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contratos.map((item) => (
                  <TableRow key={item.id} className="table-row-tall h-auto even:bg-muted/10 align-top">
                    <TableCell className="py-5">
                      <div className="font-semibold text-sm text-foreground leading-tight">{item.numero}</div>
                      <div className="xl:hidden mt-1">{getContractTypeBadge(item.tipoContrato)}</div>
                    </TableCell>
                    <TableCell className="hidden xl:table-cell py-5">{getContractTypeBadge(item.tipoContrato)}</TableCell>
                    <TableCell className="py-5">
                      <div className="text-muted-foreground leading-tight break-words">{item.empresa}</div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight break-words">{item.evento}</div>
                    </TableCell>
                    <TableCell className="tabular-nums font-medium py-5">{item.valor}</TableCell>
                    <TableCell className="py-5">
                      <div className="space-y-1">
                        <div>{getStatusBadge(item.status)}</div>
                        <p className="text-[11px] text-muted-foreground leading-tight">{item.status}</p>
                      </div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="space-y-1">
                        <div>{getPendingBadge(item.pendencia)}</div>
                        <p className="text-[11px] text-muted-foreground leading-tight break-words">{item.pendencia}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-5">
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild title="Ver detalhes">
                        <Link to={`/propostas-contratos/${item.id}`}>
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

export default PropostasContratosPage;
