import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import courthouseBackground from "@/assets/federal-building.jpg";

const Services = () => {
  const services = [
    {
      title: "Business Development Consulting",
      description: "Strategic guidance for establishing and growing your government business presence",
      details: [
        "Go-to-market strategy development",
        "Ongoing business development support",
        "Strategic partnerships facilitation"
      ]
    },
    {
      title: "Government Market Expertise",
      description: "Leverage our 50+ years of collective experience in data, analytics, and government",
      details: [
        "Customer engagement strategies",
        "Capture management",
        "Procurement support"
      ]
    },
    {
      title: "Growth Acceleration",
      description: "Help data and analytic companies refine their offerings to government customers",
      details: [
        "Product development guidance",
        "Sales execution optimization",
        "Market positioning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative h-96 bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${courthouseBackground})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Strategic consulting services designed to help data and analytics companies succeed in the government market
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What We Do Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          
          <div className="bg-card rounded-lg p-8 border">
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              As a strategy firm, we are at our best helping customers address challenges by leveraging our learnings and, more importantly, avoiding the mistakes we've made over our careers.
            </p>
            
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              We collaborate on opportunities ranging from supporting specific procurements to developing comprehensive go-to-market strategies, supporting ongoing business development, or teaming to deliver our combined services to government customers.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Small Engagements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Supporting specific procurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Tactical consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Short-term project support</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Large Engagements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Go-to-market strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ongoing business development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Combined service delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;