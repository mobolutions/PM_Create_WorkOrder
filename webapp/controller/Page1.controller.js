//page 1 updates
var cen, cen1;
var dups = [],
	componentVal, oArg, oModel142,
	compobtn, oEvent, fetchDataFromExcel, purchaseItems = [];
var semhotelarray = [],
	seamoModelccd4, HotelBooking, table, funLoc1;
var Quagga, funloc, equ, purch, fun, workloc;

var lat1, lng1, llong1, geocoder1, marker4, directionsDisplay, directionsService, prio, oModel13, maps, google, doc, message;

var HotelBooking1, semhotelarray1, seamoModelccd5, itemInc = 0,
	itemInc1 = 0;
var ci_attach1, base64_marker, baseval = [],
	ci_obj1, ci_att1 = [];
var notnum, reportname, descrip1, ofilters;

var plant, newcom, addneworder_array1 = [],
	z1;

var arrayId12 = [],
	Quom, more;

var ci_attach1, baseval = [],
	ci_obj1, ci_att1, ci_att1 = [];

var semhotelarray1 = [],
	seamoModelccd41, HotelBooking1, table, funLoc1;

var semhotelarray2 = [],
	seamoModelccd42, HotelBooking2, table, funLoc1, oCont;

var array1 = [],
	array2 = [],
	array3 = [],
	array4 = [],
	array5 = [];
var arrayz = [],
	oModelssd;

var HotelBookingz, semhotelarrayz = [],
	seamoModelccd81;
var arr = [], arr2 = [];

// var ci_attach1, baseval, ci_obj1, ci_att1;

