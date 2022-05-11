# cli-system
Sistema para gerenciamento de clientes e vendas.

Neste projeto tive meu primeiro contato com [Sheety.co](https://sheety.co), uma ferramenta que permite utilizar o Google Planilhas como um banco de dados, gerando uma API Restful, com qual a é possivel acessar todos os dados da planilha.

Esse sistema possui uma limitação por causa da API utilizada, o Sheety só oferece 200 requests por mês no modelo gratuito, então se o limite for atingido, é preciso esperar completar o mês para liberação de mais requests.

### End-points

<code>/users</code>

    Retorna uma conjunto com todos os usuarios.

<code>/sells</code>

    Retorna todas as vendas efetuadas, com id do cliente que efetuou a venda.

Stack de tecnologias utilizadas: React.js + Javascript.
