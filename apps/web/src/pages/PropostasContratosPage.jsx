
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, Send, Search, FileSignature, FileWarning, CircleDollarSign } from 'lucide-react';

function PropostasContratosPage() {
  const metrics = [
    { title: 'Propostas Enviadas', value: '8', icon: Send, color: 'text-primary' },
    { title: 'Em Análise', value: '4', icon: Search, color: 'text-warning' },
    { title: 'Contratos Assinados', value: '23', icon: FileSignature, color: 'text-success' },
    { title: 'Contratos Pendentes', value: '5', icon: FileWarning, color: 'text-destructive' },
    { title: 'Valor em Propostas', value: 'R$ 685k', icon: CircleDollarSign, color: 'text-warning' },
    { title: 'Valor Contratado', value: 'R$ 2.8M', icon: CircleDollarSign, color: 'text-success' },
  ];

  const contratos = [
    {
      id: 1,
      numero: 'CONT-2026-023',
      empresa: 'Feira Construir SC',
      evento: 'Feira Construir SC 2026',
      data: '15/07/2026',
      espaco: 'Pavilhão Norte',
      valor: 'R$ 285.000',
      garantia: 'R$ 28.500',
      pendencia: 'Ok',
      status: 'Assinado'
    },
    {
      id: 2,
      numero: 'CONT-2026-026',
      empresa: 'Associação Empresarial Regional',
      evento: 'Encontro Empresarial Regional',
      data: '20/08/2026',
      espaco: 'Auditório Torre 2',
      valor: 'R$ 45.000',
      garantia: 'R$ 4.500',
      pendencia: 'Falta Assinatura',
      status: 'Pendente'
    },
    {
      id: 3,
      numero: 'PROP-2026-047',
      empresa: 'Organizadora Brasil',
      evento: 'Mostra de Inovação',
      data: '05/09/2026',
      espaco: 'Pavilhão Sul',
      valor: 'R$ 180.000',
      garantia: '-',
      pendencia: 'Aprovação Cliente',
      status: 'Proposta Enviada'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Assinado': return <Badge className="badge-status-green">{status}</Badge>;
      case 'Pendente': return <Badge className="badge-status-red">{status}</Badge>;
      case 'Proposta Enviada': return <Badge className="badge-status-yellow">{status}</Badge>;
      default: return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Contratos - Expocentro</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Pipeline de Contratos</h1>
            <p className="text-muted-foreground">Monitoramento de compromissos jurídicos e garantias</p>
          </div>
          <Button className="gap-2 shadow-sm">
            <Plus className="h-4 w-4" />
            Nova Proposta
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Número / Tipo</TableHead>
                  <TableHead>Locatário</TableHead>
                  <TableHead>Evento</TableHead>
                  <TableHead>Espaço / Data</TableHead>
                  <TableHead>Valor Locação</TableHead>
                  <TableHead>Caução</TableHead>
                  <TableHead>Pendência Principal</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contratos.map((item) => (
                  <TableRow key={item.id} className="table-row-tall even:bg-muted/10">
                    <TableCell className="font-semibold text-foreground">{item.numero}</TableCell>
                    <TableCell className="text-muted-foreground">{item.empresa}</TableCell>
                    <TableCell>{item.evento}</TableCell>
                    <TableCell>
                      <div className="text-sm">{item.espaco}</div>
                      <div className="text-xs text-muted-foreground">{item.data}</div>
                    </TableCell>
                    <TableCell className="tabular-nums font-medium">{item.valor}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">{item.garantia}</TableCell>
                    <TableCell>
                      {item.pendencia === 'Ok' ? (
                        <Badge className="badge-status-green text-xs">{item.pendencia}</Badge>
                      ) : (
                        <Badge className="badge-status-red text-xs">{item.pendencia}</Badge>
                      )}
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
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

export default PropostasContratosPage;
