const cover = document.querySelector('.cover')
let current = 0


fetch('./picture.json')
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		showImages(data)
	})

	function showImages(data) {
		let auto = setInterval()
		for (let i = 0; i < data.length; i++) {
		const img = document.createElement('img')
		img.src = './image/' + data[i]
		img.classList.add('infinity')
		cover.append(img)
	}
}


// console.log(imgs)
