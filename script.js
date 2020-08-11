$("#currentDay").text(moment().format("dddd MMMM Do"));

$(".saveBtn").on("click", function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, value);
});

function updateHour() {
  var currentHour = moment().hour();

  $(".time-block").each(function () {
    var hourBlock = parseInt($(this).attr("id").split("h")[0]);

    if (hourBlock < currentHour) {
      $(this).addClass("past");
    } else if (hourBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

updateHour();

$("#9hr .description").val(localStorage.getItem("9hr"));
$("#10hr .description").val(localStorage.getItem("10hr"));
$("#11hr .description").val(localStorage.getItem("11hr"));
$("#12hr .description").val(localStorage.getItem("12hr"));
$("#13hr .description").val(localStorage.getItem("13hr"));
$("#14hr .description").val(localStorage.getItem("14hr"));
$("#15hr .description").val(localStorage.getItem("15hr"));
$("#16hr .description").val(localStorage.getItem("16hr"));
$("#17hr .description").val(localStorage.getItem("17hr"));
