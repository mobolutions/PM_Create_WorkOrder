sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/sap/build/ba293bd41-us_1/createWoV2/model/models",
	"./model/errorHandling"
], function (UIComponent, Device, models, errorHandling) {
	"use strict";

	jQuery.sap.includeScript(

		"https://maps.googleapis.com/maps/api/js?key=AIzaSyD6EmAk92gaGzjYVYU-ebd_BK-rgejSoZ0",

		"includeGoogleMaps",
		function () {

		}
	);

	var navigationWithContext = {

	};
	// var oRenderer = sap.ushell.Container.getRenderer("fiori2");
	// oRenderer.setHeaderVisibility(false, false, ["home", "app"]);
	
	return UIComponent.extend("com.sap.build.ba293bd41-us_1.createWoV2.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			// set the FLP model
			this.setModel(models.createFLPModel(), "FLP");

			// set the dataSource model
			this.setModel(new sap.ui.model.json.JSONModel({
				"uri": "/here/goes/your/serviceUrl/local/"
			}), "dataSource");

			this.setModel(new sap.ui.model.json.JSONModel({ ///// global model declaration

			}), "oGlobalModel");

			// set application model
			var oApplicationModel = new sap.ui.model.json.JSONModel({});
			this.setModel(oApplicationModel, "applicationModel");

			this.setModel(new sap.ui.model.json.JSONModel({

			}), "oGlobalModel");
			
			 this.setModel(new sap.ui.model.json.JSONModel({

			}), "Additems");

			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// delegate error handling
			errorHandling.register(this);

			// create the views based on the url/hash
			this.getRouter().initialize();
		},

		createContent: function () {
			var app = new sap.m.App({
				id: "App"
			});
			var appType = "App";
			var appBackgroundColor = "#FFFFFF";
			if (appType === "App" && appBackgroundColor) {
				app.setBackgroundColor(appBackgroundColor);
			}

			return app;
		},

		getNavigationPropertyForNavigationWithContext: function (sEntityNameSet, targetPageName) {
			var entityNavigations = navigationWithContext[sEntityNameSet];
			return entityNavigations == null ? null : entityNavigations[targetPageName];
		}

	});

});