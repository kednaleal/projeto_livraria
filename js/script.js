const btnPesquisa = document.getElementById('pesquisa')
const  txtprocura =  document.getElementById('procura')
const  livros =  document.getElementById('livros')
const  buscar =  document.getElementById('buscar')


btnPesquisa.addEventListener('click', async () => {
 const pesquisa = txtprocura.value.replaceAll(' ', '+')
 const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${pesquisa}`)
 const dados = await res.json()
 
 console.log(dados.items)
 
 livros.innerHTML = '';
 dados.items.forEach(item => {
  livros.innerHTML = livros.innerHTML + `<li>${item.volumeInfo.title} -  ${item.volumeInfo.authors}</li>`
 });
})


