let buscador = document.querySelector("#buscador1")
let boton = document.querySelector("#lupa1")
let videoYutu = document.querySelector("#video1")
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
    console.log(id)
    let url = `https://youtube138.p.rapidapi.com/search/?q=${id}&hl=en&gl=US`;
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    videoYutu.setAttribute("src", `https://www.youtube.com/embed/${result.contents[0].video.videoId}`)
}