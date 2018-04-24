(function()
	{
		//ALl Object are privately declared but called and exported using module.exports
		require("./init/index"); // Init Modules/Middleware/Objects In This Only
		require("./database/index"); // Init Modules/Databse/Objects In This Only
		require("./api-route/index"); // Init Modules/Databse/Objects In This Only

		
		http.createServer(app).listen(app.get("PORT"),function(req,resp)
		{
			log("Garbage Spot Server Started "+app.get("PORT"));
			
		});
		 //Run Server
	})()