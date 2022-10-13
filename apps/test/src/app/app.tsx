import { Header } from '../common/navigation/header';

import { Form } from '../modules/sections/form/components';
import { UsefulData } from '../modules/sections/useful-data/components';
import { About } from '../modules/sections/about/components';
import { Company } from '../modules/sections/company/components';
import { Footer } from '../common/navigation/footer';

import { ParallaxProvider } from 'react-scroll-parallax';

export function App() {
  return (
    <body className="overflow-x-hidden">
      <ParallaxProvider>
        <Header />

        <main className="px-5">
          <Form />

          <UsefulData />

          <About />

          <Company />
        </main>

        <Footer />
      </ParallaxProvider>
    </body>
  );
}

export default App;
