
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LengthConverter from "./pages/LengthConverter";
import TemperatureConverter from "./pages/TemperatureConverter";
import ComingSoon from "./pages/ComingSoon";
import InfoPage from "./pages/InfoPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
          
          {/* Coming Soon Pages */}
          <Route path="/area" element={<ComingSoon title="Area Converter" description="Convert square meters, acres, hectares and more" />} />
          <Route path="/volume" element={<ComingSoon title="Volume Converter" description="Convert liters, gallons, cubic meters and more" />} />
          <Route path="/weight" element={<ComingSoon title="Weight/Mass Converter" description="Convert kilograms, pounds, ounces and more" />} />
          <Route path="/currency" element={<ComingSoon title="Currency Converter" description="Convert between different world currencies" />} />
          <Route path="/number-system" element={<ComingSoon title="Number System Converter" description="Convert Binary, Decimal, Hexadecimal, BCD" />} />
          <Route path="/time" element={<ComingSoon title="Time Converter" description="Convert seconds, minutes, hours, days and more" />} />
          <Route path="/speed" element={<ComingSoon title="Speed Converter" description="Convert mph, km/h, m/s and more" />} />
          <Route path="/data-storage" element={<ComingSoon title="Data Storage Converter" description="Convert bytes, KB, MB, GB, TB and more" />} />
          
          {/* Info Pages */}
          <Route path="/about" element={
            <InfoPage title="About QuickCalc Tools">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  QuickCalc Tools is your go-to destination for fast, accurate, and free online conversion calculators.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  We believe that everyone should have access to reliable conversion tools without the hassle of downloading apps or dealing with complicated interfaces. Our tools are designed to be lightning-fast, mobile-friendly, and incredibly easy to use.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Real-time conversion as you type</li>
                  <li>Mobile-responsive design for all devices</li>
                  <li>No registration or downloads required</li>
                  <li>Completely free to use</li>
                  <li>Accurate calculations every time</li>
                </ul>
              </div>
            </InfoPage>
          } />
          
          <Route path="/contact" element={
            <InfoPage title="Contact Us">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  Have questions, suggestions, or need help? We'd love to hear from you!
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Email</h3>
                        <p className="text-blue-600">support@quickcalctools.com</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Response Time</h3>
                        <p className="text-gray-600">We typically respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">What we can help with</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Technical support</li>
                      <li>Feature requests</li>
                      <li>Bug reports</li>
                      <li>General questions</li>
                      <li>Partnership inquiries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </InfoPage>
          } />
          
          <Route path="/support" element={
            <InfoPage title="Support">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">How accurate are the conversions?</h3>
                    <p className="text-gray-600">Our conversion calculations use internationally recognized conversion factors and are accurate to many decimal places.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Is QuickCalc Tools free to use?</h3>
                    <p className="text-gray-600">Yes! All our conversion tools are completely free to use with no registration required.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Do you store my conversion data?</h3>
                    <p className="text-gray-600">No, we don't store any of your conversion data. All calculations happen in your browser.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Can I use this on mobile devices?</h3>
                    <p className="text-gray-600">Absolutely! Our tools are designed to work perfectly on smartphones, tablets, and desktop computers.</p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Still need help?</h3>
                  <p className="text-gray-600">Contact us at support@quickcalctools.com and we'll get back to you as soon as possible.</p>
                </div>
              </div>
            </InfoPage>
          } />
          
          <Route path="/terms" element={
            <InfoPage title="Terms & Conditions">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using QuickCalc Tools, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of the materials on QuickCalc Tools for personal, non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The materials on QuickCalc Tools are provided on an 'as is' basis. QuickCalc Tools makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitations</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall QuickCalc Tools or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QuickCalc Tools, even if QuickCalc Tools or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </InfoPage>
          } />
          
          <Route path="/privacy" element={
            <InfoPage title="Privacy Policy">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  QuickCalc Tools does not collect personal information from users. We may collect anonymous usage statistics to improve our service.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Information</h2>
                <p className="text-gray-600 mb-6">
                  Any anonymous data collected is used solely to improve the user experience and functionality of our conversion tools.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-600 mb-6">
                  We may use cookies to enhance user experience. You can choose to accept or decline cookies through your browser settings.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-600 mb-6">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us at privacy@quickcalctools.com
                </p>
              </div>
            </InfoPage>
          } />
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
