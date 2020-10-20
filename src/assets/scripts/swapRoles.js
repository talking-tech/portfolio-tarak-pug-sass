import $ from 'jquery';

var masterroles = ["Business Analyst", "Marketing Stratergist", "Team Player", "Web Developer"]; 
var count = 0;
function swapRoles(){
    $('#roles').fadeOut("slow", function(){
        $(this).html(masterroles[count++ % masterroles.length]) .fadeIn("slow");
    });
};

export default swapRoles;