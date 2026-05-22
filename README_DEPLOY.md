# 🚀 Como Publicar a Landing Page do Acué no GitHub e Vercel

Parabéns! Sua landing page está pronta e 100% otimizada. Siga este guia simples de 3 passos para colocar o site no ar de forma totalmente gratuita usando o **GitHub** e a **Vercel**.

---

## 🛠️ Passo 1: Criar um Repositório no GitHub

1. Acesse o [GitHub](https://github.com/) e faça login (ou crie uma conta se não tiver).
2. No canto superior direito, clique no botão **"+"** e selecione **"New repository"** (Novo repositório).
3. Dê um nome para o repositório (ex: `acue-landing-page`).
4. Deixe o repositório como **Public** (Público).
5. **NÃO** marque as opções de adicionar README, .gitignore ou licença (pois nós já temos esses arquivos configurados).
6. Clique em **"Create repository"** (Criar repositório).

---

## 💻 Passo 2: Subir os arquivos para o GitHub

Você pode fazer isso de duas formas:

### Opção A: Usando o GitHub Desktop (Recomendado se não usa terminal)
1. Baixe e abra o [GitHub Desktop](https://desktop.github.com/).
2. Adicione a pasta do projeto `acue-landing-page` como um repositório local.
3. Clique em **"Publish repository"** para enviar tudo diretamente para sua conta do GitHub.

### Opção B: Usando a Linha de Comando (Terminal)
Abra o terminal dentro da pasta do projeto e execute os seguintes comandos:

```bash
# Inicializar o repositório git
git init

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: landing page do acue completa"

# Renomear a branch principal para main
git branch -M main

# Conectar ao seu repositório do GitHub (Substitua pelo seu link do GitHub)
git remote add origin https://github.com/SEU-USUARIO/acue-landing-page.git

# Enviar os arquivos
git push -u origin main
```

---

## ⚡ Passo 3: Deploy Gratuito na Vercel

1. Acesse a [Vercel](https://vercel.com/) e crie uma conta gratuita (você pode fazer login diretamente com sua conta do GitHub).
2. No painel da Vercel, clique em **"Add New..."** e selecione **"Project"** (Projeto).
3. Na lista de repositórios, você verá o `acue-landing-page` que acabou de subir. Clique em **"Import"** (Importar) ao lado dele.
4. Nas configurações do projeto, a Vercel detectará automaticamente que é um projeto **Vite**.
5. Não precisa alterar nenhuma configuração! Apenas clique no botão **"Deploy"** (Implantar).
6. **Pronto!** Em menos de 1 minuto, sua landing page estará no ar com um link gratuito da Vercel (ex: `acue-landing-page.vercel.app`).

---

## 🌐 Passo 4: Configurar seu Domínio Personalizado na Vercel (Opcional)

Se você quiser conectar o site ao seu domínio oficial (ex: `lp.acueapp.com.br` ou similar):
1. No painel do seu projeto na Vercel, vá em **Settings** (Configurações) > **Domains** (Domínios).
2. Digite o domínio que deseja usar e clique em **Add** (Adicionar).
3. A Vercel mostrará os registros de DNS (tipo `A` ou `CNAME`) que você precisa adicionar na empresa onde você comprou seu domínio (ex: Registro.br, HostGator, GoDaddy).
4. Adicione esses registros no seu painel de DNS e pronto! O site estará conectado ao seu domínio oficial de forma segura e com certificado SSL gratuito gerado automaticamente.

---

Se tiver qualquer dúvida durante o processo, estou aqui para ajudar!
