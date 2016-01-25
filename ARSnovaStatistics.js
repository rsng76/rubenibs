var getStatistics = function() {

	
	var xhr = new XMLHttpRequest();
	xhr.open("GET","https://arsnova.eu/api/statistics/", false);
	xhr.send();
	
	var jsonObj = JSON.parse(xhr.responseText);
	//var keys = Object.keys(jsonObj);

	//var values = new Array();
	//for (var i = 0; i < keys.length; i++) { values.push(jsonObj[keys[i]]); }

	updateDiagramQuestion( jsonObj );
	updateDiagramAnswers( jsonObj )
	updateDiagramSession( jsonObj );
	updateDiagramUser( jsonObj );

	setTimeout(getStatistics, 30000);
};

var updateDiagramQuestion = function( jsonObj ) {

	var diagramWidth = $('#appDiv').width()*0.48;
	$("#questionChart").attr('width', diagramWidth);
	$("#questionChart").attr('height', '500');
	
	var ctx = $("#questionChart").get(0).getContext("2d");

	var data = {
		labels: ["questions", "lectureQuestions", "preparationQuestions","interposedQuestions","conceptQuestions"],
		datasets: [
			{
				label: "ArsNova Statistics",
				fillColor: "rgba(255,255,0,0.8)",
				strokeColor: "rgba(220,220,220,1)",
				highlightFill: "rgba(255,255,0,0.4)",
				highlightStroke: "rgba(22,22,22,1)",
			data: [jsonObj["questions"], jsonObj["lectureQuestions"], jsonObj["preparationQuestions"],jsonObj["interposedQuestions"], jsonObj["conceptQuestions"]]
			}
		]
	};	

	var myBarChart = new Chart(ctx).Bar(data);
};

var updateDiagramAnswers = function( jsonObj ) {

	var diagramWidth = $('#appDiv').width()*0.48;
	$("#answerChart").attr('width', diagramWidth);
	$("#answerChart").attr('height', '500');
	
	var ctx = $("#answerChart").get(0).getContext("2d");

	var data = {
		labels: ["answers"],
		datasets: [
			{
				label: "ArsNova Statistics",
				fillColor: "rgba(255,255,0,0.8)",
				strokeColor: "rgba(220,220,220,1)",
				highlightFill: "rgba(255,255,0,0.4)",
				highlightStroke: "rgba(22,22,22,1)",
			data: [jsonObj["answers"]]
			}
		]
	};	

	var myBarChart = new Chart(ctx).Bar(data);
};

var updateDiagramSession = function( jsonObj ) {
	//SessionChart
	
	var diagramWidth = $('#appDiv').width()*0.48;
	$("#sessionChart").attr('width', diagramWidth);
	$("#sessionChart").attr('height', '500');
	
	var ctx = $("#sessionChart").get(0).getContext("2d");

	var data = {
		labels: ["sessions", "openSessions", "closedSessions", "creators"],
		datasets: [
			{
				label: "ArsNova Statistics",
				fillColor: "rgba(0,0,139,1)",
				strokeColor: "rgba(220,220,220,0.8)",
				highlightFill: "rgba(0,0,139,0.4)",
				highlightStroke: "rgba(22,22,22,1)",
				data: [jsonObj["sessions"], jsonObj["openSessions"], jsonObj["closedSessions"], jsonObj["creators"]]
			}
		]
	};	

	var myBarChart = new Chart(ctx).Bar(data);
};
var updateDiagramUser = function( jsonObj ) {
	//SessionChart
	
	var diagramWidth = $('#appDiv').width()*0.48;
	$("#userChart").attr('width', diagramWidth);
	$("#userChart").attr('height', '500');
	
	var ctx = $("#userChart").get(0).getContext("2d");

	var data = {
		labels: ["activeUsers","loggedinUsers"],
		datasets: [
			{
				label: "ArsNova Statistics",
				fillColor: "rgba(0,255,0,0.8)",
				strokeColor: "rgba(220,220,220,1)",
				highlightFill: "rgba(0,255,0,0.4)",
				highlightStroke: "rgba(22,22,22,1)",
				data: [jsonObj["activeUsers"], jsonObj["loggedinUsers"]]
			}
		]
	};	

	var myBarChart = new Chart(ctx).Bar(data);
};


$(document).ready(function() { getStatistics(); });