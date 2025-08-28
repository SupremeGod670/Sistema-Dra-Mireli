import React, { useState } from 'react';
import { Calendar, Users, Clock, Baby, Heart, Moon, Star } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Moon size={20} /> },
    { id: 'pacientes', label: 'Pequenos Pacientes', icon: <Baby size={20} /> },
    { id: 'agendamentos', label: 'Agendamentos', icon: <Calendar size={20} /> },
    { id: 'horarios', label: 'Horários', icon: <Clock size={20} /> },
  ];

  const upcomingAppointments = [
    { time: '09:00', patient: 'Sofia (8 meses)', type: 'Primeira consulta' },
    { time: '10:30', patient: 'Gabriel (2 anos)', type: 'Retorno' },
    { time: '14:00', patient: 'Luna (6 meses)', type: 'Avaliação' },
  ];

  const stats = [
    { label: 'Atendimentos Hoje', value: '8', color: 'rosa' },
    { label: 'Pequenos Pacientes', value: '142', color: 'azul' },
    { label: 'Este Mês', value: '86', color: 'verde' },
    { label: 'Próxima Semana', value: '24', color: 'lavanda' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="dashboard">
            <div className="welcome-section">
              <h1>Bem-vinda, Dra. Mireli! <Heart size={24} className="heart-icon" /></h1>
              <p>Cuidando com carinho do desenvolvimentinho dos pequenos pacientes</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className={`stat-card ${stat.color}`}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="appointments-section">
              <h2>Próximos Atendimentos <Star size={20} className="star-icon" /></h2>
              <div className="appointments-list">
                {upcomingAppointments.map((apt, index) => (
                  <div key={index} className="appointment-card">
                    <div className="appointment-time">{apt.time}</div>
                    <div className="appointment-details">
                      <h4>{apt.patient}</h4>
                      <p>{apt.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'pacientes':
        return (
          <div className="patients-section">
            <h1>Nossos Pequenos Pacientes <Baby size={24} className="baby-icon" /></h1>
            <div className="patient-card">
              <h3>Sofia Martins</h3>
              <p>8 meses • Primeira consulta agendada</p>
              <p>Responsável: Maria Martins</p>
            </div>
            <div className="patient-card">
              <h3>Gabriel Santos</h3>
              <p>2 anos • Em acompanhamento</p>
              <p>Responsável: Ana Santos</p>
            </div>
          </div>
        );

      case 'agendamentos':
        return (
          <div className="appointments-section">
            <h1>Agendamentos <Calendar size={24} className="calendar-icon" /></h1>
            <div className="calendar-placeholder">
              <p>Calendário de agendamentos</p>
              <p>Aqui será exibido o calendário interativo</p>
            </div>
          </div>
        );

      case 'horarios':
        return (
          <div className="schedule-section">
            <h1>Gestão de Horários <Clock size={24} className="clock-icon" /></h1>
            <div className="schedule-grid">
              <div className="time-slot available">09:00 - Disponível</div>
              <div className="time-slot occupied">10:30 - Sofia M.</div>
              <div className="time-slot available">12:00 - Disponível</div>
              <div className="time-slot occupied">14:00 - Gabriel S.</div>
            </div>
          </div>
        );

      default:
        return <div>Seção não encontrada</div>;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-section">
          <div className="logo-placeholder">
            <Moon size={32} className="logo-moon" />
            <Baby size={24} className="logo-baby" />
          </div>
          <div className="logo-text">
            <h2>Dra. Mireli Mendonça</h2>
            <p>Osteopatia Pediátrica</p>
            <span>CREFITO 135370</span>
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <nav>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;