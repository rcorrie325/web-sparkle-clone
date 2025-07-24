import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import capitolBackground from "@/assets/real-capitol-background.jpg";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-64 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${capitolBackground})` }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Carpe Datum Newsletter</h1>
            <p className="text-xl text-slate-200">
              Stay informed with the latest insights in government data and analytics
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Newsletter Signup */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800">Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>
                    Get weekly updates on government data trends, policy insights, and industry best practices.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        id="email" 
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                        Organization (Optional)
                      </label>
                      <Input 
                        type="text" 
                        id="organization" 
                        placeholder="Your Organization"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Subscribe Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Newsletter Preview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">What You'll Receive</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Weekly Data Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Expert analysis on federal data trends, new datasets, and emerging opportunities 
                      in government analytics.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Policy Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Stay ahead of regulatory changes and policy developments that impact 
                      government contracting and data management.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Best Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Learn from successful case studies and proven methodologies for 
                      government data projects and business growth strategies.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Exclusive Events & Webinars</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Get early access to our educational events, networking opportunities, 
                      and expert-led training sessions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-100 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-slate-600 mb-6">
                Over 2,500 government contractors, analysts, and business leaders trust 
                Carpe Datum for actionable insights that drive growth and success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">2,500+</div>
                  <div className="text-sm text-slate-600">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Weekly</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5 min</div>
                  <div className="text-sm text-slate-600">Average Read Time</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-6">
                Unsubscribe at any time. We respect your privacy and never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;