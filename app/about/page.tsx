import GoogleAds from '@/components/GoogleAds';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About the Author
        </h1>
        
        <div className="mb-12 p-6 bg-gradient-to-r from-[#87a96b] to-[#a8c088] rounded-lg text-white">
          <p className="text-xl leading-relaxed mb-0">
            Bridging the gap between traditional Ayurvedic medicine and modern data science 
            to deliver evidence-based insights on metabolic health.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dual Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 border-l-4 border-[#d4a574] bg-gray-50 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Scientist</h3>
              <p className="text-gray-700 leading-relaxed">
                With a background in data science, I bring analytical rigor to health research. 
                I analyze clinical studies, interpret statistical findings, and translate complex 
                research into actionable insights. My approach is grounded in evidence, 
                reproducibility, and scientific integrity.
              </p>
            </div>
            <div className="p-6 border-l-4 border-[#87a96b] bg-gray-50 rounded">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ayurvedic Doctor (BAMS)</h3>
              <p className="text-gray-700 leading-relaxed">
                As a Bachelor of Ayurvedic Medicine and Surgery (BAMS), I have deep knowledge 
                of traditional protocols, herbal formulations, and the holistic principles of 
                Ayurveda. This foundation allows me to understand the historical context and 
                traditional applications of natural remedies.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            AyurMetabolics.fit was created to address a critical gap in health information: 
            the need for content that respects both traditional wisdom and modern scientific 
            evidence. Too often, we see either rigid adherence to tradition without scientific 
            validation, or complete dismissal of ancient knowledge in favor of only recent research.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My goal is to provide content that:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Evaluates traditional protocols through the lens of modern research</li>
            <li>Presents clinical studies and their implications clearly</li>
            <li>Respects the complexity of both Ayurvedic principles and metabolic science</li>
            <li>Offers practical, evidence-based strategies for metabolic health</li>
            <li>Maintains transparency about what we know, what we don't, and what needs more research</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Approach to Content</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every article on this site is written with a commitment to:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#87a96b] mr-3 font-bold">✓</span>
                <span><strong>Evidence-based analysis:</strong> Citing peer-reviewed research and clinical studies</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87a96b] mr-3 font-bold">✓</span>
                <span><strong>Traditional context:</strong> Explaining Ayurvedic principles and historical use</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87a96b] mr-3 font-bold">✓</span>
                <span><strong>Critical evaluation:</strong> Acknowledging limitations and areas needing more research</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#87a96b] mr-3 font-bold">✓</span>
                <span><strong>Practical application:</strong> Providing actionable insights for readers</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The information provided on this website is for educational purposes only and is not 
            intended as medical advice. Always consult with qualified healthcare professionals 
            before making changes to your health regimen, especially if you have existing 
            medical conditions or are taking medications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            While I am a qualified Ayurvedic doctor, the content here is informational and 
            should not replace personalized medical consultation.
          </p>
        </section>
      </article>

      <div className="mt-12">
        <GoogleAds adSlot="1234567890" />
      </div>
    </div>
  );
}

