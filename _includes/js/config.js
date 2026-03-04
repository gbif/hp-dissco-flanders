var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch",
      "path": "specimen/search"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    },
    {
      "code": "nl",
      "localeCode": "en",
      "label": "English",
      "default": false,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "in",
      "key": "datasetKey",
      "values": [
        "b740eaa0-0679-41dc-acb7-990d562dfa37",
        "68c91b9a-2322-4f60-8d58-2c696a73a11c",
        "b24d3bd0-e6d9-11dc-8b77-b8a03c50a862",
        "ce416850-8934-11dc-9962-b8a03c50a862",
        "0310b080-ec4b-11dc-b73e-b8a03c50a862",
        "67caab70-ec4b-11dc-b73f-b8a03c50a862",
        "c9e31c10-6986-4795-8244-30ad2486d0bb",
        "ec836767-7df3-4b7e-bee4-63e1d3ee0bba"
      ]
    },
    "mapSettings": {
      "lat": 0,
      "lng": 0,
      "zoom": 1
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "in",
      "key": "gbifDatasetKey",
      "values": [
        "b740eaa0-0679-41dc-acb7-990d562dfa37",
        "68c91b9a-2322-4f60-8d58-2c696a73a11c",
        "b24d3bd0-e6d9-11dc-8b77-b8a03c50a862",
        "ce416850-8934-11dc-9962-b8a03c50a862",
        "0310b080-ec4b-11dc-b73e-b8a03c50a862",
        "67caab70-ec4b-11dc-b73f-b8a03c50a862",
        "c9e31c10-6986-4795-8244-30ad2486d0bb",
        "ec836767-7df3-4b7e-bee4-63e1d3ee0bba"
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};

