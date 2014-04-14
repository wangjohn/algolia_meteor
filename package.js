Package.describe({
  summary: "Algolia Search for Meteor."
});

Package.on_use(function (api) {

  // ensure backwards compatibility with Meteor pre-0.6.5
  if (api.export) api.export('ALGOLIA_METEOR');

  api.add_files('algoliasearch.js', 'client');
});
