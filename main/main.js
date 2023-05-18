let buscador = document.querySelector("#buscador1")
let boton = document.querySelector("#lupa1")
let videoYutu = document.querySelector("#video1")
let canalYutuLogo = document.querySelector("#logoCanal1")
let nombreCanlal = document.querySelector("#nombreCanal1")
let tituloVideo = document.querySelector("#titulo1")
let comentariosYutu = document.querySelector("#comentariosYutu")
let descripcionYutu = document.querySelector("#descripcionYutu")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '143e44ebc7msh671913b0fd5416fp142749jsnb8dcca7ba67e',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
boton.addEventListener("click",(e)=>{
    e.preventDefault()
    buscarDatos(buscador.value)
})
async function buscarDatos(id){
    let url = `https://youtube138.p.rapidapi.com/search/?q=${id}&hl=en&gl=US`;
    const response = await fetch(url, options);
    const result = await response.json();
    videoYutu.setAttribute("src", `https://www.youtube.com/embed/${result.contents[0].video.videoId}`)
    tituloVideo.innerHTML = result.contents[0].video.title
    canalYutu(result.contents[0])
    comentariosYutu1(result.contents[0].video.videoId)
    describete(result.contents[0].video.videoId)
}
async function canalYutu(res){
    canalYutuLogo.setAttribute("src", res.video.author.avatar[0].url)
    nombreCanlal.innerHTML = res.video.author.title
}
async function comentariosYutu1(videoId){
    let url = `https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US`;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    comentariosYutu.innerHTML = ``
    for(let i=0;i<result.comments.length;i++){
        comentariosYutu.innerHTML += `
        <div class="comenta">
            <h4>${result.comments[i].author.title}</h4>
            <p>${result.comments[i].content}</p>
        </div>
        `
    }
}
async function describete(videoId){
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${videoId}&hl=en&gl=US`;
    const response = await fetch(url, options);
	const result = await response.json();
	descripcionYutu.innerHTML = `
    <h4>Descripción: </h4>
    <p>${result.description}</p>
    `
}