//var HotelBooking1, seamoModelccd5, semhotelarray1 = [], morefrag;
sap.ui.define(["sap/ui/core/mvc/Controller",
			"sap/ui/model/json/JSONModel",
			"sap/m/MessageBox",
			"sap/m/MessageToast",
			"sap/ui/model/odata/ODataModel",
			"sap/m/UploadCollectionParameter",
			"./Dialog1", "./Dialog3", "./Dialog2", "./Operations",
			"./utilities",
			"com/sap/build/ba293bd41-us_1/createWoV2/model/priority",
			"sap/ui/core/routing/History"
		], function (BaseController, JSONModel, MessageBox, MessageToast, ODataModel, UploadCollectionParameter, Dialog1, Dialog3, Dialog2,
			Operations,
			Utilities, priority, History) {
			"use strict";

			return BaseController.extend("com.sap.build.ba293bd41-us_1.createWoV2.controller.Page1", {

					handleRouteMatched: function (oEvent) {

						var oCont = this;

						oCont.tableBind1();
						//this.addrow();
						this.handleValueHelp();
						this.handleValueHelp1();
						this.addbtnmore1(); /////////For More Fragment Resource Planning
						this.addbtnmore2(); /////////For More Fragment Material required

						//oCont.fragmat();

						//this.morefrag();

						this.matreq();

					},

					addbtncp: function () {

						itemInc = itemInc + 10;

						semhotelarray.push({

							Empty1: itemInc,
							Empty2: "",
							pass12: this.planplt,
							Empty4: "",
							Empty5: "",
							Empty6: "",
							Empty7: "",
							Empty8: "",
							Empty9: ""

						});
						seamoModelccd4.refresh(); //which will add the new record

						var oCont = this; ///// Purchase data Button to be invisible after the Add button will be pressed

						var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

						form.setVisible(false);

					},

					addrow: function () {

						itemInc = itemInc + 10;
						//	alert(itemInc);

						HotelBookingz = {

							Empty1: itemInc,
							Empty2: "",
							Empty3: "",
							Empty4: "",
							Empty5: "",
							Empty6: "",
							Empty7: "",
							Empty8: "",
							Empty9: ""

						};

						console.log("HotelBookingz", HotelBookingz)
							//debugger;

						semhotelarrayz.push(HotelBookingz);

						HotelBookingz = this.getView().byId("tablez");

						seamoModelccd81 = new sap.ui.model.json.JSONModel(); // created a JSON model   
						seamoModelccd81.setData({ // Set the data to the model using the JSON object defined already  
							seamtransz: semhotelarrayz

						});
						HotelBookingz.setModel(seamoModelccd81);

					},

					deleteTab: function (oArgs) {

						//	alert("delete pressed");

						var deleteRecord = oArgs.getSource().getBindingContext().getObject("tab2");
						//	alert("deleteRecord");

						//debugger;

						for (var i = 0; i < this.semhotelarray.length; i++) {
							if (this.semhotelarray[i] == deleteRecord) {

								this.semhotelarray.splice(i, 1); //removing 1 record from i th index.
								seamoModelccd4.refresh();
								break; //quit the loop
							}
						}

					},

					priority1: function () {
						var oView = this.getView();
						var prio = new priority(oView, this.getOwnerComponent());
						prio.priority();
					},

					mapbutton: function () {

						maps.open();
						var latlng = new google.maps.LatLng(33.088635, -96.807831);
						var latlng2 = new google.maps.LatLng(32.78306, -96.80667);

						this.initialized = true;
						this.geocoder = new google.maps.Geocoder();
						directionsDisplay = new google.maps.DirectionsRenderer;
						directionsService = new google.maps.DirectionsService;
						window.mapOptions = {
							center: latlng,
							zoom: 12
						};

						var map = new google.maps.Map(sap.ui.getCore().byId("map_canvas").getDomRef(), mapOptions);
						//	var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(), mapOptions);
						//map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
						directionsDisplay.setMap(map);
						directionsService.route({
								origin: latlng,
								destination: latlng2,
								travelMode: google.maps.DirectionsTravelMode.DRIVING
							},
							function (response, status) {
								if (status == 'OK') {
									//	alert("pp")
									directionsDisplay.setDirections(response);

									var toast = "Distance: " + calcDistance(latlng, latlng2) + "Miles";

									//MessageToast.show(toast);

									var btnDis = sap.ui.getCore().byId("btnDis");

									btnDis.setText("Approx.Distance : " + calcDistance(latlng, latlng2) + " Miles")

									function calcDistance(latlng, latlng2) {

										return (google.maps.geometry.spherical.computeDistanceBetween(latlng, latlng2) / 100).toFixed(2);

									}

								} else {
									//alert("ii")
									console.log("response", response)
									console.log("status", status)

									//	window.alert('Directions request failed due to ' + status);
								}
							});

					},

					clo: function () {

						maps.close();
					},
					ok: function () {

						maps.close();

					},

					handleValueHelp: function () {

						var oCont = this;
						var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost");
						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/CostCenterF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var CostCenter = oData.results[0].CostCenter;
								var Description = oData.results[0].Description;

								console.log("CostCenter:" + CostCenter)
								console.log("Description:" + Description)
								var dups = [];
								var arr = oData.results.filter(function (el) {
									if (dups.indexOf(el.CostCenter) == -1) {
										dups.push(el.CostCenter);
										return true;
									} else if (dups.indexOf(el.Description) == -1) {
										dups.push(el.Description);
										return true;
									}
									return false;
								});
								var arr9 = {
									"arr9": arr
								};
								console.log("arr9:" + arr9);
								var oItems = new sap.ui.core.ListItem({
									key: "{CostCenter}",
									text: "{CostCenter}-{Description}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr9);
								oModel.setSizeLimit(1500);
								cost.setModel(oModel);
								cost.bindItems("/arr9", oItems);

							},

						});

						var funloc = sap.ui.core.Fragment.byId("functionalfragment", "functech");
						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/MasterF4HelpSet', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								var FunctionalLocation = oData.results[0].FunctionalLocation;
								var Text = oData.results[0].Text;

								console.log("FunctionalLocation:" + FunctionalLocation)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.FunctionalLocation) == -1) {
										dups.push(el.FunctionalLocation);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{FunctionalLocation}",
									text: "{FunctionalLocation}-{Text}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								funloc.setModel(oModel);
								funloc.bindItems("/arr11", oItems);

							},

						});

					},

					plant: function () {
						var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").getSelectedKey();
						var t1 = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
						var oFilters = [new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, plant)];

						//			t1.setModel(oModel);

						var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Text({
									text: "{FunctionalLocation}",

								}), new sap.m.Text({
									text: "{Text}"
								})

							]
						});

						//		t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
						t1.bindItems({
							path: '/MasterF4HelpSet',
							parameters: {
								operationMode: "Default"
							},
							template: titems1,
							filters: oFilters
						});
					},

					tech_change: function () {

						var Flcoc = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();
						var t1 = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
						var oFilters = [new sap.ui.model.Filter("FunctionalLocation", sap.ui.model.FilterOperator.EQ, Flcoc)];

						//	t1.setModel(oModel);

						var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Text({
									text: "{FunctionalLocation}",

								}), new sap.m.Text({
									text: "{Text}"
								})

							]
						});

						//	t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
						t1.bindItems({
							path: '/MasterF4HelpSet',
							parameters: {
								operationMode: "Default"
							},
							template: titems1,
							filters: oFilters
						});

					},

					clearfilter: function () {

						var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
						var cost = sap.ui.core.Fragment.byId("functionalfragment", "cost").setValue("");
						var func = sap.ui.core.Fragment.byId("functionalfragment", "functech").setValue("");
						//var equip = sap.ui.core.Fragment.byId("techfragment", "equip").setValue("");
						sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();

					},

					techok: function () {

						var tableid = sap.ui.core.Fragment.byId("functionalfragment", "technical_detail");
						var item = tableid.getSelectedItem();
						console.log(item);
						var tablelength = tableid.getSelectedItems().length;
						console.log("TableLenth :", tablelength);
						for (var i = 0; i < tablelength; i++) {
							var rows = tableid.getSelectedItems()[i];
							var item = rows.getCells()[0].getText();

							var desc = rows.getCells()[1].getText();

							var item1 = this.getView().byId("inp1").setValue(item + " / " + desc);

							//	this.tableBind1();

							// var table1 = this.getView().byId("tab1");

							// this.tableBind1();

							fun = sap.ui.core.Fragment.byId("functionalfragment", "functech").getSelectedKey();

							//	alert(fun);    /////////Final Variable for the Input box of Function Location.
							this.getView().byId("funcloc").setValue(fun); ////// to be binded in the Operation Table

							this.getView().byId("inp1").setValue(item);

							//console.log(fun);

							var table1 = this.getView().byId("tab1");

							funloc.close();

							this.funLoc1 = fun;

							this.addrow(); ////// FOR THE oPERATION Table function

							this.tableBind1();

							//				funloc.close();

						}

					},
					canceltecch: function () {
						sap.ui.core.Fragment.byId("functionalfragment", "technical_detail").destroyItems();
						funloc.close();
					},

					showdocument: function () {
						doc.open();
					},
					docfragok: function () {

						doc.close();

					},

					handleLinkPress: function () {

						MessageBox.alert("Link was clicked!");

					},

					docfragcancel: function () {

						doc.close();

					},

					handleValueHelp1: function () {

						var oCont = this;
						var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1");
						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/CostCenterF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var CostCenter = oData.results[0].CostCenter;
								var Description = oData.results[0].Description;

								console.log("CostCenter:" + CostCenter)
								console.log("Description:" + Description)
								var dups = [];
								var arr = oData.results.filter(function (el) {
									if (dups.indexOf(el.CostCenter) == -1) {
										dups.push(el.CostCenter);
										return true;
									} else if (dups.indexOf(el.Description) == -1) {
										dups.push(el.Description);
										return true;
									}
									return false;
								});
								var arr9 = {
									"arr9": arr
								};
								console.log("arr9:" + arr9);
								var oItems = new sap.ui.core.ListItem({
									key: "{CostCenter}",
									text: "{CostCenter}-{Description}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr9);
								oModel.setSizeLimit(1500);
								cost.setModel(oModel);
								cost.bindItems("/arr9", oItems);

							},

						});

						var funloc1 = sap.ui.core.Fragment.byId("equipmentfragment", "equip");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/EquipmentF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								var EquipmentNo = oData.results[0].EquipmentNo;
								var Text = oData.results[0].Text;

								console.log("EquipmentNo:" + EquipmentNo)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.EquipmentNo) == -1) {
										dups.push(el.EquipmentNo);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{EquipmentNo}",
									text: "{EquipmentNo}-{Text}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(8000);
								funloc1.setModel(oModel);
								funloc1.bindItems("/arr11", oItems);

							},

						});

					},

					plant1: function () {
						var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").getSelectedKey();
						var t1 = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
						var oFilters = [new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, plant)];

						//			t1.setModel(oModel);

						var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Text({
									text: "{FunctionalLocation}",

								}), new sap.m.Text({
									text: "{Text}"
								})

							]
						});

						//		t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
						t1.bindItems({
							path: '/MasterF4HelpSet',
							parameters: {
								operationMode: "Default"
							},
							template: titems1,
							filters: oFilters
						});

					},

					tech_change1: function () {

						var eqi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").getSelectedKey();
						//	alert(eqi);

						var t1 = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
						//alert(t1);

						var oFilters = [new sap.ui.model.Filter("EquipmentNumber", sap.ui.model.FilterOperator.EQ, eqi)];
						//	console.log("bha",oFilters);

						//	t1.setModel(oModel);

						var titems1 = new sap.m.ColumnListItem({
							cells: [new sap.m.Text({
									text: "{FunctionalLocation}", //////Here we will pass the equipment number inside the fragment to select the material

								}), new sap.m.Text({
									text: "{Text}"
								})

							]
						});

						//		t1.bindItems("/PoItemsGoods", titems1, null, oFilters);
						t1.bindItems({
							path: '/MasterF4HelpSet',
							parameters: {
								operationMode: "Default"
							},
							template: titems1,
							filters: oFilters
						});

						////// Set Value for combo box for planner group, planning Plant, Main work center

						var oCont = this;

						//	oCont.mtl = this.getView().byId("combo3").setValue(plant);

						var sPath = "/EquipViewSet('TEQ-00')"; //('TEQ-00')
						var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read(sPath, {
							success: function (oData, oResponse) {
								//console.log("Odata", oData)

								var v2 = oData.PlanGroup;
								//	alert(v2);
								oCont.getView().byId("combo3").setValue(v2);

								var v1 = oData.PlangPlant;
								//	alert(v1);
								oCont.getView().byId("combo4").setValue(v1);

								var v3 = oData.WorkCenter;
								//	alert(v3);
								oCont.getView().byId("combo5").setValue(v3);

							}
						});

					},

					clearfilter1: function () {

						var plant = sap.ui.core.Fragment.byId("equipmentfragment", "main1").setValue("");
						var cost = sap.ui.core.Fragment.byId("equipmentfragment", "cost1").setValue("");
						var equi = sap.ui.core.Fragment.byId("equipmentfragment", "equip").setValue("");

						//var equip = sap.ui.core.Fragment.byId("techfragment", "equip").setValue("");
						sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

					},

					techok1: function () {

						this.addrow();

						var tableid = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1");
						var item = sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").getSelectedItem();

						var tablelength = tableid.getSelectedItems().length;
						console.log("TableLenth :", tablelength);
						for (var i = 0; i < tablelength; i++) {
							var rows = tableid.getSelectedItems()[i];
							var item = rows.getCells()[0].getText();
							//alert(item);    //// The VAriable that holds Equipmet Value In the Input Field

							this.getView().byId("equip").setValue(item); ////// For Table Bind in the Operation Tab for Equipment Field
							var desc = rows.getCells()[1].getText();

							var item1 = this.getView().byId("inp2").setValue(item); //+ " / " + desc

						}

						//this.tableBind1();

						equ.close();

					},

					canceltecch1: function () {
						sap.ui.core.Fragment.byId("equipmentfragment", "technical_detail1").destroyItems();

						equ.close();
					},

					setuser: function () {

						var oCont = this;

						var usersta = oCont.getView().byId("combo11");
						//console.log(workloc);

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/UserStatusSet', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								// debugger;
								var Status = oData.results[0].Status;
								var Text = oData.results[0].Text;

								console.log("Status:" + Status)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.Status) == -1) {
										dups.push(el.Status);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{Status}",
									text: "{Status}-{StatusText}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								usersta.setModel(oModel);
								usersta.bindItems("/arr11", oItems);

							}

						});

					},

					_onLinkPress: function () {

						var adata = [{
							name: "Please describe the problem?"
						}, {
							name: "When did the problem starts?"
						}, {
							name: "What did you do after identifying the problems?"
						}];
						var notes = "";
						for (var i = 0; i < adata.length; i++) {
							notes = notes + adata[i].name + "\n \n";
						}

						this.getView().byId("text").setValue(notes);

					},
					onScanForValue: function (oEvent) {
						if (!this._oScanDialog) {
							this._oScanDialog = new sap.m.Dialog({
								title: "Scan barcode",
								contentWidth: "640px",
								contentHeight: "480px",
								horizontalScrolling: false,
								verticalScrolling: false,
								stretchOnPhone: true,
								content: [new sap.ui.core.HTML({
									id: this.createId("scanContainer"),
									content: "<div />"
								})],
								endButton: new sap.m.Button({
									text: "Cancel",
									press: function (oEvent) {
										this._oScanDialog.close();
									}.bind(this)
								}),
								afterOpen: function () {
									// TODO: Investigate why Quagga.init needs to be called every time...possibly because DOM 
									// element is destroyed each time dialog is closed
									this._initQuagga(this.getView().byId("scanContainer").getDomRef()).done(function () {
										// Initialisation done, start Quagga
										Quagga.start();
									}).fail(function (oError) {
										// Failed to initialise, show message and close dialog...this should not happen as we have
										// already checked for camera device ni /model/models.js and hidden the scan button if none detected
										MessageBox.error(oError.message.length ? oError.message : ("Failed to initialise Quagga with reason code " + oError.name), {
											onClose: function () {
												this._oScanDialog.close();
											}.bind(this)
										});
									}.bind(this));
								}.bind(this),
								afterClose: function () {
									// Dialog closed, stop Quagga
									Quagga.stop();
								}
							});

							this.getView().addDependent(this._oScanDialog);
						}

						this._oScanDialog.open();
					},

					_initQuagga: function (oTarget) {
						var oDeferred = jQuery.Deferred();

						// Initialise Quagga plugin - see https://serratus.github.io/quaggaJS/#configobject for details
						Quagga.init({
							inputStream: {
								type: "LiveStream",
								target: oTarget,
								constraints: {
									width: {
										min: 640
									},
									height: {
										min: 480
									},
									facingMode: "environment"
								}
							},
							locator: {
								patchSize: "medium",
								halfSample: true
							},
							numOfWorkers: 2,
							frequency: 10,
							decoder: {
								readers: [
									"code_128_reader",
									"ean_reader",
									"ean_8_reader",
									"code_39_reader",
									"code_39_vin_reader",
									"codabar_reader",
									"upc_reader",
									"upc_e_reader",
									"i2of5_reader",
									"2of5_reader",
									"code_93_reader"
								],
								debug: {
									showCanvas: true,
									showPatches: true,
									showFoundPatches: true,
									showSkeleton: true,
									showLabels: true,
									showPatchLabels: true,
									showRemainingPatchLabels: true,
									boxFromPatches: {
										showTransformed: true,
										showTransformedBox: true,
										showBB: true
									}
								}
							},
							locate: true
						}, function (error) {
							if (error) {
								oDeferred.reject(error);
							} else {
								oDeferred.resolve();
							}
						});

						if (!this._bQuaggaEventHandlersAttached) {
							// Attach event handlers...

							Quagga.onProcessed(function (result) {
								var drawingCtx = Quagga.canvas.ctx.overlay,
									drawingCanvas = Quagga.canvas.dom.overlay;

								if (result) {
									// The following will attempt to draw boxes around detected barcodes
									if (result.boxes) {
										drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
										result.boxes.filter(function (box) {
											return box !== result.box;
										}).forEach(function (box) {
											Quagga.ImageDebug.drawPath(box, {
												x: 0,
												y: 1
											}, drawingCtx, {
												color: "green",
												lineWidth: 2
											});
										});
									}

									if (result.box) {
										Quagga.ImageDebug.drawPath(result.box, {
											x: 0,
											y: 1
										}, drawingCtx, {
											color: "#00F",
											lineWidth: 2
										});
									}

									if (result.codeResult && result.codeResult.code) {
										Quagga.ImageDebug.drawPath(result.line, {
											x: 'x',
											y: 'y'
										}, drawingCtx, {
											color: 'red',
											lineWidth: 3
										});
									}
								}
							}.bind(this));

							Quagga.onDetected(function (result) {
								// Barcode has been detected, value will be in result.codeResult.code. If requierd, validations can be done 
								// on result.codeResult.code to ensure the correct format/type of barcode value has been picked up

								// Set barcode value in input field
								this.getView().byId("inp2").setValue(result.codeResult.code);

								//	this.submit();
								// Close dialog
								this._oScanDialog.close();
							}.bind(this));

							// Set flag so that event handlers are only attached once...
							this._bQuaggaEventHandlersAttached = true;
						}

						return oDeferred.promise();
					},
					onStartUpload: function (oEvent) {
						var oUploadCollection = this.byId("UploadCollection");
						var oTextArea = this.byId("TextArea");
						var cFiles = oUploadCollection.getItems().length;
						var uploadInfo = cFiles + " file(s)";

						if (cFiles > 0) {
							oUploadCollection.upload();

							if (oTextArea.getValue().length === 0) {
								uploadInfo = uploadInfo + " without notes";
							} else {
								uploadInfo = uploadInfo + " with notes";
							}

							MessageToast.show("Method Upload is called (" + uploadInfo + ")");
							MessageBox.information("Uploaded " + uploadInfo);
							oTextArea.setValue("");
						}
					},
					onUploadComplete: function (oEvent) {
						var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
						setTimeout(function () {
							var oUploadCollection = this.byId("UploadCollection");

							for (var i = 0; i < oUploadCollection.getItems().length; i++) {
								if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
									oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
									break;
								}
							}

							// delay the success message in order to see other messages before
							MessageToast.show("Event uploadComplete triggered");
						}.bind(this), 8000);
					},
					onChange: function (oEvent) {
						var oUploadCollection = oEvent.getSource();
						// Header Token
						var oCustomerHeaderToken = new UploadCollectionParameter({
							name: "x-csrf-token",
							value: "securityTokenFromModel"
						});
						oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
						MessageToast.show("Event change triggered");
					},
					_onTableItemPress: function () {

						var sDialogName = "Dialog1";
						this.mDialogs = this.mDialogs || {};
						var oDialog = this.mDialogs[sDialogName];

						if (!oDialog) {
							oDialog = new Dialog1(this.getView());
							this.mDialogs[sDialogName] = oDialog;

							// For navigation.
							oDialog.setRouter(this.oRouter);
						}

						oDialog.open();

					},
					_onButtonPress: function () {

						var sDialogName = "Dialog3";
						this.mDialogs = this.mDialogs || {};
						var oDialog = this.mDialogs[sDialogName];

						if (!oDialog) {
							oDialog = new Dialog3(this.getView());
							this.mDialogs[sDialogName] = oDialog;

							// For navigation.
							oDialog.setRouter(this.oRouter);
						}
						oDialog.open();

					},
					_onSegmentedButtonItemPress: function () {

						var sDialogName = "Dialog3";
						this.mDialogs = this.mDialogs || {};
						var oDialog = this.mDialogs[sDialogName];

						if (!oDialog) {
							oDialog = new Dialog3(this.getView());
							this.mDialogs[sDialogName] = oDialog;

							// For navigation.
							oDialog.setRouter(this.oRouter);
						}
						oDialog.open();

					},
					_onSegmentedButtonItemPress1: function () {

						var sDialogName = "Dialog2";
						this.mDialogs = this.mDialogs || {};
						var oDialog = this.mDialogs[sDialogName];

						if (!oDialog) {
							oDialog = new Dialog2(this.getView());
							this.mDialogs[sDialogName] = oDialog;

							// For navigation.
							oDialog.setRouter(this.oRouter);
						}
						oDialog.open();

					},
					// _onButtonPress1: function () {

					// 	var sDialogName = "Operations";
					// 	this.mDialogs = this.mDialogs || {};
					// 	var oDialog = this.mDialogs[sDialogName];

					// 	if (!oDialog) {
					// 		oDialog = new Operations(this.getView());
					// 		this.mDialogs[sDialogName] = oDialog;

					// 		// For navigation.
					// 		oDialog.setRouter(this.oRouter);
					// 	}
					// 	oDialog.open();

					// },
					// _onFileUploaderChange: function () {
					// 	var oFileuploader = sap.ui.core.Fragment.byId("Dialog1","ci_fileUploader1");  // uploder id
					// 	console.log("oFileuploader : " + oFileuploader);
					// 	ci_attach1 = sap.ui.core.Fragment.byId("Dialog1","UploadCollection1");   // list id
					// 	var len = oFileuploader.length;
					// 	var sFilename = oFileuploader.getValue();

					// 	//	baseval = [" "," "," "," "," "];
					// 	var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

					// 	var base64_marker = 'data:' + file.type + ';base64,';

					// 	var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
					// 	console.log("filename : " + filename);
					// 	var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
					// 	console.log("fileext : " + fileext);
					// 	var sfileext = fileext.substring(0, 3);
					// 	console.log("sfileext : " + sfileext);
					// 	var tsfileext = sfileext.toUpperCase();
					// 	console.log("tsfileext : " + tsfileext);
					// 	var that = this;
					// 	if (file) {
					// 		var reader = new FileReader();

					// 		reader.onload = function (readerEvt) {
					// 			var binaryString = readerEvt.target.result;
					// 			var base64 = btoa(binaryString);
					// 			console.log("base64 : " + base64);

					// 			oFileuploader.setValue();
					// 			baseval.push(base64);
					// 			console.log(baseval);
					// 			ci_obj1 = {
					// 				Name: filename,
					// 				Ext: tsfileext,
					// 				Base64: base64
					// 			};
					// 			ci_att1.push(ci_obj1);

					// 			console.log(ci_att1.length);
					// 			var oModel = new sap.ui.model.json.JSONModel(ci_att1);
					// 			console.log(ci_att1);
					// 			console.log(ci_att1[0].Base64);
					// 			ci_attach1.setModel(oModel);
					// 			var oItems = new sap.m.ObjectListItem({
					// 				icon: {
					// 					path: "Ext",
					// 					formatter: function (subject) {
					// 						var lv = subject;
					// 						if (lv === 'TXT') {
					// 							return "sap-icon://document-text";
					// 						} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
					// 							return "sap-icon://attachment-photo";
					// 						} else if (lv === 'PDF') {
					// 							return "sap-icon://pdf-attachment";
					// 						} else if (lv === 'DOC') {
					// 							return "sap-icon://doc-attachment";
					// 						} else if (lv === 'XLS') {
					// 							return "sap-icon://excel-attachment";
					// 						} else if (lv === 'MP3') {
					// 							return "sap-icon://attachment-audio";
					// 						} else if (lv === 'XLS') {
					// 							return "sap-icon://excel-attachment";
					// 						} else if (lv === 'PPT') {
					// 							return "sap-icon://ppt-attachment";
					// 						} else {
					// 							return "sap-icon://document";
					// 						}

					// 					}
					// 				},
					// 				title: "{Name}.{Ext}",
					// 				type: "Active",
					// 			});
					// 			ci_attach1.bindItems("/", oItems);
					// 			that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

					// 			/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
					// 			console.log(ci_att11,"array");*/

					// 		};

					// 	};

					// 	reader.readAsBinaryString(file);

					// },

					_onUploadCollectionUploadComplete: function (oEvent) {

						// var oFile = oEvent.getParameter("files")[0];
						// var iStatus = oFile ? oFile.status : 500;
						// var sResponseRaw = oFile ? oFile.responseRaw : "";
						// var oSourceBindingContext = oEvent.getSource().getBindingContext();
						// var sSourceEntityId = oSourceBindingContext ? oSourceBindingContext.getProperty("") : null;
						// var oModel = this.getView().getModel();

						// return new Promise(function (fnResolve, fnReject) {
						// 	var fnSync = function () {
						// 		oModel.detachRequestCompleted(fnRefreshCompleted);
						// 		oModel.detachRequestFailed(fnRefreshFailed);
						// 	};
						// 	var fnRefreshCompleted = function () {
						// 		fnSync();
						// 		fnResolve();
						// 	};
						// 	var fnRefreshFailed = function () {
						// 		fnSync();
						// 		fnReject(new Error("refresh failed"));
						// 	};
						// 	var fnResolveAfterRefresh = function () {
						// 		oModel.attachRequestCompleted(fnRefreshCompleted);
						// 		oModel.attachRequestFailed(fnRefreshFailed);
						// 		oModel.refresh(true, true);
						// 	};

						// 	if (iStatus !== 200) {
						// 		fnReject(new Error("Upload failed"));
						// 	} else if (oModel.hasPendingChanges()) {
						// 		fnReject(new Error("Please save your changes, first"));
						// 	} else if (!sSourceEntityId) {
						// 		fnReject(new Error("No source entity key"));
						// 	} else {
						// 		try {
						// 			var oResponse = JSON.parse(sResponseRaw);
						// 			var oNewEntityInstance = {};

						// 			oNewEntityInstance[""] = oResponse["ID"];
						// 			oNewEntityInstance[""] = sSourceEntityId;
						// 			oModel.createEntry("", {
						// 				properties: oNewEntityInstance
						// 			});
						// 			oModel.submitChanges({
						// 				success: function (oResponse) {
						// 					var oChangeResponse = oResponse.__batchResponses[0].__changeResponses[0];
						// 					if (oChangeResponse && oChangeResponse.response) {
						// 						oModel.resetChanges();
						// 						fnReject(new Error(oChangeResponse.message));
						// 					} else {
						// 						fnResolveAfterRefresh();
						// 					}
						// 				},
						// 				error: function (oError) {
						// 					fnReject(new Error(oError.message));
						// 				}
						// 			});
						// 		} catch (err) {
						// 			var message = typeof err === "string" ? err : err.message;
						// 			fnReject(new Error("Error: " + message));
						// 		}
						// 	}
						// }).catch(function (err) {
						// 	if (err !== undefined) {
						// 		MessageBox.error(err.message);
						// 	}
						// });

						var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
						setTimeout(function () {
							var oUploadCollection = this.byId("UploadCollection");

							for (var i = 0; i < oUploadCollection.getItems().length; i++) {
								if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
									oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
									break;
								}
							}

							// delay the success message in order to see other messages before
							MessageToast.show("Event uploadComplete triggered");
						}.bind(this), 8000);

					},
					_onUploadCollectionChange: function (oEvent) {

						var oUploadCollection = oEvent.getSource();
						var aFiles = oEvent.getParameter('files');

						if (aFiles && aFiles.length) {
							var oFile = aFiles[0];
							var sFileName = oFile.name;

							var oDataModel = this.getView().getModel();
							if (oUploadCollection && sFileName && oDataModel) {
								var sXsrfToken = oDataModel.getSecurityToken();
								var oCsrfParameter = new sap.m.UploadCollectionParameter({
									name: "x-csrf-token",
									value: sXsrfToken
								});
								oUploadCollection.addHeaderParameter(oCsrfParameter);
								var oContentDispositionParameter = new sap.m.UploadCollectionParameter({
									name: "content-disposition",
									value: "inline; filename=\"" + encodeURIComponent(sFileName) + "\""
								});
								oUploadCollection.addHeaderParameter(oContentDispositionParameter);
							} else {
								throw new Error("Not enough information available");
							}
						}

					},
					_onUploadCollectionTypeMissmatch: function () {

						return new Promise(function (fnResolve) {
							sap.m.MessageBox.warning(
								"The file you are trying to upload does not have an authorized file type (JPEG, JPG, GIF, PNG, TXT, PDF, XLSX, DOCX, PPTX).", {
									title: "Invalid File Type",
									onClose: function () {
										fnResolve();
									}
								});
						}).catch(function (err) {
							if (err !== undefined) {
								MessageBox.error(err);
							}
						});

					},

					_onUploadCollectionFileSizeExceed: function () {
						return new Promise(function (fnResolve) {
							sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
								title: "File Too Large",
								onClose: function () {
									fnResolve();
								}
							});
						}).catch(function (err) {
							if (err !== undefined) {
								MessageBox.error(err);
							}
						});

					},

					///////////////Fragment for Purchase Data Fragments

					fragCurr: function () {

						var oCont = this;

						var curr = sap.ui.core.Fragment.byId("Operationsfragment", "combo15");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/CurrencyF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var Currency = oData.results[0].Currency;
								console.log("Currency" + Currency)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.Currency) == -1) {
										dups.push(el.Currency);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{Currency}",
									text: "{Currency}-{CurrencyText}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								curr.setModel(oModel);
								curr.bindItems("/arr7", oItems);
							}
						});
					},

					fragmatgrp: function () {

						var oCont = this;

						var matgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo8");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/MaterialGroupF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var MaterialGroup = oData.results[0].MaterialGroup;
								console.log("MaterialGroup:" + MaterialGroup)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.MaterialGroup) == -1) {
										dups.push(el.MaterialGroup);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{MaterialGroup}",
									text: "{MaterialGroup}-{MatGrpText}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								matgrp.setModel(oModel);
								matgrp.bindItems("/arr7", oItems);
							}
						});

					},

					fragpurgrp: function () {

						var oCont = this;

						var purgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo9");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/POGrpSet', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var PurGrp = oData.results[0].PurGrp;
								console.log("PurGrp" + PurGrp)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.PurGrp) == -1) {
										dups.push(el.PurGrp);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{PurGrp}",
									text: "{PurGrp}-{PurGrpDesc}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								purgrp.setModel(oModel);
								purgrp.bindItems("/arr7", oItems);
							}
						});

					},

					fragvend: function () {

						var oCont = this;

						var vend = sap.ui.core.Fragment.byId("Operationsfragment", "combo10");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/VendorF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var Vendor = oData.results[0].Vendor;
								console.log("Vendor" + Vendor)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.Vendor) == -1) {
										dups.push(el.Vendor);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{Vendor}",
									text: "{Vendor}-{Name}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								vend.setModel(oModel);
								vend.bindItems("/arr7", oItems);
							}
						});

					},

					fragagree: function () {

						var oCont = this;

						var agree = sap.ui.core.Fragment.byId("Operationsfragment", "combo12");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/AgreementF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var DocumentNo = oData.results[0].DocumentNo;
								console.log("DocumentNo" + DocumentNo)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.DocumentNo) == -1) {
										dups.push(el.DocumentNo);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{DocumentNo}",
									text: "{DocumentNo}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								agree.setModel(oModel);
								agree.bindItems("/arr7", oItems);
							}
						});
					},

					fragItem: function () {

						var oCont = this;

						var item = sap.ui.core.Fragment.byId("Operationsfragment", "combo13");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/AgreementF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var Item = oData.results[0].Item;
								console.log("Item" + Item)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.Item) == -1) {
										dups.push(el.Item);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{Item}",
									text: "{Item}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								item.setModel(oModel);
								item.bindItems("/arr7", oItems);
							}
						});

					},

					fragacc: function () {

						var oCont = this;

						var acc = sap.ui.core.Fragment.byId("Operationsfragment", "combo16");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/GLAccountF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var AccNo = oData.results[0].AccNo;
								console.log("AccNo" + AccNo)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.AccNo) == -1) {
										dups.push(el.AccNo);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{AccNo}",
									text: "{AccNo}-{AccGroup}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								acc.setModel(oModel);
								acc.bindItems("/arr7", oItems);
							}
						});

					},

					fraginfo: function () {

						var oCont = this;

						var info = sap.ui.core.Fragment.byId("Operationsfragment", "combo14");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/InfoRecordF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var DocNo = oData.results[0].DocNo;
								console.log("DocNo" + DocNo)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.DocNo) == -1) {
										dups.push(el.DocNo);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{DocNo}",
									text: "{DocNo}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								info.setModel(oModel);
								info.bindItems("/arr7", oItems);
							}
						});
					},

					purdoc: function () { /////Icon Tab Bar inside the fragment

						var oCont = this;

						//	oCont.mtl = this.getView().byId("combo3").setValue(plant);
						//debugger;
						var sPath = "/PurchDataSet(Plant='1000',PurGroup='100',Quom='ST')"; //('TEQ-00')
						var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read(sPath, {
							success: function (oData, oResponse) {
								console.log("Odata", oData)

								//oCont.z1 = oData.Quom;
								//alert(z1);
								oCont.z2 = oData.PriceUom;
								oCont.z3 = oData.MatGroup;
								oCont.z4 = oData.PurGroup;
								oCont.z5 = oData.PriceUnit;
								oCont.z6 = oData.GLAccount;

							}

						});

					},

					onInit: function () {
						this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
						this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

						maps = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.createWoV2.fragments.map", this);
						this.getView().addDependent(maps);

						funloc = sap.ui.xmlfragment("functionalfragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.functional", this);
						this.getView().addDependent(funloc);

						equ = sap.ui.xmlfragment("equipmentfragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.equipment", this);
						this.getView().addDependent(equ);

						purch = sap.ui.xmlfragment("Purchasefragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.Purchase", this);
						this.getView().addDependent(purch);

						compobtn = sap.ui.xmlfragment("Operationsfragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.Operations", this);
						this.getView().addDependent(compobtn);

						doc = sap.ui.xmlfragment("documentfragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.document", this);
						this.getView().addDependent(doc);

						more = sap.ui.xmlfragment("morefragment", "com.sap.build.ba293bd41-us_1.createWoV2.fragments.more", this);
						this.getView().addDependent(more);

						// newcom = sap.ui.xmlfragment("newcombb", "com.sap.build.ba293bd41-us_1.createWoV2.view.Dialog1", this);
						// this.getView().addDependent(newcom);

						this.funloca();
						this.equip();
						this.plannergrp();
						this.plannplnt();
						this.workcenter();
						// this.tableBind1();
						this.notification();
						this.tasklist();
						this.setuser();

						//	this.fragmat();
						this.fraguom();
						this.fragItmcat();
						this.fragCurr();
						this.fragmatgrp();
						this.fragpurgrp();
						this.fragvend();
						this.fragagree();
						this.fragItem();
						this.fraginfo();
						this.fragacc();

						this.purdoc();

					},

					code1: function () {

						funloc.open();

					},
					onOK: function () {

						var fun = sap.ui.core.Fragment.byId("functionalfragment", "combo1").getSelectedKey();

						this.getView().byId("inp1").setValue(fun);

						var table = this.getView().byId("tab1");

						funloc.close();

						this.funLoc1 = fun;

						this.tableBind1();

					},

					onCancel: function () {

						funloc.close();

					},

					funloca: function () {

						var oCont = this;

						//var workloc = oCont.getView().byId("combo1");

						var funloc = sap.ui.core.Fragment.byId("functionalfragment", "combo1");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/MasterF4HelpSet', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								var FunctionalLocation = oData.results[0].FunctionalLocation;
								var Text = oData.results[0].Text;

								console.log("FunctionalLocation:" + FunctionalLocation)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.FunctionalLocation) == -1) {
										dups.push(el.FunctionalLocation);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{FunctionalLocation}",
									text: "{FunctionalLocation}-{Text}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								funloc.setModel(oModel);
								funloc.bindItems("/arr11", oItems);

							}

						});

					},

					code2: function () {

						equ.open();

					},

					onOK1: function () {

						var equipment = sap.ui.core.Fragment.byId("equipmentfragment", "combo2").getSelectedKey();
						this.getView().byId("inp2").setValue(equipment);
						equ.close();

					},

					onCancel1: function () {
						equ.close();

					},

					equip: function () {

						var oCont = this;

						var equip = sap.ui.core.Fragment.byId("equipmentfragment", "combo2");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/EquipmentF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								var FunctionalLocation = oData.results[0].FunctionalLocation;
								var Text = oData.results[0].Text;

								console.log("FunctionalLocation:" + FunctionalLocation)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.FunctionalLocation) == -1) {
										dups.push(el.FunctionalLocation);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{EquipmentNo}",
									text: "{Text}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								equip.setModel(oModel);
								equip.bindItems("/arr11", oItems);

							}

						});

					},

					createnotif: function () {

						jQuery.sap.require("sap.m.MessageBox");
						sap.m.MessageBox.show(
							"Do you want to Create Notification?", {
								//					         icon: sap.m.MessageBox.Icon.INFORMATION,
								title: "Warning Message",
								actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
								onClose: function (oAction) {
									// notify user
									if (oAction == "YES") {
										//alert("clicked");
										sap.m.URLHelper.redirect(
											"https://requestmaintenancemp-s0019393832trial.dispatcher.hanatrial.ondemand.com/webapp/test/testFLPServiceMockServer.html?hc_reset#BUILD-prototype"
										);

									} else(oAction == "NO");

									{
										//	alert("no actions")
									}
								}
							});

					},

					plannergrp: function () {

						var oCont = this;

						plant = oCont.getView().byId("combo3");
						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/PlannerGroupF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var PlannerGroup = oData.results[0].PlannerGroup;
								console.log("PlannerGroup:" + PlannerGroup)
								var dups = [];
								var arr = oData.results.filter(function (el) {
									if (dups.indexOf(el.PlannerGroup) == -1) {
										dups.push(el.PlannerGroup);
										return true;
									}
									return false;
								});
								var arr6 = {
									"arr6": arr
								};
								//debugger;
								console.log("arr6:" + arr6);
								var oItems = new sap.ui.core.ListItem({
									key: "{PlannerGroup}",
									text: "{PlannerGroup}-{NamePlannerGroup}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr6);
								plant.setModel(oModel);
								plant.bindItems("/arr6", oItems);
							}
						});

					},

					plannplnt: function () {

						var oCont = this;

						var plant = oCont.getView().byId("combo4");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/PlannerGroupF4Set', {
							// filters: ofilters,
							success: function (oData, oResponse) {
								var PlanningPlant = oData.results[0].PlanningPlant;
								console.log("PlanningPlant:" + PlanningPlant)
								var dups = [];
								var arr1 = oData.results.filter(function (el) {
									if (dups.indexOf(el.PlanningPlant) == -1) {
										dups.push(el.PlanningPlant);
										return true;
									}
									return false;
								});
								var arr7 = {
									"arr7": arr1
								};
								//	debugger;
								console.log("arr6:" + arr7);
								var oItems = new sap.ui.core.ListItem({
									key: "{PlanningPlant}",
									text: "{PlanningPlant}-{NamePlanningPlant}"
								});
								var oModel = new sap.ui.model.json.JSONModel(arr7);
								plant.setModel(oModel);
								plant.bindItems("/arr7", oItems);
							}
						});

					},

					workcenter: function () {

						var oCont = this;

						var workloc = oCont.getView().byId("combo5");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
						oModel.read('/WorkCenterF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								// debugger;
								var FunctionalLocation = oData.results[0].FunctionalLocation;
								var Text = oData.results[0].Text;

								console.log("FunctionalLocation:" + FunctionalLocation)
								console.log("Description:" + Text)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.FunctionalLocation) == -1) {
										dups.push(el.FunctionalLocation);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{Key}",
									text: "{Key}-{Text}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								workloc.setModel(oModel);
								workloc.bindItems("/arr11", oItems);

							}

						});

					},

					c3: function () {

						cen = this.getView().byId("combo5").getSelectedKey(); //// For the table Bind of Operation
						//alert(cen)
						cen1 = this.getView().byId("wkcent").setValue(cen); /////To be Binded in the Operation Tab 
						this.addrow();
						this.center = this.getView().byId("combo5").getSelectedKey();
						//	alert(this.center);

						//	alert(cen);

					},

					c1: function () {

						this.plangrp = this.getView().byId("combo3").getSelectedKey(); //// to post Planner Group
						//alert(this.plangrp);

					},

					c2: function () {

						this.planplt = this.getView().byId("combo4").getSelectedKey(); //// to post Planning plant
						//alert(this.planplt);

						var sPath = "/MaterialF4Set?$filter= Plant eq '" + this.planplt + "'";
						var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read(sPath, {
							success: function (oData, oResponse) {

								var plntcnt = oData.results.length;
								console.log("countable:", plntcnt);
								//	alert(plntcnt);
								// var Material = oData.results[0].Material;
								// console.log("Material:",Material);
								//  alert(Material);

								var c4model = new sap.ui.model.json.JSONModel();

								c4model.setData(oData);
								var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");
								//	alert(mat);
								mat.setModel(c4model);
								var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

								var oItems = new sap.ui.core.ListItem({
									key: "{Material}",
									text: "{Material} - {Description}"
								});
								comboven.bindAggregation("items", {
									path: "/results",
									template: oItems
								});

							}
						});

					},

					frag2mat: function (oEvent) {

						var cc_oTable = oEvent.getSource().getParent().getParent();

						var oSrc = oEvent.getSource();
						var aItems = oSrc.getSelectedKey();
						//alert(aItems);
						//console.log(oEvent);
						var value = oEvent.getSource().getParent().getBindingContext().getPath();
						var valueind = value.split("/");
						var indexi = valueind[2];
						console.log(indexi);
						//var arrayId12 = indexi.split("/");
						//	componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

						//componentVal = sap.ui.core.Fragment.byId("Operationsfragment","matcombo").getSelectedKey();

						var ocont = this;

						var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);

						//	var mat = sap.ui.core.Fragment.byId("Operationsfragment","matcombo");
						var sPath = "/ComponentListSet(Component='" + aItems + "',Plant='" + this.planplt + "')";
						//debugger;
						oModel123.read(sPath, {
							//filters: [new sap.ui.model.Filter("PASSPORTID", sap.ui.model.FilterOperator.EQ, aItems)],
							success: function (oData, oResp) {
								console.log(oData);
								cc_oTable.getItems()[indexi].getCells()[3].setValue(oData.Description);
								cc_oTable.getItems()[indexi].getCells()[1].setValue(oData.OpActivity);
								cc_oTable.getItems()[indexi].getCells()[4].setValue(oData.UOM);
								cc_oTable.getItems()[indexi].getCells()[5].setValue(oData.StorageLoc);
								cc_oTable.getItems()[indexi].getCells()[7].setValue(oData.ReqQty);

							},
						});

						// var value = oEvent.getSource().getParent().getBindingContext().getPath();
						// var valueind = value.split("/");
						// var indexi1 = valueind[7];
						// console.log(indexi1);

					},

					ord: function () {

						this.order = this.getView().byId("order").getSelectedKey();
						//alert(this.order);

					},

					tasklist: function () {

						var oCont = this;

						var workloc = oCont.getView().byId("combo7");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/TaskListSet', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								// debugger;
								var TaskType = oData.results[0].TaskType;
								var TaskText = oData.results[0].TaskText;

								console.log("TaskType:" + TaskType)
								console.log("TaskText:" + TaskText)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.TaskType) == -1) {
										dups.push(el.TaskType);
										return true;
									} else if (dups.indexOf(el.TaskText) == -1) {
										dups.push(el.TaskText);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{TaskType}",
									text: "{TaskType}-{TaskText}"
								});

								var oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								workloc.setModel(oModel);
								workloc.bindItems("/arr11", oItems);

							}

						});

					},

					notification: function () {

						var oCont = this;

						var workloc = oCont.getView().byId("combo6");

						var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
						oModel.read('/NotificationF4Set', {
							//	filters: ofilters,
							success: function (oData, oResponse) {
								var leng = oData.results.length;
								console.log("length", leng);
								// debugger;
								var NotificationNo = oData.results[0].NotificationNo;
								var Description = oData.results[0].Description;

								console.log("NotificationNo:" + NotificationNo)
								console.log("Description:" + Description)
								var dups = [];
								var arr3 = oData.results.filter(function (el) {
									if (dups.indexOf(el.NotificationNo) == -1) {
										dups.push(el.NotificationNo);
										return true;
									} else if (dups.indexOf(el.Text) == -1) {
										dups.push(el.Text);
										return true;
									}
									return false;
								});
								var arr11 = {
									"arr11": arr3
								};
								console.log("arr11:" + arr11);
								var oItems = new sap.ui.core.ListItem({
									key: "{NotificationNo}",
									text: "{NotificationNo}-{Description}"
								});

								oModel = new sap.ui.model.json.JSONModel(arr11);
								oModel.setSizeLimit(5300);
								workloc.setModel(oModel);
								workloc.bindItems("/arr11", oItems);

							}

						});

					},

					tableBind1: function () {

						// //alert("tablebind");

						// //	var oController = this;

						// //	var funLoc1 = oController.getView().byId("inp1").getValue();

						// 	//this.funLoc1 = sap.ui.core.Fragment.byId("functionalfragment","combo1").getValue();

						// 	//debugger;

						// //	alert(funLoc1);

						// 	var table =	this.getView().byId("tab1");

						// 	var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
						// 	var oModelJson = new sap.ui.model.json.JSONModel();
						// 	var sPath = "/ManageNotifTechnicalObjHistorySet";
						// 	 //debugger;
						// 	var oFilter = [new sap.ui.model.Filter("FunctionLoc", sap.ui.model.FilterOperator.EQ, this.funLoc1)];
						// 	oModel.read(sPath, {
						// 		filters: oFilter, //"K1-B01-1")],
						// 		success: function (oData, oResponse) {

						// 			 console.log("Function oModel:", oData);
						// 			oModelJson.setData(oData);
						// 			var oTemplate = new sap.m.ColumnListItem({

						// 				cells: [
						// 					new sap.m.ObjectIdentifier({
						// 						title: "{NotifNo}"

						// 					}),

						// 					new sap.m.Text({
						// 						text: "{OrderNo}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{NotifDate}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{FunctionLoc}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{Equipment}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{MalStart}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{MalEnd}"
						// 					}),

						// 					new sap.m.Text({
						// 						text: "{SystemStatus}"
						// 					})

						// 				]
						// 			});
						// 			table.setModel(oModelJson);
						// 			table.bindItems("/results", oTemplate);

						// 		}

						// 	});

						//alert("tablebind");

						//	var oController = this;

						//	var funLoc1 = oController.getView().byId("inp1").getValue();

						//this.funLoc1 = sap.ui.core.Fragment.byId("functionalfragment","combo1").getValue();

						//debugger;

						//	alert(funLoc1);

						var table1 = this.getView().byId("tab1");

						var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
						var oModelJson = new sap.ui.model.json.JSONModel();
						var sPath = "/ObjectHistorySet";
						//debugger;
						var oFilter = [new sap.ui.model.Filter("FunctLoc", sap.ui.model.FilterOperator.EQ, this.funLoc1)];
						oModel.read(sPath, {
							filters: oFilter, //"K1-B01-1")],
							success: function (oData, oResponse) {

								console.log("Function oModel:", oData);

								oModelJson.setData(oData);
								var oTemplate = new sap.m.ColumnListItem({

									cells: [
										new sap.m.ObjectIdentifier({
											title: "{NotifNo}"

										}),

										new sap.m.Text({
											text: "{Orderid}"
										}),
										new sap.m.Text({
											text: "{path:'NotifDate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
										}),

										// new sap.m.Text({
										// 	text: "{NotifDate}"
										// }),

										new sap.m.Text({
											text: "{FunctLoc}"
										}),

										new sap.m.Text({
											text: "{Equipment}"
										}),

										new sap.m.Text({
											text: "{path:'Strmlfndate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
										}),

										// new sap.m.Text({
										// 	text: "{Strmlfndate}"
										// }),

										new sap.m.Text({
											text: "{path:'Endmlfndate', type:'sap.ui.model.type.Date',formatOptions: {pattern: 'dd.MM.yyyy'}}"
										}),

										// new sap.m.Text({
										// 	text: "{Endmlfndate}"
										// }),

										new sap.m.Text({
											text: "{SysStatus}"
										})

									]
								});
								table1.setModel(oModelJson);
								table1.bindItems("/results", oTemplate);

							}

						});

					},

					openfrG: function () { /////////////// for component button in operation tab

						itemInc = itemInc + 10;

						HotelBooking = {

							Empty1: itemInc,
							Empty2: "",
							pass12: "",
							Empty4: "",
							Empty5: "",
							Empty6: "",
							Empty7: "",
							Empty8: "",
							Empty9: ""

						};

						//debugger;

						semhotelarray.push(HotelBooking);

						HotelBooking = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

						seamoModelccd4 = new sap.ui.model.json.JSONModel(); // created a JSON model   
						seamoModelccd4.setData({ // Set the data to the model using the JSON object defined already  
							seamtrans: semhotelarray

						});
						HotelBooking.setModel(seamoModelccd4);
					},

					compo_btn: function () {
						if (this.tabmodel) {

							compobtn.open();

						} else {

							semhotelarray = [];

							itemInc = 0;

							this.openfrG();

							compobtn.open();
							//	this.addbtncp();
						}

					},

					OK: function () {

						this.opsTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
						this.tabmodel = this.opsTable.getModel();
						console.log(this.tabmodel);

						////////////////////////////////////Table binding for more table for MAterial Required Table	
						array1 = [];
						array2 = [];
						array3 = [];
						array4 = [];
						array5 = [];

						var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

						var lengthconfirmcart = rowItems.length;

						//	alert(lengthconfirmcart);

						for (var i = 0; i < rowItems.length; i++) {

							var item = rowItems[i];
							var Cells = item.getCells();

							this.Material = Cells[2].getValue();
						//	alert(this.Material);
							this.Description = Cells[3].getValue();
							this.UoM = Cells[4].getValue();
							this.Storage = Cells[5].getValue();
							this.ReqQty = Cells[7].getValue();

							var obj = {
								mat: this.Material,
								dec: this.Description,
								uom: this.UoM,
								Storage: this.Storage,
								ReqQty: this.ReqQty
							};

							array1.push(obj);

						}
						oModelssd = new sap.ui.model.json.JSONModel();
						oModelssd.setData({

							moretab: array1

						});
						this.HotelBooking2.setModel(oModelssd);

						compobtn.close();

					},

					Cancel: function () {

						compobtn.close();

					},

					purch_data: function () {

						purch.open();

					},

					okpress: function () {

						purch.close();

					},

					cancelpress: function () {

						purch.close();

					},

					post: function () {
					
						var table1 = this.getView().byId("tablez");
						var count = table1.getItems().length;

						for (var i = 0; i < count; i++) {
							//var rows = table1.getItems()[i];

							var ops = table1.getItems()[0].getCells()[0].getValue();
							
							var desc = table1.getItems()[0].getCells()[1].getValue();
							var durn = table1.getItems()[0].getCells()[3].getValue();
			
							var obj = {
								"Opeartion": " ",
								"Description": desc,
								"ControlKey": "PM01",
								"ActType": "103",
								"RespPerson": "",
								"WorkCenter": "MECHANIK",
								"Plant": this.planplt,
								"Duration": "",
								"Number": ""

							};

							console.log("obj", obj);
							arr.push(obj);
							}// For loop Closed
							console.log("arr", arr);
							
							
						var table2 = sap.ui.core.Fragment.byId("Operationsfragment","tab2");
						var count1 = table2.getItems().length;

						for (var i = 0; i < count1; i++) {
							//var rows = table1.getItems()[i];

							var ops1 = table2.getItems()[0].getCells()[0].getValue();
							
							var mat = table2.getItems()[0].getCells()[2].getValue();
							var desc1 = table2.getItems()[0].getCells()[3].getValue();
							var uni = table2.getItems()[0].getCells()[4].getValue();
			
							var objz = {
						"Item": "",
						"Operation": " ",
						"Material": 1309,   //mat
						"Description": desc1,
						"Uom": uni,
						"StorLoc":"",
						"ItemCat": "L",
						"ReqQty": "10"
							};

							console.log("objz", objz);
							arr2.push(objz);
							}// For loop Closed
							console.log("arr2", arr2);
							

							
							

							var func1 = this.getView().byId("inp1").getValue();

							var postdata = {
								"PlanningPlant": this.planplt,
								"OrderType": this.order,
								"MainWorkCenter": "MECHANIK",
								"PMActType": "103",
								"ControlType": this.order,
								"FunctionalLocation": func1,

								"HToOperation": arr,
							//	"HToComponent": arr2

							};

							console.log(postdata);
							var that = this;

							var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

							var sPath = "/CreateWorkOrderSet";
							oModel3.create(sPath, postdata, {
								success: function (oData, oResponse) {
									console.log(oData, "oData");
									//	console.log(oResponse, "oResponse");
									var msg1 = oData.Message;
									//	alert(msg1);
									ci_att1 = that.getView().byId("UploadCollection").getItems().length;
									//	debugger;
									if (ci_att1 == '0') {

										// window.location.reload();
									} else {

										that.DMS();
										// window.location.reload();
									}

									var typ = oData.Type;
									//	alert(typ)
									//	alert(typ);
									//	console.log(typ, "typ");
									if (typ === "S") {
										jQuery.sap.require("sap.m.MessageBox");
										sap.m.MessageBox.confirm(msg1 + " ", {
											icon: sap.m.MessageBox.Icon.SUCCESS,
											title: "Success",
											actions: [sap.m.MessageBox.Action.OK],
											onClose: function (oAction) {
												if (oAction == "OK") {

													window.location.reload();

												}
											}.bind(this)
										});
										message = false;
									} else {

										if (message) {
											sap.m.MessageBox.warning(msg1 +" ", {
												icon: sap.m.MessageBox.Icon.WARNING,
												title: "Warning",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {

														//	this.closefun();
														window.location.reload();

													}
												}.bind(this)

											});
											message = false;
										}

									}

								}
							});

						},

						ci_handleDelete: function (oEvent) {
								var path = oEvent.getParameter('listItem').getBindingContext().getPath();
								var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
								var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

								var Data = list_ID.getModel();

								var d = Data.getData();
								d.splice(idx, 1);
								Data.setData(d);
							},
							_onFileUploaderChange: function () {
								var oFileuploader = this.getView().byId("ci_fileUploader1");
								ci_attach1 = this.getView().byId("UploadCollection");
								var len = oFileuploader.length;
								var sFilename = oFileuploader.getValue();

								//	baseval = [" "," "," "," "," "];
								var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

								var base64_marker = 'data:' + file.type + ';base64,';

								var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
								console.log("filename : " + filename);
								var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
								console.log("fileext : " + fileext);
								var sfileext = fileext.substring(0, 3);
								console.log("sfileext : " + sfileext);
								var tsfileext = sfileext.toUpperCase();
								console.log("tsfileext : " + tsfileext);
								var that = this;
								if (file) {
									var reader = new FileReader();

									reader.onload = function (readerEvt) {
										var binaryString = readerEvt.target.result;
										var base64 = btoa(binaryString);
										console.log("base64 : " + base64);

										oFileuploader.setValue();
										baseval.push(base64);
										console.log(baseval);
										ci_obj1 = {
											Name: filename,
											Ext: tsfileext,
											Base64: base64
										};
										ci_att1.push(ci_obj1);

										console.log(ci_att1.length);
										var oModel = new sap.ui.model.json.JSONModel(ci_att1);
										console.log(ci_att1);
										console.log(ci_att1[0].Base64);
										ci_attach1.setModel(oModel);
										var oItems = new sap.m.ObjectListItem({
											icon: {
												path: "Ext",
												formatter: function (subject) {
													var lv = subject;
													if (lv === 'TXT') {
														return "sap-icon://document-text";
													} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
														return "sap-icon://attachment-photo";
													} else if (lv === 'PDF') {
														return "sap-icon://pdf-attachment";
													} else if (lv === 'DOC') {
														return "sap-icon://doc-attachment";
													} else if (lv === 'XLS') {
														return "sap-icon://excel-attachment";
													} else if (lv === 'MP3') {
														return "sap-icon://attachment-audio";
													} else if (lv === 'XLS') {
														return "sap-icon://excel-attachment";
													} else if (lv === 'PPT') {
														return "sap-icon://ppt-attachment";
													} else {
														return "sap-icon://document";
													}

												}
											},
											title: "{Name}.{Ext}",
											type: "Active",
										});
										ci_attach1.bindItems("/", oItems);
										that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

										/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
										console.log(ci_att11,"array");*/

									};

								};

								reader.readAsBinaryString(file);

							},

							DMS: function () {
								// var ci_att1= [], oModel142, descrip1, reportname,notnum
								//	alert("SMD")
								ci_att1 = this.getView().getModel("oGlobalModel").getProperty("/ci_att1");
								console.log("Array", ci_att1);
								var oUploadCollection = this.getView().byId("UploadCollection");
								//debugger;
								var arr142 = [];
								var arrp = [];
								var count = ci_att1.length;
								console.log("count :", count);

								for (var i = 0; i < count; i++) {
									var dmsdata = {
										"DocType": ci_att1[i].Ext,
										"FileName": ci_att1[i].Name,
										"Base64": ci_att1[i].Base64

									};
									arr142.push(dmsdata);
								}
								var obj = {
									"d": {
										"ProcessName": "Notification",
										"Description": "Pump Set",
										"Username": "MANAGER",
										"NotificationNo": "000010004250",
										"To_DMSItems": arr142
									}
								};
								arrp.push(obj);

								console.log(obj);
								oModel142 = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
								var sPath = "/DMS_HeaderSet";

								oModel142.create(sPath, obj, {
									success: function (oData, oResponse) {
										console.log(oData);
										var msg = oData.ReturnMessage;
										//	debugger;
										var typ = oData.ReturnType;
										console.log(typ, "type");
										if (typ == "S") {
											/*	jQuery.sap.require("sap.m.MessageBox");
											sap.m.MessageBox.confirm(msg, {
											icon: sap.m.MessageBox.Icon.SUCCESS,
											title: "Success",
											actions: [sap.m.MessageBox.Action.OK],
											onClose: function (oAction) {
											if (oAction == "OK") {

											}
											}
											});*/
											MessageToast.show(msg);
										}

									}
								});

							},
							fraguom: function () {

								//var oCont = this;

								var unit = sap.ui.core.Fragment.byId("Operationsfragment", "combo17");
								//alert(unit);

								var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
								oModel.read('/UOMF4Set', {
									// filters: ofilters,
									success: function (oData, oResponse) {

										var unitt = oData.results.length;
										for (var i = 0; i < unitt; i++) {
											var UOM = oData.results[i].UOM;
											console.log("UOM", UOM);
											var dups = [];
											var arr1 = oData.results.filter(function (el) {
												if (dups.indexOf(el.UOM) == -1) {
													dups.push(el.UOM);
													return true;
												}
												return false;
											});
											var arr7 = {
												"arr7": arr1
											};
										}
										//	debugger;
										console.log("arr6:", arr7);
										var oItems = new sap.ui.core.ListItem({
											key: "{Text}",
											text: "{Text}"

											// key: "{UOM}",
											// text: "{UOM}-{Text}"

										});
										var oModel = new sap.ui.model.json.JSONModel(arr7);
										oModel.setSizeLimit(900);
										unit.setModel(oModel);
										unit.bindItems("/arr7", oItems);
									}
								});

							},

							fragItmcat: function () {

								var oCont = this;

								var icat = sap.ui.core.Fragment.byId("Operationsfragment", "combo19");

								var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
								oModel.read('/ItemCategoryF4Set', {
									// filters: ofilters,
									success: function (oData, oResponse) {
										var ItemCat = oData.results[0].ItemCat;
										console.log("ItemCat" + ItemCat)
										var dups = [];
										var arr1 = oData.results.filter(function (el) {
											if (dups.indexOf(el.ItemCat) == -1) {
												dups.push(el.ItemCat);
												return true;
											}
											return false;
										});
										var arr7 = {
											"arr7": arr1
										};
										//	debugger;
										console.log("arr6:" + arr7);
										var oItems = new sap.ui.core.ListItem({
											key: "{ItemCat}",
											text: "{ItemCat}-{ItemCatText}"
										});
										var oModel = new sap.ui.model.json.JSONModel(arr7);
										icat.setModel(oModel);
										icat.bindItems("/arr7", oItems);
									}
								});

							},

							newmaterial: function () {

								var oCont = this;

								var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

								form.setVisible(true);

								//sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(oCont.z1);
								//alert(oCont.z1);
								sap.ui.core.Fragment.byId("Operationsfragment", "combo15").setValue(oCont.z2);
								sap.ui.core.Fragment.byId("Operationsfragment", "combo8").setValue(oCont.z3);
								sap.ui.core.Fragment.byId("Operationsfragment", "combo9").setValue(oCont.z4);
								sap.ui.core.Fragment.byId("Operationsfragment", "val3").setValue(this.planplt);
								sap.ui.core.Fragment.byId("Operationsfragment", "val4").setValue(oCont.z5);
								sap.ui.core.Fragment.byId("Operationsfragment", "combo16").setValue(oCont.z6);

							},

							purdatauom: function (oEvent) {

								var purunit = oEvent.getSource().getSelectedKey();

								var u = sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(purunit);

							},
							//////////////////////////////////////////////More Fragment in Page1		
							more_btn: function () {

								more.open();

							},

							addbtnmore1: function () {

								//	this.handleRouteMatched();

								HotelBooking1 = {

									Empty1: "",
									Empty2: ""

								};

								//debugger;

								semhotelarray1.push(HotelBooking1);

								HotelBooking1 = sap.ui.core.Fragment.byId("morefragment", "tab4");

								seamoModelccd41 = new sap.ui.model.json.JSONModel(); // created a JSON model   
								seamoModelccd41.setData({ // Set the data to the model using the JSON object defined already  
									seamtrans1: semhotelarray1

								});
								HotelBooking1.setModel(seamoModelccd41);

							},

							addbtnmore2: function () {

								this.HotelBooking2 = {

									Empty1: "",
									Empty2: "",
									Empty3: "",
									Empty4: "",
									Empty5: ""

								};

								//debugger;

								semhotelarray2.push(this.HotelBooking2);

								this.HotelBooking2 = sap.ui.core.Fragment.byId("morefragment", "tab5");

								seamoModelccd42 = new sap.ui.model.json.JSONModel(); // created a JSON model   
								seamoModelccd42.setData({ // Set the data to the model using the JSON object defined already  
									seamtrans2: semhotelarray2

								});
								this.HotelBooking2.setModel(seamoModelccd42);

							},

							_onFileUploaderChange1: function () {
								var oFileuploader = this.getView().byId("ci_fileUploader"); // uploder id
								console.log("oFileuploader : " + oFileuploader);
								ci_attach1 = this.getView().byId("UploadCollection1"); // list id
								var len = oFileuploader.length;
								var sFilename = oFileuploader.getValue();

								//	baseval = [" "," "," "," "," "];
								var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

								var base64_marker = 'data:' + file.type + ';base64,';

								var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
								console.log("filename : " + filename);
								var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
								console.log("fileext : " + fileext);
								var sfileext = fileext.substring(0, 3);
								console.log("sfileext : " + sfileext);
								var tsfileext = sfileext.toUpperCase();
								console.log("tsfileext : " + tsfileext);
								var that = this;
								if (file) {
									var reader = new FileReader();

									reader.onload = function (readerEvt) {
										var binaryString = readerEvt.target.result;
										var base64 = btoa(binaryString);
										console.log("base64 : " + base64);

										oFileuploader.setValue();
										baseval.push(base64);
										console.log(baseval);
										ci_obj1 = {
											Name: filename,
											Ext: tsfileext,
											Base64: base64
										};
										ci_att1.push(ci_obj1);

										console.log(ci_att1.length);
										var oModel = new sap.ui.model.json.JSONModel(ci_att1);
										console.log(ci_att1);
										console.log(ci_att1[0].Base64);
										ci_attach1.setModel(oModel);
										var oItems = new sap.m.ObjectListItem({
											icon: {
												path: "Ext",
												formatter: function (subject) {
													var lv = subject;
													if (lv === 'TXT') {
														return "sap-icon://document-text";
													} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
														return "sap-icon://attachment-photo";
													} else if (lv === 'PDF') {
														return "sap-icon://pdf-attachment";
													} else if (lv === 'DOC') {
														return "sap-icon://doc-attachment";
													} else if (lv === 'XLS') {
														return "sap-icon://excel-attachment";
													} else if (lv === 'MP3') {
														return "sap-icon://attachment-audio";
													} else if (lv === 'XLS') {
														return "sap-icon://excel-attachment";
													} else if (lv === 'PPT') {
														return "sap-icon://ppt-attachment";
													} else {
														return "sap-icon://document";
													}

												}
											},
											title: "{Name}.{Ext}",
											type: "Active",
										});
										ci_attach1.bindItems("/", oItems);
										that.getView().getModel("oGlobalModel").setProperty("/ci_att1", ci_att1);

										/*var	ci_att11 = that._oParentView.getModel("oGlobalModel").getProperty("/ci_att1");
										console.log(ci_att11,"array");*/

									};

								};

								reader.readAsBinaryString(file);

							},
							ci_handleDelete1: function (oEvent) {
								var path = oEvent.getParameter('listItem').getBindingContext().getPath();
								var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
								var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

								var Data = list_ID.getModel();

								var d = Data.getData();
								d.splice(idx, 1);
								Data.setData(d);
							},

							moreok: function () {

								more.close();

							},
							moreclose: function () {

								more.close();

							},

							matreq: function () {

								arrayz = [];

								var moretab = sap.ui.core.Fragment.byId("morefragment", "tab5");

								// var mi = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield1");
								// console.log("mi", mi);
								// var mi1 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield2");
								// var mi2 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield3");
								// var mi3 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield4");
								// var mi4 = sap.ui.core.Fragment().getModel("Additems").getProperty("/arrayfield5");

							},

							onExit: function () {

								// to destroy templates for bound aggregations when templateShareable is true on exit to prevent duplicateId issue
								var aControls = [{
									"controlId": "sap_uxap_ObjectPageLayout_0-sections-sap_uxap_ObjectPageSection-1557142154540-subSections-sap_uxap_ObjectPageSubSection-1-blocks-build_simple_Table-1557146479362",
									"groups": ["items"]
								}];
								for (var i = 0; i < aControls.length; i++) {
									var oControl = this.getView().byId(aControls[i].controlId);
									if (oControl) {
										for (var j = 0; j < aControls[i].groups.length; j++) {
											var sAggregationName = aControls[i].groups[j];
											var oBindingInfo = oControl.getBindingInfo(sAggregationName);
											if (oBindingInfo) {
												var oTemplate = oBindingInfo.template;
												oTemplate.destroy();
											}
										}
									}
								}

							}
					});
			}, /* bExport= */ true);