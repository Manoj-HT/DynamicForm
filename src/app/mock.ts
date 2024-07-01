export default {
    "bookcategories": [
      {
        "category": "Fiction",
        "fields": [
          {
            "label": "Genre",
            "type": "select",
            "mandatory": true,
            "hidden": false,
            "options": [
              "Romance",
              "Mystery",
              "Science Fiction",
              "Fantasy",
              "Historical Fiction",
              "Thriller"
            ]
          },
          {
            "label": "Author",
            "type": "text",
            "mandatory": true,
            "hidden": false
          },
          {
            "label": "Series",
            "type": "number",
            "mandatory": false,
            "hidden": false
          }
        ]
      },
      {
        "category": "Children's Books",
        "fields": [
          {
            "label": "Age Range",
            "type": "select",
            "mandatory": true,
            "hidden": false,
            "options": [
              "0-2",
              "3-5",
              "6-8",
              "9-12",
              "Teen"
            ]
          },
          {
            "label": "Genre",
            "type": "select",
            "mandatory": true,
            "hidden": false,
            "options": [
              "Picture Books",
              "Early Readers",
              "Chapter Books",
              "YA Novels"
            ]
          },
          {
            "label": "Illustrator",
            "type": "text",
            "mandatory": true,
            "hidden": false
          },
          {
            "label": "Format",
            "type": "select",
            "mandatory": false,
            "hidden": false,
            "options": [
              "Hardcover",
              "Paperback",
              "E-book",
              "Audiobook"
            ]
          }
        ]
      },
      {
        "category": "Educational and Academic",
        "fields": [
          {
            "label": "Subject",
            "type": "select",
            "mandatory": true,
            "hidden": false,
            "options": [
              "Mathematics",
              "Engineering",
              "Business",
              "History",
              "Literature"
            ]
          },
          {
            "label": "Topics covered",
            "type": "textarea",
            "mandatory": true,
            "hidden": false
          },
          {
            "label": "Level",
            "type": "select",
            "mandatory": true,
            "hidden": false,
            "options": [
              "Elementary",
              "Middle School",
              "High School",
              "College"
            ]
          },
          {
            "label": "ISBN",
            "type": "number",
            "mandatory": true,
            "hidden": false
          },
          {
            "label": "Edition",
            "type": "text",
            "mandatory": false,
            "hidden": false
          }
        ]
      }
    ]
  }