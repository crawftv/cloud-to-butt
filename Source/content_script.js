walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
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
	var v = textNode.nodeValue;

	v = v.replace(/\bBruce Chassy\b/g, "Bruce Chassy, a University of Illinois who has recieved funding from Monsanto, ");
	v = v.replace(/\bKevin Folta\b/g, "Kevin Folta, a University of Illinois who has recieved funding from Monsanto, ");
	v = v.replace(/\bTaking on the Food Industry, One Blog Post at a Time\b/g, "Taking on the Food Industry, One Blog Post at a Time. This article references the works of professors who have been funded by Monsanto.");
	v = v.replace(/\bFoes of Modified Corn Find Support in a Study\b/g, "Foes of Modified Corn Find Support in a Study. This article references the works of professors who have been funded by Monsanto.");

	textNode.nodeValue = v;
}
