import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
            <h1 className="text-4xl font-bold mb-4">Fed Data Prospector Newsletter</h1>
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
                  <div className="space-y-4">
                    <p className="text-slate-600 mb-4">
                      To subscribe to our Federal Data Prospector Newsletter, please click the button below:
                    </p>
                    <Button asChild className="w-full">
                      <a 
                        href="https://cd1.azurewebsites.net/api/trk?t=SubWS1&r=885dea0431284790a185967be36b5c89"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Subscribe Now
                      </a>
                    </Button>
                  </div>
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

          {/* Most Recent Newsletter */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Most Recent Newsletter
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Fed Data Prospector Newsletter – Volume 7. Issue 29.</CardTitle>
                  <CardDescription>Latest Edition</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Our most recent newsletter featuring federal data opportunities and industry insights.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=JUXJ1AeJP1g"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read Latest Issue
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Previous Newsletter Issues */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Federal Data Prospector Newsletter Archive
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Volume 2, Issue #37</CardTitle>
                  <CardDescription>Archive Edition</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Federal contract opportunities and data analytics deals for our community members.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.carpedatumdc.com/wp-content/uploads/2020/08/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-37..pdf" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Volume 2, Issue #5</CardTitle>
                  <CardDescription>Archive Edition</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Federal procurement insights and data analytic opportunities for our community.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.carpedatumdc.com/wp-content/uploads/2020/01/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-5..pdf" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Download PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Previous Volumes</CardTitle>
                  <CardDescription>Volumes 1-6 Available</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Access to previous newsletter volumes (1-6) available upon request. Contact us for more information.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:202-253-2060">
                      Call 202-253-2060
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-slate-100 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Join Our Community
              </h3>
              <p className="text-slate-600 mb-6">
                Connect with government contractors, analysts, and business leaders who rely on 
                Carpe Datum for actionable insights that drive growth and success.
              </p>
              <p className="text-slate-600 mb-4">
                For more information about our newsletter or to request past issues, please contact us at{" "}
                <a 
                  href="tel:202-253-2060"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  202-253-2060
                </a>
              </p>
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