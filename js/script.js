var create_button;
var break_line;
var create_box;
var list_elements;
var list_element;
var current_list_element;
var this_list_element;
var add_list_element;
var update_list_elements;
var ordered_list;
var rename;
var update_box;
var update_button; 
var list_of_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine','Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed ', 'Indigo ', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen' ];

var current_element;


function log(message){
    console.log(message);
    confirm(message);
}

function random_color(){
        return list_of_colors[
            Math.floor(
                Math.random()*list_of_colors.length)];

}

function attach_element(element_name, element_id){
    
    current_element = document.createElement(element_name);
        document.getElementById(element_id).appendChild(current_element);
}



function update_list_elements(){
    list_elements = document.getElementById('ordered_list').children;
}




document.addEventListener('DOMContentLoaded', function(){
        
        
        attach_element('ol', 'content_container');
        current_element.id = 'ordered_list';

        
       create_button = document.getElementById('create');
         create_box = document.getElementById('create_box');

         create_button.textContent = 'Click to Add a Color';
         create_button.addEventListener('click',function() {
             
               attach_element('li', 'ordered_list');
               
               current_element.textContent = String(random_color());
               current_element.style.backgroundColor = current_element.textContent;
            
            update_list_elements();
               
             
         });
         
        update_button = document.getElementById('update');
        update_box = document.getElementById('update_box');
         
    update_button.addEventListener('click', function(){

            attach_element('li', 'ordered_list');
            
            current_element.textContent = update_box.value;
            current_element.style.backgroundColor = update_box.value;
           

           current_element.addEventListener('click', function(){
                    log(this);
                
           });


        });
        
         
    
});    
