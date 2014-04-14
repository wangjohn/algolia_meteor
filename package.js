Package.describe({
  summary: "Algolia Search for Meteor."
});

Package.on_use(function (api) {
  api.add_files('algoliasearch.js', 'client');
  api.export('AlgoliaSearch', 'client');
});
