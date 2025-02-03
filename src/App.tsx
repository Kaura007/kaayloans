import React from 'react';
import {
  BadgeCheck,
  Clock,
  CreditCard,
  DollarSign,
  Mail,
  MapPin,
  Percent,
  Phone,
  Shield,
  ThumbsUp,
  Wallet,
} from 'lucide-react';
import TeamSection from './components/TeamSection';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content: "Kaayloans made the entire process seamless. Their transparent terms and quick approval helped me expand my business.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Michael Chen",
    role: "Homeowner",
    content: "The flexible repayment options and low interest rates made Kaayloans the perfect choice for my home renovation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    content: "I was impressed by their professional service and clear communication throughout the loan process.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
];

const faqs = [
  {
    question: "How quickly can I get approved?",
    answer: "Most applications are processed within 24-48 hours, with funds typically disbursed within 3-5 business days after approval.",
  },
  {
    question: "What documents do I need?",
    answer: "Basic requirements include valid ID, proof of income, and bank statements from the last 3 months.",
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We believe in complete transparency. All fees and charges are clearly stated upfront.",
  },
  {
    question: "What are the interest rates?",
    answer: "Our interest rates start from 5.99% APR, depending on your credit score and loan terms.",
  },
];

const benefits = [
  {
    icon: <Percent className="w-8 h-8 text-blue-600" />,
    title: "Low Interest Rates",
    description: "Competitive rates starting from 5.99% APR",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
    title: "No Hidden Charges",
    description: "Complete transparency in all our dealings",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Quick Processing",
    description: "Get approved within 24-48 hours",
  },
  {
    icon: <Wallet className="w-8 h-8 text-blue-600" />,
    title: "Flexible Repayment",
    description: "Choose terms that work for you",
  },
];

function App() {
  const handleContactClick = () => {
    window.location.href = 'mailto:Kaayloans.um.flrda.lendn@gmail.com';
  };

  const scrollToTeam = () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-8 h-8" />
            <span className="text-xl font-bold">Kaayloans</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTeam}
              className="text-white hover:text-blue-200 transition duration-300"
            >
              Meet Our Team
            </button>
            <button
              onClick={handleContactClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 animate-fadeInUp">
            Your Trusted Partner for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"> Quick and Reliable Loans</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl mb-12 text-blue-100 animate-fadeInUp-delay-1">
            <span className="inline-block px-2 py-1 bg-blue-700/30 rounded-lg backdrop-blur-sm">
              Flexible terms. Transparent process. Fast approvals.
            </span>
          </p>
          <button
            onClick={handleContactClick}
            className="animate-fadeInUp-delay-2 bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose Kaayloans?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-lg font-semibold">Secure & Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-8 h-8 text-blue-600" />
              <span className="text-lg font-semibold">Licensed Lender</span>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <span className="text-lg font-semibold">Best Rates Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
                  />
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="w-6 h-6" />
                <span className="text-xl font-bold">Kaayloans</span>
              </div>
              <p className="text-blue-200">Your financial growth partner</p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:Kaayloans.um.flrda.lendn@gmail.com" className="hover:text-blue-200 transition duration-300">
                  Kaayloans.um.flrda.lendn@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <div className="flex flex-col items-end">
                  <a href="tel:+19843829784" className="hover:text-blue-200 transition duration-300">
                    +1 (984) 382‑9784
                  </a>
                  <a href="tel:+13465396305" className="hover:text-blue-200 transition duration-300">
                    +1 (346) 539‑6305
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <a 
                  href="https://maps.google.com/?q=1130+Tenth+Ave,+San+Diego,+CA+92101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition duration-300"
                >
                  1130 Tenth Ave, San Diego, CA 92101
                </a>
              </div>
              <button
                onClick={handleContactClick}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
