module.exports = {
    name: "about",
    run: async ({ sock, msg }) => {
        const from = msg.key.remoteJid;

        const text = `
🤖 *Psycho-Bot*
Version : 1.1.1
Auteur : MACHINE REVOLUTION
Description : Bot WhatsApp multifonctions basé sur Baileys
⚡ Fonctions : Audio, Sticker, Mini-jeux, Admin, Utilitaires et plus

📱 Suivez l'auteur :
- GitHub : https://github.com/LeudjeuNjiatcha-YanisAel
- LinkedIn : https://www.linkedin.com/in/leudjeu-njiatcha-yanis-ael-9b1a4b1b7/
        `;

        await sock.sendMessage(from, { text });
    }
};