// Import SVGs from src/assets/
import CustomPort from '../../assets/product/custom-port.svg';
import LaunchStore from '../../assets/product/launch-store.svg';
import InvSet from '../../assets/product/inv-set.svg';
import ManagLead from '../../assets/product/manag-lead.svg';
import SignUp from '../../assets/product/signup.svg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const Products4 = () => {
  const steps = [
    { id: '01', title: 'Sign Up', img: SignUp, desc: 'Create an Account and Choose Your Plan to Set Up Your CozyInvite Account' },
    { id: '02', title: 'Customize Portfolio', img: CustomPort, desc: 'Personalize Your Webpage by uploading Your Best Work and Customizing Your Portfolio' },
    { id: '03', title: 'Set Up Invitations', img: InvSet, desc: 'Design and Send Customized Digital Invitations Using Our Templates' },
    { id: '04', title: 'Manage Leads', img: ManagLead, desc: 'Track and Manage Client Inquiries with Our Lead Generation Panel' },
    { id: '05', title: 'Launch Your Store', img: LaunchStore, desc: 'Sell Products with an Online Store and Integrated Billing' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Why Choose CozyInvite section */}
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Why Choose CozyInvite?</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Streamline operations by consolidating your online presence, leads, and sales. Enhance your studio's image with a polished design. Increase efficiency with automated tools and seamless integrations. Boost revenue with easy-to-use e-commerce features.
        </p>
      </section>

      {/* Our 5-Step Success Blueprint section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">Our 5-Step Success Blueprint</h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {steps.map(step => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="relative bg-white rounded-lg shadow-md px-4 py-4 border border-gray-400 flex flex-col items-center text-center"
            >
              {/* Step Number on Left */}
              <div className="absolute left-4 top-4 text-gray-300 font-bold text-4xl">{step.id}</div>

              {/* Centered Content */}
              <img src={step.img} alt={step.title} className="w-14 h-14 mb-3 mt-2" />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Products4;
