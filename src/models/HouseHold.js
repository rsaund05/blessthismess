//This file will be populated with user household data
export default class Household {
    constructor(id, label, dashQty, isCloudSaved) {
        this.id = id;
        this.label = label;
        this.dashQty = dashQty;
        this.isCloudSaved = isCloudSaved;
    };

    get id() {
        return this.id;
    }
    get label() {
        return this.label;
    };
    get dashQty() {
        return this.dashQty;
    };
    get isCloudSaved() {
        return this.isCloudSaved;
    };
}; 
// var HOUSEHOLD_ID = {
//     id: '1234-5678-8765',
//     label: "Testerson's House",
//     dash_qty: 4,
//     cloud_saved: false
// };