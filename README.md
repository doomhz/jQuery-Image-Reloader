# jQuery Image Reloader

Forces the browser to retry loading the broken images. A decent solution for images stored in a cloud (i.e Amazon S3).

### Why and when to use it?

This plugin is effective when you load images from a cloud (i.e. Amazon S3) and the CDN has a delay until the image is accessible. The browser will display a broken image icon instead and won't retry to reload it. jQuery Image Reloader will take care of that.

### Plugin code

The only code you need to activate the plugin is this:

```javascript
$(".slow-images").imageReloader();
```

### Options:

loadingClass: "loading-image"
  The plugin hides the original image until it's successfully loaded and replaces it with a DIV that will take this CSS class.
reloadTime: 1500
  Set up the time between the reload attempts.
maxTries: 10
  Set up how many reload attempts should be made until the broken icon is displayed.