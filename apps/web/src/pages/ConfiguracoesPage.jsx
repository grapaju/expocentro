import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users, Building2, Map, ListTree, DollarSign, Settings2, Plus, Edit, Trash2, FileText } from 'lucide-react';

function ConfiguracoesPage() {
  const espacos = [
    { nome: 'Pavilhão Norte', tipo: 'Pavilhão', area: '10.000 m²', capacidade: '15.000', peDireito: '12 m', tensao: '380V / 220V', piso: '5.000 kg/m²', servicos: 'Limpeza, segurança base, energia base', ativacao: 'Fachada e hall de entrada', status: 'Ativo' },
    { nome: 'Pavilhão Sul', tipo: 'Pavilhão', area: '9.400 m²', capacidade: '14.000', peDireito: '12 m', tensao: '380V / 220V', piso: '5.000 kg/m²', servicos: 'Limpeza, segurança base, energia base', ativacao: 'Totens internos e passarelas', status: 'Ativo' },
    { nome: 'Torre Norte', tipo: 'Torre', area: '2.100 m²', capacidade: '2.400', peDireito: '4 m', tensao: '220V', piso: '600 kg/m²', servicos: 'Climatização e limpeza', ativacao: 'Mídia digital interna', status: 'Ativo' },
    { nome: 'Torre Sul', tipo: 'Torre', area: '1.950 m²', capacidade: '2.200', peDireito: '4 m', tensao: '220V', piso: '600 kg/m²', servicos: 'Climatização e limpeza', ativacao: 'Mídia digital interna', status: 'Ativo' },
    { nome: 'Auditório Torre 1', tipo: 'Auditório', area: '520 m²', capacidade: '700', peDireito: '7 m', tensao: '220V', piso: '450 kg/m²', servicos: 'Palco padrão e climatização', ativacao: 'Painel LED e foyer', status: 'Ativo' },
    { nome: 'Auditório Torre 2', tipo: 'Auditório', area: '400 m²', capacidade: '500', peDireito: '7 m', tensao: '220V', piso: '450 kg/m²', servicos: 'Palco padrão e climatização', ativacao: 'Painel LED e foyer', status: 'Ativo' },
    { nome: 'Salas modulares', tipo: 'Salas', area: '350 m²', capacidade: '300', peDireito: '3,5 m', tensao: '220V', piso: '300 kg/m²', servicos: 'Mobiliário básico', ativacao: 'Sinalização interna', status: 'Ativo' },
    { nome: 'Credenciamento 1', tipo: 'Apoio', area: '120 m²', capacidade: '250', peDireito: '3,2 m', tensao: '220V', piso: '300 kg/m²', servicos: 'Balcões de atendimento', ativacao: 'Testeira frontal', status: 'Ativo' },
    { nome: 'Credenciamento 2', tipo: 'Apoio', area: '120 m²', capacidade: '250', peDireito: '3,2 m', tensao: '220V', piso: '300 kg/m²', servicos: 'Balcões de atendimento', ativacao: 'Testeira frontal', status: 'Ativo' },
    { nome: 'Credenciamento 3', tipo: 'Apoio', area: '120 m²', capacidade: '250', peDireito: '3,2 m', tensao: '220V', piso: '300 kg/m²', servicos: 'Balcões de atendimento', ativacao: 'Testeira frontal', status: 'Ativo' },
    { nome: 'Credenciamento 4', tipo: 'Apoio', area: '120 m²', capacidade: '250', peDireito: '3,2 m', tensao: '220V', piso: '300 kg/m²', servicos: 'Balcões de atendimento', ativacao: 'Testeira frontal', status: 'Ativo' },
    { nome: 'Praça de Alimentação', tipo: 'Área comum', area: '1.100 m²', capacidade: '1.200', peDireito: '6 m', tensao: '380V / 220V', piso: '800 kg/m²', servicos: 'Pontos hidráulicos e energia', ativacao: 'Mídia em painéis centrais', status: 'Ativo' },
    { nome: 'Área comum', tipo: 'Área compartilhada', area: '1.800 m²', capacidade: '2.000', peDireito: '6 m', tensao: '220V', piso: '500 kg/m²', servicos: 'Circulação e apoio operacional', ativacao: 'Mídia institucional', status: 'Ativo' },
  ];

  const perfisPermissao = [
    { perfil: 'Diretoria', acessos: 'Painel executivo e relatórios', status: 'Ativo' },
    { perfil: 'Comercial', acessos: 'Empresas, agenda comercial, propostas', status: 'Ativo' },
    { perfil: 'Financeiro', acessos: 'Recebimentos, parcelas, notas de débito e fechamento financeiro', status: 'Ativo' },
    { perfil: 'Operacional', acessos: 'Checklists, vistorias, ocorrências e fechamento pós-evento', status: 'Ativo' },
    { perfil: 'Administrador', acessos: 'Acesso total', status: 'Ativo' },
  ];

  const tiposEvento = [
    'Feira',
    'Congresso',
    'Exposição',
    'Simpósio',
    'Formatura',
    'Baile',
    'Jantar',
    'Desfile',
    'Show',
    'Reunião corporativa',
    'Evento particular',
    'Evento cultural',
    'Evento científico',
    'Evento social',
  ];

  const tiposContrato = [
    'Locação onerosa',
    'Locação não onerosa',
    'Compensação de IPTU',
    'Pacote corporativo',
    'Parceria institucional',
    'Cortesia institucional',
  ];

  const parametrosFinanceiros = [
    { label: 'Caução padrão', value: '20%' },
    { label: 'Multa por atraso', value: '2%' },
    { label: 'Juros', value: '1% ao mês' },
    { label: 'Correção', value: 'IGPM' },
    { label: 'Prazo para pagamento de despesas pós-evento', value: '15 dias' },
  ];

  const modelosChecklist = [
    'Pré-evento',
    'Montagem',
    'Durante o evento',
    'Desmontagem',
    'Pós-evento',
    'Fechamento pós-evento',
  ];

  return (
    <>
      <Helmet>
        <title>Configurações - Expocentro Gestão 360</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Configurações do Sistema</h1>
          <p className="text-muted-foreground">Parâmetros institucionais e operacionais aderentes à operação real do Expocentro</p>
        </div>

        <Tabs defaultValue="empresa" className="space-y-6">
          <div className="overflow-x-auto pb-2">
            <TabsList className="h-12 w-max justify-start">
              <TabsTrigger value="empresa" className="gap-2 px-4"><Building2 className="h-4 w-4" /> Dados Expocentro</TabsTrigger>
              <TabsTrigger value="espacos" className="gap-2 px-4"><Map className="h-4 w-4" /> Espaços Locáveis</TabsTrigger>
              <TabsTrigger value="usuarios" className="gap-2 px-4"><Users className="h-4 w-4" /> Usuários e Permissões</TabsTrigger>
              <TabsTrigger value="tipos" className="gap-2 px-4"><ListTree className="h-4 w-4" /> Tipos de Evento</TabsTrigger>
              <TabsTrigger value="contratos" className="gap-2 px-4"><FileText className="h-4 w-4" /> Tipos de Contrato</TabsTrigger>
              <TabsTrigger value="financeiro" className="gap-2 px-4"><DollarSign className="h-4 w-4" /> Parâmetros Financeiros</TabsTrigger>
              <TabsTrigger value="checklist" className="gap-2 px-4"><Settings2 className="h-4 w-4" /> Modelos de Checklist</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="empresa">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Dados institucionais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="razao" className="text-muted-foreground">Razão social</Label>
                    <Input id="razao" defaultValue="Consórcio BC Eventos SPE Ltda." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj" className="text-muted-foreground">CNPJ</Label>
                    <Input id="cnpj" defaultValue="43.614.804/0001-93" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="equipamento" className="text-muted-foreground">Nome do equipamento</Label>
                    <Input id="equipamento" defaultValue="Expocentro Balneário Camboriú Júlio Tedesco" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="endereco" className="text-muted-foreground">Endereço</Label>
                    <Input id="endereco" defaultValue="Avenida Marginal Oeste, nº 4.250, Bairro Jardim Parque Bandeirantes, Balneário Camboriú/SC" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cep" className="text-muted-foreground">CEP</Label>
                    <Input id="cep" defaultValue="88.336-203" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="banco" className="text-muted-foreground">Dados bancários padrão</Label>
                    <Input id="banco" defaultValue="Conta padrão configurada" />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button className="px-8 shadow-sm">Salvar alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="espacos">
            <Card className="shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                <CardTitle>Cadastro de espaços locáveis</CardTitle>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" /> Novo espaço
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="pl-6 w-[28%] text-[11px] uppercase tracking-wide">Nome do espaço</TableHead>
                      <TableHead className="w-[12%] text-[11px] uppercase tracking-wide">Tipo</TableHead>
                      <TableHead className="w-[14%] text-[11px] uppercase tracking-wide">Área / capacidade</TableHead>
                      <TableHead className="hidden xl:table-cell w-[16%] text-[11px] uppercase tracking-wide">Infraestrutura</TableHead>
                      <TableHead className="w-[20%] text-[11px] uppercase tracking-wide">Serviços / ativação</TableHead>
                      <TableHead className="w-[7%] text-[11px] uppercase tracking-wide">Situação</TableHead>
                      <TableHead className="w-[3%] text-right pr-6 text-[11px] uppercase tracking-wide">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {espacos.map((esp) => (
                      <TableRow key={esp.nome} className="table-row-tall h-auto align-top">
                        <TableCell className="pl-6 py-5 font-semibold">
                          <div className="text-sm leading-tight break-words">{esp.nome}</div>
                          <div className="xl:hidden text-[11px] text-muted-foreground mt-1">{esp.peDireito} • {esp.tensao}</div>
                        </TableCell>
                        <TableCell className="py-5">{esp.tipo}</TableCell>
                        <TableCell className="py-5">
                          <div>{esp.area}</div>
                          <div className="text-[11px] text-muted-foreground">Cap.: {esp.capacidade}</div>
                        </TableCell>
                        <TableCell className="hidden xl:table-cell py-5">
                          <div className="leading-tight">{esp.peDireito} • {esp.tensao}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight">Piso: {esp.piso}</div>
                        </TableCell>
                        <TableCell className="py-5">
                          <div className="leading-tight break-words">{esp.servicos}</div>
                          <div className="text-[11px] text-muted-foreground leading-tight break-words mt-1">{esp.ativacao}</div>
                        </TableCell>
                        <TableCell className="py-5"><Badge className="badge-status-green text-xs px-2 py-0.5">{esp.status}</Badge></TableCell>
                        <TableCell className="text-right pr-6 py-5">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4 text-muted-foreground" /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usuarios">
            <Card className="shadow-sm">
              <CardHeader className="border-b border-border pb-4">
                <CardTitle>Usuários e permissões</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table className="w-full table-fixed text-[12.5px] md:text-[13px]" noHorizontalScroll>
                  <TableHeader className="bg-muted/30">
                    <TableRow>
                      <TableHead className="pl-6 w-[22%] text-[11px] uppercase tracking-wide">Perfil</TableHead>
                      <TableHead className="w-[64%] text-[11px] uppercase tracking-wide">Permissões</TableHead>
                      <TableHead className="w-[14%] pr-6 text-[11px] uppercase tracking-wide">Situação</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {perfisPermissao.map((item) => (
                      <TableRow key={item.perfil} className="table-row-tall h-auto align-top">
                        <TableCell className="pl-6 py-5 font-semibold text-sm">{item.perfil}</TableCell>
                        <TableCell className="py-5 leading-tight break-words">{item.acessos}</TableCell>
                        <TableCell className="pr-6 py-5"><Badge className="badge-status-green text-xs px-2 py-0.5">{item.status}</Badge></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tipos">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Tipos de evento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tiposEvento.map((tipo) => (
                    <Badge key={tipo} variant="secondary" className="px-3 py-1 text-sm">{tipo}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contratos">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Tipos de contrato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tiposContrato.map((tipo) => (
                    <Badge key={tipo} variant="outline" className="px-3 py-1 text-sm">{tipo}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Parâmetros financeiros</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
                  {parametrosFinanceiros.map((parametro) => (
                    <div key={parametro.label} className="rounded-lg border border-border bg-muted/20 p-4">
                      <p className="text-sm text-muted-foreground mb-1">{parametro.label}</p>
                      <p className="text-base font-semibold text-foreground">{parametro.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="checklist">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Modelos de checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {modelosChecklist.map((modelo) => (
                    <div key={modelo} className="rounded-lg border border-border bg-card p-4 flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{modelo}</h3>
                      <Badge className="badge-status-green text-xs">Modelo ativo</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default ConfiguracoesPage;
