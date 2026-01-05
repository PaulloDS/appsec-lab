## Vulnerabilidade: SQL Injection no endpoint /login

### Descrição

O endpoint realiza concatenação direta de input do usuário na query SQL.

### Impacto

Bypass de autenticação e acesso não autorizado.

### Prova de Conceito

Payload: ' OR '1'='1

### Mitigação

Uso de prepared statements.
