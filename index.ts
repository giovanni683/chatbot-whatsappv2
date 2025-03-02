import { create, Whatsapp, Message } from '@wppconnect-team/wppconnect';

// Função para iniciar o bot
async function startBot() {
  try {
    const client: Whatsapp = await create({
      session: 'bot-wpp',
      catchQR: (base64Qr) => {
        console.log('Escaneie este QR Code para conectar:', base64Qr);
      },
      statusFind: (statusSession) => {
        console.log('Status da sessão:', statusSession);
      },
    });

    console.log('🤖 Bot conectado ao WhatsApp!');

    // Escutando mensagens recebidas
    client.onMessage(async (message: Message) => {
      console.log('📩 Mensagem recebida:', message);

      // ✅ Verificação para evitar erro de undefined
      if (message?.body?.toLowerCase() === 'oi' && message.from) {
        await client.sendText(message.from, 'Olá! Como posso te ajudar? 😊');
      }
    });
  } catch (error) {
    console.error('❌ Erro ao iniciar o bot:', error);
  }
}

// Iniciar o bot
startBot();