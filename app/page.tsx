// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client";

import React, { useState } from 'react';
// import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const testimonials = [
    {
      name: "Emily Thompson",
      role: "Student",
      rating: 5,
      comment: "The digital menu and scheduling system has made my dining experience so much more convenient!",
      image: "https://public.readdy.ai/ai/img_res/aecae5585fb5a9d9d407b54480c43a67.jpg"
    },
    {
      name: "Michael Chen",
      role: "Faculty Member",
      rating: 5,
      comment: "Excellent variety of healthy options. The dietary tracking feature is particularly helpful.",
      image: "https://public.readdy.ai/ai/img_res/49691b0b81c3bd874049d929766a2eb3.jpg"
    },
    {
      name: "Sarah Anderson",
      role: "Staff",
      rating: 5,
      comment: "The online payment system is seamless, and the food quality is consistently great!",
      image: "https://public.readdy.ai/ai/img_res/4e4a3ab5f9e60cbda0ee81b5346864dd.jpg"
    }
  ];

  const features = [
    {
      icon: "fa-solid fa-utensils",
      title: "Digital Menu Management",
      description: "Access daily menus and nutritional information at your fingertips"
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Online Payment System",
      description: "Secure and convenient payment options for all meal plans"
    },
    {
      icon: "fa-solid fa-calendar-check",
      title: "Meal Scheduling",
      description: "Plan your meals in advance and never miss a meal time"
    },
    {
      icon: "fa-solid fa-heart",
      title: "Dietary Preferences",
      description: "Customize your meal plans according to your dietary needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-plate-wheat text-2xl text-blue-600"></i>
              <span className="text-xl font-semibold">SmartMess</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 cursor-pointer">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 cursor-pointer">Menu</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="!rounded-button" onClick={() => setShowLoginDialog(true)}>
                Login
              </Button>
              <Button className="!rounded-button">Register</Button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden pt-16">
          <div className="p-4 space-y-4">
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">Home</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">About</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">Menu</a>
            <a href="#" className="block text-gray-600 hover:text-blue-600 py-2">Contact</a>
            <Button variant="outline" className="w-full !rounded-button" onClick={() => setShowLoginDialog(true)}>
              Login
            </Button>
            <Button className="w-full !rounded-button">Register</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/af38eb16236c5b44342ba62f5ca3f92d.jpg"
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">Welcome to Smart Mess Management</h1>
            <p className="text-xl text-gray-700 mb-8">Experience hassle-free dining with our digital mess management system. Schedule meals, track nutrition, and enjoy a variety of delicious options.</p>
            <div className="flex gap-4">
              <Button size="lg" className="!rounded-button">Quick Register</Button>
              <Button size="lg" variant="outline" className="!rounded-button">View Todays Menu</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Features for Smart Dining</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <i className={`${feature.icon} text-3xl text-blue-600 mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Today Special Menu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://public.readdy.ai/ai/img_res/079588292a618771ab29f819f74c3491.jpg"
                className="w-full h-48 object-cover"
                alt="Breakfast"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Breakfast</h3>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">Vegetarian</Badge>
                  <Badge variant="secondary">Healthy</Badge>
                </div>
                <p className="text-gray-600 mb-4">Continental breakfast with fresh fruits, eggs, and premium coffee</p>
                <Button variant="outline" className="w-full !rounded-button">View Details</Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://public.readdy.ai/ai/img_res/762ab0f73420da37785f694b85de2ddc.jpg"
                className="w-full h-48 object-cover"
                alt="Lunch"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Lunch</h3>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">High Protein</Badge>
                  <Badge variant="secondary">Gluten Free</Badge>
                </div>
                <p className="text-gray-600 mb-4">Grilled chicken with quinoa and fresh seasonal vegetables</p>
                <Button variant="outline" className="w-full !rounded-button">View Details</Button>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <img 
                src="https://public.readdy.ai/ai/img_res/4f0a0576f78c67f7413674b28f6acd69.jpg"
                className="w-full h-48 object-cover"
                alt="Dinner"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Dinner</h3>
                <div className="flex gap-2 mb-3">
                  <Badge variant="secondary">Premium</Badge>
                  <Badge variant="secondary">Seafood</Badge>
                </div>
                <p className="text-gray-600 mb-4">Grilled salmon with asparagus and herb-roasted potatoes</p>
                <Button variant="outline" className="w-full !rounded-button">View Details</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.comment}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Quick Registration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Get Started Today</h2>
            <Card className="p-8">
              <div className="grid gap-6">
                <Input type="text" placeholder="Full Name" className="border-gray-300" />
                <Input type="email" placeholder="Email Address" className="border-gray-300" />
                <Input type="tel" placeholder="Contact Number" className="border-gray-300" />
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option value="">Select Meal Plan</option>
                  <option value="basic">Basic Plan</option>
                  <option value="standard">Standard Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
                <Button size="lg" className="w-full !rounded-button">Register Now</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SmartMess</h3>
              <p className="text-gray-400">Making campus dining smarter and more convenient.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Plans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li><i className="fa-solid fa-location-dot mr-2"></i>123 University Ave</li>
                <li><i className="fa-solid fa-phone mr-2"></i>+1 234 567 8900</li>
                <li><i className="fa-solid fa-envelope mr-2"></i>info@smartmess.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-xl">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SmartMess. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to SmartMess</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input type="email" placeholder="Email" className="border-gray-300" />
            <Input type="password" placeholder="Password" className="border-gray-300" />
            <Button className="w-full !rounded-button">Login</Button>
          </div>
          <p className="text-center text-sm text-gray-600">Don&#39;t have an account? <a href="#" className="text-blue-600 hover:underline">Register here</a>
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;

