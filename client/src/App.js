import React from 'react';
import './App.css';
import Filter from './Component/Filter/Filter';

let products = [
  { id: '1', date: ' 10.08.2021', name: ' Lenovo s820', amount: '230', distance: '40' },
  { id: '2', date: ' 02.03.2021', name: ' Apple Iphone 4 8g', amount: '430', distance: '16' },
  { id: '3', date: ' 11.09.2021', name: ' Lg s300', amount: '730', distance: '45' },
  { id: '4', date: ' 10.09.2021', name: ' Samsung i9105 Galaxy s2 PLUS', amount: '30', distance: '1300' },
  { id: '5', date: ' 09.09.2021', name: ' Lenovo s820', amount: '10', distance: '450' },
  { id: '6', date: ' 08.09.2021', name: ' Nokia 206 DUAL SIM', amount: '2', distance: '450' },
  { id: '7', date: ' 10.06.2020', name: ' Apple Iphone 5 8g', amount: '56', distance: '670' },
  { id: '8', date: ' 09.09.2020', name: ' Lenovo s800', amount: '4', distance: '987' },
  { id: '9', date: ' 14.02.2020', name: ' HTS DESIRE 600', amount: '23', distance: '356' },
  { id: '10', date: ' 15.03.2020', name: ' NEXUS 5', amount: '300', distance: '789' },
  { id: '11', date: ' 10.08.2021', name: ' Lenovo s820', amount: '230', distance: '40' },
  { id: '12', date: ' 02.03.2021', name: ' Apple Iphone 4 8g', amount: '430', distance: '16' },
  { id: '13', date: ' 11.09.2021', name: ' Lg s300', amount: '730', distance: '45' },
  { id: '14', date: ' 10.09.2021', name: ' Samsung i9105 Galaxy s2 PLUS', amount: '30', distance: '1300' },
  { id: '15', date: ' 09.09.2021', name: ' Lenovo s820', amount: '10', distance: '450' },
  { id: '16', date: ' 08.09.2021', name: ' Nokia 206 DUAL SIM', amount: '2', distance: '450' },
  { id: '17', date: ' 10.06.2020', name: ' Apple Iphone 5 8g', amount: '56', distance: '670' },
  { id: '18', date: ' 09.09.2020', name: ' Lenovo s800', amount: '4', distance: '987' },
  { id: '19', date: ' 14.02.2020', name: ' HTS DESIRE 600', amount: '23', distance: '356' },
  { id: '20', date: ' 15.03.2020', name: ' NEXUS 5', amount: '300', distance: '789' },
  { id: '20', date: ' 15.03.2020', name: ' NEXUS 5', amount: '300', distance: '789' },
  { id: '21', date: ' 10.08.2021', name: ' Lenovo s820', amount: '230', distance: '40' },
  { id: '22', date: ' 02.03.2021', name: ' Apple Iphone 4 8g', amount: '430', distance: '16' },
  { id: '23', date: ' 11.09.2021', name: ' Lg s300', amount: '730', distance: '45' },
  { id: '24', date: ' 10.09.2021', name: ' Samsung i9105 Galaxy s2 PLUS', amount: '30', distance: '1300' },
  { id: '25', date: ' 09.09.2021', name: ' Lenovo s820', amount: '10', distance: '450' },
  { id: '26', date: ' 08.09.2021', name: ' Nokia 206 DUAL SIM', amount: '2', distance: '450' },
  { id: '27', date: ' 10.06.2020', name: ' Apple Iphone 5 8g', amount: '56', distance: '670' },
  { id: '28', date: ' 09.09.2020', name: ' Lenovo s800', amount: '4', distance: '987' },
  { id: '29', date: ' 14.02.2020', name: ' HTS DESIRE 600', amount: '23', distance: '356' },
  { id: '30', date: ' 15.03.2020', name: ' NEXUS 5', amount: '300', distance: '789' },
  { id: '31', date: ' 10.08.2021', name: ' Lenovo s820', amount: '230', distance: '40' },
  { id: '32', date: ' 02.03.2021', name: ' Apple Iphone 4 8g', amount: '430', distance: '16' },
  { id: '33', date: ' 11.09.2021', name: ' Lg s300', amount: '730', distance: '45' },
  { id: '34', date: ' 10.09.2021', name: ' Samsung i9105 Galaxy s2 PLUS', amount: '30', distance: '1300' },
  { id: '35', date: ' 09.09.2021', name: ' Lenovo s820', amount: '10', distance: '450' },
  { id: '36', date: ' 08.09.2021', name: ' Nokia 206 DUAL SIM', amount: '2', distance: '450' },
  { id: '37', date: ' 10.06.2020', name: ' Apple Iphone 5 8g', amount: '56', distance: '670' },
  { id: '38', date: ' 09.09.2020', name: ' Lenovo s800', amount: '4', distance: '987' },
  { id: '39', date: ' 14.02.2020', name: ' HTS DESIRE 600', amount: '23', distance: '356' },
  { id: '40', date: ' 15.03.2020', name: ' NEXUS 5', amount: '300', distance: '789' },
  { id: '41', date: ' 10.09.2021', name: ' Samsung i9105 Galaxy s2 PLUS', amount: '30', distance: '1300' },
  { id: '41', date: ' 09.09.2021', name: ' Lenovo s820', amount: '10', distance: '450' },
  { id: '43', date: ' 08.09.2021', name: ' Nokia 206 DUAL SIM', amount: '2', distance: '450' },
]

const App = () => {
  return (<div className="App">
    <Filter products={products} />
  </div>

  );
}

export default App;
