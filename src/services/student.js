var model = {};

var students = [
    {id:1, name:'Vivek', parent:'fsdf', class:'11', subject:'physics', teacher:'hello', city:'delhi', country:'india'},
    {id:1, name:'dfsdfs', parent:'dfsdfs', class:'12', subject:'fgdfg', teacher:'yuy', city:'bensdf', country:'india'},
	{id:1, name:'dfs', parent:'dfsdfw', class:'10', subject:'dfsdfs', teacher:'erwer', city:'deldqwuehi', country:'india'},
    {id:1, name:'Vivdfsdfek', parent:'vbcvb', class:'8', subject:'dsfsdf', teacher:'hellcvsvco', city:'desdwiuefulhi', country:'india'},
    
];

model.getRecords = function(){
	return students;
}

model.getRecordById = function (id) {
	for (var i = 0; i < students.length; i++) {
	  if (id == students[i].id) {
		return students[i];
	  }
	}
	return {};
  };

model.addRecord = function(record){
	return students.push(record);
}

model.deleteRecord = function(id){
	let temp = [];
	for (var i = 0; i < students.length; i++) {
		if(id != students[i].id){
			temp.push(students[i]);
		}
	}
	students = temp;
}

// model.updateRecord = function(record){
// 	let student = record;
// 	for (var i = 0; i < students.length; i++) {
// 		if(student.id == students[i].id){
// 			students[i] = student;
// 		}
// 	}
// }

model.updateRecord = function (record) {
	for (var i = 0; i < students.length; i++) {
	  if (record.id == students[i].id) {
		students[i] = record;
	  }
	}
  };
module.exports = model;