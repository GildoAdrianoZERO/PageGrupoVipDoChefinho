Landing Page de Conversão - Grupo VIP do Chefinho
Uma landing page otimizada para capturar leads e convertê-los em membros de um grupo de ofertas no WhatsApp. Desenvolvida para a Tradição Móveis, esta página foi criada para direcionar o tráfego de lives e anúncios, garantindo que cada visitante tenha a oportunidade de se cadastrar antes de entrar no grupo.

Recursos Principais
Design Profissional e Moderno: Estilo minimalista com foco em preto e amarelo, seguindo a identidade visual da marca.

Pop-up de Captura de Leads: Um formulário de cadastro que aparece antes do redirecionamento para o WhatsApp, garantindo a coleta de dados importantes (nome, e-mail, telefone).

Integração com Google Sheets: Os dados dos leads são enviados automaticamente para uma planilha do Google Sheets via API (Google Apps Script), criando um banco de dados valioso para futuras campanhas.

Redirecionamento Inteligente: Após o envio do formulário, o usuário é direcionado para o link do Grupo VIP no WhatsApp.

Vídeo Incorporado: Seção dedicada para exibir vídeos de produtos, depoimentos ou conteúdos exclusivos, aumentando o engajamento.

CTA (Call to Action) Otimizado: Botões de chamada para ação estrategicamente posicionados e com animações para maximizar a conversão.

Tecnologias Utilizadas
HTML5: Estrutura da página.

CSS3: Estilização, animações e responsividade.

JavaScript: Lógica de exibição do pop-up, validação do formulário e envio de dados via fetch API.

Google Apps Script: Para criar a API que recebe os dados do formulário e os insere na planilha do Google Sheets.

Como Configurar o Projeto
Siga estes passos para colocar a landing page no ar e conectar tudo corretamente.

1. Configuração da Planilha Google Sheets
Crie uma nova planilha no Google Sheets.

Na primeira linha, defina as colunas: nome, email, telefone.

Clique em Extensões > Apps Script.

Copie o código fornecido no arquivo [Nome do seu arquivo .gs] e cole no editor.

Publique o script como "Aplicativo da Web" com acesso para "Qualquer pessoa" e copie a URL gerada.

2. Configuração do Código
Abra os arquivos do projeto e faça as seguintes edições:

No arquivo script.js:

Substitua [SUA_URL_DO_APPS_SCRIPT] pela URL que você copiou da implantação do Google Apps Script.

Substitua [SEU_LINK_DO_GRUPO_WHATSAPP] pelo link de convite do seu grupo.

No arquivo index.html:

Substitua [SEU_LINK_DO_GRUPO_WHATSAPP] em todos os botões e links.

Substitua a URL do vídeo do YouTube no <iframe> pelo seu próprio vídeo.

3. Rodando o Projeto
Basta abrir o arquivo index.html em seu navegador. Para hospedagem, você pode subir os arquivos em serviços como Vercel, Netlify ou GitHub Pages.
