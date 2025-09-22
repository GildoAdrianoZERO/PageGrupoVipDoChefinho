// Pega TODOS os botões com a classe .cta-button
const ctaButtons = document.querySelectorAll('.cta-button');
const popupContainer = document.getElementById('popup-form');
const closeButton = document.querySelector('.close-button');
const leadForm = document.getElementById('lead-form');
const submitButton = document.querySelector('.submit-button');

// --- Lógica para Abrir e Fechar o Pop-up ---

// Adiciona o evento de clique a CADA botão .cta-button
ctaButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o link de ir para o WhatsApp imediatamente
        popupContainer.style.display = 'flex';
    });
});

// Esconde o pop-up quando o botão de fechar é clicado
closeButton.addEventListener('click', function() {
    popupContainer.style.display = 'none';
});

// Esconde o pop-up se o usuário clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target === popupContainer) {
        popupContainer.style.display = 'none';
    }
});

// --- Lógica para Lidar com o Formulário ---
leadForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Desabilita o botão para evitar cliques duplicados
    submitButton.disabled = true;
    submitButton.innerHTML = 'Enviando...';
    
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    // URL da API do Google Apps Script (certifique-se de que está correta)
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxfDQsyVqYyEbnLf-oZkbwO8UUdUhUXKOK1RzPKdlWVYvbMDk18RS8z8e17CXgkzLMyzg/exec';
    
    // Monta o objeto FormData para enviar os dados
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('telefone', telefone);
    
    // Envia os dados para o Google Apps Script
    fetch(scriptUrl, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(data => {
            console.log('Dados enviados com sucesso:', data);
            
            // Redireciona para o grupo do WhatsApp após o sucesso do envio
            // ATENÇÃO: SUBSTITUA A URL ABAIXO PELA SUA URL CORRETA
            window.location.href = 'https://wa.me/5581988107163?text=Ol%C3%A1,%20estou%20agora%20na%20p%C3%A1gina%20da%20sua%20empresa%20no%20Reclame%20AQUI!%20Voc%C3%AA%20pode%20me%20ajudar?';
        })
        .catch(error => {
            console.error('Erro ao enviar os dados:', error);
            alert('Ocorreu um erro. Tente novamente.');
            
            // Habilita o botão novamente em caso de erro
            submitButton.disabled = false;
            submitButton.innerHTML = 'Entrar para o Grupo VIP!';
        });
});
