import React from 'react';

function DessertsList(props) {
// Constants to store property names
  const dessertName = 'name';
  const dessertCalories = 'calories';

  // Filter desserts based on calories
  const filteredDesserts = props.data
    .filter(dessert => dessert[dessertCalories] <= 500)
    .sort((a, b) => a[dessertCalories] - b[dessertCalories]);

  const dessertItems = filteredDesserts.map((dessert, index) => (
    <li key={index}>
      {`${dessert[dessertName]} - ${dessert[dessertCalories]} cal`}
    </li>
  ));

  return (
    <ul>
      {dessertItems}
    </ul>
  )
}

export default DessertsList;

