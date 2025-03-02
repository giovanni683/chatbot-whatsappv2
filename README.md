# 🤖 Chatbot WhatsApp com Node.js e TypeScript

Este é um **chatbot para WhatsApp** desenvolvido com **Node.js**, **TypeScript** e **wppconnect**. Ele permite o envio e recebimento de mensagens automatizadas.

## 📌 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express.js](https://expressjs.com/)
* [WPPConnect](https://github.com/wppconnect-team/wppconnect)
* [Cors](https://www.npmjs.com/package/cors)

## 🚀 Instalação e Configuração

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/giovanni683/chatbot-whatsappv2.git
cd chatbot-whatsappv2
```

### 2️⃣ Instalar as dependências
```sh
npm install
```

### 3️⃣ Configuração do ambiente
Se necessário, crie um arquivo `.env` para armazenar variáveis de ambiente.

## ▶️ Executando o servidor

### 📌 Modo desenvolvimento (TypeScript)
```sh
npx ts-node src/server.ts
```

### 📌 Modo produção (compilar e rodar)
```sh
npx tsc
node build/server.js
```

## 🔥 Endpoints da API

### 1️⃣ Enviar mensagem
* **URL:** `POST /send-message`
* **Body JSON:**
  ```json
  {
    "number": "5599999999999",
    "message": "Olá, este é um teste!"
  }
  ```
* **Resposta de sucesso:**
  ```json
  {
    "status": "Mensagem enviada com sucesso!"
  }
  ```
* **Resposta de erro (exemplo):**
  ```json
  {
    "error": "Número e mensagem são obrigatórios."
  }
  ```

## 🛠 Possíveis Erros e Soluções

### ❌ Erro TS2769: No overload matches this call
📌 **Causa:**  
O TypeScript interpretou mal o middleware `app.post()`.

✔️ **Solução:**  
Modifique `server.ts` removendo a tipagem explícita:
```typescript
app.post('/send-message', async (req, res) => { ... });
```

## 📜 Estrutura do Projeto

```
chatbot-whatsappv2/
│-- src/
│   ├── bot.ts           # Configuração do bot WhatsApp
│   ├── responses.ts     # Respostas automáticas do chatbot
│   ├── server.ts        # Servidor Express.js
│   ├── types.ts         # Definição de tipos TypeScript
│-- node_modules/        # Dependências do projeto
│-- package.json         # Dependências e scripts
│-- tsconfig.json        # Configuração do TypeScript
│-- README.md            # Documentação do projeto
```

## 📌 Contribuição

Se quiser contribuir:
1. Faça um fork do repositório 🍴
2. Crie uma branch (`git checkout -b feature/minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Envie um PR (`git push origin feature/minha-feature`)

Obrigado por contribuir! 🙏
