import React from 'react';
import { Heart, Handshake, MapPin, Phone, Clock, Award, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            About Us
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-left">
              <div className="bg-blue-900 rounded-full p-6 shadow-xl inline-flex mb-6">
                <Heart className="w-12 h-12 text-yellow-400" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Flooring Team LLC has design experts on hand waiting to help you determine your next steps in the buying experience. From high-end to the budget conscious buyer, we have products to help meet all of your needs. We pride ourselves in taking good care of our customers. Come see us where we will treat you like part of the community.
              </p>
            </div>
          </div>

          {/* Excellent Relationships with Suppliers */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Handshake className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Excellent Relationships with Suppliers
              </h2>
            </div>

            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Flooring Team LLC has design experts on hand waiting to help you determine your next steps in the buying experience. From high-end to the budget conscious buyer, we have products to help meet all of your needs. We pride ourselves in taking good care of our customers. Come see us where we will treat you like part of the community.
              </p>
            </div>
          </div>

          {/* Awards & Associations */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Awards & Associations
              </h2>
            </div>

            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're proud members of the <strong>World Floor Covering Association</strong>, demonstrating our commitment to industry excellence and staying at the forefront of flooring trends and best practices.
              </p>
              
              {/* Award Image */}
              <div className="flex justify-center mt-6">
                <img 
                  src="/flooringteamaward.jpeg" 
                  alt="Flooring Team Award" 
                  className="max-w-md w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Store Info */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Store Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">
                      2048 N 16th St<br />
                      Phoenix, AZ 85006
                    </p>
                    <a 
                      href="https://maps.google.com/?q=2048+N+16th+St+Phoenix+AZ+85006" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:underline mt-2 inline-block"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <Phone className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:6025825827" className="text-gray-700 hover:text-blue-900">
                      (602) 582-5827
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      <a href="tel:6025825827" className="text-blue-900 hover:underline">
                        Call us →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-700">
                      Mon-Fri: 7am - 6pm<br />
                      Sat: 7am - 5pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Link 
                  to="/contact"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center w-full"
                >
                  Request a Free Estimate
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Brands & Technologies */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <LinkIcon className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Brands & Technologies
              </h2>
            </div>

            <div className="text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>• Phenix flooring in Tempe, AZ from Flooring Team LLC</div>
                <div>• Shaw Floors flooring in Phoenix, AZ from Flooring Team LLC</div>
                <div>• American Olean flooring in Scottsdale, AZ from Flooring Team LLC</div>
                <div>• Dal Tile flooring in Gilbert, AZ from Flooring Team LLC</div>
                <div>• Marazzi Tile flooring in Mesa, AZ from Flooring Team LLC</div>
                <div>• MSI flooring in Prescott, AZ from Flooring Team LLC</div>
                <div>• Eternity Floors flooring in Tempe, AZ from Flooring Team LLC</div>
                <div>• Inhaus flooring in Phoenix, AZ from Flooring Team LLC</div>
                <div>• Kronotex flooring in Scottsdale, AZ from Flooring Team LLC</div>
                <div>• COREtec flooring in Tempe, AZ from Flooring Team LLC</div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                ELEVATE YOUR SPACE WITH Flooring Team
          </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;


