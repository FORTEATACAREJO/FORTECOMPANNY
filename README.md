# FORTECOMPANNY+ IA — Consulta Inteligente de CFOP

Sistema próprio para consultas fiscais de compras e vendas, classificação NCM/CEST, pré-nota fiscal, consulta de XML e apoio à identificação de CFOP, começando por MG e GO.

**Nome público:** FORTECOMPANNY+ IA. A assinatura mensal terá preço definido posteriormente; nenhuma cobrança está habilitada. A IA está em preparação e não é utilizada para gerar conclusões fiscais nesta versão.

## Aplicação e validação

- Site público e assistente: `cfop-public-site/`
- Backend de consulta (código): `cfop-public-site/backend/`
- Suíte de testes: `cfop-public-site/tests/` e `cfop-public-site/pre-nota-testes.cjs`
- Teste local: `npm install --no-audit --no-fund && npm test` (Node.js 24+)
- Infraestrutura: [docs/INFRAESTRUTURA.md](docs/INFRAESTRUTURA.md)

## Serviço independente

- Supabase exclusivo: `yzsxtgmasssoflgqhizm` (`forte-tech-cfop-estatisticas`)
- Render: `srv-dbquodbrjlhs73cg02ig`
- Endereço existente: https://forte-tech-cfop-publico.onrender.com/

**Estado:** o Render continua apontado para a origem antiga até a conexão ser trocada e o novo deploy ser conferido. Serviços oficiais de CNPJ/IE e produtor rural dependem de credenciais, consentimento e homologação; o sistema não deve inventar CFOP nem presumir a legislação.

Não inserir dados pessoais, XMLs reais, chaves de APIs ou credenciais no GitHub.
