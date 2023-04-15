# Informações do Projeto
`TÍTULO DO PROJETO`  

 - Saideira 

`CURSO` 

 - Ciência da computação

## Participantes

 Os membros do grupo são:
 - Arthur Torres Lemos
 - Larissa Mariella da Silva Souza
 - Lucas Aquino Moura de Albuquerque
 - Lucas Pereira Rangel de Carvalho

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

 O alcoolismo é um problema de saúde pública que afeta milhões de pessoas em todo o mundo, incluindo o Brasil. De acordo com dados do Ministério da Saúde, o consumo de álcool está associado a diversas doenças, como cirrose hepática, câncer e transtornos mentais, além de ser um fator de risco para acidentes de trânsito e violência. 

 Diante desse cenário preocupante, é fundamental que sejam desenvolvidos projetos que abordem o problema do alcoolismo de forma abrangente e eficaz, promovendo o tratamento e a conscientização sobre os danos causados pelo uso excessivo de álcool. Neste contexto, o projeto "Saideira" tem como foco desenvolver ações voltadas para a prevenção do consumo de álcool e principalmente para o apoio às pessoas que sofrem ou já sofreram com a dependência química, contribuindo para a melhoria da qualidade de vida geral de tais indivíduos.

## Problema

  O problema a ser abordado no projeto "Saideira" está relacionado à saúde e bem-estar, mais especificamente, com o vício em álcool, o alcoolismo. Tal problema representa uma dor de aproximadamente 3% da população brasileira, que obstrui as relações sociais, pessoais e a saude física e mental do indivíduo. 
  
  Dessa forma, o plano do grupo consiste em sanar essas dores por meio de divulgação de informação, exibição de relatos pessoais, motivações externas, entre outras técnicas. Tudo através de um site, a ser mais detalhado posteriormente no relatório.

## Objetivos

  Como meta, o foco principal da aplicação é trazer auxílio e ajuda para aqueles que sofrem de alcoolismo. Contudo, em segundo plano, visualisa-se um site capaz de trazer informações e sanar dúvidas para quaisuqer indivíduos, sejam utilizadores frequentes da bebida ou não.
  
  Mais especificamente, a ideia proposta é de fornecer informação acerca do vício em álcool através de links contendo notícias, matérias e sobretudo artigos científicos relacionados. Adicionalmente, para fornecer uma motivação externa para continuar afastado do vício, diversos conteúdos relacionados aos benefícios de estar sóbrios ficarão em display juntos a um contador da quantidade de dias desde o último relapso.

## Justificativa

 Previamente foi citado que aproximadamente 3% da população brasileira sofre com alcoolismo, esse dado apresentado pela Organização Mundial de Saúde eslarece a forte presença do vicio em questão, assim como seu fácil acesso. Diversas outras pesquisas acerca do assunto (como a apresentada pela Biblioteca Virtual e Saúde) também apontam os terríveis efeitos colaterais do abuso de bebidas alcoólicas: gastrite,neurite, pancreatite, pressão alta, desenvolvimento de câncer e também os inúmeros acidentes que decorrem do estado de embreaguez.

## Público-Alvo

 Primordialmente, o objetivo do projeto está diretamente relacionado com os usuários excessivos da bebida alcoólica, contudo, não se restringe nesse quesito. Como uma das características de nossa proposta é o conteudo informativo, não somente alcoólatras podem se beneficiar, também visa-se a potencial ajuda que poderá ser fornecida aos ex-alcoólatras e indivíduos que conhecem alguém na situação de abuso do entorpecente.
 
  Dessa forma, de maneira resumida, diversos grupos relevantes podem se beneficiar com o trabalho em questao, mas em definitivo, os candidatos à influência são os ex e atuais alcoólatras.
 
# Especificações do Projeto

 À fim de exemplificar e detalhar aprofundadamente o projeto, foram realizadas diversas pesquisas e entrevistas durante a preparação. Dessa forma, as informações aglomeradas foram utilizadas de maneira a eslarecer dúvidas e auxiliar na execução do planejamento.

## Personas, Empatia e Proposta de Valor

 A seguir, tem-se exemplos de personas que desejamos atingir com nosso produto:

> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/PersonaSaideira.png)
> 
>
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/Proposta_de_valor_saideira.png)
>
>
>
> **Exemplo de Persona 2**
> 
> ![Exemplo de Persona](images/Persona2Saideira.png)
>
>
>
> **Exemplo de Proposta de Valor 2**
> 
> ![Exemplo da Proposta de Valor](images/Proposta_de_valor_2_saideira.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Luís Alberto        | Ficar sóbrio para compor           | É sua fonte de renda principal         |
|Luís Alberto        | Encontrar boas companhias          | Não se sentir solitário                |
|Luís Alberto        | Encontra motivação                 | Para recomeçar sua vida                |
|Jeremias            | Motivação contra beber álcool      | Para não ter relapsos                  |
|Jeremias            | Conhecer os efeitos do álcool      | Para melhorar sua saúde                |
|Jeremias            | Aceitar o passado alcoólatra       | Para superar seu trauma                |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página principal notícias, artigos e matérias dinâmicas sobre alcoolismo obtidas por meio de canais de notícias da Internet (API) | ALTA | 
|RF-002| O site deve apresentar, para cada artigo, notícia ou matéria, uma imagem correspondente ao assunto apresentado (thumbnail)   | MÉDIA |
|RF-003| O site deve permitir ao usuário visualizar o texto completo da notícia, matéria ou artigo com todos os detalhes da publicação   | MÉDIA |
|RF-004| O site deve permitir visualizar as informações de contatos do mantenedor do site  | BAIXA |
|RF-005| O site deve permitir que usuários possam comentar em algum fórum a ser criado   | MÉDIA |
|RF-006| O site deve possuir opção de criar conta   | ALTA |
|RF-007| O site deve possuir relatos dos usuários   | MEDIA |
|RF-008| O site deve possuir um contador relacionado à quantidade de dias sóbrios | ALTA |
|RF-009| O site deve fornecer informações benéficas conforme o contador previamente citado aumenta  | ALTA |
|RF-010| O site deve apresentar um ranking conforme o contador aumenta | BAIXA |
|RF-011| O site deve apresentar um ranking conforme o contador aumenta | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O site deve ser publicado em um ambiente acessívelpublicamente na Internet (Repl.it, GitHub Pages, Heroku); |  ALTA | 
|RNF-004| O site deve ter bom nível de contraste entre os elementos datela em conformidade |  MEDIA | 
|RNF-005| Deve apresentar compatibilidade com os navegadores populares do mercado |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|
|04| O site deverá focar em qualidade das notícias, artigos e matérias, não em quantidade|

# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## User Flow

> ![Exemplo de UserFlow](images/fluxo_do_usuario.png)
> 
>
>


## Wireframes

 À fim de exemplificar as telas do sistema proposto do trabalho, observa-se a base seguida para todas as outras telas. Nela, existem dois espaços principais: Cabeçalho e conteúdo. O último é dividido em três espaços.
 -Cabeçalho:
  Local onde será gerenciado o processo de contas, assim como outras funções e o logo do site.
 -Conteúdo:
  Local onde serão apresentadas as notícias, artigos e depoimentos disponibilizadas, assim como outras funcionalidades.
>
 **Wireframe Base**
>
> ![Exemplo de Wireframe](images/wireframe_padrao.png)
>
>
>------------------------------------------------------------------------------
 **Tela inicial - Home Page**
 >
 A tela inicial será responsável por apresentar a maior parte do conteúdo do site, de maneira limpa, sem obstruir o design. Traz consigo as notícias, depoimentos e artigos sobre alcoolismo como a parte central. Acima, estará localizado algumas informações extras fundamentais para o projeto. 
>
> ![Exemplo de Wireframe](images/1.png)
>
>
>
 **Tela Login - Cadastro Conta**
>
 Essa tela disponibilizará a oportunidade (não obrigatória) de um usuário criar sua conta no sistema, à fim de se relacionar com outras funcionalidades do sistema.
>
> ![Exemplo de Wireframe](images/2.png)
>
>
>
 **Tela Depoimentos**
>
 Essa tela apresentará no formato popular de fórum uma sessão de comentários onde usuários podem compartilhar experiências.
>
> ![Exemplo de Wireframe](images/3.png)
>
>
>
 **Tela Artigos**
 >
 Essa tela apresentará, priorizando qualidade sobre quantidade, uma seleção vasta de artigos que tratam o assunto alcoolismo.
>
> ![Exemplo de Wireframe](images/4.png)
>
>
>
 **Tela Notícias**
 >
 Essa tela apresentará uma seleção vasta de notícias que cobrirão tudo que envolve o álcool, focando em seus malefícios.
>
> ![Exemplo de Wireframe](images/5.png)
>
>
>
**Tela Contador**
 >
 A tela do contador representará diversas coisas diferentes para o projeto, sendo talvez a peça chave. Ele acompanhará a quantidade de tempo que uma pessoa permanece sóbria e disponibilizar
>
> ![Exemplo de Wireframe](images/5.png)
>
>
>

# Metodologia

......  COLOQUE AQUI O SEU TEXTO ......

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVMYDTJeQ=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20231-saideira| 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/ | 
|Editor de código | VisualStudio Code | https://code.visualstudio.com/ | 
|Editor de wireframes | Canva | https://www.canva.com/design/DAFgLocvCjQ/mFPC021h0gsWPLVWjpMeSg/edit?utm_content=DAFgLocvCjQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton |

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)