import { BlogPost, ResearchStudy } from './types';

// Sample blog posts - in production, this would come from a database or CMS
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Visceral Fat: The Hidden Health Risk',
    excerpt: 'Visceral fat, unlike subcutaneous fat, wraps around your internal organs and poses significant metabolic risks. This comprehensive guide explores the science behind visceral fat accumulation and evidence-based strategies for reduction.',
    content: `# Understanding Visceral Fat: The Hidden Health Risk

Visceral fat, unlike subcutaneous fat, wraps around your internal organs and poses significant metabolic risks. This comprehensive guide explores the science behind visceral fat accumulation and evidence-based strategies for reduction.

## What is Visceral Fat?

Visceral fat is the fat stored within the abdominal cavity, surrounding organs like the liver, pancreas, and intestines. Unlike subcutaneous fat (the fat you can pinch), visceral fat is metabolically active and can interfere with organ function.

## The Metabolic Impact

Research has shown that visceral fat is strongly associated with:
- Insulin resistance
- Type 2 diabetes
- Cardiovascular disease
- Metabolic syndrome

## Ayurvedic Perspective

In Ayurveda, excess visceral fat is often linked to an imbalance in Kapha dosha, particularly when combined with impaired Agni (digestive fire). Traditional protocols focus on kindling Agni while supporting healthy metabolism.

## Evidence-Based Reduction Strategies

1. **Dietary Modifications**: Focus on whole foods, reduce processed carbohydrates
2. **Regular Exercise**: Both aerobic and resistance training show efficacy
3. **Stress Management**: Cortisol plays a key role in visceral fat accumulation
4. **Herbal Support**: Certain herbs have shown promise in clinical studies

## Conclusion

Reducing visceral fat requires a comprehensive approach that addresses diet, exercise, stress, and metabolic health. The integration of traditional wisdom with modern science offers the most promising path forward.`,
    category: 'Visceral Fat',
    author: 'Dr. [Your Name]',
    publishedAt: '2024-12-20',
    likes: 42,
    comments: []
  },
  {
    id: '2',
    title: 'Triphala and Metabolic Health: A Clinical Review',
    excerpt: 'Triphala, the classic Ayurvedic formulation of three fruits, has been studied for its effects on metabolic parameters. This article reviews the clinical evidence and practical applications.',
    content: `# Triphala and Metabolic Health: A Clinical Review

Triphala, the classic Ayurvedic formulation of three fruits (Amalaki, Bibhitaki, Haritaki), has been studied for its effects on metabolic parameters. This article reviews the clinical evidence and practical applications.

## Traditional Use

Triphala has been used for thousands of years in Ayurvedic medicine for digestive health, detoxification, and metabolic support.

## Clinical Evidence

Recent studies have investigated Triphala's effects on:
- Blood glucose levels
- Lipid profiles
- Body weight
- Inflammatory markers

## Mechanisms of Action

The active compounds in Triphala appear to work through multiple pathways, including:
- Antioxidant activity
- Anti-inflammatory effects
- Gut microbiome modulation
- Improved insulin sensitivity

## Practical Applications

For those interested in incorporating Triphala, it's important to:
- Start with appropriate dosages
- Consider individual constitution (Prakriti)
- Monitor metabolic parameters
- Work with a qualified practitioner

## Conclusion

While promising, more large-scale clinical trials are needed to fully understand Triphala's role in metabolic health management.`,
    category: 'Herbal Protocols',
    author: 'Dr. [Your Name]',
    publishedAt: '2024-12-18',
    likes: 38,
    comments: []
  },
  {
    id: '3',
    title: 'The Science of Metabolic Flexibility',
    excerpt: 'Metabolic flexibility refers to the body\'s ability to efficiently switch between fuel sources. This article explores the science behind this concept and its implications for health.',
    content: `# The Science of Metabolic Flexibility

Metabolic flexibility refers to the body's ability to efficiently switch between fuel sources. This article explores the science behind this concept and its implications for health.

## Defining Metabolic Flexibility

Metabolic flexibility is the capacity of an organism to adapt fuel oxidation to fuel availability. In practical terms, it means your body can efficiently use both glucose and fatty acids for energy.

## Why It Matters

Poor metabolic flexibility is associated with:
- Insulin resistance
- Weight gain
- Fatigue
- Increased disease risk

## Factors Affecting Metabolic Flexibility

Several factors influence metabolic flexibility:
- Diet composition
- Physical activity levels
- Sleep quality
- Stress levels
- Genetic factors

## Improving Metabolic Flexibility

Evidence-based strategies include:
- Intermittent fasting protocols
- Low-carbohydrate periods
- Regular exercise
- Adequate sleep
- Stress management

## Ayurvedic Insights

The concept of Agni (digestive fire) in Ayurveda aligns closely with metabolic flexibility. Supporting Agni through diet, lifestyle, and herbs can enhance metabolic function.

## Conclusion

Metabolic flexibility is a key marker of metabolic health. Understanding and improving it can have profound effects on overall well-being.`,
    category: 'Metabolic Science',
    author: 'Dr. [Your Name]',
    publishedAt: '2024-12-15',
    likes: 55,
    comments: []
  }
];

export const researchStudies: ResearchStudy[] = [
  {
    id: '1',
    title: 'Effect of Triphala on Metabolic Syndrome: A Randomized Controlled Trial',
    authors: 'Sharma, P., et al.',
    journal: 'Journal of Ayurvedic and Integrative Medicine',
    year: 2023,
    doi: '10.1016/j.jaim.2023.123456',
    abstract: 'This randomized controlled trial evaluated the effects of Triphala supplementation on metabolic parameters in individuals with metabolic syndrome. The study found significant improvements in fasting glucose, lipid profiles, and body weight over 12 weeks.',
    relevance: 'Supports the use of Triphala as an adjunct therapy for metabolic syndrome, aligning with traditional Ayurvedic protocols.'
  },
  {
    id: '2',
    title: 'Visceral Fat Reduction Through Lifestyle Intervention: A Meta-Analysis',
    authors: 'Chen, L., et al.',
    journal: 'Metabolism: Clinical and Experimental',
    year: 2024,
    doi: '10.1016/j.metabol.2024.567890',
    abstract: 'A comprehensive meta-analysis of 45 studies examining lifestyle interventions for visceral fat reduction. Combined diet and exercise interventions showed the most significant effects, with an average reduction of 15-20% in visceral fat area.',
    relevance: 'Provides strong evidence for the effectiveness of comprehensive lifestyle approaches to visceral fat reduction.'
  },
  {
    id: '3',
    title: 'Curcumin and Metabolic Health: Mechanisms and Clinical Applications',
    authors: 'Patel, R., et al.',
    journal: 'Nutrition Reviews',
    year: 2023,
    abstract: 'This review examines the mechanisms by which curcumin, a key compound in turmeric, influences metabolic health. The review covers anti-inflammatory effects, insulin sensitivity improvement, and lipid metabolism modulation.',
    relevance: 'Highlights the scientific basis for turmeric\'s traditional use in metabolic health, supporting evidence-based herbal protocols.'
  }
];

