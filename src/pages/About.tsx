import Header from "@/components/Header";
import carpeDataumLogo from "@/assets/carpe-datum-logo.png";
import learnMoreButton from "@/assets/learn-more-button.png";
import realColumnsBackground from "@/assets/real-columns-background.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${realColumnsBackground})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Carpe Datum</h1>
          <h2 className="text-2xl font-semibold text-red-200">Our Mission...</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <p className="text-lg mb-6">
              Carpe Datum, LLC is a small consultancy established in 2017, based in Washington, DC. Founded by two partners with over 50 years of collective experience at the nexus of data, analytics, and government, our aspiration is to apply this background to assist other data and analytic companies effectively establish, grow, and refine their offerings to government customers.
            </p>
            
            <p className="text-lg mb-6">
              At our core, we think of Carpe Datum as a strategy firm – and are at our best helping customers address a challenge, leveraging the learnings and more importantly avoiding the mistakes we've made over our careers.
            </p>
            
            <p className="text-lg mb-6">
              We collaborate on opportunities as small as supporting a specific procurement, and as large as developing a go-to-market strategy, supporting ongoing business development, or teaming to deliver our combined services to a government customer.
            </p>
            
            <p className="text-lg mb-8">
              Along the way, we are happy to apply our experience in areas like business development, strategic partnerships, customer engagement, capture management, product development, and sales execution to help make your government business more successful.
            </p>

            {/* Commitment Statement */}
            <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-primary my-12">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src={carpeDataumLogo} 
                  alt="Carpe Datum Globe Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-xl font-semibold text-center text-slate-800">
                <strong>Carpe Datum is committed to making each client relationship a mutually-beneficial and success-oriented engagement.</strong>
              </p>
            </div>

            {/* Learn More Section */}
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img 
                  src={learnMoreButton} 
                  alt="Learn More" 
                  className="h-16 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;