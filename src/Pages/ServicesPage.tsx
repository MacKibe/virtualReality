import content from "../assets/content.jpg";
import media from "../assets/media.jpg";
import email from "../assets/email.jpg";
import ppa from "../assets/ppa.jpg";
import html from "../assets/html.jpg";
import seo from "../assets/seo.jpg";
const ServicesPage = () => {
  return (
    <div className="py-8">
      <div className="w-[75%] mx-auto">
        <div>
          <h2 className="text-5xl text-[#00ADB5]">Our Services</h2>
          <p className="my-4">
            At Virtual Reality Marketing Agency, we specialize in cutting-edge
            digital marketing solutions designed to elevate your brand, increase
            engagement, and drive measurable results. Whether you’re looking to
            boost your online presence, generate high-quality leads, or enhance
            customer retention, our expert team is here to craft tailored
            strategies that align with your business goals.
          </p>
          <p className="">
            We blend creativity with data-driven insights to deliver campaigns
            that truly make an impact. From SEO and social media marketing to
            content creation and paid advertising, we leverage the latest
            industry trends and technology to maximize your ROI.
          </p>
        </div>
        <ol>
          <li className="flex flex-row-reverse justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={seo} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">
                Search Engine Optimization (SEO)
              </h3>
              <p>
                Get your business found online! Our SEO strategies improve your
                website’s ranking on Google, driving more organic traffic and
                potential customers to your site. We optimize content, keywords,
                and technical aspects to ensure long-term success.
              </p>
            </div>
          </li>
          <li className="flex justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={content} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">Content Marketing</h3>
              <p>
                Engage and inform your audience with valuable content. From blog
                posts and videos to infographics and eBooks, we create
                compelling content that builds trust, boosts brand awareness,
                and drives conversions.
              </p>
            </div>
          </li>
          <li className="flex flex-row-reverse justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={media} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">
                Social Media Marketing
              </h3>
              <p>
                Grow your brand’s presence on social media! We craft engaging
                posts, run targeted campaigns, and interact with your audience
                to increase brand awareness, customer engagement, and sales
                across platforms like Facebook, Instagram, LinkedIn, and
                Twitter.
              </p>
            </div>
          </li>
          <li className="flex justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">Web Development</h3>
              <p>
                Your website is your digital storefront—make it stand out! We
                design and develop fast, responsive, and user-friendly websites
                that reflect your brand, improve user experience, and convert
                visitors into loyal customers.
              </p>
            </div>
          </li>
          <li className="flex flex-row-reverse justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={ppa} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">
                Pay Per Click Advertising
              </h3>
              <p>
                Get instant traffic and leads with paid ads! Our PPC campaigns
                on Google Ads and social media ensure your business reaches the
                right audience at the right time, maximizing your return on
                investment (ROI) with cost-effective advertising.
              </p>
            </div>
          </li>
          <li className="flex justify-center items-center gap-[5%] my-8 p-[5%] bg-white shadow-xl">
            <div>
              <img src={email} alt="" />
            </div>
            <div>
              <h3 className="text-2xl text-[#A100F2] my-4">
                Email & Influencer Marketing
              </h3>
              <p>
                Stay connected with your audience! Our email campaigns keep
                customers engaged with personalized offers and updates, while
                influencer partnerships help expand your brand’s reach,
                credibility, and sales through trusted voices in your industry.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ServicesPage;
