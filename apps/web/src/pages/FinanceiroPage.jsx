import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CircleDollarSign, FileWarning, FileCheck, HandCoins, Landmark } from 'lucide-react';

function FinanceiroPage() {
  const valores = [
    { title: 'Valor da locação', value: 'R$ 2.847.500' },
    { title: 'Valor não oneroso', value: 'R$ 412.000' },
    { title: 'Valor compensado por IPTU', value: 'R$ 295.000' },
    { title: 'Caução / termo de responsabilidade', value: 'R$ 569.500' },
    { title: 'Receita recebida', value: 'R$ 1.923.400' },
    { title: 'Saldo pendente', value: 'R$ 924.100', danger: true },
    { title: 'Despesas pós-evento lançadas', value: 'R$ 187.300' },
    { title: 'Despesas pós-evento cobradas', value: 'R$ 164.800' },
    { title: 'Despesas pós-evento pendentes', value: 'R$ 22.500', danger: true },
  ];

  const indicadores = [
    { title: 'Contratos onerosos', value: '26', icon: CircleDollarSign, color: 'text-success' },
    { title: 'Contratos não onerosos', value: '7', icon: HandCoins, color: 'text-warning' },
    { title: 'Valores compensados', value: 'R$ 295.000', icon: Landmark, color: 'text-primary' },
    { title: 'Notas de débito emitidas', value: '18', icon: FileCheck, color: 'text-success' },
    { title: 'Notas de débito pendentes', value: '3', icon: FileWarning, color: 'text-destructive' },
    { title: 'Parcelas vencidas', value: '5', icon: FileWarning, color: 'text-destructive' },
  ];

  const resumoCobranca = [
    {
      evento: 'Feira Construir SC 2026',
      tipoContrato: 'Locação onerosa',
      valorLocacao: 'R$ 285.000',
      compensacaoIptu: 'R$ 0',
      caucaoTermo: 'R$ 57.000',
      recebido: 'R$ 171.000',
      saldo: 'R$ 114.000',
      notaDebito: 'Emitida',
      status: 'Aguardando pagamento',
    },
    {
      evento: 'Encontro Empresarial Regional',
      tipoContrato: 'Locação não onerosa',
      valorLocacao: 'R$ 0',
      compensacaoIptu: 'R$ 0',
      caucaoTermo: 'Termo pendente',
      recebido: 'R$ 0',
      saldo: 'R$ 0',
      notaDebito: 'Pendente',
      status: 'Termo de responsabilidade pendente',
    },
    {
      evento: 'Mostra Cultural de Inverno',
      tipoContrato: 'Compensação de IPTU',
      valorLocacao: 'R$ 198.000',
      compensacaoIptu: 'R$ 198.000',
      caucaoTermo: 'R$ 0',
      recebido: 'R$ 0',
      saldo: 'R$ 0',
      notaDebito: 'Não iniciada',
      status: 'Compensação em validação',
    },
  ];

  const parametros = [
    { key: 'Caução padrão', value: '20%' },
    { key: 'Multa por atraso', value: '2%' },
    { key: 'Juros', value: '1% ao mês' },
    { key: 'Correção', value: 'IGPM' },
    { key: 'Prazo para pagamento de despesas pós-evento', value: '15 dias' },
  ];

  const getStatusBadge = (value) => {
    if (value === 'Emitida') return <Badge className="badge-status-green text-xs px-2 py-0.5">Emitida</Badge>;
    if (value === 'Pendente' || value.includes('pendente')) return <Badge className="badge-status-red text-xs px-2 py-0.5">Pendente</Badge>;
    if (value === 'Não iniciada') return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Não iniciada</Badge>;
    return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Em análise</Badge>;
  };

  const getCollectionStatusBadge = (value) => {
    if (value.includes('Aguardando pagamento')) return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Pagto pend.</Badge>;
    if (value.includes('pendente')) return <Badge className="badge-status-red text-xs px-2 py-0.5">Pendente</Badge>;
    if (value.includes('validação')) return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Validação</Badge>;
    return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Análise</Badge>;
  };

  const getContractTypeBadge = (value) => {
    if (value === 'Locação onerosa') return <Badge className="badge-status-green text-xs px-2 py-0.5">Onerosa</Badge>;
    if (value === 'Locação não onerosa') return <Badge className="badge-status-yellow text-xs px-2 py-0.5">Não onerosa</Badge>;
    if (value === 'Compensação de IPTU') return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Compensação IPTU</Badge>;
    return <Badge className="badge-status-neutral text-xs px-2 py-0.5">Contrato</Badge>;
  };

  return (
    <>
      <Helmet>
        <title>Financeiro - Expocentro</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Financeiro</h1>
          <p className="text-muted-foreground">Resultado financeiro de contratos, compensações e pendências de recebimento</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {indicadores.map((item) => (
            <Card key={item.title} className="shadow-sm">
              <CardContent className="p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <item.icon className={`h-4 w-4 ${item.color}`} />
                  <span className="text-xs font-medium text-muted-foreground">{item.title}</span>
                </div>
                <span className="text-xl font-bold tabular-nums">{item.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Separação de valores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {valores.map((item) => (
                <div key={item.title} className={`rounded-lg border p-4 ${item.danger ? 'border-destructive/30 bg-destructive/5' : 'border-border bg-muted/20'}`}>
                  <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
                  <p className={`text-lg font-bold ${item.danger ? 'text-destructive' : 'text-foreground'}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Cobrança por evento</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead className="w-[26%] text-[11px] uppercase tracking-wide">Evento</TableHead>
                  <TableHead className="w-[14%] text-[11px] uppercase tracking-wide">Tipo de contrato</TableHead>
                  <TableHead className="w-[18%] text-[11px] uppercase tracking-wide">Base contratual</TableHead>
                  <TableHead className="w-[20%] text-[11px] uppercase tracking-wide">Recebimento / saldo</TableHead>
                  <TableHead className="w-[10%] text-[11px] uppercase tracking-wide">Nota de débito</TableHead>
                  <TableHead className="w-[12%] text-[11px] uppercase tracking-wide">Situação cobrança</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {resumoCobranca.map((item) => (
                  <TableRow key={item.evento} className={`table-row-tall h-auto align-top ${item.saldo !== 'R$ 0' ? 'bg-warning/5 hover:bg-warning/10' : 'even:bg-muted/10'}`}>
                    <TableCell className="py-5">
                      <div className="font-semibold text-sm leading-tight break-words">{item.evento}</div>
                      <div className="text-[11px] text-muted-foreground mt-1 break-words">Caução/termo: {item.caucaoTermo}</div>
                    </TableCell>
                    <TableCell className="py-5">{getContractTypeBadge(item.tipoContrato)}</TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight">Locação: {item.valorLocacao}</div>
                      <div className="text-[11px] text-muted-foreground leading-tight">IPTU: {item.compensacaoIptu}</div>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="leading-tight">Recebido: {item.recebido}</div>
                      <div className="text-[11px] text-destructive leading-tight">Saldo: {item.saldo}</div>
                    </TableCell>
                    <TableCell className="py-5">{getStatusBadge(item.notaDebito)}</TableCell>
                    <TableCell className="py-5">
                      <div>{getCollectionStatusBadge(item.status)}</div>
                      <p className="text-[11px] text-muted-foreground mt-1 leading-tight break-words">{item.status}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Parâmetros financeiros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
              {parametros.map((item) => (
                <div key={item.key} className="rounded-md border border-border bg-muted/20 p-4">
                  <p className="text-sm text-muted-foreground">{item.key}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default FinanceiroPage;
