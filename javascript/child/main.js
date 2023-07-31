  console.log(1);
  
  const data = [
  {
      "fips": 1125,
      "state": "AL",
      "area_name": "Tuscaloosa County",
      "bachelorsOrHigher": 27.7
  },
  {
      "fips": 1127,
      "state": "AL",
      "area_name": "Walker County",
      "bachelorsOrHigher": 10.7
  },
  {
      "fips": 1129,
      "state": "AL",
      "area_name": "Washington County",
      "bachelorsOrHigher": 10.3
  },
  {
      "fips": 1131,
      "state": "AL",
      "area_name": "Wilcox County",
      "bachelorsOrHigher": 11.5
  },
  {
      "fips": 1133,
      "state": "AL",
      "area_name": "Winston County",
      "bachelorsOrHigher": 11.1
  },
  {
      "fips": 2013,
      "state": "AK",
      "area_name": "Aleutians East Borough",
      "bachelorsOrHigher": 12.6
  },
  {
      "fips": 2016,
      "state": "AK",
      "area_name": "Aleutians West Census Area",
      "bachelorsOrHigher": 15.4
  },
  {
      "fips": 2020,
      "state": "AK",
      "area_name": "Anchorage Municipality",
      "bachelorsOrHigher": 32.9
  },
  {
      "fips": 2050,
      "state": "AK",
      "area_name": "Bethel Census Area",
      "bachelorsOrHigher": 11.4
  },
  {
      "fips": 2060,
      "state": "AK",
      "area_name": "Bristol Bay Borough",
      "bachelorsOrHigher": 20.2
  },
  {
      "fips": 2068,
      "state": "AK",
      "area_name": "Denali Borough",
      "bachelorsOrHigher": 29.5
  },
  {
      "fips": 2070,
      "state": "AK",
      "area_name": "Dillingham Census Area",
      "bachelorsOrHigher": 16.6
  },
  {
      "fips": 2090,
      "state": "AK",
      "area_name": "Fairbanks North Star Borough",
      "bachelorsOrHigher": 30.5
  },
  {
      "fips": 2100,
      "state": "AK",
      "area_name": "Haines Borough",
      "bachelorsOrHigher": 31.3
  },
  {
      "fips": 2105,
      "state": "AK",
      "area_name": "Hoonah-Angoon Census Area",
      "bachelorsOrHigher": 29.3
  },
  {
      "fips": 2110,
      "state": "AK",
      "area_name": "Juneau City and Borough",
      "bachelorsOrHigher": 37.8
  },
  {
      "fips": 2122,
      "state": "AK",
      "area_name": "Kenai Peninsula Borough",
      "bachelorsOrHigher": 23.3
  },
  {
      "fips": 2130,
      "state": "AK",
      "area_name": "Ketchikan Gateway Borough",
      "bachelorsOrHigher": 24.6
  },
  {
      "fips": 2150,
      "state": "AK",
      "area_name": "Kodiak Island Borough",
      "bachelorsOrHigher": 21.6
  },
  {
      "fips": 2164,
      "state": "AK",
      "area_name": "Lake and Peninsula Borough",
      "bachelorsOrHigher": 13.7
  },
  {
      "fips": 2170,
      "state": "AK",
      "area_name": "Matanuska-Susitna Borough",
      "bachelorsOrHigher": 20.9
  },
  {
      "fips": 2180,
      "state": "AK",
      "area_name": "Nome Census Area",
      "bachelorsOrHigher": 14.7
  },
  {
      "fips": 2185,
      "state": "AK",
      "area_name": "North Slope Borough",
      "bachelorsOrHigher": 13.4
  },
  {
      "fips": 2188,
      "state": "AK",
      "area_name": "Northwest Arctic Borough",
      "bachelorsOrHigher": 12
  },
  {
      "fips": 2195,
      "state": "AK",
      "area_name": "Petersburg Census Area",
      "bachelorsOrHigher": 25.2
  },
  {
      "fips": 2198,
      "state": "AK",
      "area_name": "Prince of Wales-Hyder Census Area",
      "bachelorsOrHigher": 16.3
  },
  {
      "fips": 2220,
      "state": "AK",
      "area_name": "Sitka City and Borough",
      "bachelorsOrHigher": 32.9
  },
  {
      "fips": 2230,
      "state": "AK",
      "area_name": "Skagway Municipality",
      "bachelorsOrHigher": 34.6
  },
  {
      "fips": 2240,
      "state": "AK",
      "area_name": "Southeast Fairbanks Census Area",
      "bachelorsOrHigher": 20.7
  },
  {
      "fips": 2261,
      "state": "AK",
      "area_name": "Valdez-Cordova Census Area",
      "bachelorsOrHigher": 24.1
  },
  {
      "fips": 2158,
      "state": "AK",
      "area_name": "Kusilvak Census Area",
      "bachelorsOrHigher": 4.5
  },
  {
      "fips": 2275,
      "state": "AK",
      "area_name": "Wrangell City and Borough",
      "bachelorsOrHigher": 18.7
  },
  {
      "fips": 2282,
      "state": "AK",
      "area_name": "Yakutat City and Borough",
      "bachelorsOrHigher": 20.3
  },
  {
      "fips": 2290,
      "state": "AK",
      "area_name": "Yukon-Koyukuk Census Area",
      "bachelorsOrHigher": 10.1
  },
  {
      "fips": 4001,
      "state": "AZ",
      "area_name": "Apache County",
      "bachelorsOrHigher": 10.1
  },
  {
      "fips": 4003,
      "state": "AZ",
      "area_name": "Cochise County",
      "bachelorsOrHigher": 23.1
  },
  {
      "fips": 4005,
      "state": "AZ",
      "area_name": "Coconino County",
      "bachelorsOrHigher": 32.8
  },
  {
      "fips": 4007,
      "state": "AZ",
      "area_name": "Gila County",
      "bachelorsOrHigher": 17.1
  },
  {
      "fips": 4009,
      "state": "AZ",
      "area_name": "Graham County",
      "bachelorsOrHigher": 13.6
  },
  {
      "fips": 4011,
      "state": "AZ",
      "area_name": "Greenlee County",
      "bachelorsOrHigher": 11.8
  },
  {
      "fips": 4012,
      "state": "AZ",
      "area_name": "La Paz County",
      "bachelorsOrHigher": 10.2
  },
  {
      "fips": 4013,
      "state": "AZ",
      "area_name": "Maricopa County",
      "bachelorsOrHigher": 30
  },
  {
      "fips": 4015,
      "state": "AZ",
      "area_name": "Mohave County",
      "bachelorsOrHigher": 12.2
  },
  {
      "fips": 4017,
      "state": "AZ",
      "area_name": "Navajo County",
      "bachelorsOrHigher": 14.5
  },
  {
      "fips": 4019,
      "state": "AZ",
      "area_name": "Pima County",
      "bachelorsOrHigher": 30.1
  },
  {
      "fips": 4021,
      "state": "AZ",
      "area_name": "Pinal County",
      "bachelorsOrHigher": 17.8
  }];

  const div = document.createElement('div');
  const text = document.createTextNode('Table Title');
  div.appendChild(text);

  const parent = document.getElementById('test');
  parent.appendChild(div);

  var state = 'AL';
  var count = 0;
  var stateTotal = 0;    
  for (var i = 0; i < data.length; i++) {
    var eachData = data[i];
    if (eachData['state'] === state) {
        count++;
          stateTotal = stateTotal + eachData['bachelorsOrHigher'];
          if(i === data.length - 1) {
            var avg = stateTotal / count;
             const td1 = document.createElement('td');
            const tdNode1 = document.createTextNode(state);
            td1.appendChild(tdNode1);
      
            const td2 = document.createElement('td');
            const tdNode2 = document.createTextNode(count);
            td2.appendChild(tdNode2);
      
            const td3 = document.createElement('td');
            const tdNode3 = document.createTextNode(avg.toFixed(1) + "%");
            td3.appendChild(tdNode3);
        
            const tr = document.createElement('tr');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
      
            const element = document.getElementById("body");
            element.appendChild(tr);
          }
    } else if (eachData['state'] !== state) {
      var avg = stateTotal / count;
      console.log('stateTotal', stateTotal);
      console.log(state, count, avg);
      const td1 = document.createElement('td');
      const tdNode1 = document.createTextNode(state);
      td1.appendChild(tdNode1);
      
      const td2 = document.createElement('td');
      const tdNode2 = document.createTextNode(count);
      td2.appendChild(tdNode2);
      
      const td3 = document.createElement('td');
      const tdNode3 = document.createTextNode(avg.toFixed(1) + '%');
      td3.appendChild(tdNode3);
        
      const tr = document.createElement('tr');
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      
      const element = document.getElementById("body");
      element.appendChild(tr);
      state = eachData['state'];
      count = 1;
      stateTotal = 0;
    }  
  };

  /*
  const state = 'CA';
  const count = 2;
  const avg = 20;
  const td1 = document.createElement('td');
  const tdNode1 = document.createTextNode(state);
  td1.appendChild(tdNode1);
          
          const td2 = document.createElement('td');
		  const tdNode2 = document.createTextNode(count);
          td2.appendChild(tdNode2);
          
          const td3 = document.createElement('td');
		  const tdNode3 = document.createTextNode(avg);
          td3.appendChild(tdNode3);
			
          const tr = document.createElement('tr');
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          
          const element = document.getElementById("body");
          element.appendChild(tr);
        */