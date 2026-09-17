# Site Malu Haddock Lobo

Site oficial em https://maluhaddocklobo.com, construído em Next.js 16 + Tailwind CSS 4, hospedado na Vercel.

**Publicação é automática:** todo push na branch `main` sobe para o site em ~2 minutos. Não existe botão de publicar.

## Rodar no seu computador

Precisa do Node.js 20 ou mais novo (https://nodejs.org).

```bash
npm install
npm run dev
```

Abre em http://localhost:3002. Salvou o arquivo, a página atualiza sozinha.

## Onde fica cada coisa

| O que | Arquivo |
|---|---|
| Home (Método Haddock Lobo) | `app/page.tsx` |
| Curso de Aromaterapia | `app/cursoaromaterapia/page.tsx` |
| Terapia Integral | `app/terapiaintegral/page.tsx` |
| Cosmético Seguro | `app/cosmetico/page.tsx` |
| Destrave sua Jornada | `app/destravesuajornada/page.tsx` |
| Pré-inscrição Mulher 40+ (Travessia) | `app/preinscricao40/page.tsx` |
| Cabeçalho verde e rodapé | `components/site/Header.tsx`, `components/site/Footer.tsx` |
| Links da Hotmart, WhatsApp, grupo | `lib/site.ts` |
| Cores e fontes do site inteiro | `app/globals.css` (bloco `@theme`) |
| Imagens | `public/img/` (nomes descritivos: `pilar1-malu.jpg`, `logo-topo.png`...) |
| Vídeos | `public/video/` |
| Páginas antigas do Wix que redirecionam para a home | `next.config.ts` |

## Tarefas comuns

**Trocar um texto:** abra o arquivo da página, use Ctrl+F com um trecho do texto, edite, salve.

**Trocar um preço ou data:** mesma coisa. Os textos estão escritos direto na página, sem banco de dados.

**Trocar o link de checkout de um curso:** `lib/site.ts`, objeto `CHECKOUT`. Um link por página; trocar ali atualiza todos os botões daquela página.

**Trocar uma imagem:** coloque a nova em `public/img/` com o mesmo nome da antiga, ou com nome novo e ajuste o `src` na página.

**Trocar uma cor:** `app/globals.css`, bloco `@theme`. Cada cor tem um comentário dizendo onde é usada.

**Adicionar uma página nova:** crie a pasta `app/nome-da-pagina/` com um `page.tsx` dentro. A URL vira `/nome-da-pagina` automaticamente.

## Publicar

```bash
git add .
git commit -m "descreva o que mudou"
git push
```

Em ~2 minutos está no ar. Para testar antes de publicar, crie uma branch e abra um Pull Request: a Vercel gera uma URL de preview automática no PR.

Antes de dar push, rode `npm run build` uma vez. Se der erro, a Vercel também vai dar erro e o site **não** atualiza (o anterior continua no ar, nada quebra).

## Formulários

Dois formulários gravam leads no Supabase pela rota `app/api/contato/route.ts`:

- `/terapiaintegral` (contato)
- `/preinscricao40` (pré-lançamento, depois manda para o grupo do WhatsApp)

Dependem de duas variáveis de ambiente na Vercel: `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`. Sem elas o site funciona normalmente, mas os leads não são gravados. A estrutura da tabela está comentada no topo do `route.ts`.

## Coisas herdadas do site antigo que valem revisão

- `/destravesuajornada`: os botões apontam para o topo da própria página (era assim no Wix). Data do evento é de junho.
- `/cursoaromaterapia`: anuncia turma de março de 2023.
- Botão "Descubra mais" em `/cursoaromaterapia` apontava para `/about`, página que não foi migrada. Hoje leva para a home.
