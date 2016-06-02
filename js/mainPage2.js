var count  = function(cb) {
	$.ajax({
		type: 'get',
		// url: 'http://10.124.18.115:8080/apis/v1/article/',
		url: 'http://www.uberqd.com/apis/v1/article/',
		crossDomain: true,
		dataType: 'json',
		success: function(data){
			cb(data.meta.count);
		},
		error: function (err) {
			console.log(222);
		},
	});
}; 
var page = function() {
	count(function (cou){
		var size = 1;
		var number = Math.ceil(cou/size);
		console.log("The number of page is"+number);
		for(var i = 1; i<= number; i++) {
			$("#pp").append("<li class='index'><a href='#'>"+i+"</a></li>");
		}
	});
};
var request = function (rangeStart, rangeEnd) {
	$.ajax({
		type: "get",
		url: 'http://www.uberqd.com/apis/v1/article/?rangeStart='+rangeStart+'&rangeEnd='+rangeEnd,
		crossDomain: true,
		dataType: 'json',
		success: function(data){
			console.log(data);
			var art = data.data.map((d) => {
				return `<li class="list"><img src="${d.briefImage}" alt="Image"/><div class="info"><a href=""><bold>${d.title}</bold></a>
				<ul><li>${d.meta.comment} Comments</li><li>${d.meta.view} views</li><li>${d.meta.like} likes<br><button>EDIT DETAIL</button><button>DETELE</button><button>PUBLISH</button></div><li>`;
			}).join('');
			$("#listAll").html(art);
		},
		error: function (err) {
			console.log(222);
		},
	})
};

// var show = function(){
// 	var t = $(this).text();
// 	console.log(t);
// 	var s = (t-1)*5;
// 	var e = t*5;
// 	request(0, 3);
// };



$(document).ready(function(){
	page();
	request(0, 5);

	$("#pp").click(function(e) {
		var t = $(e.target).text();
		console.log(t);
		var s = (t-1)*1;
		var e = t*1;
		console.log(s);
		console.log(e);
		request(s, e);
	});
});