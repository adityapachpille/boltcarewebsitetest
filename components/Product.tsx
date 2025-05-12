import Image from 'next/image';

const productData = [
  {
    title: "ACEBOLT-SP",
    image: "/acebolt.jpg",
    description: "Used for effective relief from pain, inflammation, and swelling in musculoskeletal and post-operative conditions."
  },
  {
    title: "MECOLT-AF",
    image: "/mecolt.jpg",
    description: "A powerful antioxidant and nutritional supplement that supports nerve health, energy metabolism, and overall wellness."
  },

  {
    title: "PANTOLT-DSR",
    image: "/pantolt.jpg",
    description: "Used for effective relief from acid reflux, heartburn, bloating, and nausea by reducing stomach acid and improving gastric motility."
  },
  {
    title: "LEVOLT-5",
    image: "/levolt.jpg",
    description: "An effective antihistamine used to relieve symptoms of allergies such as sneezing, runny nose, and itchy or watery eyes."
  },
  {
    title: "COMMING SOON",
    image: "/commingsoon.jpg",
    description: "COMMING SOON"
  },
 
  {
    title: "COMMING SOON",
    image: "/commingsoon.jpg",
    description: "COMMING SOON"
  },
];

const Product = () => {
  return (
    <section id='product' className="py-12 px-4 md:px-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Product</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {productData.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className="w-full h-48 relative mb-4 rounded overflow-hidden">
              <Image 
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
