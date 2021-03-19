sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("MasterDetail.MasterDetail.controller.Detail", {
			onInit: function () {
                
            },
            _onRouteMatched: function(oEvent) {
                this._orderId = oEvent.getParameter("arguments").orderId;
                this.getView().bindElement("/RouteDetail/" + this._orderId);
            }

		});
	});
