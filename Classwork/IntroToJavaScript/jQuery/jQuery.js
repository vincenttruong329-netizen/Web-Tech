
// jQuery Event Methods
    // click() method: attaches an event handler functino to an HTML element 
    $(document).ready(function(){
    $("p").click(function(){
            $(this).hide();
        });
    });
    // dblclick() method: attaches an event handler function to an HTML element
    $(document).ready(function(){
        $("p").dblclick(function(){
                $(this).hide();
        });
    });
    // mouseenter() method: attaches an event handler function to an HTML element
    $(document).ready(function(){
        $("#p1").mouseenter(function(){
                alert("You entered p1!");
        });
    });
    // mouseleave() method: attaches an event handler function to an HTML element
    $(document).ready(function(){
        $("#p1").mouseleave(function(){
            alert("Bye! You now leave p1!");
        });
    });
    // hover() method: takes two functions and is a combination of the mouseenter() and mouseleave() methods
    $(document).ready(function(){
        $("#p1").hover(function(){
            alert("You entered p1!");
        },
        function(){
                alert("Bye! You now leave p1!");
        }); 
    });
    // focus() method: attaches an event handler function to an HTML form field
        // The focus() method attaches an event handler function to an HTML form field.
    
    // blur() method: attaches an event handler function to an HTML form field
    $(document).ready(function(){
        $("input").focus(function(){
            $(this).css("background-color", "yellow");
        });
        $("input").blur(function(){
            $(this).css("background-color", "green");
        });
    });
    // on() method: attaches one or more event handlers for the selected method
        // attaching a click event to a <p> element
        $(document).ready(function(){
            $("p").on("click", function(){
                    $(this).hide();
            });
        });
        // attaching multiple event handlers to a <p> element
        $(document).ready(function(){
                $("p").on({
                        mouseenter: function(){
                            $(this).css("background-color", "lightgray");
                        },  
                        mouseleave: function(){
                            $(this).css("background-color", "lightblue");
                        }, 
                        click: function(){
                            $(this).css("background-color", "yellow");
                        }  
                });
        });
    