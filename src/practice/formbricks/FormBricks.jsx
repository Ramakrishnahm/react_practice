import React, { useState } from "react";
import SectionComponent from "./SectionComponent";
// import {Source} from './const/Source'

function App() {
  const [data, setData] = useState(
    {
        "sections": [
          {
            "header": [
              {
                "title": "Link Surveys",
                "subtitle": "like Typeform"
              },{
                "title": "Unlimited"
              },{
                "title": "Unlimited"
              }
            ],
            "rows": [
                {
                    "title": "Unlimited Surveys",
                    "item1": true,
                    "item2": true
                  },
                  {
                    "title": "Unlimited Responses",
                    "item1": true,
                    "item2": false
                  },
                  {
                    "title": "Partial Responses",
                    "item1": true,
                    "item2": false
                  },
                  {
                    "title": "Multi-media Backgrounds",
                    "item1": true,
                    "item2": true
                  },
                  {
                    "title": "Hidden Fields",
                    "item1": false,
                    "item2": false
                  },
                  {
                    "title": "Pin-protected Surveys",
                    "item1": true,
                    "item2": true
                  },
                  {
                    "title": "Custom Styling",
                    subtitle: "coming soon",
                    "item1": true,
                    "item2": true
                  },
                  {
                    "title": "Recall Information",
                    "item1": false,
                    "item2": false
                  },
                  {
                    "title": "Custom URL",
                    "item1": true,
                    "item2": true
                  },
                  {
                    "title": "",
                    "item1": false,
                    "item2": false
                  },
                  {
                    "title": "Unlimited Responses",
                    "item1": true,
                    "item2": true
                  },
            ]
          },
          {
            "rows": [{
            "title": "Unlimited Surveys",
            "item1": true,
            "item2": true
          },
          {
            "title": "Unlimited Responses",
            "item1": true,
            "item2": false
          },
          []
        ],
            "header": [
              {
                "title": "Link Surveys Pricing",
                "subtitle": "pricing"
              },{
                "title": "Unlimited"
              },{
                "title": "Unlimited"
              }
            ],
           }
        ],
        
      }
  );

  return (
    <div>
      {data.sections.map((section, sectionIndex) => (
        <SectionComponent
          key={sectionIndex}
          header={section.header}
          rows={section.rows}
        />
      ))}
    </div>
  );
}

export default App;
