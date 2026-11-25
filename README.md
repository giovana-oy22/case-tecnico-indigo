# Your process

Use this space to communicate with the reviewers. Describe how you approached the project, what was easy or difficult, and anything else you consider relevant, such as decisions, validation, or unfinished work.

If you used AI, explain how you used it and how you checked its suggestions. Add the links to your learning materials in `REFERENCES.md`.

You may write in Portuguese or English.

## Experiência

Foi um projeto muito interessante de realiar sob meu ponto de vista por muitos motivos, principalmente pelo fato de ter sido um projeto pequeno. Isso me deu a liberdade de explorar e entender um pouco mais dos diversos conceitos que envolvem a prototipação de um projeto Web. 

Por conta do meu primeiro estágio, essa não é a minha primeira vez trabalhando com React. Muito embora eu ainda me considere no nível Iniciante, creio que essa foi uma experiência em que eu pude trabalhar melhor para entender todo o fluxo envolvido no *frontend*.

## Processo do Projeto

O desenvolvimento somou aproximadamente **6 horas**.

O principal desafio para mim foi entender a estrutura das respostas GraphQL - por enquanto só tinha tido experiência com API Rest - e, por exemplo, me deparar com uma requisição POST para consulta no lugar de GET. Após uma breve leitura da [documentação de GraphQL](https://graphql.org/learn/serving-over-http/), me familiarizei melhor com essa arquitetura de API.

Tive dúvidas de implementação da [tarefa 2 de INSTRUCTIONS.md](./INSTRUCTIONS.md#tasks) entre seguir por:
1. Requisição por uma query geral que reúne diversas informações de diversos caracteres e depois procurar o personagem no array de acordo com o id do personagem passado;
2. Requisição por uma query que retorna apenas o personagem com o id pedido. 

A primeira opção fazia mais sentido por conta da estrutura já formada no arquivo `CharacterDetails.tsx` para receber os dados mockados. Contudo, acabei optando pela segunda opção para gerar menos requisições desnecessárias.

Utilizei os sites [Fandom](https://vampirediaries.fandom.com/wiki/Damon_Salvatore) e [AniList](https://anilist.co/character/40) como referência para melhorar UI e UX do site.

Usei IA como apoio para esclarecer conceitos de HTTP e GraphQL, investigar erros de tipo e implementar ajustes nos arquivos css. Revisei as sugestões no contexto do código, testei consultas diretamente na API quando necessário e executei os comandos `npm run lint`, `npm run build` e `npm run dev`.

Tentei ao máximo seguir as boas práticas de organização de uma aplicação React, consultando o artigo sobre [arquitetura para aplicações React](https://vinniciusgomes.medium.com/arquitetura-para-aplicacoes-react-d77361bf2d49), e realizei a divisão dos CSS de cada página na pasta `styles`.
