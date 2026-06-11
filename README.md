# 🌐 Web Testing — OrangeHRM (Playwright)

> Automação de testes E2E para aplicação web utilizando Playwright, com cobertura de fluxos de autenticação do sistema [OrangeHRM](https://opensource-demo.orangehrmlive.com).

---

## 📌 Sobre o Projeto

Este repositório contém uma suíte de testes automatizados E2E para o sistema de RH **OrangeHRM**, disponibilizado publicamente como ambiente de demonstração para fins educacionais em Quality Assurance.

O projeto demonstra duas abordagens de escrita de testes com Playwright: a **abordagem direta** utilizando a API nativa do Playwright, e a **abordagem com Page Object Model (POM)**, que separa a lógica de interação com a interface dos casos de teste, garantindo maior organização e manutenibilidade do código.

---

## 🛠️ Tecnologias Utilizadas

- [Playwright](https://playwright.dev/) — framework de automação de testes E2E
- JavaScript (ESModules) — linguagem dos testes e configurações
- Git & GitHub — versionamento e hospedagem do projeto

---

## 📁 Estrutura do Projeto

```
primeiros-passos-playwright/
├── page/
│   ├── loginPage.js           # Page Object da tela de Login
│   └── dashboardPage.js       # Page Object da tela de Dashboard
├── tests/
│   └── test.spec.js           # Casos de teste E2E de Login
├── .gitignore
├── package.json               # Dependências e scripts do projeto
├── playwright.config.js       # Configuração do Playwright
└── README.md
```

---

## ✅ Casos de Teste Implementados

| Módulo | Caso de Teste             | Abordagem          | Status          |
|--------|---------------------------|--------------------|-----------------|
| Login  | Login com sucesso         | Direta (Playwright API) | ✅ Implementado |
| Login  | Login com sucesso (PO)    | Page Object Model  | ✅ Implementado |

---

## 🌍 Aplicação Testada

- **Sistema:** OrangeHRM Live Demo
- **URL:** https://opensource-demo.orangehrmlive.com
- **Credenciais de acesso:** disponíveis publicamente na própria página de login do ambiente demo

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18+

---

## 🚀 Como Executar

**1. Clone o repositório:**
```bash
git clone https://github.com/joao-vitor-de-souza-lemos/primeiros-passos-playwright.git
cd primeiros-passos-playwright
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Instale os browsers do Playwright:**
```bash
npx playwright install
```

**4. Execute os testes:**
```bash
npx playwright test
```

**5. Visualize o relatório HTML após a execução:**
```bash
npx playwright show-report
```

---

## 👤 Autor

**João Vitor de Souza Lemos**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-joaolemos2004-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/joaolemos2004)
[![GitHub](https://img.shields.io/badge/GitHub-joao--vitor--de--souza--lemos-black?style=flat&logo=github)](https://github.com/joao-vitor-de-souza-lemos)
