
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building2, 
  FileText, 
  CalendarDays, 
  ClipboardList, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

function HomePage() {
  const features = [
    {
      icon: Building2,
      title: 'Relacionamento Comercial',
      description: 'Gestão completa do relacionamento com empresas, contatos e histórico de interações em uma única visão executiva.',
    },
    {
      icon: FileText,
      title: 'Gestão Contratual',
      description: 'Emissão e acompanhamento de propostas, contratos de locação e termos de responsabilidade jurídica.',
    },
    {
      icon: CalendarDays,
      title: 'Controle de Espaços',
      description: 'Mapa de ocupação integrado, evitando conflitos de agenda e otimizando a rentabilidade dos pavilhões.',
    },
    {
      icon: ClipboardList,
      title: 'Acompanhamento Operacional',
      description: 'Checklists rigorosos para as fases de pré-montagem, realização e desmontagem de cada evento.',
    },
    {
      icon: DollarSign,
      title: 'Gestão Financeira',
      description: 'Previsibilidade de recebíveis, gestão de parcelas e controle rigoroso de despesas repassadas.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Executivos',
      description: 'Dashboards gerenciais com indicadores de performance para a diretoria do Expocentro.',
    },
  ];

  const differentiators = [
    'Controlar relacionamento comercial de ponta a ponta',
    'Gerenciar contratos de locação e aditivos',
    'Controlar espaços e períodos sem conflito de agenda',
    'Acompanhar operação via checklists estruturados',
    'Gerenciar financeiro, cauções e multas',
    'Realizar fechamento pós-evento de forma automatizada',
  ];

  const scrollToModules = (e) => {
    e.preventDefault();
    document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Expocentro Gestão 360</title>
        <meta name="description" content="Plataforma executiva de gestão integrada para o Expocentro Balneário Camboriú." />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        {/* Hero Section */}
        <section 
          className="relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1562969113-c5d9fde25b6c)',
          }}
        >
          {/* Institutional Gradient Overlay */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center mt-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              Sistema Exclusivo de Gestão
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{letterSpacing: '-0.02em'}}>
              Gestão Integrada do<br />Expocentro Balneário Camboriú
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              Plataforma desenvolvida para o controle executivo completo: do primeiro contato comercial ao fechamento financeiro de cada evento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-xl transition-all hover:-translate-y-1">
                <Link to="/dashboard">
                  Acessar Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button onClick={scrollToModules} size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white text-lg px-8 py-6 h-auto backdrop-blur-sm transition-all">
                Conhecer módulos
              </Button>
            </div>
          </div>
        </section>

        {/* Why Not Just a CRM Section */}
        <section className="py-24 bg-muted/50 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{letterSpacing: '-0.02em'}}>
                Por que não apenas um CRM?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A gestão do Expocentro exige um controle centralizado. Nossa solução vai além do comercial, integrando toda a cadeia de valor da locação de pavilhões.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground font-medium text-lg pt-1 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="modulos" className="py-24 bg-background scroll-m-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{letterSpacing: '-0.02em'}}>
                Módulos da Plataforma
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A arquitetura do sistema foi projetada para garantir segurança da informação, previsibilidade financeira e controle operacional para a diretoria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 border border-border">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden mt-auto">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{letterSpacing: '-0.02em'}}>
              Visão Executiva em Tempo Real
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed font-light">
              Acesse o painel gerencial e acompanhe os indicadores críticos do Expocentro Balneário Camboriú.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 h-auto shadow-lg transition-transform hover:scale-[1.02]">
              <Link to="/dashboard">
                Acessar Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-card border-t border-border mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">EG</span>
              </div>
              <span className="font-bold text-foreground text-sm">Expocentro Gestão 360</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>© 2026 Expocentro Balneário Camboriú. Plataforma de Uso Interno.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
