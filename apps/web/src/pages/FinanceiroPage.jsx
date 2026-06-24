
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, Clock, Receipt, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function FinanceiroPage() {
  const resumoGeral = [
    { title: 'Receita Prevista', value: 'R$ 2.847.500', trend: '+8.3%', trendUp: true, icon: DollarSign },
    { title: 'Receita Recebida', value: 'R$ 1.923.400', trend: '+12.1%', trendUp: true, icon: DollarSign },
    { title: 'Saldo Pendente', value: 'R$ 924.100', trend: '-3.2%', trendUp: false, icon: Clock },
    { title: 'Despesas Pós-Evento', value: 'R$ 187.300', trend: '+5.7%', trendUp: true, icon: Receipt },
  ];

  const resumoPosEvento = [
    { title: 'Despesas Registradas', value: 'R$ 187.300' },
    { title: 'Despesas Cobradas', value: 'R$ 164.800' },
    { title: 'Pendentes de Cobrança', value: 'R$ 22.500', danger: true },
    { title: 'Eventos com Fechamento Aberto', value: '4', danger: true },
  ];

  const expensesByEvent = [
    { evento: 'Expo Tecnologia', valor: 45000 },
    { evento: 'Feira Moda SC', valor: 38000 },
    { evento: 'Congresso Med', valor: 25000 },
    { evento: 'Formatura ADM', valor: 18000 },
    { evento: 'Festival Gastro', valor: 12000 },
  ];

  const posEventoDespesas = [
    {
      evento: 'Feira Construir SC 2026',
      energia: 'R$ 4.500',
      arCondicionado: 'R$ 1.200',
      limpeza: 'R$ 8.500',
      danos: 'R$ 3.500',
      outros: 'R$ 0',
      total: 'R$ 17.700',
      status: 'A Lançar'
    },
    {
      evento: 'Expo Turismo Litoral',
      energia: 'R$ 3.200',
      arCondicionado: 'R$ 0',
      limpeza: 'R$ 4.300',
      danos: 'R$ 0',
      outros: 'R$ 1.500',
      total: 'R$ 9.000',
      status: 'Nota Enviada'
    }
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Nota Enviada': return <Badge className="badge-status-green">{status}</Badge>;
      case 'A Lançar': return <Badge className="badge-status-red">{status}</Badge>;
      default: return <Badge className="badge-status-neutral">{status}</Badge>;
    }
  };

  return (
    <>
      <Helmet>
        <title>Financeiro - Expocentro</title>
      </Helmet>

      <div className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Visão Financeira Geral</h1>
          <p className="text-muted-foreground">Controle de receitas, recebimentos e repasses operacionais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resumoGeral.map((item, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <div className={`flex items-center gap-1 text-sm font-medium ${item.trendUp ? 'text-success' : 'text-destructive'}`}>
                    {item.trendUp ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span>{item.trend}</span>
                  </div>
                </div>
                <p className="text-2xl font-bold tabular-nums text-foreground mb-1">{item.value}</p>
                <p className="text-sm font-medium text-muted-foreground">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-2">
            <Receipt className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Fechamento Pós-Evento</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {resumoPosEvento.map((item, index) => (
              <Card key={index} className={`shadow-sm ${item.danger ? 'border-destructive/30 bg-destructive/5' : ''}`}>
                <CardContent className="p-6 flex flex-col justify-between">
                  <span className="text-sm font-medium text-muted-foreground mb-2">{item.title}</span>
                  <span className={`text-2xl font-bold tabular-nums ${item.danger ? 'text-destructive' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle>Controle de Repasses por Evento</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead>Evento</TableHead>
                      <TableHead>Energia</TableHead>
                      <TableHead>Ar Cond.</TableHead>
                      <TableHead>Limpeza</TableHead>
                      <TableHead>Danos</TableHead>
                      <TableHead>Outros</TableHead>
                      <TableHead className="font-bold text-foreground">Total</TableHead>
                      <TableHead>Status Cobrança</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {posEventoDespesas.map((item, i) => (
                      <TableRow key={i} className="table-row-tall">
                        <TableCell className="font-semibold text-foreground">{item.evento}</TableCell>
                        <TableCell className="tabular-nums text-muted-foreground">{item.energia}</TableCell>
                        <TableCell className="tabular-nums text-muted-foreground">{item.arCondicionado}</TableCell>
                        <TableCell className="tabular-nums text-muted-foreground">{item.limpeza}</TableCell>
                        <TableCell className="tabular-nums text-destructive font-medium">{item.danos}</TableCell>
                        <TableCell className="tabular-nums text-muted-foreground">{item.outros}</TableCell>
                        <TableCell className="tabular-nums font-bold text-foreground">{item.total}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Top 5 Despesas por Evento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={expensesByEvent} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                    <XAxis type="number" tickFormatter={(v) => `R$${v/1000}k`} fontSize={12} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                    <YAxis dataKey="evento" type="category" width={90} fontSize={12} stroke="hsl(var(--foreground))" tickLine={false} axisLine={false} />
                    <Tooltip formatter={(val) => `R$ ${val.toLocaleString('pt-BR')}`} contentStyle={{ borderRadius: '8px' }} />
                    <Bar dataKey="valor" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}

export default FinanceiroPage;
