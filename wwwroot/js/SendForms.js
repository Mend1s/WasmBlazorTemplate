//window.SendForms = function (serviceId, templateId, formData) {
//    return emailjs.send(serviceId, templateId, formData)
//        .then(function (response) {
//            console.log("✅ Email enviado!", response.status, response.text);
//            return true;
//        }, function (error) {
//            console.error("❌ Erro ao enviar:", error);
//            return false;
//        });
//}

window.SendForms = async function (formData) {
    try {
        const serviceID = "service_fblsvka";   // substitua
        const templateID = "template_l2xgjyd"; // substitua

        // Cria uma única mensagem concatenando todos os dados
        const messageBody = `
            📩 Novo contato via site

            👤 Nome: ${formData.name}
            📧 Email: ${formData.email}
            📞 Telefone: ${formData.phone}
            🏙️ Cidade: ${formData.city}
            💬 Mensagem: ${formData.message}
        `;

        // Envia para o EmailJS
        const response = await emailjs.send(serviceID, templateID, {
            from_name: formData.name,
            from_email: formData.email,
            message: messageBody
        });

        console.log("✅ Email enviado com sucesso!", response.status, response.text);
        return true;
    } catch (error) {
        console.error("❌ Erro ao enviar email:", error);
        return false;
    }
};
