mui.ready(function () {
	mui.init({})
	mui.plusReady(function () {
	    app.init()
		mui(".header").on("tap", ".menu", function () {
			app.showMenu()
		})
		mui(".footer").on("tap", "button", function () {
			var bc = new plus.barcode.Barcode('scan')
			bc.start()
		})
	})
})