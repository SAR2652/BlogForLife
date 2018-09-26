function process()
{
	document.getElementById("demo").innerHTML = "Hello World!";
	for(var i = 0; i < 10; i++)
	{
		document.write(i);
		document.write("<br>");
	}
	var x = 100;
	var y = 300;
	document.write("Adding x = 100 and y = 300.....<br>we get " + (x + y) + "<br>");
	document.write("Subtracting x = 100 and y = 300.....<br>" + (x - y) + "<br>");
	document.write("Comparing x = 100 and y = 300.....<br>");
	if(x > y)
	{
		document.write("x is greater<br>");
	}
	else
	{
		document.write("y is greater<br>");
	}
	var a = [11, 66, 2, 35, 10, 63, 79, 23, 60, 6];
	document.write("Original array :<br>");
	for(var i = 0; i < 10; i++)
	{
		document.write(a[i] + " ");
	}
	document.write("<br>Sorted array :<br>");
	for(var i = 0; i < 10; i++)
	{
		for(var j = 0; j < 9 - i; j++)
		{
			if(a[j] > a[j + 1])
			{
				var temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
	}
	for(var i = 0; i < 10; i++)
	{
		document.write(a[i] + " ");
	}
	var d = new Date();
	document.write("<br>Today's date is " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getYear() + "<br>");
	window.alert("performed operations successfully");
}