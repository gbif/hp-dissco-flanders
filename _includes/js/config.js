var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/specimen/search'
    },
    literatureSearch: {
    }
  },
  literature: {
    rootFilter: {
      predicate: {
        type: 'in',
        key: 'gbifDatasetKey',
        values: ['b740eaa0-0679-41dc-acb7-990d562dfa37', '68c91b9a-2322-4f60-8d58-2c696a73a11c', 'b24d3bd0-e6d9-11dc-8b77-b8a03c50a862', 'ce416850-8934-11dc-9962-b8a03c50a862', '0310b080-ec4b-11dc-b73e-b8a03c50a862', '67caab70-ec4b-11dc-b73f-b8a03c50a862']
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  },
  occurrence: {
    mapSettings: {
      lat: 0,
      lng: 0,
      zoom: 1
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'in', key: 'datasetKey', values: ['b740eaa0-0679-41dc-acb7-990d562dfa37', '68c91b9a-2322-4f60-8d58-2c696a73a11c', 'b24d3bd0-e6d9-11dc-8b77-b8a03c50a862', 'ce416850-8934-11dc-9962-b8a03c50a862', '0310b080-ec4b-11dc-b73e-b8a03c50a862', '67caab70-ec4b-11dc-b73f-b8a03c50a862'] },
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
if (pageLang === 'nl') {
  siteConfig.routes.literatureSearch.route = '/literatuur/zoekopdracht';
  siteConfig.routes.occurrenceSearch.route = '/exemplaren/zoekopdracht';
}