
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  CalendarDays,
  FileText,
  DollarSign,
  Settings,
  BarChart3,
  ClipboardList,
  ChevronDown,
  X,
  ClipboardCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [openSections, setOpenSections] = React.useState({
    crm: true,
    eventos: true,
    financeiro: true,
    operacional: true,
    relatorios: true,
    configuracoes: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const menuItems = [
    {
      title: 'Painel Executivo',
      icon: LayoutDashboard,
      path: '/dashboard',
      single: true,
    },
    {
      title: 'CRM',
      icon: Building2,
      section: 'crm',
      items: [
        { title: 'Empresas', path: '/empresas' },
        { title: 'Agenda Comercial', path: '/agenda' },
      ],
    },
    {
      title: 'Eventos',
      icon: CalendarDays,
      section: 'eventos',
      items: [
        { title: 'Todos os Eventos', path: '/eventos' },
      ],
    },
    {
      title: 'Propostas e Contratos',
      icon: FileText,
      path: '/propostas-contratos',
      single: true,
    },
    {
      title: 'Financeiro',
      icon: DollarSign,
      section: 'financeiro',
      items: [
        { title: 'Visão Geral', path: '/financeiro' },
      ],
    },
    {
      title: 'Operacional',
      icon: ClipboardList,
      section: 'operacional',
      items: [
        { title: 'Gestão Operacional', path: '/operacional' },
      ],
    },
    {
      title: 'Fechamento Pós-Evento',
      icon: ClipboardCheck,
      path: '/closing',
      single: true,
    },
    {
      title: 'Relatórios',
      icon: BarChart3,
      section: 'relatorios',
      items: [
        { title: 'Relatórios Executivos', path: '/relatorios' },
      ],
    },
    {
      title: 'Configurações',
      icon: Settings,
      path: '/configuracoes',
      single: true,
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={cn(
          "fixed top-16 left-0 bottom-0 w-64 bg-card border-r border-border z-40 transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden absolute top-2 right-2"
          >
            <X className="h-5 w-5" />
          </Button>

          <nav className="space-y-1 mt-8 lg:mt-0">
            {menuItems.map((item) => {
              if (item.single) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </Link>
                );
              }

              return (
                <Collapsible
                  key={item.section}
                  open={openSections[item.section]}
                  onOpenChange={() => toggleSection(item.section)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors">
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openSections[item.section] && "rotate-180"
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 pl-11 pr-3 py-2 rounded-lg text-sm transition-colors",
                          isActive(subItem.path)
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
