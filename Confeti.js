const confeti = document.querySelector('.confeti');
setTimeout(() => {
	confeti.parentNode.removeChild(confeti);
}, 5000);
