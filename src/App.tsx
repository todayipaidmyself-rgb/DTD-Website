import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GenderRevealParties from "./pages/GenderRevealParties";
import BabyShowers from "./pages/BabyShowers";
import Christenings from "./pages/Christenings";
import BirthdayParties from "./pages/BirthdayParties";
import MilestoneParties from "./pages/MilestoneParties";
import ThemedParties from "./pages/ThemedParties";
import ProposalStyling from "./pages/ProposalStyling";
import Weddings from "./pages/Weddings";
import CommercialEvents from "./pages/CommercialEvents";
import SeasonalEvents from "./pages/SeasonalEvents";
import Christmas from "./pages/Christmas";
import NewYearsEve from "./pages/NewYearsEve";
import Gallery from "./pages/Gallery";
import About from '@/pages/About';
import DesignYourDay from '@/pages/DesignYourDay';
import Blog from '@/pages/Blog';
import LightsBalloonsDecor from '@/pages/LightsBalloonsDecor';
import TeepeeParties from "./pages/TeepeeParties";
import PicnicParties from "./pages/PicnicParties";
import LittleOnesParties from "./pages/LittleOnesParties";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import BlogPost from "./pages/BlogPost";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/design-your-day" component={DesignYourDay} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={Terms} />

      {/* Canonical Experience URLs */}
      <Route path="/experiences/birthday-parties" component={BirthdayParties} />
      <Route path="/experiences/themed-parties" component={ThemedParties} />
      <Route path="/experiences/picnic-parties" component={PicnicParties} />
      <Route path="/experiences/milestone-parties" component={MilestoneParties} />
      <Route path="/experiences/little-ones-parties" component={LittleOnesParties} />
      <Route path="/experiences/teepee-parties" component={TeepeeParties} />
      <Route path="/experiences/proposals" component={ProposalStyling} />
      <Route path="/experiences/weddings" component={Weddings} />
      <Route path="/experiences/christmas" component={Christmas} />
      <Route path="/experiences/new-years-eve" component={NewYearsEve} />
      <Route path="/experiences/commercial-events" component={CommercialEvents} />
      <Route path="/experiences/lights-balloons-event-decor" component={LightsBalloonsDecor} />
      <Route path="/experiences/baby-showers" component={BabyShowers} />
      <Route path="/experiences/christenings" component={Christenings} />
      <Route path="/experiences/gender-reveal-parties" component={GenderRevealParties} />

      {/* Legacy Redirects */}
      <Route path="/birthday-parties"><Redirect to="/experiences/birthday-parties" /></Route>
      <Route path="/themed-parties"><Redirect to="/experiences/themed-parties" /></Route>
      <Route path="/picnic-parties"><Redirect to="/experiences/picnic-parties" /></Route>
      <Route path="/milestone-parties"><Redirect to="/experiences/milestone-parties" /></Route>
      <Route path="/little-ones-parties"><Redirect to="/experiences/little-ones-parties" /></Route>
      <Route path="/teepee-parties"><Redirect to="/experiences/teepee-parties" /></Route>
      <Route path="/engagements-proposals"><Redirect to="/experiences/proposals" /></Route>
      <Route path="/weddings"><Redirect to="/experiences/weddings" /></Route>
      <Route path="/christmas"><Redirect to="/experiences/christmas" /></Route>
      <Route path="/new-years-eve"><Redirect to="/experiences/new-years-eve" /></Route>
      <Route path="/commercial-events"><Redirect to="/experiences/commercial-events" /></Route>
      <Route path="/lights-balloons-event-decor"><Redirect to="/experiences/lights-balloons-event-decor" /></Route>
      <Route path="/baby-showers"><Redirect to="/experiences/baby-showers" /></Route>
      <Route path="/christenings"><Redirect to="/experiences/christenings" /></Route>
      <Route path="/gender-reveal-parties"><Redirect to="/experiences/gender-reveal-parties" /></Route>
      
      {/* Additional Legacy Redirects from Prompt */}
      <Route path="/teepee-sleepovers"><Redirect to="/experiences/teepee-parties" /></Route>
      <Route path="/luxury-picnics"><Redirect to="/experiences/picnic-parties" /></Route>
      <Route path="/proposal-styling"><Redirect to="/experiences/proposals" /></Route>
      <Route path="/little-uns-parties"><Redirect to="/experiences/little-ones-parties" /></Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
