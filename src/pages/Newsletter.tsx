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

          {/* Complete Newsletter Archive */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Complete Federal Data Prospector Newsletter Archive
            </h2>

            {/* Volume 7 - Most Recent */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 7 (Current) - All 29 Issues</CardTitle>
                  <CardDescription>ConstantContact Newsletter Links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=JUXJ1AeJP1g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 29</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=t5N1KRWSHBI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 28</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=PLzPEGZ8AXA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 27</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=aaZPR0UoURE" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 26</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=sKEO7AnCZeo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 25</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=69QsuADB0Uo" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 24</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=nlwpRzPiG28" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 23</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=8FBbO4y9G-g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 22</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=Vwk7eBbTtGs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 21</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=Q7AQyQuIgQI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 20</a>
                    <a href="https://conta.cc/lvim9hFEbx8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 19</a>
                    <a href="https://conta.cc/L6Yim8EqqG8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 18</a>
                    <a href="https://conta.cc/qUzEE-j1oZA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 17</a>
                    <a href="https://conta.cc/EakJl9oZ2cw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 16</a>
                    <a href="https://conta.cc/2IbA_7hO3WI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 15</a>
                    <a href="https://conta.cc/tFtxphBQW4U" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 14</a>
                    <a href="https://conta.cc/nNN8uRd04po" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 13</a>
                    <a href="https://conta.cc/iJq5TftJeik" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 12</a>
                    <a href="https://conta.cc/B5NJ4q6tipY" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 11</a>
                    <a href="https://conta.cc/tJPa9K6vh5k" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 10</a>
                    <a href="https://conta.cc/Mx1NineW59g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 9</a>
                    <a href="https://conta.cc/yNOvvm9bVZk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 8</a>
                    <a href="https://conta.cc/J24pimmHN_0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 7</a>
                    <a href="https://conta.cc/7OkI4KcAgos" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 6</a>
                    <a href="https://conta.cc/Hy5bEDtNdxs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 5</a>
                    <a href="https://conta.cc/5KRmQLY_pXc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 4</a>
                    <a href="https://conta.cc/SorSR88Pvdk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 3</a>
                    <a href="https://conta.cc/uWiOqu0sjmI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 2</a>
                    <a href="https://conta.cc/zMnYA4_m678" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 1</a>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 7 contains all 29 issues. Issues 1-19 use conta.cc links, Issues 20-29 use full ConstantContact URLs. All links redirect to ConstantContact email newsletter archive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 6 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 6</CardTitle>
                  <CardDescription>ConstantContact Newsletter Links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=_eOPBcMqNok" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 53</a>
                    <a href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=zws1mQgMmgI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 52</a>
                    <span className="text-slate-500">Issues 1-51 available via ConstantContact</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 6 contains 53 issues. All links redirect to ConstantContact email newsletter archive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 5 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 5</CardTitle>
                  <CardDescription>ConstantContact Newsletter Links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://conta.cc/48tLes3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 52</a>
                    <a href="https://conta.cc/4aqzzvI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 51</a>
                    <span className="text-slate-500">Issues 1-50 available via ConstantContact</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 5 contains 52 issues. All links redirect to ConstantContact email newsletter archive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 4 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 4</CardTitle>
                  <CardDescription>ConstantContact Newsletter Links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://conta.cc/3BMRkWx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 54</a>
                    <a href="https://conta.cc/3Wcrkvv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 53</a>
                    <span className="text-slate-500">Issues 1-52 available via ConstantContact</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 4 contains 54 issues. All links redirect to ConstantContact email newsletter archive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 3 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 3</CardTitle>
                  <CardDescription>ConstantContact Newsletter Links</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://conta.cc/3GrJz87" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 52</a>
                    <a href="https://conta.cc/31h9lwX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 51</a>
                    <span className="text-slate-500">Issues 1-50 available via ConstantContact</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 3 contains 52 issues. All links redirect to ConstantContact email newsletter archive.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 2 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 2</CardTitle>
                  <CardDescription>PDF Downloads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://carpedatumdc.com/wp-content/uploads/2020/12/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-52..pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 52 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2020/08/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-37..pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 37 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2020/01/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-5..pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 5 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2019/12/Fed-Data-Prospector-Newsletter-Volume-2.-Issue-2.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 2 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2019/12/Fed-Data-Prospector-Weekly-Newsletter-Volume-2.-Issue-1.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 1 (PDF)</a>
                    <span className="text-slate-500">Additional issues 3-4, 6-36, 38-51 available as PDFs</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 2 contains 52 issues. All available as PDF downloads from carpedatumdc.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Volume 1 */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">Volume 1 (Original Series)</CardTitle>
                  <CardDescription>PDF Downloads</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                    <a href="https://carpedatumdc.com/wp-content/uploads/2018/11/The-Fed-Data-Prospector-Newsletter-First-Edition-Carpe-Datum.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 1 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2018/12/Fed-Data-Prospecor-Second-Edition-Carpe-Datum.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 2 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2018/12/Fed-Data-Prospector-Third-Edition.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 3 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2019/01/Carpe-Datum-Fifth-Issue_FedDataProspector-Newsletter_12_12_18.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 5 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2019/01/Fed-Data-Prospector-Carpe-Datum-6th-Edition.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 6 (PDF)</a>
                    <a href="https://carpedatumdc.com/wp-content/uploads/2019/01/CD_Volume1_Issue7.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Issue 7 (PDF)</a>
                    <span className="text-slate-500">Issues 8-52 available as PDFs</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Complete Volume 1 contains 52 issues (Issue 4 not published). All available as PDF downloads from carpedatumdc.com.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Archive Summary */}
            <div className="bg-slate-100 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Complete Archive Summary
              </h3>
              <p className="text-slate-600 mb-4">
                Over 300 newsletter issues spanning 7 volumes from 2018 to present
              </p>
              <div className="text-sm text-slate-500">
                <p>• Volumes 1-2: PDF format • Volumes 3-7: ConstantContact email format</p>
                <p>• Weekly publication schedule • Federal data insights and opportunities</p>
              </div>
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
