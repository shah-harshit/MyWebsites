
const url = {
	link: 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=apple&from=2020-09-05&to=2020-09-05&sortBy=popularity&apiKey=7fa194f58fc3456494280e252a86f96a'
}

fetch(url.link)
.then((data) => data.json())
.then((contents) => news(contents))
.catch((e) => console.log(e + "Something is wrong!!"))

const news = (data) => {
	let i = 0;
	let html = ``
	while(i < data.articles.length){
	let author = data.articles[i].author;
	let title = data.articles[i].title;
	let description = data.articles[i].description;
	html = html + `
					<div class="block">
						<p class="title">${i+1}. ${title}</p>
						<p class="description">${description}</p>
						<p class="author">Author: ${author}</p>
					</div>
	`


	const rootDiv = document.querySelector('.root')
	rootDiv.innerHTML  = html

	console.log(author); 
	i = i+1;
	}
console.log(data);
}

