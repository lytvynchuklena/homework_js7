// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

const htmlElement = document.querySelector('text');
const ElementBtn = document.querySelector('#btn');

text.onclick = (event => {
	text.hidden = true;
});

btn.onclick = (event => {
	btn.hidden = true;
});


// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

const MyElement = document.querySelector('btn_click');

btn_click.onclick = (event => {
	btn_click.hidden = true;
});


// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача


const someText = document.querySelector('#someText');
const btn2 = document.querySelector('#btn2');

btn2.onclick = (event => {
	console.log(someText.value);
	console.log(+someText.value);
	if (+someText.value < 18) {
		confirm('Вам менше 18');
	}
});

// - Створіть меню, яке розгортається/згортається при клику


const list = document.getElementById('list');
const btn3 = document.getElementById('btn3');
let flag = true;
btn3.onclick = (event => {
	list.style.display = flag ? 'none' : 'block';
	flag = !flag;
});


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.


const comments = [
	{
		title: 'Coment1',
		body: 'Amet aut deleniti deserunt dignissimos doloremque dolores eius ex, excepturi exercitationem facere\n' +
			'uga ipsum mollitia nisi, omnis porro quod tenetur, veritatis voluptatum. Ab accusantium aperiam\n' +
			'culpa est in ullam voluptate.',
	},
	{
		title: 'Coment2',
		body: 'speriores distinctio earum quas quasi quod sequi, veniam vero? Animi aut consequuntur dolor error\n' +
			'fugiat harum, illum incidunt, iusto laudantium natus neque quidem tempora. Aut facere illum ipsa\n' +
			'omnis?',
	},
	{
		title: 'Coment3',
		body: 'Animi atque delectus doloremque eaque eius esse, facilis fugiat illo ipsum iste minima nobis\n' +
			'possimus, quos reiciendis sequi tempora temporibus veritatis. Corporis delectus, ea esse excepturi\n' +
			'exercitationem perspiciatis quasi rem.',
	},
	{
		title: 'Coment4',
		body: 'Ad alias cum dicta error exercitationem illo molestiae quos ratione sint voluptatibus! Adipisci\n' +
			'culpa ducimus eligendi excepturi hic, incidunt molestiae natus non nostrum possimus, quam quibusdam,\n' +
			'quis sapiente unde vitae?',
	},
	{
		title: 'Coment5',
		body: 'Fugit nisi quas quos suscipit, tempora vero voluptas. Ad aliquam, corporis debitis, ea explicabo\n' +
			'facere iste minima minus molestias qui quibusdam reprehenderit, suscipit tempora vel voluptates.\n' +
			'Doloremque incidunt libero quos?',
	},
	{
		title: 'Coment6',
		body: 'Atque, cum delectus dolorem et excepturi explicabo facere in inventore itaque magnam molestias\n' +
			'possimus quae quibusdam repellat reprehenderit saepe sequi? A at culpa eaque expedita iste minus\n' +
			'praesentium provident qui?',
	},

];

const mainDiv = document.createElement('div');
mainDiv.id = 'main-id';
document.body.appendChild(mainDiv);



comments.forEach(comment => {
	const title = document.createElement('h1');
	const body = document.createElement('p');
	const div = document.createElement('div');
	div.classList.add('red');

	const button = document.createElement('button');



	button.innerText = 'Hide comment';

	button.onclick = () => {
		body.hidden = !body.hidden

		button.innerText = !body.hidden ? 'Hide comment' : 'Show comment';
	}

	body.innerHTML = comment.body;
	title.innerHTML = comment.title;

	div.appendChild(title);
	div.appendChild(body);
	div.appendChild(button);
	mainDiv.appendChild(div);


});




// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// 	Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


const but1 = document.getElementById('but1');

but1.onclick = ev => {
	const myForms = document.forms
	for (let item of myForms) {
		for (let my_input of item) {
			console.log(my_input.value);
		}
	}
};



// - Створити функцію, яка генерує таблицю.
// 	Перший аргумент визначає кількість строк.
// 	Другий параметр визначає кількість ячейок в кожній строці.
// 	Третій параметр визначає елемент в який потрібно таблицю додати.



const rootElement = document.getElementById('root');

const createTable = (str, colums, targetTagID) => {
	const target = document.getElementById(targetTagID);
	const table = document.createElement('table');
	for (let i = 0; i < str; i++) {
		const tr = document.createElement('tr');
		for (let j = 0; j < colums; j++) {
			const td = document.createElement('td');
			td.innerText = `${i} : ${j}`
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}

	target.appendChild(table)

};

createTable('4', '6', 'root')




// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.


const imgArray = [
	{
		alt: 'town1',
		url: './images/town1.jpg'
	},
	{
		alr:'town2',
		url: './images/town2.jpg'
	},
	{
		alr: 'town3',
		url: './images/town3.png'
	}
];

// <button id="butLeft">Left</button>
// <button id="butRigth">Rigth</button>

const butLeft = document.getElementById('butLeft');
const butRigth = document.getElementById('butRigth');
let currentIndex = 0;

butLeft.onclick =()=> {
	if(currentIndex - 1 < 0) {
		currentIndex = imgArray.length-1;
	}else {
		currentIndex = currentIndex -1
	}
	imgContainer.src = imgArray[currentIndex].url
	imgContainer.alt = imgArray[currentIndex].alt
}

butRigth.onclick =()=> {
	if(currentIndex + 1 > imgArray.length-1) {
		currentIndex = 0;
	}else {
		currentIndex = currentIndex +1
	}
	imgContainer.src = imgArray[currentIndex].url
	imgContainer.alt = imgArray[currentIndex].alt
}







