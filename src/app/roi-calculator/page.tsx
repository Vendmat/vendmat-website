'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { WhatsAppQuickAction } from '@/components/WhatsAppWidget';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    locationType: 'office',
    dailyFootfall: 500,
    avgOrderValue: 150,
    operatingHours: 24,
    currentFoodCosts: 50000,
    spaceCost: 10000,
    utilizationRate: 15 // percentage of people who would use the machine
  });

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    monthlyCosts: 0,
    monthlyProfit: 0,
    roiPercentage: 0,
    paybackPeriod: 0,
    yearlyProfit: 0,
    costSavings: 0
  });

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const calculateROI = () => {
    const { dailyFootfall, avgOrderValue, utilizationRate, currentFoodCosts, spaceCost } = formData;
    
    // Revenue calculations
    const dailyOrders = (dailyFootfall * utilizationRate) / 100;
    const dailyRevenue = dailyOrders * avgOrderValue;
    const monthlyRevenue = dailyRevenue * 30;
    
    // Cost calculations (estimated)
    const machineLeaseMonthly = 25000; // Estimated monthly lease cost
    const maintenanceMonthly = 5000;
    const electricityMonthly = 3000;
    const restockingCostPercentage = 60; // 60% of revenue goes to food costs
    const restockingCosts = monthlyRevenue * (restockingCostPercentage / 100);
    
    const totalMonthlyCosts = machineLeaseMonthly + maintenanceMonthly + electricityMonthly + restockingCosts;
    const monthlyProfit = monthlyRevenue - totalMonthlyCosts;
    
    // Cost savings from reduced traditional food service
    const costSavings = Math.min(currentFoodCosts * 0.3, spaceCost * 0.5); // Conservative savings estimate
    const netMonthlyProfit = monthlyProfit + costSavings;
    
    // ROI calculations
    const initialInvestment = 400000; // Estimated setup cost
    const roiPercentage = ((netMonthlyProfit * 12) / initialInvestment) * 100;
    const paybackPeriod = initialInvestment / netMonthlyProfit;
    const yearlyProfit = netMonthlyProfit * 12;
    
    setResults({
      monthlyRevenue: Math.round(monthlyRevenue),
      monthlyCosts: Math.round(totalMonthlyCosts),
      monthlyProfit: Math.round(netMonthlyProfit),
      roiPercentage: Math.round(roiPercentage),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      yearlyProfit: Math.round(yearlyProfit),
      costSavings: Math.round(costSavings)
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? parseFloat(value) || 0 : value
    }));
  };

  const locationTypeOptions = {
    office: { label: 'Corporate Office', defaultFootfall: 500, defaultUtilization: 20 },
    college: { label: 'Educational Institute', defaultFootfall: 1500, defaultUtilization: 25 },
    hospital: { label: 'Healthcare Facility', defaultFootfall: 800, defaultUtilization: 15 },
    coworking: { label: 'Co-working Space', defaultFootfall: 300, defaultUtilization: 30 },
    mall: { label: 'Shopping Mall', defaultFootfall: 2000, defaultUtilization: 8 },
    airport: { label: 'Airport/Transit Hub', defaultFootfall: 3000, defaultUtilization: 5 }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.05] blur-3xl" />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-5%] top-[20%] w-72 h-24 bg-gradient-to-r from-orange-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_10s_ease-in-out_infinite] transform rotate-12" />
          <div className="absolute right-[5%] bottom-[30%] w-48 h-16 bg-gradient-to-r from-red-500/[0.15] to-transparent rounded-full backdrop-blur-[2px] border border-white/[0.1] animate-[float3d_8s_ease-in-out_infinite_2s] transform -rotate-15" />
          <div className="absolute left-[10%] bottom-[20%] w-32 h-32 bg-gradient-to-r from-orange-400/[0.1] to-red-400/[0.1] rounded-full backdrop-blur-[2px] border border-white/[0.05] animate-[float3d_12s_ease-in-out_infinite_1s] transform rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8 animate-[slideInUp_1s_ease-out_0.2s]">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm text-white/60 tracking-wide font-medium">
                Calculate Your Returns
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none mb-8 animate-[slideInUp_1s_ease-out_0.4s]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                ROI
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 block font-black italic transform -skew-x-3 tracking-wider animate-[glow_3s_ease-in-out_infinite]">
                Calculator
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed max-w-4xl mx-auto mb-12 animate-[slideInUp_1s_ease-out_0.6s]">
              Calculate your return on investment with Vendmat's hot food vending solutions. 
              See how much you can save and earn with data-driven projections.
            </p>

            {/* Alert Box */}
            <div className="inline-block p-6 bg-white/[0.03] backdrop-blur-xl border border-green-500/30 rounded-2xl max-w-2xl mx-auto animate-[slideInUp_1s_ease-out_0.8s]">
              <div className="flex items-center justify-center gap-3">
                <div className="text-2xl">💡</div>
                <p className="text-green-300 font-medium">
                  Typical ROI ranges from 180% to 350% annually depending on location and foot traffic
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Input Form - Enhanced */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 blur-2xl scale-110" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
                  Your Business Details
                </h2>
                
                <div className="space-y-8">
                  {/* Location Type */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Location Type
                    </label>
                    <select
                      value={formData.locationType}
                      onChange={(e) => {
                        const newType = e.target.value as keyof typeof locationTypeOptions;
                        const defaults = locationTypeOptions[newType];
                        handleInputChange('locationType', newType);
                        handleInputChange('dailyFootfall', defaults.defaultFootfall);
                        handleInputChange('utilizationRate', defaults.defaultUtilization);
                      }}
                      className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/30"
                    >
                      {Object.entries(locationTypeOptions).map(([key, option]) => (
                        <option key={key} value={key} className="bg-gray-800 text-white">{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Daily Footfall */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Daily Footfall (People per day)
                    </label>
                    <input
                      type="number"
                      value={formData.dailyFootfall}
                      onChange={(e) => handleInputChange('dailyFootfall', e.target.value)}
                      className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/30 placeholder-gray-400"
                      min="0"
                      placeholder="Enter daily foot traffic"
                    />
                  </div>

                  {/* Utilization Rate */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Expected Usage Rate ({formData.utilizationRate}%)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={formData.utilizationRate}
                        onChange={(e) => handleInputChange('utilizationRate', e.target.value)}
                        className="w-full h-3 bg-white/[0.05] rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-3">
                        <span>1% Conservative</span>
                        <span>25% Realistic</span>
                        <span>50% Optimistic</span>
                      </div>
                    </div>
                  </div>

                  {/* Average Order Value */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Average Order Value (₹)
                    </label>
                    <input
                      type="number"
                      value={formData.avgOrderValue}
                      onChange={(e) => handleInputChange('avgOrderValue', e.target.value)}
                      className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/30 placeholder-gray-400"
                      min="0"
                      placeholder="Average order amount"
                    />
                  </div>

                  {/* Current Food Costs */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Current Monthly Food Service Costs (₹)
                    </label>
                    <input
                      type="number"
                      value={formData.currentFoodCosts}
                      onChange={(e) => handleInputChange('currentFoodCosts', e.target.value)}
                      className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/30 placeholder-gray-400"
                      min="0"
                      placeholder="Existing food service expenses"
                    />
                  </div>

                  {/* Space Cost */}
                  <div className="group/field">
                    <label className="block text-lg font-semibold text-white mb-4">
                      Monthly Space/Cafeteria Maintenance Cost (₹)
                    </label>
                    <input
                      type="number"
                      value={formData.spaceCost}
                      onChange={(e) => handleInputChange('spaceCost', e.target.value)}
                      className="w-full px-6 py-4 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 hover:bg-white/[0.05] hover:border-orange-500/30 placeholder-gray-400"
                      min="0"
                      placeholder="Space maintenance costs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results - Enhanced */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 blur-2xl scale-110" />
              <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-green-500/30 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  Your ROI Projection
                </h2>
                
                <div className="space-y-8">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group/metric relative p-6 bg-gradient-to-br from-green-500/20 to-green-400/20 border border-green-500/30 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold text-green-300 mb-2 group-hover/metric:scale-110 transition-transform duration-300">
                        {results.roiPercentage}%
                      </div>
                      <div className="text-green-100 font-medium">Annual ROI</div>
                    </div>
                    <div className="group/metric relative p-6 bg-gradient-to-br from-blue-500/20 to-blue-400/20 border border-blue-500/30 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                      <div className="text-4xl font-bold text-blue-300 mb-2 group-hover/metric:scale-110 transition-transform duration-300">
                        {results.paybackPeriod}
                      </div>
                      <div className="text-blue-100 font-medium">Months Payback</div>
                    </div>
                  </div>

                  {/* Revenue Breakdown */}
                  <div className="relative p-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      Monthly Breakdown
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl">
                        <span className="text-gray-300 font-medium">Gross Revenue</span>
                        <span className="text-green-400 font-bold text-lg">₹{results.monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl">
                        <span className="text-gray-300 font-medium">Operating Costs</span>
                        <span className="text-red-400 font-bold text-lg">₹{results.monthlyCosts.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/[0.02] rounded-xl">
                        <span className="text-gray-300 font-medium">Cost Savings</span>
                        <span className="text-green-400 font-bold text-lg">₹{results.costSavings.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-white/[0.1] pt-4">
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl">
                          <span className="text-white font-bold text-lg">Net Monthly Profit</span>
                          <span className="text-orange-400 font-bold text-2xl">₹{results.monthlyProfit.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Projection */}
                  <div className="relative p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-3xl text-center hover:scale-105 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white mb-4">Annual Projection</h3>
                    <div className="text-5xl font-bold text-orange-400 mb-4 animate-[glow_3s_ease-in-out_infinite]">
                      ₹{results.yearlyProfit.toLocaleString()}
                    </div>
                    <div className="text-orange-200 font-medium">
                      Projected annual profit after all costs
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <p className="text-gray-300 mb-6 text-lg">
                      Ready to discuss these projections with our team?
                    </p>
                    <div className="flex flex-col gap-4">
                      <WhatsAppQuickAction 
                        type="pricing"
                        className="group relative bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 overflow-hidden text-center"
                      >
                        <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">Get Detailed Quote via WhatsApp</span>
                        <div className="absolute inset-0 bg-white/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
                      </WhatsAppQuickAction>
                      <WhatsAppQuickAction 
                        type="demo"
                        className="group relative border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm text-center"
                      >
                        <span>Schedule Consultation</span>
                      </WhatsAppQuickAction>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Enhanced */}
      <section className="relative py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Why Vendmat Delivers</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400 ml-4">Strong ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our smart vending solutions are designed for maximum profitability and minimal hassle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Lower Operating Costs',
                description: 'No staff required for operation. Automated maintenance alerts. Reduced overhead compared to traditional cafeterias.'
              },
              {
                icon: '📈',
                title: 'Multiple Revenue Streams',
                description: 'Machine revenue sharing, reduced cafeteria costs, improved employee satisfaction and retention.'
              },
              {
                icon: '⚡',
                title: 'Quick Implementation',
                description: 'Setup within 2-3 weeks. Immediate revenue generation. No lengthy construction or permits required.'
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative transform hover:scale-105 transition-all duration-500">
                <div className="relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 text-center h-full">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-orange-700 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your 
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">
              Vendmat Journey?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our team will help you refine these projections and create a customized business plan for your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <WhatsAppQuickAction 
              type="pricing"
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Get Personalized Quote</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </WhatsAppQuickAction>
            <WhatsAppQuickAction 
              type="demo"
              className="group relative border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/50 overflow-hidden text-lg"
            >
              <span className="relative z-10">Book Demo & Site Visit</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </WhatsAppQuickAction>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;