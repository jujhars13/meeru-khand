'use strict'
/**
* meerukhand.js
* function to output meerukhand swars for a given scale
* 2016-03-31 jujhar@jujhar.com
*/

var surs=[['S','R','G'],['R','G','M'],['G','M','P'],['M','P','D'],['P','D','N'],['D','N','S^']];

var pattern=[[1,2,3],[2,1,3],[1,3,2],[3,1,2],[2,3,1],[3,2,1]];

var overallOutput=[];
surs.map(function(surSet){
	pattern.forEach(function(el,index,arr){
		let output=el.map(function(e){
			return surSet[e-1];
		});
		overallOutput.push(output);
	});
	overallOutput.push(['-']);
});
console.log(overallOutput);
