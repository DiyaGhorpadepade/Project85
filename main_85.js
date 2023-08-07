menu_list_array = [ "Veg Margherita Pizza","Veg Loaded Pizza","Tomato Pizza","Cheese n Tomato Pizza","Onion Pizza","Capsicum Pizza","Paneer & Onion Pizza"]                                     ]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_ menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_ysuggestion").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push() (item);
}

