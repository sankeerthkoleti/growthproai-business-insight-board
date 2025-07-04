
import React, { useState } from 'react';
import BusinessForm from '../components/BusinessForm';
import BusinessCard from '../components/BusinessCard';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [businessData, setBusinessData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBusinessSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/business-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const data = await response.json();
        setBusinessData({ ...data, ...formData });
      }
    } catch (error) {
      console.error('Error fetching business data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessData) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/regenerate-headline?name=${encodeURIComponent(businessData.name)}&location=${encodeURIComponent(businessData.location)}`
      );
      
      if (response.ok) {
        const data = await response.json();
        setBusinessData(prev => ({ ...prev, headline: data.headline }));
      }
    } catch (error) {
      console.error('Error regenerating headline:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Business Insights Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant insights into your local business performance with AI-powered SEO headlines and simulated Google Business data
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              <Card className="p-6 bg-white shadow-lg border-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Enter Business Details
                </h2>
                <BusinessForm 
                  onSubmit={handleBusinessSubmit} 
                  isLoading={isLoading}
                />
              </Card>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              {businessData ? (
                <BusinessCard 
                  data={businessData}
                  onRegenerateHeadline={handleRegenerateHeadline}
                  isLoading={isLoading}
                />
              ) : (
                <Card className="p-8 bg-white shadow-lg border-0 text-center">
                  <div className="text-gray-400">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-600 mb-2">
                      Ready to Analyze
                    </h3>
                    <p className="text-sm text-gray-500">
                      Enter your business details to see insights and AI-generated SEO headlines
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <p className="text-sm">
            Powered by GrowthProAI • Simulated data for demonstration purposes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
