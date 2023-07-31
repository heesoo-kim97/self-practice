var data = [
    {
        "DEPT_KOR_NM": "책임택배",
        "LVL": 1,
        "MNG_EMP_NO": "1023511",
        "UPPER_DEPT_NM": null,
        "UPPER_DEPT_CD": null,
        "DEPT_RNK": "0000",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": "나용길",
        "DEPT_CD": "5001"
    },
    {
        "DEPT_KOR_NM": "대구책임택배",
        "INDV_PHOT_FILE": null,
        "LVL": 2,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "책임택배",
        "UPPER_DEPT_CD": "5001",
        "DEPT_RNK": "5000",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": null,
        "DEPT_CD": "5000"
    },
    {
        "DEPT_KOR_NM": "서울책임택배",
        "INDV_PHOT_FILE": null,
        "LVL": 2,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "책임택배",
        "UPPER_DEPT_CD": "5001",
        "DEPT_RNK": "5200",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": null,
        "DEPT_CD": "5200"
    },
    {
        "DEPT_KOR_NM": "대구/경북",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "1",
        "MEMBER_COUNT": 13,
        "MNG_EMP_NM": null,
        "DEPT_CD": "10"
    },
    {
        "DEPT_KOR_NM": "부산/경남",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "14",
        "MEMBER_COUNT": 21,
        "MNG_EMP_NM": null,
        "DEPT_CD": "20"
    },
    {
        "DEPT_KOR_NM": "광주/전라",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "35",
        "MEMBER_COUNT": 14,
        "MNG_EMP_NM": null,
        "DEPT_CD": "21"
    },
    {
        "DEPT_KOR_NM": "대전/충청",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "49",
        "MEMBER_COUNT": 7,
        "MNG_EMP_NM": null,
        "DEPT_CD": "22"
    },
    {
        "DEPT_KOR_NM": "서울/경기북부",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "56",
        "MEMBER_COUNT": 13,
        "MNG_EMP_NM": null,
        "DEPT_CD": "23"
    },
    {
        "DEPT_KOR_NM": "경기남서부/충남",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "69",
        "MEMBER_COUNT": 14,
        "MNG_EMP_NM": null,
        "DEPT_CD": "24"
    },
    {
        "DEPT_KOR_NM": "경기서북부/인천",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "83",
        "MEMBER_COUNT": 12,
        "MNG_EMP_NM": null,
        "DEPT_CD": "25"
    },
    {
        "DEPT_KOR_NM": "경기동부/강원",
        "INDV_PHOT_FILE": null,
        "LVL": 3,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "95",
        "MEMBER_COUNT": 7,
        "MNG_EMP_NM": null,
        "DEPT_CD": "26"
    }
];


var result = [
    {
        "LVL": 1,
        "DEPT_KOR_NM": "책임택배",
        "INDV_PHOT_FILE": "1023511.JPG",
        "MNG_EMP_NO": "1023511",
        "UPPER_DEPT_NM": null,
        "UPPER_DEPT_CD": null,
        "DEPT_RNK": "0000",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": "나용길",
        "DEPT_CD": "5001" //
    },
    {
        "LVL": 2,
        "DEPT_KOR_NM": "대구책임택배",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "책임택배",
        "UPPER_DEPT_CD": "5001", //
        "DEPT_RNK": "5000",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": null,
        "DEPT_CD": "5000" //
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "대구/경북",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "1",
        "MEMBER_COUNT": 13,
        "MNG_EMP_NM": null,
        "DEPT_CD": "10"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "부산/경남",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "14",
        "MEMBER_COUNT": 21,
        "MNG_EMP_NM": null,
        "DEPT_CD": "20"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "광주/전라",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "35",
        "MEMBER_COUNT": 14,
        "MNG_EMP_NM": null,
        "DEPT_CD": "21"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "대전/충청",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "대구책임택배",
        "UPPER_DEPT_CD": "5000",
        "DEPT_RNK": "49",
        "MEMBER_COUNT": 7,
        "MNG_EMP_NM": null,
        "DEPT_CD": "22"
    },
    {
        "LVL": 2,
        "DEPT_KOR_NM": "서울책임택배",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "책임택배",
        "UPPER_DEPT_CD": "5001",
        "DEPT_RNK": "5200",
        "MEMBER_COUNT": 0,
        "MNG_EMP_NM": null,
        "DEPT_CD": "5200"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "서울/경기북부",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "56",
        "MEMBER_COUNT": 13,
        "MNG_EMP_NM": null,
        "DEPT_CD": "23"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "경기남서부/충남",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "69",
        "MEMBER_COUNT": 14,
        "MNG_EMP_NM": null,
        "DEPT_CD": "24"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "경기서북부/인천",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "83",
        "MEMBER_COUNT": 12,
        "MNG_EMP_NM": null,
        "DEPT_CD": "25"
    },
    {
        "LVL": 3,
        "DEPT_KOR_NM": "경기동부/강원",
        "INDV_PHOT_FILE": null,
        "MNG_EMP_NO": null,
        "UPPER_DEPT_NM": "서울책임택배",
        "UPPER_DEPT_CD": "5200",
        "DEPT_RNK": "95",
        "MEMBER_COUNT": 7,
        "MNG_EMP_NM": null,
        "DEPT_CD": "26"
    }
];


