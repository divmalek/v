





let text = document.getElementById("text");
const prog = "GardenVPN";
let idx = 1;

setInterval(writeText, 200);

function writeText() {
    text.innerText = prog.slice(0, idx)
	
	idx++;

}








 counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = "+" + target;
		}
	};

	updateCount();
});


const sc = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration:2500,
	delay: 400,
})
sc.reveal('.infr')
sc.reveal('.botn' ,{origin:'left'})
sc.reveal('.limg' ,{origin:'left'})

sc.reveal('.features',{origin:'left'})
sc.reveal('.subsp', {origin:'right'})
sc.reveal('.geo')
sc.reveal('.tcrads' ,{origin:'left'})

sc.reveal('.spon',{origin:'right'})

sc.reveal('.pricining',{origin:'right'})
sc.reveal('.footer' ,{origin:'top'})









