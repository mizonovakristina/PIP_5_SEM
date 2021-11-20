//import _ from 'lodash';

function component(){
	const element = document.createElement('div');
	element.innerHTML = _.join(['Webpack','тест'],' ');
	console.log("Создан div элемент")
	return element;
}
document.body.appendChild(component());


