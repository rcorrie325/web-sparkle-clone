import Header from "@/components/Header";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: "url('/src/assets/real-government-building.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Newsletter
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Stay updated with our Federal Data Prospector Newsletter
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Fed Data Prospector Newsletter</h2>
            
            <div className="mb-8">
              <p className="text-lg text-gray-700 mb-4">
                Sign up for our newsletter to stay informed about federal data opportunities and industry insights.
              </p>
              <p className="text-gray-600">
                To subscribe, please click{" "}
                <a 
                  href="https://cd1.azurewebsites.net/api/trk?t=SubWS1&r=885dea0431284790a185967be36b5c89"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Most Recent Newsletter</h3>
              <div className="border-l-4 border-blue-500 pl-4">
                <a 
                  href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=JUXJ1AeJP1g"
                  className="text-lg text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fed Data Prospector Newsletter – Volume 7. Issue 29.
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-700 mb-6">Newsletter Archive</h3>
              <div className="grid gap-4">
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-3">Volume 7 Issues</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://myemail.constantcontact.com/subject.html?soid=1131618242334&aid=JUXJ1AeJP1g"
                      className="block text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Issue 29
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-700 mb-3">Previous Volumes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 6</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 5</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 4</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 3</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 2</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-600 mb-2">Volume 1</h5>
                      <p className="text-sm text-gray-600">Past issues available upon request</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">Contact Information</h3>
              <p className="text-gray-700">
                For more information about our newsletter or to request past issues, please contact us at{" "}
                <a 
                  href="tel:202-253-2060"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  202-253-2060
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;