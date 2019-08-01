// sap.ui.define([
// 	"sap/ui/base/ManagedObject",
// 	"sap/m/MessageBox",
// 	"./utilities",
// 	"sap/ui/core/routing/History"
// ], function(ManagedObject, MessageBox, Utilities, History) {

// 	return ManagedObject.extend("com.sap.build.ba293bd41-us_1.createWoV2.controller.Operations", {
// 		constructor: function(oView) {
// 			this._oView = oView;
// 			this._oControl = sap.ui.xmlfragment(oView.getId(), "com.sap.build.ba293bd41-us_1.createWoV2Operations.view.Operations", this);
// 			this._bInit = false;
// 		},

// 		exit: function() {
// 			delete this._oView;
// 		},

// 		getView: function() {
// 			return this._oView;
// 		},

// 		getControl: function() {
// 			return this._oControl;
// 		},

// 		getOwnerComponent: function() {
// 			return this._oView.getController().getOwnerComponent();
// 		},

// 		open: function() {
// 			var oView = this._oView;
// 			var oControl = this._oControl;

// 			if (!this._bInit) {

// 				// Initialize our fragment
// 				this.onInit();

// 				this._bInit = true;

// 				// connect fragment to the root view of this component (models, lifecycle)
// 				oView.addDependent(oControl);
// 			}

// 			var args = Array.prototype.slice.call(arguments);
// 			if (oControl.open) {
// 				oControl.open.apply(oControl, args);
// 			} else if (oControl.openBy) {
// 				oControl.openBy.apply(oControl, args);
// 			}
// 		},

// 		close: function() {
// 			this._oControl.close();
// 		},

// 		setRouter: function(oRouter) {
// 			this.oRouter = oRouter;

// 		},
// 		getBindingParameters: function() {
// 			return {};

// 		},
// 		_onButtonPress: function(oEvent) {

// 			var sDialogName = "Dialog2";
// 			this.mDialogs = this.mDialogs || {};
// 			var oDialog = this.mDialogs[sDialogName];
// 			if (!oDialog) {
// 				oDialog = new Dialog2(this.getView());
// 				this.mDialogs[sDialogName] = oDialog;

// 				// For navigation.
// 				oDialog.setRouter(this.oRouter);
// 			}

// 			var context = oEvent.getSource().getBindingContext();
// 			oDialog._oControl.setBindingContext(context);

// 			oDialog.open();

// 		},
// 		_onButtonPress1: function() {

// 			this.close();

// 		},
// 		_onButtonPress2: function() {

// 			this.close();

// 		},
// 		onInit: function() {

// 			this._oDialog = this.getControl();

// 		},
// 		onExit: function() {
// 			this._oDialog.destroy();

// 		}

// 	});
// }, /* bExport= */ true);
