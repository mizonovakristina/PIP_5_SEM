import _ from 'lodash';
import './style.css';
import Icon from './benksy.jpg';

function component(){
	const element = document.createElement('div');
	element.innerHTML = _.join(['Webpack','тест'],' ');
	console.log("Создан div элемент")
	element.classList.add('test');
	console.log("Применён стиль класса .test")
	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);
	return element;
}
document.body.appendChild(component());


