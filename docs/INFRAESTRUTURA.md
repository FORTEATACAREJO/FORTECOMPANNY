# Infraestrutura independente — FORTECOMPANNY

## Origem e isolamento

Este repositório contém a cópia exata dos arquivos `cfop-public-site/` da branch `deploy/forte-tech-cfop-publico-20261112` do repositório `FORTEATACAREJO/FORTE-ATACAREJO-OPERACIONAL`. Não foi transportado código do FORTE FISCAL, FORTE OPERACIONAL, MC-6 ou Setor Fiscal Multiempresa.

### Supabase

Projeto exclusivo `yzsxtgmasssoflgqhizm` (`forte-tech-cfop-estatisticas`, sa-east-1). O novo repositório continua usando esse backend; não copiar nem misturar dados ou chaves com o projeto Setor Fiscal Multiempresa `tusmlfhzwlzwnoxfhomt`.

As funções de consulta dependem das chaves autorizadas para CNPJ API e SintegrAPI, guardadas nos segredos do Supabase. Sem provedores configurados, retornar indisponível, não inventar dados fiscais.

### Render

Serviço existente `srv-dbquodbrjlhs73cg02ig` (`forte-tech-cfop-publico`): site estático em `https://forte-tech-cfop-publico.onrender.com/`.

**Ainda usa** o repositório antigo `FORTEATACAREJO/FORTE-ATACAREJO-OPERACIONAL`, branch `deploy/forte-tech-cfop-publico-20261112`, publish directory `cfop-public-site`, build command `echo build-ready`.

Para finalizar, no Render (https://dashboard.render.com/static/srv-dbquodbrjlhs73cg02ig), alterar a origem para `FORTEATACAREJO/FORTECOMPANNY`, branch `main`, e preservar `cfop-public-site` como diretório publicado, comando de build e todos os domínios existentes. Verificar deploy e navegação `/`, `/assistente.html`, `/consulta-nfe.html` antes de liberar novas alterações. **Não criar serviço novo ou contratar plano pago.**

A integração Render atual não oferece o método de atualizar repositório e branch do serviço existente. Concluir pelo Dashboard/ChatGPT Work, sem desligar a origem antes de verificar o resultado.

### Licenciamento e segurança

O FORTECOMPANNY é sistema independente e precisa integrar o controle comercial por licença no próprio backend; ter um repositório separado **não** habilita automaticamente essa conexão.

**Ajustar a visibilidade deste repositório no GitHub para privado** conforme padrão desejado. Não publicar chaves, XMLs reais ou dados de clientes nos testes.
