
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image2 = {};	// @image
	var image1 = {};	// @image
	var Iniciar = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToView(4);
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView()
	};// @lock

	Iniciar.click = function Iniciar_click (event)// @startlock
	{// @endlock
		$$('navigationView1').goToNextView()
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("image1", "click", image1.click, "WAF");
	WAF.addListener("Iniciar", "click", Iniciar.click, "WAF");
// @endregion
};// @endlock
