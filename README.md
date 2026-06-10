# Monitor Copa 2026 - Vercel

Projeto ajustado para rodar na Vercel.

## Estrutura

- `index.html`
- `api/football-data.js`

## Variável obrigatória na Vercel

Crie em Project Settings > Environment Variables:

```text
FOOTBALL_DATA_TOKEN
```

Depois faça Redeploy.

## Teste

Abra:

```text
https://seu-projeto.vercel.app/api/football-data
```

Se aparecer o JSON da Football-Data, a função está funcionando.
