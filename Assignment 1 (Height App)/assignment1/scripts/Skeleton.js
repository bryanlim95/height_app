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

    // [Your attributes...]
    
    // This method will be called with the CameraVideoPageController
    // as an argument when the page loads and is ready.
    this.cameraVideoPageInitialised = function(controller)
    {
        cameraVideoPageController = controller;
        
        // [Your code...]
    }
    
    // [Your methods...]
}
