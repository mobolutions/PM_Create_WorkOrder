sap.ui.define(["sap/ui/base/Object",
	"sap/ui/model/odata/ODataModel",
	"sap/m/MessageBox",
], function (Object, ODataModel, MessageBox) {
	"use strict";
	return Object.extend("com.sap.build.ba293bd41-us_1.createWoV2.model.priority", {
		constructor: function (oParentView) {
			this._oParentView = oParentView;
		},
 
		priority: function () {
		
			var typ1e = this._oParentView.byId("priority").getValue();
	
			var sPath = "/PriorityF4Set?$filter=PriorityText eq '" + typ1e + "' ";
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			var oController = this;
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					console.log("oData", oData)
					oController._oParentView.byId("end").setValue(oData.results[0].RequiredEndDate);
					oController._oParentView.byId("start").setValue(oData.results[0].RequiredStartDate);

					var oModel = oController._oParentView.getModel();
					oModel.setProperty(sPath, oData);

				},
			});

		},
		high: function () {

		}

	});

});