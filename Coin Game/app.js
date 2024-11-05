function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight);
	const x = Math.floor(Math.random() * window.innerWidth);
	coin.style.top=`${y}px`;
	coin.style.left=`${x}px`;
}

moveCoin();
avatar.style.top='100px';
avatar.style.left='10px';

window.addEventListener('keyup', function(e){
	if (e.key==="ArrowDown"){
		const avatarTop = avatar.style.top;
		avatar.style.top=`${parseInt(avatarTop.slice(0, -2))+50}px`;
	}
	else if (e.key==="ArrowUp"){
		const avatarTop = avatar.style.top;
		avatar.style.top=`${parseInt(avatarTop.slice(0, -2))-50}px`;
	}
	else if (e.key==="ArrowRight"){
		const avatarLeft = avatar.style.left;
		avatar.style.transform='scale(1, 1)';
		avatar.style.left=`${parseInt(avatarLeft.slice(0, -2))+50}px`;
	}	
	else if (e.key==="ArrowLeft"){
		const avatarLeft = avatar.style.left;
		avatar.style.transform='scale(-1, 1)';
		avatar.style.left=`${parseInt(avatarLeft.slice(0, -2))-50}px`;
	}	
	if 	(isTouching(coin, avatar)){
		moveCoin();
	}

})
