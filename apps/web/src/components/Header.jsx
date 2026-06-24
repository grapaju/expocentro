
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

function Header({ onMenuClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary text-primary-foreground border-b border-primary/20 z-40">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-primary-foreground hover:bg-primary/80"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">EG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight">Expocentro Gestão 360</h1>
              <p className="text-xs text-primary-foreground/70">Gestão Integrada de Eventos</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative text-primary-foreground hover:bg-primary/80">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-destructive-foreground text-xs">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-2">
                <p className="text-sm font-semibold mb-2">Notificações</p>
                <div className="space-y-2">
                  <div className="p-2 rounded-lg bg-muted/50 text-sm">
                    <p className="font-medium">Retorno pendente</p>
                    <p className="text-muted-foreground text-xs">Empresa sem contato há 7 dias</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/50 text-sm">
                    <p className="font-medium">Pagamento atrasado</p>
                    <p className="text-muted-foreground text-xs">Parcela vencida - Feira Construir SC</p>
                  </div>
                  <div className="p-2 rounded-lg bg-muted/50 text-sm">
                    <p className="font-medium">Evento próximo</p>
                    <p className="text-muted-foreground text-xs">Congresso Saúde em 5 dias</p>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <span className="font-medium">Marina Silva</span>
                  <span className="text-xs text-muted-foreground">Diretora Comercial</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>Meu perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