// Step 1: Hard-coding to re-arrange the data to result

var initial = data;

function reArrange(param) {
    var firstData = [];
    var secondData = [];
    var obj;
    for (var i = 0; i < param.length; i++) {
        obj = param[i];
        if(obj["LVL"] === 1) {
            firstData.push(obj);
        } else if (obj["LVL"] === 2 && obj["DEPT_CD"] === "5000") {
            firstData.push(obj);
        } else if (obj["LVL"] === 3 && obj["UPPER_DEPT_CD"] === "5000") {
            firstData.push(obj);
        } else if (obj["LVL"] === 2 && obj["DEPT_CD"] === "5200") {
            secondData.push(obj);
        } else if (obj["LVL"] === 3 && obj["UPPER_DEPT_CD"] === "5200") {
            secondData.push(obj);
        } 
    }
    var combinedData = firstData.concat(secondData);
    return combinedData;
}

var final = reArrange(initial);

console.log("하드 코딩해서 바꾼 데이터: ", final);


function isTrue(param) {
    if (param === result) {
        return true;
    } else {
        return false;
    }
}

// var compare = isTrue(final);


// We want to group based on different levels

function myWay (param) {
    var boss = param.filter(item => item.LVL === 1);
    var id = [];
   var test = param.filter(item => item.DEPT_CD);
    console.log("test", test);
    var children = param.filter(item => item.UPPER_DEPT_CD === param.filter(item => item.DEPT_CD));
    console.log(boss);
    console.log(children);
  
}


function bix5Way (param) {
    var obj;
    for (var i = 0; i < param.length; i++) {
        obj = param[i];
        var deptCD = obj["DEPT_CD"];
        var level = obj["LVL"];
        var children = param.filter(item => item.UPPER_DEPT_CD === deptCD); // filter and group data that contain the same upper_dept_cd
        console.log("children", children);
        if (children.length > 0) {
            children.reduce((acc, child) => {   // acc - initialValue, child - currentValue
                console.log("initial", acc);
                console.log("current", child);
                var withChildren = {"LVL": level, child}; // object created with objects that contain children
                console.log("withChildren", withChildren);
                // if (obj[])
            })
        }
    }

}

function whereTo(param) {
    
}
/*
item.UPPER_DEPT_CD === parentCD

Find and group the children with the corresponding parent 
- filter method is used to iterate through each data to find the children that has the 
same CD as the object we are currently cycling through on 

We want to check if there is further children out of the groups that contain children

reduce method to find the next level of children

concat and use map method as well
*/

var exampleData = [1,2,3,4,5,6];
// var newResult = exampleData.forEach((value, index, arr) => {console.log(value, index, arr); return value * 2});
// console.log(newResult);

