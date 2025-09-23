// Pega TODOS os botões com a classe .cta-button
const ctaButtons = document.querySelectorAll('.cta-button');
const popupContainer = document.getElementById('popup-form');
const closeButton = document.querySelector('.close-button');
const leadForm = document.getElementById('lead-form');
const submitButton = document.querySelector('.submit-button');

// --- Lógica para Abrir e Fechar o Pop-up ---
ctaButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        popupContainer.style.display = 'flex';
    });
});

closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});

// --- Lógica para Lidar com o Formulário e Redirecionar Imediatamente ---
leadForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando...';
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    // URL da API de geolocalização de IP
    const urlApi = 'https://ipapi.co/json/';
    
    // Inicia o processo de captura de localização e envio de dados
    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('telefone', telefone);
            
            // Adiciona os dados de localização
            formData.append('país', data.country_name || 'Desconhecido');
            formData.append('cidade', data.city || 'Desconhecida');
            formData.append('estado', data.region || 'Desconhecido');
            
            // URL da sua API do Google Apps Script
            const scriptUrl = 'https://script.google.com/macros/s/AKfycby5Qq1OoPB0DS8-mMijBCpANLUcsKcxKPamRvbhVRv6CU5nXgbL4KBP-ORVh397cxVp/exec';
            
            // Inicia o envio dos dados, mas não espera pela resposta
            fetch(scriptUrl, { method: 'POST', body: formData })
                .catch(error => console.error('Erro ao enviar os dados:', error));
        })
        .catch(error => {
            console.error('Erro ao obter a localização, mas o formulário será enviado:', error);
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('telefone', telefone);

            const scriptUrl = 'https://script.google.com/macros/s/AKfycby5Qq1OoPB0DS8-mMijBCpANLUcsKcxKPamRvbhVRv6CU5nXgbL4KBP-ORVh397cxVp/exec';

            fetch(scriptUrl, { method: 'POST', body: formData })
                .catch(error => console.error('Erro ao enviar os dados:', error));
        });
        
    // Redireciona o usuário sem esperar a resposta do servidor
    // Usamos um pequeno delay para garantir que o fetch seja iniciado
    setTimeout(() => {
        window.location.href = 'https://wa.me/5581988107163?text=Ol%C3%A1,%20estou%20agora%20na%20p%C3%A1gina%20da%20sua%20empresa%20no%20Reclame%20AQUI!%20Voc%C3%AA%20pode%20me%20ajudar?';
    }, 50); // 50 milissegundos é um tempo imperceptível para o usuário
});