import React from 'react';

// ── Shared / global ──────────────────────────────────────────────────
import PlayfulBackground  from './components/PlayfulBackground';
import Header             from './components/Header';

// ── Landing sections (in page order) ─────────────────────────────────
import Hero                    from './components/Hero';
import StorytellingSection     from './components/StorytellingSection';
import HowItWorks              from './components/HowItWorks';
import DifferentiatorsSection  from './components/DifferentiatorsSection';
import Features                from './components/Features';
import ModelsSection           from './components/ModelsSection';
import TutorialsSection        from './components/TutorialsSection';
import PricingSection          from './components/PricingSection';
import ScientificBacking       from './components/ScientificBacking';
import PresaleForm             from './components/PresaleForm';
import TeamSection             from './components/TeamSection';
import CollaboratorsSection    from './components/CollaboratorsSection';
import Footer                  from './components/Footer';

function App() {
  return (
    <>
      {/* Floating decorative balls — fixed behind every section */}
      <PlayfulBackground />

      {/* Sticky navigation */}
      <Header />

      <main>
        {/* 1. Hero with image carousel */}
        <Hero />

        {/* 2. Storytelling / Origin story */}
        <StorytellingSection />

        {/* 3. How the ecosystem works */}
        <HowItWorks />

        {/* 4. Key differentiators vs competition */}
        <DifferentiatorsSection />

        {/* 5. Physical features of the case */}
        <Features />

        {/* 6. Product model gallery */}
        <ModelsSection />

        {/* 7. Video tutorials */}
        <TutorialsSection />

        {/* 8. Pricing plans */}
        <PricingSection />

        {/* 9. Scientific backing */}
        <ScientificBacking />

        {/* 10. Pre-sale + Survey multi-step form */}
        <PresaleForm />

        {/* 11. Team QUANTIC */}
        <TeamSection />

        {/* 12. Collaborators: Tecsup & FabLab */}
        <CollaboratorsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
