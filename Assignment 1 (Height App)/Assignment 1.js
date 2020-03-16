// This file contains a class for you to extend with your solution.
 
function MeasurementAppController()
{
    var self = this;

    // The CameraVideoPageController is a class that controls the camera 
    // video page.  This class provides a some useful methods you will
    // need to call:
    //     displayMessage(message):
    //         Causes a short message string to be displayed on the
    //         page for a brief period.  Useful for showing quick
    //         notifications to the user.  message is a plain string.
    //     setHeadsUpDisplayHTML(html):
    //         This will set or update the heads-up-display with the
    //         text given in the html argument.  Usually this should 
    //         just be a string with text and line breaks (<br />).
    //     addButtons(buttons):
    //         You give an array of objects describing buttons and 
    //         the page controller will create and style these for you.
    //         Button description objects should look like the following
    //         example:
    //          {
    //             title:   "Set cam height",   
    //             onClick: "measurementAppController.setCamHeight()",
    //             id:      "set-cam-height"  (optional)
    //          }
    //         Note you will need to have 'measurementAppController.'
    //         if you want the button to call back to a public method
    //         defined in your class when it is clicked.
    // This variable will be set in the cameraVideoPageInitialised()
    // method below which is automatically called by the app when it
    // as been loaded and is ready.
    var cameraVideoPageController = null;
	var limit = 10;
	var count = 0;
    // [Your attributes...]
    
    // This method will be called with the CameraVideoPageController
    // as an argument when the page loads and is ready.
    this.cameraVideoPageInitialised = function(controller)
    {
		cameraVideoPageController = controller;                                                                                                                                   
		controller.addButtons([{title: "Set Cam height", onClick: "measurementAppController.setCamHeight()", id: "set-cam-height"},
							   {title: "Set Base", onClick: "measurementAppController.setStartAngleValue()", id: "set-Base"},
							   {title: "Set Apex", onClick: "measurementAppController.setEndAngleValue()", id: "set-Apex"}])
		
		alert("Please follow the instructions below:\n1) Press Set cam height Button!\n2) Aim at OBJECT BASE and Press the Set Base Button!\n3) Aim at TOP of the object (Apex) and Press the Set Apex Button") 
		
				
		this.setCamHeight = function()
		{
		    var camheight = prompt("Please Enter Camera Height in cm");
			
			while ((camheight < 0) || (camheight != camheight/1))
			{ 
				camheight = prompt("Please re-Enter Camera Height in cm");
			}
			controller.displayMessage("Thanks for entering the height = " + camheight + " cm");
			return controller.camheight = camheight;
		}
		
		
	       if (window.DeviceMotionEvent)
              {
               $('.accelerometerError').hide();
               window.addEventListener("devicemotion", deviceMotionUpdate);
              }
           else
              {
                 $('.accelerometerValue').hide();
              }

	// To use accelerometer readings to find pitch and roll	
	function deviceMotionUpdate(e)
      {
        var aX = e.accelerationIncludingGravity.x;
        var aY = e.accelerationIncludingGravity.y;
        var aZ = e.accelerationIncludingGravity.z;
    
        var gX = aX / 9.8;
        var gY = aY / 9.8;
        var gZ = aZ / 9.8;
		
		var degtorad = Math.PI / 180;    // Convert from degree to radian 
		var radtodeg = 180 / Math.PI;    // Convert from radian to degree
        var pitch = ((Math.atan(-gY / gZ))*radtodeg).toFixed(1);
        var roll = ((Math.atan(gX / Math.sqrt(Math.pow(gY,2) + Math.pow(gZ,2))))*radtodeg).toFixed(1);
		
		
	
		   if(count < limit)
		{
			  count = count +1;
	    } 
		    else
		     {
			count = 0;
		//displays on the HUD the values of respective areas
			controller.setHeadsUpDisplayHTML("Pitch = " + pitch + "\xB0" + '</br>' + "Distance = " + controller.distance + " cm " +'</br>'+ " Base Angle = " + controller.pitch1 +"\xB0"+'</br>' + " Apex Angle = "+ controller.pitch2 + "\xB0" +'</br>'+ " Object Height = " + controller.objectheight + " cm ")
			return controller.pitch = pitch;
		     }
	   }
		
		//sets the angle for base of object and calculates the distance to the object
        this.setStartAngleValue = function()
	   {
			var self = this
		    var degtorad = Math.PI / 180;
		    var pitch1 = controller.pitch;
			controller.pitch1=pitch1
		    var camheight = controller.camheight;
		       controller.displayMessage("The first angle (for Base) = " + pitch1 + "\xB0");
		    var angle = Math.tan((90 - Math.abs(pitch1))*degtorad);
		    var distance = camheight / angle;
			controller.distance= distance
		       controller.displayMessage("The object is " + distancem + " cm from the phone ");
			
			 
	   }
		
	   //sets the angle for the apex of object and calculates the final height of the object
	    this.setEndAngleValue = function()
	   {
			
		   var degtorad = Math.PI / 180;
		   var pitch2 = controller.pitch;
		   var camheight = controller.camheight;
		      controller.displayMessage("The second angle (for Apex) is = " + pitch2 + "\xB0");
		   var angle2 = Math.tan((90 - Math.abs(pitch2))*degtorad);
		  
		    if (pitch2 > 0)
		   {
		    	var objHeight = controller.distance*angle2 + camheight;
		   }
		    else
		   {
		  	    var objHeight = camheight - controller.distance*angle2;
		   }
			
			var objectheight = objHeight
		    controller.objectheight=objectheight
			controller.pitch2=pitch2
		    controller.displayMessage("The final height of the object is " + objHeight + " cm ")
			
		  
	    }
		    
	 
	}
}
