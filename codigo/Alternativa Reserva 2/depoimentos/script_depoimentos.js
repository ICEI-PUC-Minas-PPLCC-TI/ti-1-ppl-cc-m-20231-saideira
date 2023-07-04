// variável global para os dados do Json
var info=[];
let filtro=[];

// Carrega os dados do Json
fetch('depoimentos.json')
    .then(response => response.json())
    .then(data => {
        // Manipule os dados do JSON aqui
        exibirJson(data);
        info=data;
        filtro=data;
    })
    .catch(error => {
        // Trate os erros da requisição aqui
        console.error('Ocorreu um erro:', error);
    });

// Exibe os dados do json
function exibirJson(data) {
    console.log("funcao");

    let str = ''
    for (let i = 0; i < data.length; i++) {
        const dados = data[i];
        str += `<div class="card" style="width: 100rem;">
                  <div class="card-header card-header-expand">${dados.nome}</div>
                  <div class="card-body d-flex">
                    <p> ${dados.comentario}</p>
                    <button type="button" id="btn" class="btn btn-dark ms-auto" onclick="apagarComentario(${dados.id})">Apagar</button>
                  </div>
                </div>`
    }
    document.getElementById("response").innerHTML = str;
}

// Salva no local storage e exibe no html
function salvarComentario() {
    let jsonSalvo = localStorage.getItem("comentario")
    let autor = "Usuario Exemplo"
    let id = "11"
    let comentario = document.getElementById("comentario").value;

    if (jsonSalvo === null) jsonSalvo = "[]"

    jsonSalvo = JSON.parse(jsonSalvo)
    jsonSalvo.push({ nome: autor, comentario: comentario, id: id })
    jsonSalvo = JSON.stringify(jsonSalvo)

    localStorage.setItem("comentarios", jsonSalvo)

    exibirComentario(jsonSalvo);
    var footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" }); // Rola até o elemento do rodapé com animação suave
}

function exibirComentario(comentario) {
    console.log(comentario);
    data = JSON.parse(comentario);
    console.log(info);

    let str=''
for (let i = 0; i < data.length; i++) {
    const dados = data [i];
    
    str += `<div class="card" style="width: 100rem;">
              <div class="card-header card-header-expand">${dados.nome}</div>
              <div class="card-body d-flex">
                <p> ${dados.comentario}</p>
                <button type="button" class="btn btn-dark ms-auto" onclick="apagarComentario(11)">Apagar</button>

              </div>
            </div>`;
}
  document.getElementById("comentario-salvado").innerHTML = str;
}

// Pesquisa a informação em algum comentário e exibe
function pesquisar() {
    console.log(info);

    var texto = document.querySelector("#campoPesquisa").value.toLowerCase();
    var produtos_pesquisados = info.filter(produto => produto.comentario.toLowerCase().includes(texto));
    var pesquisa_nome = info.filter(pesquisa => pesquisa.nome.toLowerCase().includes(texto))

    console.log(produtos_pesquisados);
    let str = ''

    for (let j = 0; j < produtos_pesquisados.length; j++) {
      let pesquisa = produtos_pesquisados[j];
      for (let i = 0; i < info.length; i++) {
        let coment = info[i]
        if (coment.id == pesquisa.id) {
            console.log(coment)
            str += `<div class="card" style="width: 100rem;">
                      <div class="card-header card-header-expand">${coment.nome}</div>
                      <div class="card-body d-flex">
                        <p> ${coment.comentario}</p>
                        <button type="button" class="btn btn-dark ms-auto" onclick="apagarComentario(${coment.id})">Apagar</button>
                      </div>
                     </div>`;
          }
      }
    }
    for (let j = 0; j < pesquisa_nome.length; j++) {
      let pesquisa = pesquisa_nome[j];
      for (let i = 0; i < info.length; i++) {
        let coment = info[i]
        if (coment.id == pesquisa.id) {
            console.log(coment)
            str += `<div class="card" style="width: 100rem;">
                      <div class="card-header card-header-expand">${coment.nome}</div>
                      <div class="card-body d-flex">
                        <p> ${coment.comentario}</p>
                        <button type="button" class="btn btn-dark ms-auto" onclick="apagarComentario(${coment.id})">Apagar</button>
                      </div>
                     </div>`;
          }
      }
    }
    $("#response").html("<p>" + str + "</p>");
  }
  
  let itens;
   
  console.log(filtro);
  // Apagar algum comentário que está no Json   
    function apagarComentario(idComentario)
    {
      let codigo = idComentario;
      filtro = filtro.filter(item => item.id !== idComentario);
  
      console.log(filtro);
      var listaItens = document.getElementById("response");
      listaItens.innerHTML = "";
  
          let str=''
          console.log(codigo)
          for (let i = 0; i < filtro.length; i++) {
            let dados = filtro[i]
            if (filtro.id != codigo) {
                str += `<div class="card" style="width: 100rem;">
                          <div class="card-header card-header-expand">${dados.nome}</div>
                          <div class="card-body d-flex">
                            <p> ${dados.comentario}</p>
                            <button type="button" class="btn btn-dark ms-auto" onclick="apagarComentario(${dados.id})">Apagar</button>
                          </div>
                        </div>`
            }
          }
        
       $("#response").html("<p>" + str + "</p>");
    }

 