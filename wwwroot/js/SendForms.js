window.SendForms = function (serviceId, templateId, formData) {
    return emailjs.send(serviceId, templateId, formData)
        .then(function (response) {
            console.log("✅ Email enviado!", response.status, response.text);
            return true;
        }, function (error) {
            console.error("❌ Erro ao enviar:", error);
            return false;
        });
}
