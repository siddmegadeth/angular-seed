(function(window,undefined)
{
 
  var isAuto = false;
  var devType=undefined;
  function winDevice(appName,inject)
  {
     try{
      if(window.angular)
      {
      isAuto=true;
      if(document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1 || window.cordova)
      {
        console.log("Cordova App");
        devType=true;
        document.addEventListener("deviceready",function()
        {
          console.log("Bootstrapping APP On Cordova : "+appName);
          angular.bootstrap(document,[appName]);
          log("Device Ready");
        },false);
      }
      else
      {
      //  console.log("Running In A Browser");
        devType=false;
        document.addEventListener("DOMContentLoaded",function()
        {
          console.log("Bootstrapping APP On Browser : "+appName);
          angular.bootstrap(document,[appName]);
          log("Device Ready");
        });
      }
      
  
    var infoType  = {};
    this.enable = function(flag)
    {
      infoType.log = flag;
      if(flag)
      {
        log = console.log.bind(console);
        error = console.error.bind(console);
        warn = console.warn.bind(console);
      }
      if(!flag)
      {
        log = function(){};
        error = function(){};
        warn = function(){};
        console.log = function(){};
        console.error = function(){};
        console.warn = function(){};
      }
      return this;
    }
    this.device = function()
    {
      if(window.angular)
      {
       console.log("App Init with Dependency "+appName);
       return angular.module(appName,inject);
       return this;
      }
      else
      {
        console.error("Angularjs Not Found");
      }
    };
    this.info = function()
    {
      if(devType)
      {
        log("Emulation For Cordova : true");
      }
      else
      {
        log("Emulation For Browser : true");
      }
      log("Logging : "+infoType.log);
      return this;
    }
    
  }
  else
  {
    console.error("Angularjs Not Found");
  }
  }
  catch(e)
  {
    //Error
    return e;
  }
 }
  window.winDevice = winDevice;
})(window)