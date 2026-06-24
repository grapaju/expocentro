
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, Building2, Map, ListTree, DollarSign, Settings2, Plus, Edit, Trash2 } from 'lucide-react';

function ConfiguracoesPage() {
  const espacos = [
    { nome: 'Pavilhão Norte', tipo: 'Pavilhão', capacidade: '15.000', m2: '10.000m²', valor: 'R$ 150.000', status: 'Ativo' },
    { nome: 'Torre Sul - Auditório 1', tipo: 'Auditório', capacidade: '500', m2: '400m²', valor: 'R$ 15.000', status: 'Ativo' },
  ];

  return (
    <>
      <Helmet>
        <title>Configurações - Expocentro Gestão 360</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Configurações do Sistema</h1>
          <p className="text-muted-foreground">Parâmetros institucionais e operacionais do Expocentro</p>
        </div>

        <Tabs defaultValue="empresa" className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-12 w-max justify-start">
              <TabsTrigger value="empresa" className="gap-2 px-4"><Building2 className="h-4 w-4" /> Dados Expocentro</TabsTrigger>
              <TabsTrigger value="espacos" className="gap-2 px-4"><Map className="h-4 w-4" /> Espaços Locáveis</TabsTrigger>
              <TabsTrigger value="usuarios" className="gap-2 px-4"><Users className="h-4 w-4" /> Usuários e Permissões</TabsTrigger>
              <TabsTrigger value="tipos" className="gap-2 px-4"><ListTree className="h-4 w-4" /> Tipos de Evento</TabsTrigger>
              <TabsTrigger value="financeiro" className="gap-2 px-4"><DollarSign className="h-4 w-4" /> Parâmetros Financeiros</TabsTrigger>
              <TabsTrigger value="checklist" className="gap-2 px-4"><Settings2 className="h-4 w-4" /> Modelos de Checklist</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="empresa">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Dados Institucionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-muted-foreground">Razão Social / Nome</Label>
                    <Input id="nome" defaultValue="Expocentro Balneário Camboriú Júlio Tedesco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj" className="text-muted-foreground">CNPJ</Label>
                    <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="endereco" className="text-muted-foreground">Endereço Completo</Label>
                    <Input id="endereco" defaultValue="Av. Marginal Oeste, 4000 - Balneário Camboriú, SC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-muted-foreground">Telefone Comercial</Label>
                    <Input id="telefone" defaultValue="(47) 3261-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">E-mail Administrativo</Label>
                    <Input id="email" defaultValue="contato@expocentrobc.com.br" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rep" className="text-muted-foreground">Representante Legal</Label>
                    <Input id="rep" defaultValue="Diretoria Expocentro" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="banco" className="text-muted-foreground">Dados Bancários Padrão</Label>
                    <Input id="banco" defaultValue="Banco do Brasil - Ag: 1234 C/C: 12345-6" />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button className="px-8 shadow-sm">Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espacos">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                <CardTitle>Cadastro de Pavilhões e Salas</CardTitle>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" /> Novo Espaço
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="pl-6">Nome do Espaço</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Capacidade</TableHead>
                      <TableHead>Metragem</TableHead>
                      <TableHead>Valor Base</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right pr-6">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {espacos.map((esp, i) => (
                      <TableRow key={i} className="table-row-tall">
                        <TableCell className="pl-6 font-semibold">{esp.nome}</TableCell>
                        <TableCell>{esp.tipo}</TableCell>
                        <TableCell className="tabular-nums">{esp.capacidade}</TableCell>
                        <TableCell className="tabular-nums">{esp.m2}</TableCell>
                        <TableCell className="tabular-nums font-medium">{esp.valor}</TableCell>
                        <TableCell><Badge className="badge-status-green">{esp.status}</Badge></TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4 text-muted-foreground"/></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="h-4 w-4 text-destructive"/></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Fallbacks for other tabs to keep UI functional */}
          <TabsContent value="usuarios"><Card><CardContent className="p-8 text-center text-muted-foreground">Módulo de permissões</CardContent></Card></TabsContent>
          <TabsContent value="tipos"><Card><CardContent className="p-8 text-center text-muted-foreground">Configuração de Tipos de Evento</CardContent></Card></TabsContent>
          <TabsContent value="financeiro"><Card><CardContent className="p-8 text-center text-muted-foreground">Parâmetros de Juros, Multas e Retenções</CardContent></Card></TabsContent>
          <TabsContent value="checklist"><Card><CardContent className="p-8 text-center text-muted-foreground">Templates operacionais customizados</CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default ConfiguracoesPage;
