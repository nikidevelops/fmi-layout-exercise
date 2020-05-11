import React from "react";
import Header from "./components/Header";
import SignInRegisterButtons from "./components/SignInRegisterButtons";
import TopSponsors from "./components/TopSponsors";
import TopCategoriesBlock from "./components/TopCategoriesBlock";
import PageSection from "./components/Layout/PageSection";
import CategoryRow from "./components/CategoryRow";
import PromotionCard from "./components/PromotionCard";
import PartnersRow from "./components/PartnersRow";
import PopularPlaceHorizontal from "./components/PopularPlaceHorizontal";
import Footer from "./components/Footer";
import FooterIcons from "./components/FooterIcons";
import constants from "./config/constants";

function App() {
  return (
    <div className="App pb-3">
      <Header />
      <div className="container">
        <div class="d-flex  flex-column flex-md-row justify-content-between align-items-center mb-4">
          <TopSponsors />
          <SignInRegisterButtons />
        </div>
        <TopCategoriesBlock />
        <PageSection title="Travel categories">
          <CategoryRow />
        </PageSection>
        <PageSection title="Popular">
          <div className="d-flex overflow-auto">
            {constants.popularPlaces.map(({ title, image }, index) => (
              <PopularPlaceHorizontal
                key={`pp${index}`}
                title={title}
                image={image}
              />
            ))}
          </div>
        </PageSection>
        <hr />
        <PageSection title="Exiting promotions start here">
          <div className="row">
            {constants.promotionCards.map(
              ({ title, description, image }, index) => (
                <div key={`pc${index}`} className="col-md-6">
                  <PromotionCard
                    title={title}
                    description={description}
                    image={image}
                  />
                </div>
              )
            )}
          </div>
        </PageSection>
        <PageSection title="Providers">
          <PartnersRow />
        </PageSection>
        <hr />
        <Footer />
        <hr />
        <FooterIcons />
      </div>
    </div>
  );
}

export default App;
