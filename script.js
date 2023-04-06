const PICTURE_HREFS = [
	"https://phantom-marca.unidadeditorial.es/0c8caa911507fd590d1dba58a149aca5/crop/0x0/1059x706/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/23/16665279627938.png",
	"https://cdn.asianmma.com/wp-content/uploads/2021/09/Hasbulla-Magomedav.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrhsfljDu20F5a6-bKE2f2jAnjbtzkuRkxg&usqp=CAU",
	"https://i.pinimg.com/564x/b6/1e/9d/b61e9d1dc98258f572367259fe954b34.jpg",
	"https://i.kym-cdn.com/photos/images/original/002/338/212/c7b",
	"https://external-preview.redd.it/D-1_k6uJPvgNtgXALbnJjOc86VlGlQnyMviLG36AaIo.png?format=pjpg&auto=webp&s=96c957fe1dd96f8a02b1cbe578bc4d46e41f45b4",
	"https://media.tenor.com/2co4feAipsYAAAAd/hasbulla-hasbik.gif",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cMdsjgpDbXlWU1kazW_rnIXwDLpEnJUBlw&usqp=CAU",
	"https://image-cdn.essentiallysports.com/wp-content/uploads/Hasbulla.jpeg?width=600",
	"https://manofmany.com/wp-content/uploads/2022/04/Hasbulla-on-G-Wagon.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OTpOrMR92V523jOoGZ_SYdb58tTwWfANag&usqp=CAU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xng14Y0w5iDSha_9BeGlQUTbis-NAanbBfGAzjjyducaY2EwPNQrv8yaP9SOevDN_08&usqp=CAU",
	"https://www.dmarge.com/wp-content/uploads/2022/08/hasbulla-net-worth.jpg",
	"https://www.scotsman.com/webimg/b25lY21zOmIwYTU5ZjVmLThjYjktNDQ1Zi1hM2VmLTc5NjhmYjYxOWM3Mjo0N2U3YTdhZC05NzlhLTQ5ZmUtOTVjMi00OTdlYWIwZTAxOTU=.jpg?width=1200&enable=upscale",
	"https://i1.sndcdn.com/artworks-jBrRjYPDLfr1Qafu-Y8BqPQ-t500x500.jpg",
	"https://ae01.alicdn.com/kf/H7a8c200a778b41d89a82a24f76faa6c3g/Hasbulla-Magomedov-Gamer-Mouse-Pad-Anti-Slip-Rubber-Lockedge-Mousepad-Funny-Hasbullah-Smile-Office-Laptop-Computer.jpg_Q90.jpg_.webp",
	"https://image-cdn.essentiallysports.com/wp-content/uploads/hasbulla.png?width=600",
	"https://image-cdn.essentiallysports.com/wp-content/uploads/Screenshot_23-4.png?width=600",
	"https://ip.index.hr/remote/bucket.index.hr/b/index/86c566cf-73bd-4e68-88c2-a3a544648208.png?width=480&height=480",
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const container = document.querySelector("#container");

function generatePictures() {
    const AMOUNT_OF_PICTURES = getRandomInt(20, 80)
	for (let i = 0; i < AMOUNT_OF_PICTURES; i++) {
		const picture_card = document.createElement("div");
		picture_card.className = "picture-card";
		picture_card.style.setProperty("--height", getRandomInt(200, 600) + "px");
		picture_card.style.setProperty("--width", getRandomInt(200, 600) + "px");
		picture_card.style.top = getRandomInt(0, window.innerHeight) + "px";
		picture_card.style.left = getRandomInt(0, window.innerWidth) + "px";

		const picture = document.createElement("img");
		picture.src =
			PICTURE_HREFS[Math.floor(Math.random() * PICTURE_HREFS.length)];

		picture_card.appendChild(picture);
		container.appendChild(picture_card);
	}
}

generatePictures();

setInterval(() => {
	container.classList.add("hide");
	setTimeout(() => {
		container.innerHTML = "";
        generatePictures()
		container.classList.remove("hide");
	}, 500);
}, 3000);
