import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LengthConverter from "./pages/LengthConverter";
import TemperatureConverter from "./pages/TemperatureConverter";
import VolumeConverter from "./pages/VolumeConverter";
import WeightConverter from "./pages/WeightConverter";
import NumberSystemConverter from "./pages/NumberSystemConverter";
import TimeConverter from "./pages/TimeConverter";
import SpeedConverter from "./pages/SpeedConverter";
import DataStorageConverter from "./pages/DataStorageConverter";
import MicroLengthConverter from "./pages/MicroLengthConverter";
import AreaConverter from "./pages/AreaConverter";
import ComingSoon from "./pages/ComingSoon";
import InfoPage from "./pages/InfoPage";
import EngineerTools from "./pages/EngineerTools";
import ASCIIConverter from "./pages/ASCIIConverter";
import OhmsLaw from "./pages/OhmsLaw";
import ResistorCalculator from "./pages/ResistorCalculator";
import FrequencyConverter from "./pages/FrequencyConverter";
import CapacitorCalculator from "./pages/CapacitorCalculator";
import PWMCalculator from "./pages/PWMCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Fully Functional Converters */}
          <Route path="/length" element={<LengthConverter />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
          <Route path="/volume" element={<VolumeConverter />} />
          <Route path="/weight" element={<WeightConverter />} />
          <Route path="/number-system" element={<NumberSystemConverter />} />
          <Route path="/time" element={<TimeConverter />} />
          <Route path="/speed" element={<SpeedConverter />} />
          <Route path="/data-storage" element={<DataStorageConverter />} />
          <Route path="/micro-length" element={<MicroLengthConverter />} />
          <Route path="/area" element={<AreaConverter />} />
          
          {/* Engineer Tools */}
          <Route path="/engineer-tools" element={<EngineerTools />} />
          <Route path="/ascii-converter" element={<ASCIIConverter />} />
          <Route path="/ohms-law" element={<OhmsLaw />} />
          <Route path="/resistor-calculator" element={<ResistorCalculator />} />
          <Route path="/frequency-converter" element={<FrequencyConverter />} />
          <Route path="/capacitor-calculator" element={<CapacitorCalculator />} />
          <Route path="/pwm-calculator" element={<PWMCalculator />} />
          
          {/* Coming Soon Pages */}
          <Route path="/currency" element={
            <ComingSoon 
              title="Currency Converter" 
              description="Currency values change daily and require live data from APIs. This feature will be added soon." 
            />
          } />
          
          {/* Info Pages */}
          <Route path="/about" element={
            <InfoPage title="About Us">
              <div className="prose prose-gray max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Utilitix, Powered by EnderHOST</h2>
                <p className="text-lg text-gray-600 mb-6">
                  A free online platform offering a range of fast and easy-to-use digital tools.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're editing text, converting files, or working with fonts, units, and images, we aim to make your everyday tasks simpler and more efficient — with no installation, registration, or cost required.
                </p>
                <p className="text-gray-600 mb-6">
                  Utilitix was built with simplicity, performance, and accessibility in mind. We believe in providing powerful tools for everyone, everywhere.
                </p>
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
                        <p className="text-blue-600">mail@enderhost.in</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 3331509383</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Discord (High Priority)</h3>
                        <a href="https://discord.gg/eq4CvsxqUS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          https://discord.gg/eq4CvsxqUS
                        </a>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Response Time</h3>
                        <p className="text-gray-600">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Priority Support</h2>
                    <p className="text-gray-600 mb-4">
                      For urgent or quick assistance, please reach out via Discord for faster response.
                    </p>
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
                <p className="text-lg text-gray-600 mb-8">
                  For any technical support, feedback, or inquiries, please contact us through the following:
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📧</span>
                      <div>
                        <strong>Email:</strong> 
                        <a href="mailto:mail@enderhost.in" className="text-blue-600 ml-2">mail@enderhost.in</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <div><strong>Phone:</strong> +91 3331509383</div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <strong>Discord (High Priority):</strong> 
                        <a href="https://discord.gg/eq4CvsxqUS" target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-2 hover:underline">
                          https://discord.gg/eq4CvsxqUS
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-6">
                  <p className="text-gray-700 font-medium">
                    <strong>For urgent or quick assistance, please reach out via Discord for faster response.</strong>
                  </p>
                  <p className="text-gray-600 mt-2">We typically respond within 24–48 hours.</p>
                </div>
              </div>
            </InfoPage>
          } />
          
          <Route path="/terms" element={
            <InfoPage title="Terms & Conditions">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-6">
                  Welcome to <strong>Utilitix</strong>. By using our website, you agree to comply with and be bound by the following terms and conditions:
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Use of Website</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>This website offers free access to various online tools and converters.</li>
                  <li>You agree to use these tools for lawful and non-commercial purposes only.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. No Warranty</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>All tools are provided "as-is." We do not guarantee 100% accuracy or uptime.</li>
                  <li>We are not responsible for any loss or damage arising from the use of this site.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>All logos, designs, and content on this website are owned or licensed by <strong>EnderHOST</strong>.</li>
                  <li>You may not reuse or reproduce our content without permission.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Ads and Links</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>Our site may display third-party advertisements. We are not responsible for their content or actions.</li>
                  <li>Clicking on external links is at your own risk.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>We do not collect personal data directly. However, ad providers or hosting services may collect non-personal analytics.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>We reserve the right to modify these terms at any time without notice. Continued use implies acceptance of changes.</li>
                </ul>
              </div>
            </InfoPage>
          } />
          
          <Route path="/privacy" element={
            <InfoPage title="Privacy Policy">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-6">
                  At Utilitix (Powered by EnderHOST), your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services. Please read this policy carefully. If you do not agree with its terms, kindly do not use our tools.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We keep our data collection to a minimum and only collect what is necessary to operate and improve our platform:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>Usage Data:</strong> We may collect non-personal data such as browser type, operating system, IP address, pages visited, and time spent on the website for analytics and performance monitoring.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance user experience, track tool usage, and store your preferences.</li>
                  <li><strong>Support Interactions:</strong> If you contact us via email, phone, or Discord, we may collect your email address, phone number, and the content of your message to help solve your issue and improve service.</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  <strong>Note:</strong> We do not require user registration, account creation, or store any personal data like names, passwords, or billing details.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the limited data we collect for the following purposes:</p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>To improve the performance, security, and usability of our website</li>
                  <li>To respond to support requests and troubleshoot any problems</li>
                  <li>To analyze tool usage and identify areas for development</li>
                  <li>To offer relevant updates or tool recommendations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>No Selling of Data:</strong> We do not sell or rent your data to anyone.</li>
                  <li><strong>Third-Party Tools:</strong> We may use trusted third-party services (e.g., Google Analytics) for website traffic analysis. These services may collect anonymized, non-personal data.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose information if required by law or to respond to lawful requests from government authorities.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600 mb-4">We implement appropriate security measures to safeguard all data processed through our site:</p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>Regular server monitoring</li>
                  <li>Secure protocols (HTTPS)</li>
                  <li>Firewall protection</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  However, please note that no digital platform can guarantee 100% security.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                <p className="text-gray-600 mb-4">You may:</p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                  <li>Disable cookies in your browser settings</li>
                  <li>Contact us to request deletion of any communication records you've sent us</li>
                  <li>Choose not to share any information when using our tools (most tools work offline or without data retention)</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  Residents of certain regions (e.g., EEA, California) may have additional rights under laws like GDPR or CCPA.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Children's Privacy</h2>
                <p className="text-gray-600 mb-6">
                  Our platform is not intended for individuals under the age of 13 (or 16 in certain regions). We do not knowingly collect personal data from minors. If you believe a child has submitted personal information to us, please contact us for removal.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Privacy Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Privacy Policy to reflect changes in our practices or services. All updates will be posted on this page with the new effective date.
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 mb-4">If you have questions, concerns, or data-related requests, contact us:</p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="space-y-2">
                    <p>📧 <strong>Email:</strong> <a href="mailto:privacy@enderhost.com" className="text-blue-600">privacy@enderhost.com</a></p>
                    <p>💬 <strong>Discord Support (High Priority):</strong> <a href="https://discord.gg/eq4CvsxqUS" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://discord.gg/eq4CvsxqUS</a></p>
                    <p>📞 <strong>Phone Support:</strong> +91 3331509383</p>
                    <p>📧 <strong>General Support Email:</strong> <a href="mailto:mail@enderhost.in" className="text-blue-600">mail@enderhost.in</a></p>
                  </div>
                </div>
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
