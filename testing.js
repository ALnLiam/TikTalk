function filterByCategoryTesting(data, category) {
    let selected = [];

    data.forEach(record => { //each json item is a record 
        // Check if CategoryID exists and if it contains the keyword category
        if (record.CategoryList && record.CategoryID.includes(category)) {
            selected.push(record);
            console.log(record);
        }
    });

    console.log(selected)
    console.log("Working-sl")
    console.log(selected[0])
    return selected;

  
}

// Example usage:
let jsonData = [
    { CategoryID: "ArtsAndCulture,GlobalAffairs,DomesticAffairs", name: "Event 1" },
    { CategoryID: "Sports,Health", name: "Event 2" },
    { CategoryID: "ArtsAndCulture,Education", name: "Event 3" }
];

let category = "GlobalAffairs";
let filteredData = filterByCategoryTesting(jsonData, category);
console.log(filteredData);


