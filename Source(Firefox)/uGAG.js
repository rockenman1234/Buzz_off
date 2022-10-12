walk(document.body);

function walk(node) 
{	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	const forbiden = new Array("Cesspool Of The South","Drinking School With A Football Problem","Athens-Clarke County Penal Colony", "Rejects from Tech");
	const dawg = new Array("Georgia Mutts", "Georgia Rednecks");
	var v = textNode.nodeValue;	
	v = v.replace(/\bUniversity of Georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\buniversity Of georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\bUniversity of georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\buniversity of georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\bUniversity Of Georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\buniversity of Georgia\b/g, forbiden[Math.floor(Math.random()*forbiden.length)]);
	v = v.replace(/\bGeorgia Bulldogs\b/g, dawg[Math.floor(Math.random()*dawg.length)]);
	v = v.replace(/\bGeorgia bulldogs\b/g, dawg[Math.floor(Math.random()*dawg.length)]);
	v = v.replace(/\bgeorgia bulldogs\b/g, dawg[Math.floor(Math.random()*dawg.length)]);
	v = v.replace(/\bgeorgia Bulldogs\b/g, dawg[Math.floor(Math.random()*dawg.length)]);
	v = v.replace(/\bUGA\b/g, "u(sic)Ga");
	v = v.replace(/\bUGa\b/g, "u(sic)Ga");
	v = v.replace(/\bUga\b/g, "u(sic)Ga");
	v = v.replace(/\buga\b/g, "u(sic)Ga");
	textNode.nodeValue = v;
}


