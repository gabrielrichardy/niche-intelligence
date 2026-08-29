# Niche Intelligence — Dashboard

[![CI](https://github.com/gabrielrichardy/niche-intelligence/actions/workflows/ci.yml/badge.svg)](https://github.com/gabrielrichardy/niche-intelligence/actions/workflows/ci.yml)
![Licença](https://img.shields.io/badge/license-proprietário-red)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Painel web para social media analisar o perfil de uma empresa no Instagram, seus
conteúdos, o mercado e oportunidades.

> **Status:** MVP funcional. Por padrão roda com **dados de exemplo**; ao
> configurar um token da Instagram Graph API, passa a exibir dados reais do
> perfil analisado.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Recharts** (gráficos) + **lucide-react** (ícones)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Variáveis de ambiente

Copie o exemplo e preencha para ligar **dados reais** do Instagram:

```bash
cp .env.local.example .env.local
```

| Variável                    | Descrição                                                          |
| --------------------------- | ------------------------------------------------------------------ |
| `INSTAGRAM_ACCESS_TOKEN`    | Token da Instagram Graph API (Graph API Explorer)                  |
| `INSTAGRAM_BUSINESS_ID`     | ID da sua conta comercial do Instagram (usada para consultar)      |
| `INSTAGRAM_TARGET_USERNAME` | @ do perfil a analisar (conta Business/Criador pública) — `biodev` |

Sem essas variáveis, o dashboard funciona normalmente com dados de exemplo.
**O `.env.local` nunca é commitado** (está no `.gitignore`). Veja o passo a passo
completo em `.env.local.example`.

## O que já é real vs. exemplo

Com o token configurado, ficam **reais**: seguidores, publicações, tipos de
conteúdo, conteúdos em destaque (curtidas/comentários) e a análise de temas
(feita por palavras-chave nas legendas reais).

O **histórico diário de crescimento** é estimado (a API não entrega histórico —
isso exigirá guardarmos um snapshot por dia). **Mercado, Pessoas Relevantes e
Oportunidades** continuam com dados de exemplo — dependem de outras fontes que
ainda não foram plugadas.

## Estrutura

```
src/
  app/
    page.tsx                — página do Dashboard
    api/instagram/route.ts  — endpoint que serve dados (real ou mock)
  components/               — blocos visuais do Dashboard
  lib/
    instagram.ts            — integração com a Instagram Graph API
    mockData.ts             — dados de exemplo (fallback)
    types.ts                — tipos compartilhados
```

## Desenvolvimento

Este repositório segue um fluxo de produção. A branch `main` é protegida: toda
mudança entra via Pull Request e só mergeia após os checks de CI (`lint` +
`build`) passarem.

- **Branches:** `feature/`, `fix/`, `docs/`, `chore/` a partir da `main`.
- **Commits:** [Conventional Commits](https://www.conventionalcommits.org/)
  (`feat:`, `fix:`, `docs:`, `chore:`).
- **CI:** GitHub Actions roda `npm run lint` e `npm run build` em cada PR.
- **Revisão:** o `CODEOWNERS` solicita revisão automática em todas as PRs.

Veja `CONTRIBUTING.md` para o passo a passo completo.

### Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                  |
| `npm run start` | Roda o build de produção           |
| `npm run lint`  | ESLint                             |

## Roadmap

As próximas funcionalidades estão acompanhadas como Issues no GitHub:

- Conectar dados reais do Instagram (token long-lived)
- Histórico de crescimento real (snapshots diários)
- Módulos da sidebar: Conteúdo, Market Radar, Pessoas, Empresas
- Market Radar, Pessoas e Oportunidades com dados reais
- Busca funcional no Header
- Testes automatizados (Vitest)
