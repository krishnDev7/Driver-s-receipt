
function tryJS(event) {
  event.preventDefault();
  let form = document.getElementById("form");
  let formData = new FormData(form);
  let date = new Date(formData.get("date"));
  var employeeName = formData.get("employee"),
    driverName = formData.get("driver"),
    url = `http://127.0.0.1:5500//demo.html?employeeName=${encodeURIComponent(
      employeeName
    )}&driverName=${encodeURIComponent(driverName)}&date=${encodeURIComponent(
      date
    )}`;
  // console.log(employeeName, driverName, date);

  document.location.href = url;
}
