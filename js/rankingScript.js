// JavaScript Document

$(document).ready(function(){
/*----Function to reload the page----*/
$("#reset").click(function(){
	window.location.href="rankingTool.html";
	});
});
var count=0; /*initialising count*/
/*----Funtion to rank images----*/
function setRank(id){
	//checking the max count of 3(Only top 3 ranking possible) and
	// whether the image is aready ranked(If ranked once skip the loop).
	if((count == 0 || count ==  1 || count == 2) && ($('#'+id).text().trim() == "")){
		//setting the style of border after ranking
		$("#"+id).css({"border-color": "#397dab", "border-width":"3px", "border-style":"solid"});
	  var number="<div style='border-radius:50%;width:30px;height:30px;float:left;padding:5px auto;background-color:#ffffff;text-align:center;color:#ffffff; border:1px solid #397dab;margin-left: 130px;margin-top: -13px;'><div style='border-radius:50%;width:24px;height:24px;background-color:#397dab;float:left;;margin-left: 2px;margin-top: 2px;'>"
	  +(count+1)+"</div></div>";
	  //Inserting count to the image with its styling.
	  $("#"+id).prepend(number);
	  //incrementing count
	  count++;
		}
}