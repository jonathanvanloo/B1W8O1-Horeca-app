var totalfris = 0
var totalbier = 0
var totalwijn = 0
var totalsnack8 = 0
var totalsnack16 = 0
//Dit zijn de variabelen die bijhouden hoeveel er van iets is besteld ook al bestellen ze het apart of later.//

const FRIS = 150;
const BIER = 200; 
const WIJN = 300;
const SNACK8 = 500;
const SNACK16 = 1000;
//Dit zijn de prijzen van de producten.//

function Order(){
	var bestelling = prompt('wat wil u toevoegen aan uw bestelling u heeft de keuze uit: fris, bier en wij. maar ook als snacks: bitterballen. als u klaaar bent typ dan \'stop\' in de balk hier onder en ontvang uw bon');
	if (bestelling == 'fris') {
		var fris = prompt ('Hoeveel fris wilt u toevoegen?');
		alert ('U heeft' +' '+ fris + ' ' + 'fris toegevoegd');
		totalfris = Number(totalfris) + Number(fris)
		Order();
		//Dit zijn de acties die gebeuren als iemand fris in typt.//
	}else if (bestelling == 'bier'){
		var bier = prompt ('Hoeveel bier wilt u toevoegen?');
		alert ('U heeft' +' '+ bier + ' ' + 'bier toegevoegd');
		totalbier = Number(totalbier) + Number(bier)
		Order();
		//Dit zijn de acties die gebeuren als iemand bier in typt.//
	}else if (bestelling == 'wijn'){
		var wijn = prompt ('Hoeveel wijn wilt u toevoegen?');
		alert ('U heeft' +' '+ wijn + ' ' + 'wijn toegevoegd');
		totalwijn = Number(totalwijn) + Number(wijn)
		Order();
		//Dit zijn de acties die gebeuren als iemand wijn in typt.//
	}else if (bestelling == 'snack'){
		var snack = prompt ('wil u 8 of 16 bitterballen toevoegen?');
		if (snack == 8) {
			var snack8 = prompt ('Hoeveel bitterbalschalen van 8 wilt u bestellen?');
			alert ('U heeft' +' '+ snack8 + ' ' + 'bitterbalschalen van 8 stuks toegevoegd');		
			totalsnack8 = Number(totalsnack8) + Number(snack8)
			Order();
			//Dit zijn de acties die gebeuren als iemand na snack 8 invuld in typt.//
		}else if(snack == 16){
			var snack16 = prompt ('Hoeveel bitterbalschalen van 16 wilt u bestellen?');
			alert ('U heeft' +' '+ snack16 + ' ' + 'bitterbalschalen van 16 stuks toegevoegd');		
			totalsnack16 = Number(totalsnack16) + Number(snack16)
			Order();
			//Dit zijn de acties die gebeuren als iemand na snack 16 invuld in typt.//			
		}else{
			alert('sorry wij hebben aleen bitterbalschalen van 8 en 16 bitterballen.');
			Order();
			//Dit zijn de acties die gebeuren als iemand iets anders invuld dan 8 of 16.//
		}

	}else if (bestelling == 'stop'){
		//Dit zijn de acties die gebeuren als iemand stop intypt.//
		var pricesfris = FRIS * totalfris / 100;
		var pricesbier = BIER * totalbier / 100;
		var priceswijn = WIJN * totalwijn / 100;
		var pricessnack8 = SNACK8 * totalsnack8 / 100;
		var pricessnack16 = SNACK16 * totalsnack16 / 100;
		//Deze variabelen berekenen de prijs van de producten.//
		document.write('U heeft' + ' ' + totalfris + ' ' + 'fris besteld.' + '<br />');
		document.write(totalfris + ' ' + 'x €1,50'+ ' ' + ' = ' + '€' + pricesfris + '<br/><br/>');
		document.write('U heeft' + ' ' + totalbier + ' ' + 'bier besteld.' + '<br />');
		document.write(totalbier + ' ' + 'x €2,00'+ ' ' + ' = ' + '€' + pricesbier + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalwijn + ' ' + 'wijn besteld.' + '<br />');
		document.write(totalwijn + ' ' + 'x €3,00'+ ' ' + ' = ' + '€' + priceswijn + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack8 + ' ' + 'bitterbalschalen van 8 stuks besteld.' + '<br/>');
		document.write(totalsnack8 + ' ' + 'x €5,00'+ ' ' + ' = ' + '€' + pricessnack8 + '<br/><br/>');		
		document.write('U heeft' + ' ' + totalsnack16 + ' ' + 'bitterbalschalen van 16 stuks besteld.' + '<br/>');
		document.write(totalsnack16 + ' ' + 'x €10,00'+ ' ' + ' = ' + '€' + pricessnack16 + '<br/><br/>');
		document.write('totaal prijs = €' + ' ' + (pricesfris + pricesbier + priceswijn + pricessnack8 + pricessnack16)+ '<br/><br/>');
		//Dit is de tekst die te zien wordt op het beeld.//	
	}else{
		alert('sorry dit product hebben wij helaas niet wij hebben wel: fris, bier en wij. en voor snacks hebben wij: bitterballen.');
		Order();
		//Dit zijn de acties die gebeuren als iemand iets invuld dat niet overheen komt met de producten die het restaurant heeft.//	
	}
}

Order();
//Dit zorgt ervoor dat de function wordt opgeroepen.//