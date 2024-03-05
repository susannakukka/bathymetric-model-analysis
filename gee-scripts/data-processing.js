// Function to mask clouds
function maskS2clouds(image) {
  var qa = image.select("QA60");

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa
    .bitwiseAnd(cloudBitMask)
    .eq(0)
    .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image
    .updateMask(mask)
    .divide(10000)
    .copyProperties(image, ["system:time_start"]);
}

// Get Sentinel-2 imagery and apply cloud mask
var dataset = ee
  .ImageCollection(imageCollection)
  .filterDate("2022-07-01", "2022-07-14")
  // Pre-filter to get less cloudy granules.
  .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE", 10))
  .map(maskS2clouds);

// Get timestamp
var date1 = dataset.sort("system:time_start", true).first().date();
var date2 = dataset.sort("system:time_start", false).first().date();
print(date1, date2);

// Get the number of images in the collection
var count = dataset.size();
print("Count: ", count);

// Visualize images by RGB
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ["B4", "B3", "B2"],
};

// Zoom to the Utsjoki study site
Map.setCenter(27.0006, 69.925, 15);
//Map.addLayer(dataset.mean(), visualization, 'Sentinel-2');

// Add AOIs to the map
Map.addLayer(nuorgam_alue);
Map.addLayer(valle_alue);
// Merge collection's geometries according to AOIs
var valle_aoi = ee.FeatureCollection(valle_alue).geometry();
var nuorgam_aoi = ee.FeatureCollection(nuorgam_alue).geometry();

// Print Utsjoki (Valle)
var valle_sentinel = dataset.filter(ee.Filter.bounds(valle_aoi));
var valle_sentinel_median = valle_sentinel.median();
var valle_sentinel_clip = valle_sentinel_median.clip(valle_aoi);
Map.addLayer(valle_sentinel_clip, visualization, "RGB_valle");

// Print Nuorgam
var nuorgam_sentinel = dataset.filter(ee.Filter.bounds(nuorgam_alue));
var nuorgam_sentinel_median = nuorgam_sentinel.median();
var nuorgam_sentinel_clip = nuorgam_sentinel_median.clip(nuorgam_aoi);
Map.addLayer(nuorgam_sentinel_clip, visualization, "RGB_nuorgam");

// Get info of map projection for export
var projection_n = nuorgam_sentinel_clip.projection().getInfo();
var projection_v = valle_sentinel_clip.projection().getInfo();

// EXPORT TIFF UTSJOKI
//Export.image.toDrive({
//image: valle_sentinel_clip,
//description: 'valle_sentinel-2',
//crs: projection.crs,
//crsTransform: projection_v.transform,
//region: valle_aoi
//});

// EXPORT TIFF NUORGAM
//Export.image.toDrive({
//image: nuorgam_sentinel_clip,
//description: 'nuorgam_sentinel-2',
//crs: projection.crs,
//crsTransform: projection_n.transform,
//region: nuorgam_aoi
//});
