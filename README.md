# 📊 TechInova - Painel de Linha de Produção

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

> **TechInova Painel de Linha** é uma solução robusta e moderna para monitoramento em tempo real de linhas de produção e montagem industriais. Desenvolvido para proporcionar visibilidade operacional completa, otimizar indicadores de eficiência e agilizar a tomada de decisões no chão de fábrica.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Arquitetura e Tecnologias](#-arquitetura-e-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Como Executar](#-como-executar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

---

## 🚀 Visão Geral

O **Painel de Linha TechInova** foi projetado para transformar dados brutos do chão de fábrica em insights visuais claros e acionáveis. Através de dashboards intuitivos exibidos em monitores industriais ou dispositivos móveis, gestores e operadores conseguem acompanhar a produtividade, paradas de linha, eficiência global de equipamentos (OEE) e metas diárias instantaneamente.

### 🎯 Objetivos do Sistema:
- **Exibição em Tempo Real:** Atualizações contínuas de metas vs. produção realizada.
- **Redução de Downtime:** Identificação rápida de gargalos e paradas de linha não planejadas.
- **Gestão à Vista (Andon):** Sinalização visual clara de alertas e estados operacionais.
- **Rastreabilidade e Métricas:** Histórico detalhado de turnos, lotes de produção e desempenho individual por linha.

---

## ✨ Funcionalidades Principais

- 📈 **Monitoramento em Tempo Real:** Acompanhamento de peças produzidas, taxa de rejeito e tempo de ciclo.
- 🚦 **Sistema Andon (Gestão à Vista):** Alertas visuais e sonoros para paradas por falta de insumo, manutenção ou qualidade.
- 📊 **Indicadores Chave (KPIs / OEE):** Cálculo de Disponibilidade, Desempenho e Qualidade em tempo real.
- ⚙️ **Gerenciamento de Linhas e Turnos:** Configuração flexível de diferentes linhas de produção, horários e metas operacionais.
- 📱 **Interface Responsiva:** Otimizada tanto para TV/Monitores de Chão de Fábrica (Modo Kiosk) quanto para tablets e desktops.
- 📑 **Relatórios Exportáveis:** Geração de relatórios de produção em PDF/Excel para análise gerencial.

---

## 🛠️ Arquitetura e Tecnologias

O projeto utiliza uma arquitetura moderna, escalável e resiliente:

* **Frontend:** React.js / Vue.js / HTML5 & CSS3 (TailwindCSS / Bootstrap)
* **Backend:** Node.js (Express / NestJS) ou Python (FastAPI / Django)
* **Comunicação em Tempo Real:** WebSockets (Socket.io) / MQTT para conexão com sensores e inversores
* **Banco de Dados:** PostgreSQL / MongoDB / Redis (Cache de alta performance)
* **Containerização:** Docker & Docker Compose

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v18.x ou superior)
- **npm** ou **yarn**
- **Git**
- **Docker** e **Docker Compose** *(opcional, porém recomendado para ambiente de desenvolvimento/produção)*

---

## ⚙️ Instalação e Configuração

Nome completo: Aimée Juliana de Oliveira Lima
Matrícula: 26174872

1. **Clone o Repositório:**

   ```bash
   git clone [https://github.com/Nisflei/techinova-painel-linha.git](https://github.com/Nisflei/techinova-painel-linha.git)
   cd techinova-painel-linha
