const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	const w=Math.floor(Math.random()*screenWidth);
	const h=Math.floor(Math.random()*screenHeight);
	btn.style.left=`${w}px`;
	btn.style.top=`${h}px`;
});

btn.addEventListener('click', function(){
	btn.innerText='YOU GOT ME!';
	document.body.style.backgroundColor='green';

});