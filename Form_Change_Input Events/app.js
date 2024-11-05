const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};

for  (let input of [creditCardInput, termsCheckbox, veggieSelect]){
	input.addEventListener('change', (e)  => {
		if (e.target.type==="checkbox"){
			formData[e.target.name]= e.target.checked;
		}
		else {
			formData[e.target.name]= e.target.value;
		}
		console.log(formData);
	});
}
// creditCardInput.addEventListener('input', (e)  => {
// 	console.log(e);
// 	formData.cc = e.target.value;
// 	console.log(formData);
// });

// veggieSelect.addEventListener('input', (e)  => {
// 	formData.vegie = e.target.value;
// 	console.log(formData);

// });

// termsCheckbox.addEventListener('input', (e)  => {
// 	formData.agreeToTerms = e.target.checked;
// 	console.log(formData);

// });