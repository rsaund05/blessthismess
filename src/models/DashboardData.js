//Temp array of household dashboards
// 

// export default DASH_LIST;
export default class DashboardData {
    constructor(id, household_id, name, dash_items) {
        this.id = id;
        this.household_id = household_id;
        this.name = name;
        this.dash_items = dash_items;
    };
};