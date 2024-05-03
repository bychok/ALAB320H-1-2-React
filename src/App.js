import "./App.css";

import Homepage from "./components/Homepage";

function App() {
  // Data that will be distributed to the components in our page

  let allEntries = [
    {
      date: "11/12/2020",
      title: "On the Street in Brooklyn: A Tapestry of Urban Life",
      image: "/images/onthestreet.jpg",
      body: "Walking the streets of Brooklyn is like flipping through the pages of a vibrant, living novel. Each neighborhood tells its own story, bustling with a unique blend of sights, sounds, and scents. In Williamsburg, you'll find hip cafes spilling over with digital nomads and artists, their walls adorned with local art and windows steaming with the promise of artisan coffee. Just a subway ride away, the streets of Bushwick burst with color from expansive murals and street art that turn ordinary buildings into canvases for expression. The heart of Brooklyn beats in its diversity. Stroll through Borough Park, and you'll hear Yiddish mingling with English, the streets lined with kosher bakeries and bustling markets that reflect the strong Hasidic community. A venture into Sunset Park offers a contrast, with vibrant Hispanic influences, from lively music floating from open windows to the tantalizing aromas of tacos and tamales being served up in modest, family-run eateries. Each neighborhood coexists as a testament to Brooklyn's rich tapestry of cultures, each adding its own stitch to the urban quilt. Even the quieter streets have their own rhythm, a slower, more contemplative beat that invites introspection. In the brownstone-lined pathways of Park Slope, families and young professionals alike find solace away from the city’s relentless pace. Here, the lush green of Prospect Park offers an urban oasis, where joggers, picnickers, and nature lovers gather, all finding a moment of peace amidst the urban flurry. Brooklyn, with its dynamic blend of the old and new, the quiet and chaotic, remains a microcosm of urban life, ever-evolving yet always welcoming.",
    },
    {
      date: "11/11/2020",
      title: "Vintage in Vogue",
      image: "/images/vintageinvogue.jpg",
      body: "Vintage fashion has surged back into the limelight, proving that what was once old is new again. This resurgence is fueled not only by the nostalgic allure of past decades but also by a growing awareness of sustainability in fashion. Shoppers are increasingly drawn to vintage pieces for their uniqueness and the quality of craftsmanship rarely matched in modern fast fashion. As a result, thrifting and vintage shopping have become less about bargain hunting and more about making a style statement that is both eco-friendly and distinctive. Fashion icons and influencers parade their vintage finds on social media, inspiring a movement that embraces eclectic styles from the '60s florals to the bold neons of the '80s. The influence of vintage is evident not only in street fashion but also on high-fashion runways, where designers frequently dip into the past for inspiration. Recent collections show a clear nod to bygone eras through silhouettes, patterns, and detailing, seamlessly integrating old-world charm with contemporary aesthetics. This blend of past and present in fashion design not only enriches the visual landscape of modern apparel but also pays homage to the historical roots of fashion. As more designers and brands recognize the value of vintage, it continues to be a pivotal element of fashion, shaping trends and preserving the past through the lens of modern-day relevance.",
    },
  ];

  return (
    <div className="App">
      {/* Passing allEntries as props into Homepage: */}
      <Homepage entries={allEntries} />
    </div>
  );
}

export default App;
