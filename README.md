# (WIP) Olin Library Website

ongoing development on the update to http://library.olin.edu/

_stay tuned!_

## Folder Structure
```
.
├── assets
│   ├── css
│   │   ├── lib - css libraries
│   │   │   ├── reset.css
│   │   │   └── tachyons.css
│   │   └── main.css - custom stylesheet
│   ├── img
│   │   ├── book.png
│   │   ├── camera.png
│   │   ├── drill.png
│   │   ├── episode.png
│   │   ├── evan1.png
│   │   ├── experiments.png
│   │   └── librarian.png
│   ├── js
│   │   └── lib - javascript libraries
│   │       ├── modernizr.js
│   │       └── tabs.js
│   └── media - videos, pdfs, and other files that don't fit under img/
│       ├── doclab_01.mp4
│       ├── gh4_01.mp4
│       └── welcome.mp4
├── index.html
└── README.md
```

## Getting Started

1. Clone the repo `git clone https://github.com/olinlibrary/library-website.git`.
2. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and [Jekyll](https://jekyllrb.com/docs/installation/).
3. Run `bundle install` to install dependencies & plugins (install bundler if you don't have it installed by running `gem install bundler`)
4. Run Jekyll server locally
  - Run `jekyll serve` and navigate to the url given to view the website.
  - If `jekyll serve` outputs errors, then run , then `bundle exec jekyll serve`

## How the Table of Contents work:
- All layouts that use "default.html" will automatically have table of contents generated
underneath header, and anchors are injected to the corresponding contents.
- To disable table of contents for a specific post or layout, insert `toc: false` underneath
`layout: default`.
- The default toc value is configured in _config.yml, but you shouldn't need to edit this file.
