# Deploy InfoTech Website no Vercel

## 🚀 Instruções para Deploy

### 1. Preparação dos Arquivos
- ✅ Todos os arquivos estão prontos no ZIP: `infotech-website-final-corrigido.zip`
- ✅ Formulário configurado para enviar via WhatsApp
- ✅ Nome "InfoTech" corrigido para branco
- ✅ Versão mobile otimizada
- ✅ Arquivo `vercel.json` configurado

### 2. Deploy no Vercel

#### Opção 1: Via GitHub (Recomendado)
1. **Criar repositório no GitHub:**
   - Vá para https://github.com/new
   - Nome: `infotech-website`
   - Deixe público ou privado
   - Clique em "Create repository"

2. **Upload dos arquivos:**
   - Extraia o ZIP `infotech-website-final-corrigido.zip`
   - Faça upload de todos os arquivos para o repositório

3. **Conectar ao Vercel:**
   - Acesse https://vercel.com
   - Clique em "New Project"
   - Conecte sua conta GitHub
   - Selecione o repositório `infotech-website`
   - Clique em "Deploy"

#### Opção 2: Via Upload Direto
1. **Acesse o Vercel:**
   - Vá para https://vercel.com
   - Faça login ou crie uma conta

2. **Deploy direto:**
   - Clique em "New Project"
   - Arraste a pasta extraída do ZIP
   - Clique em "Deploy"

### 3. Configurações do Vercel
- **Framework Preset:** Other
- **Root Directory:** ./
- **Build Command:** (deixe vazio)
- **Output Directory:** (deixe vazio)

### 4. Domínio Personalizado (Opcional)
1. No painel do Vercel, vá em "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

## 📱 Funcionalidades Implementadas

### ✅ Formulário WhatsApp
- **Localização:** Seção "Solicite um Orçamento"
- **Funcionamento:** Coleta dados e envia via WhatsApp formatado
- **Campos:** Nome, Email, Telefone, Empresa, Serviço, Mensagem
- **Validação:** Campos obrigatórios com validação

### ✅ Links WhatsApp Personalizados
- **Todos os botões** redirecionam com mensagens específicas
- **Planos:** Cada plano tem texto personalizado
- **Serviços:** 11 serviços com links únicos
- **Footer:** Links diretos para cada serviço

### ✅ Design Responsivo
- **Mobile First:** Otimizado para celular
- **Cores:** Verde (#7ED321) e preto mantidas
- **Logo:** Nome "InfoTech" em branco
- **Formulário:** Adaptado para mobile

### ✅ Energia Solar em Destaque
- **Posição:** Segunda seção da página inicial
- **Calculadora:** Simulação de economia
- **Call-to-action:** Links diretos para WhatsApp

## 📞 Contatos Configurados
- **WhatsApp:** +55 (69) 99233-1200
- **Email:** comercial@infotechti.com
- **Endereço:** Rua das Mangueiras, 2196 - Ji-Paraná/RO

## 🔧 Arquivos Principais
```
infotech-website/
├── index.html              # Página inicial
├── servicos.html           # Página de serviços
├── energia-solar.html      # Página energia solar
├── sobre.html              # Página sobre
├── vercel.json             # Configuração Vercel
├── css/
│   ├── styles.css          # Estilos principais
│   ├── solar-styles.css    # Estilos energia solar
│   └── form-styles.css     # Estilos formulário
├── js/main.js              # JavaScript principal
└── images/logo.svg         # Logo InfoTech
```

## 🌐 URL Final
Após o deploy, o Vercel fornecerá uma URL como:
- `https://infotech-website-xxx.vercel.app`

## ✅ Checklist Final
- [x] Formulário envia para WhatsApp
- [x] Nome InfoTech em branco
- [x] Versão mobile corrigida
- [x] Energia solar em destaque
- [x] Links WhatsApp personalizados
- [x] Arquivo vercel.json criado
- [x] ZIP final gerado
- [x] Instruções de deploy

**O site está 100% pronto para deploy no Vercel!**
