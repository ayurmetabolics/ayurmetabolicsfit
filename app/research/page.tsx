import { researchStudies } from '@/lib/data';
import GoogleAds from '@/components/GoogleAds';

export default function Research() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Research & Evidence
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A curated collection of clinical studies and research relevant to Ayurveda, 
          metabolic health, and visceral fat reduction. Each study is analyzed for 
          its methodology, findings, and practical implications.
        </p>
      </div>

      <div className="mb-8">
        <GoogleAds adSlot="1234567890" />
      </div>

      <div className="space-y-12">
        {researchStudies.map((study) => (
          <article
            key={study.id}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {study.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span>
                  <strong className="text-gray-900">Authors:</strong> {study.authors}
                </span>
                <span>
                  <strong className="text-gray-900">Journal:</strong> {study.journal}
                </span>
                <span>
                  <strong className="text-gray-900">Year:</strong> {study.year}
                </span>
                {study.doi && (
                  <span>
                    <strong className="text-gray-900">DOI:</strong>{' '}
                    <a
                      href={`https://doi.org/${study.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#87a96b] hover:underline"
                    >
                      {study.doi}
                    </a>
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Abstract</h3>
              <p className="text-gray-700 leading-relaxed">{study.abstract}</p>
            </div>

            <div className="bg-[#87a96b] bg-opacity-10 border-l-4 border-[#87a96b] p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Relevance to AyurMetabolics
              </h3>
              <p className="text-gray-700 leading-relaxed">{study.relevance}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          About This Collection
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This research collection is continuously updated as new studies are published. 
          Studies are selected based on:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Methodological rigor and study design quality</li>
          <li>Relevance to Ayurvedic protocols and metabolic health</li>
          <li>Clinical significance and practical applications</li>
          <li>Publication in peer-reviewed journals</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          For questions about specific studies or to suggest research for inclusion, 
          please reach out through the contact information provided.
        </p>
      </div>

      <div className="mt-12">
        <GoogleAds adSlot="1234567890" />
      </div>
    </div>
  );
}

