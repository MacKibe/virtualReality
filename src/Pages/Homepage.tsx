import Hero from '../Components/Hero'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import WhyUs from '../Components/WhyUs'
import OurServices from '../Components/OurServices'
import TheTeam from '../Components/TheTeam'
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'
const Homepage = () => {
    return (
      <div className=''>
  
        {/* Hero */}
        <Hero />
  
        {/* Why Choose Us */}
        <WhyUs />
  
        {/* Our Services */}
        <OurServices />
  
        {/* Our Team */}
        <TheTeam />
  
        {/* Contact Us / Call to Action */}
        <ContactUs/>
      </div>
    )
  }
  

export default Homepage