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

O domínio personalizado de publicação é:

<https://www.leticia.com/>

### DNS necessário

No provedor do domínio, crie um registro **CNAME** para `www` apontando para
`paulohenriqueph12335-lang.github.io`. Depois que o deploy terminar, habilite
**Enforce HTTPS** em **Settings → Pages**. A URL pública continuará sendo
`https://www.leticia.com`, sem o nome da conta do GitHub.
