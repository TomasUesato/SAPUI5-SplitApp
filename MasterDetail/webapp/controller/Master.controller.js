sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "MasterDetail/MasterDetail/util/Constants",
        "MasterDetail/MasterDetail/util/Commons",
        "sap/ui/core/routing/History",
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Constants, Commons, History) {
		"use strict";

		return Controller.extend("MasterDetail.MasterDetail.controller.Master", {
			onInit: function () {

                this.getOwnerComponent().getRouter().getRoute("RouteMaster").attachPatternMatched(this._onRouteMatched, this);

                let oData = {
                    "value": [
                    {
                    "codigo_producto": "210605120522 1",
                    "cod_interno": "1000",
                    "fecha_creacion": "2020-11-20T00:00:00Z",
                    "fecha_vencimiento": "2020-12-31T00:00:00Z",
                    "desc_producto": "Producto 1",
                    "nombre_empresa": "CLIENTE Producto 1",
                    "origen": "Argentina"
                    }, 
                    {
                    "codigo_producto": "210132099429 2",
                    "cod_interno": "2000",
                    "fecha_creacion": "2020-11-20T00:00:00Z",
                    "fecha_vencimiento": "2020-12-31T00:00:00Z",
                    "desc_producto": "Producto 2",
                    "nombre_empresa": "CLIENTE Producto 2",
                    "origen": "Chile"
                    },
                    {
                    "codigo_producto": "210131354329 3",
                    "cod_interno": "1000",
                    "fecha_creacion": "2020-11-28T00:00:00Z",
                    "fecha_vencimiento": "2021-01-29T00:00:00Z",
                    "desc_producto": "Producto 3",
                    "nombre_empresa": "CLIENTE Producto 3",
                    "origen": "Chile"
                    },
                    {
                    "codigo_producto": "134232011342 4",
                    "cod_interno": "2000",
                    "fecha_creacion": "2020-09-20T00:00:00Z",
                    "fecha_vencimiento": "2020-11-30T00:00:00Z",
                    "desc_producto": "Producto 4",
                    "nombre_empresa": "CLIENTE Producto 4",
                    "origen": "Mexico"
                    },
                    {
                    "codigo_producto": "109832031429 5",
                    "cod_interno": "3000",
                    "fecha_creacion": "2020-11-20T00:00:00Z",
                    "fecha_vencimiento": "2020-12-31T00:00:00Z",
                    "desc_producto": "Producto 5",
                    "nombre_empresa": "CLIENTE Producto 5",
                    "origen": "Argentina"
                    } ]
            };

            let oModel = new JSONModel(oData);
            this.getOwnerComponent().setModel(oModel, "productosModel");

            },

            _onRouteMatched: function (oEvent) {
                
                let oModel = this.getOwnerComponent().getModel("productosModel");
                let oProductoSeleccionado = oModel.getProperty("/value/0");
        
                let oModelProducto = new JSONModel(oProductoSeleccionado);
                this.getOwnerComponent().setModel(oModelProducto, "productoSel");

                this.getOwnerComponent().getRouter().navTo("RouteDetail");
                
            },

            onListItemPress: function (oEvent) {
                let oItem = oEvent.getSource().getSelectedItem();
                let oBindingContext = oItem.getBindingContext("productosModel");

                let oModel = this.getOwnerComponent().getModel("productosModel");
                let oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath())

                let oModelProducto = new JSONModel(oProductoSeleccionado)
                this.getOwnerComponent().setModel(oModelProducto, "productoSel")
                }

		});
	});