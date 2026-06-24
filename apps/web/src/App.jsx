
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import EmpresasPage from './pages/EmpresasPage.jsx';
import EmpresaDetalhePage from './pages/EmpresaDetalhePage.jsx';
import AgendaComercialPage from './pages/AgendaComercialPage.jsx';
import EventosPage from './pages/EventosPage.jsx';
import EventoDetalhePage from './pages/EventoDetalhePage.jsx';
import PropostasContratosPage from './pages/PropostasContratosPage.jsx';
import FinanceiroPage from './pages/FinanceiroPage.jsx';
import OperacionalPage from './pages/OperacionalPage.jsx';
import ClosingPage from './pages/ClosingPage.jsx';
import RelatoriosPage from './pages/RelatoriosPage.jsx';
import ConfiguracoesPage from './pages/ConfiguracoesPage.jsx';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-background">
              <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              <main className="pt-16 lg:pl-64">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/empresas" element={<EmpresasPage />} />
                    <Route path="/empresas/:id" element={<EmpresaDetalhePage />} />
                    <Route path="/agenda" element={<AgendaComercialPage />} />
                    <Route path="/eventos" element={<EventosPage />} />
                    <Route path="/eventos/:id" element={<EventoDetalhePage />} />
                    <Route path="/propostas-contratos" element={<PropostasContratosPage />} />
                    <Route path="/financeiro" element={<FinanceiroPage />} />
                    <Route path="/operacional" element={<OperacionalPage />} />
                    <Route path="/closing" element={<ClosingPage />} />
                    <Route path="/relatorios" element={<RelatoriosPage />} />
                    <Route path="/configuracoes" element={<ConfiguracoesPage />} />
                  </Routes>
                </div>
              </main>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
