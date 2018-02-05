// all items in cart
var shoppingcart = [];

// cereal items + pics
var cerealItems = [
	{
		name: 'cheerios',
		img: './wdi_images/cheerios.jpg'
	},
	{
		name: 'fruit_loops',
		img: './wdi_images/fruit-loops.jpg'
	},
	{
		name: 'puffs',
		img: './wdi_images/puffs.jpg'
	},
	{
		name: 'raisen bran',
		img: './wdi_images/raisen-bran.jpg'
	},
	{
		name: 'crunch',
		img: './wdi_images/crunch.jpg'
	}

];

// candy + pics

var candyItems = [
	{
		name: 'kit-kats',
		img: './wdi_images/kit-kat.jpg'
	},
	{
		name: 'mnms',
		img: './wdi_images/m&ms.jpg'
	},
	{
		name: 'skittles',
		img: './wdi_images/skittles.jpg'
	},
	{
		name: 'snickers',
		img: './wdi_images/snickers.jpg'
	},
	{
		name: 'twixx',
		img: './wdi_images/twix.jpg'
	}

];

// juices + pics

var juiceItems = [
	{
		name: 'apple',
		img: './wdi_images/apple-juice.jpg'
	},
	{
		name: 'carrot',
		img: './wdi_images/carrot-juice.jpg'
	},
	{
		name: 'grape',
		img: './wdi_images/grape-juice.jpeg'
	},
	{
		name: 'orange',
		img: './wdi_images/orange-juice.jpg'
	},
	{
		name: 'tomato',
		img: './wdi_images/tomato-juice.jpg'
	}


];
// make the buttons click to page of type
$('cereal').onclick(function() {
	addColumn1('cereal');
});

$('candy').onclick(function() {
	addColumn1('candy');
});

$('juices').onclick(function() {
	addColumn1('juices');
});
// make the pictures click column1

$('#column1').on('click', '.column1', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});


// add the food to the shopping cart column 2
function addShoppingCart(category){
	var shoppingList;
		switch(category) {
			case 'cereal':
				shoppingList = cerealItems;
				break;
			case 'candy':
				shoppingList= candyItems;
				break;
			case 'juices':
				shoppingList = juiceItems;
				break;
			default:
		}

		var newShoppingList = $('<ul>');
		for (var i = 0; i < shoppingList.length; i++) {
			var newItem = shoppingList[i];

			 newShoppingList.append (
			 	`<li class='column2'>
			 		<img src= '${newItem.img}'>
			 		<p>${newItem.name}</p>
			 	</li>`);

} 
}



