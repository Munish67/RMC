import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

const StartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Sector - Website Info */}
          <div className="text-white space-y-8">
            {/* Logo and Website Name */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <img 
                  src="/hari_logo.img-removebg-preview.png" 
                  alt="Rate My Campus Logo" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                  RATE MY CAMPUS
                </h1>
                <p className="text-blue-200 text-lg">
                  Bridging education & careers
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                DISCOVER YOUR PERFECT COLLEGE
              </h2>
              
              {/* Description */}
              <div className="space-y-4 text-blue-100">
                <p className="text-lg leading-relaxed">
                  Your trusted platform for finding the perfect college through authentic student reviews, 
                  comprehensive rankings, and detailed campus insights.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Read genuine reviews from current and former students</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Discover top-rated colleges based on comprehensive rankings</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Access detailed information about programs and campus life</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Make informed decisions about your educational future</p>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="pt-6">
                <button className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3 text-lg">
                  <span>GET STARTED</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8">
              <p className="text-blue-300 text-sm">
                Copyright © 2025 RATE MY CAMPUS
              </p>
            </div>
          </div>

          {/* Right Sector - Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
              </div>

              {/* Main Illustration Area */}
              <div className="relative h-96 flex items-center justify-center">
                {/* Campus Building Illustration */}
                <div className="relative">
                  {/* Building Structure */}
                  <div className="bg-white bg-opacity-20 rounded-lg p-8 backdrop-blur-sm">
                    <div className="space-y-4">
                      {/* University Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="bg-white bg-opacity-30 p-4 rounded-full">
                          <GraduationCap className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      
                      {/* Students Illustration */}
                      <div className="flex justify-center space-x-4">
                        <div className="bg-white bg-opacity-25 w-12 h-12 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                        </div>
                        <div className="bg-white bg-opacity-25 w-12 h-12 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                        </div>
                        <div className="bg-white bg-opacity-25 w-12 h-12 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-200 rounded-full"></div>
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center space-x-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-yellow-300 rounded-sm transform rotate-45"></div>
                        ))}
                      </div>

                      {/* College Info Cards */}
                      <div className="space-y-2 mt-6">
                        <div className="bg-white bg-opacity-20 h-3 rounded-full"></div>
                        <div className="bg-white bg-opacity-15 h-3 rounded-full w-4/5"></div>
                        <div className="bg-white bg-opacity-10 h-3 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 bg-white bg-opacity-20 w-8 h-8 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 bg-white bg-opacity-15 w-6 h-6 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 -right-8 bg-white bg-opacity-10 w-4 h-4 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>

              {/* Bottom Quote */}
              <div className="text-center mt-6">
                <p className="text-blue-100 text-sm italic">
                  "Knowledge opens doors, but caution keeps you from falling through them"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;