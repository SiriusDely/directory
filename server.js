var application_root = __dirname,
  express = require('express'),
  path = require( 'path' ), //Utilities for dealing with file paths
  wines = require('./routes/employee');
 
var app = express();

// Configure server
app.configure( function() {
  //parses request body and populates request.body
  app.use( express.bodyParser() );

  //checks request.body for HTTP method overrides
  app.use( express.methodOverride() );

  //perform route lookup based on url and HTTP method
  app.use( app.router );

  //Where to serve static content
  app.use( express.static( path.join( application_root, 'dist') ) );

  //Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/employees/:id/reports', wines.findByManager);
app.get('/employees/:id', wines.findById);
app.get('/employees', wines.findAll);

//Start server
var port = process.env.PORT || 3000;
app.listen( port, function() {
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
