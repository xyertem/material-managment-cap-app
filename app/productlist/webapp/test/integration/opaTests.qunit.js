sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'material/managment/cap/app/ui/productlist/test/integration/FirstJourney',
		'material/managment/cap/app/ui/productlist/test/integration/pages/ProductsList',
		'material/managment/cap/app/ui/productlist/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('material/managment/cap/app/ui/productlist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);