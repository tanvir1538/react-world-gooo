import { Suspense } from "react";
import Countries from "./components/countries/Countries";


const  countriesPromies =fetch("https://openapi.programming-hero.com/api/all")
.then(res=>res.json());

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<h3>please loading bits second for upcoming data load </h3>
        }>
          <Countries countriesPromies={countriesPromies}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
