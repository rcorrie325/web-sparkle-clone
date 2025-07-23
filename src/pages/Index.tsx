import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import capitolBackground from "@/assets/capitol-background.jpg";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Data & Analytics Expertise",
      description: "50+ years of collective experience at the nexus of data, analytics, and government"
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Collaborative approach to help establish, grow, and refine government offerings"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "From procurement support to go-to-market strategies, we deliver success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-100 to-slate-200 py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${capitolBackground})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Welcome to Carpe Datum</h1>
          <p className="text-2xl text-red-200 font-semibold mb-8 italic">
            Seize the Data... To Grow Your Business
          </p>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Strategic consulting for data and analytics companies looking to succeed in the government market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/about">
                Learn About Our Mission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Carpe Datum?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a strategy firm dedicated to helping data and analytics companies thrive in the government sector
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-6">
              <p>
                Carpe Datum, LLC is a small consultancy established in 2017, based in Washington, DC. Founded by two partners with over 50 years of collective experience at the nexus of data, analytics, and government, our aspiration is to apply this background to assist other data and analytic companies effectively establish, grow, and refine their offerings to government customers.
              </p>
              
              <p>
                At our core, we think of Carpe Datum as a strategy firm – and are at our best helping customers address a challenge, leveraging the learnings and more importantly avoiding the mistakes we've made over our careers.
              </p>
            </div>
            
            <div className="mt-12">
              <Button size="lg" asChild>
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-6">
            Ready to Grow Your Government Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our experience can help you avoid common pitfalls and accelerate your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
