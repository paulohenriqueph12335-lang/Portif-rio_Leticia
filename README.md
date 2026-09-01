# leticia.com

Portfólio estático e Progressive Web App (PWA), configurado para publicação
automática no GitHub Pages. Após a primeira visita, o service worker guarda os
arquivos estáticos em cache e atende as visitas seguintes sem conexão.

## Publicação no GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica o site sempre que
houver um push nas branches `main` ou `work`, além de permitir uma execução
manual pela aba **Actions** do GitHub.

Antes do primeiro deploy, no repositório do GitHub acesse **Settings → Pages**
e selecione **GitHub Actions** como fonte de publicação. Em seguida, envie uma
das branches configuradas ou execute o workflow manualmente.

Para um repositório chamado `Portif-rio_Leticia` da conta
`paulohenriqueph12335-lang`, o endereço de publicação será:

<https://paulohenriqueph12335-lang.github.io/Portif-rio_Leticia/>
