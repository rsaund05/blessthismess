//Temp array of household dashboards
// 

// export default DASH_LIST;
class DASHBOARD {
    constructor(id, name, dash_items) {
        this.id = id;
        this.name = name;
        this.dash_items = dash_items;
    };

    get id() {
        return this.id;
    };
    get name() {
        return this.name;
    };
    get dash_items() {
        return this.dash_items;
    };
};