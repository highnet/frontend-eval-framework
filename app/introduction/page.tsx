import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function IntroductionPage() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full min-w-0">
      <h1 className="text-3xl font-bold tracking-tight mb-6">
        Introduction to Frontend Library and Tool Evaluation
      </h1>

      <p className="mb-4">
        Making strategic decisions about frontend libraries and tools is a
        paramount step in any web development project. These foundational
        choices ripple across the entire development lifecycle, profoundly
        impacting
        <strong> developer experience</strong>,{' '}
        <strong>application performance</strong>, and the
        <strong> long-term maintainability</strong> of the codebase.
      </p>

      <p className="mb-6">
        This document establishes a structured framework for evaluating diverse
        options across critical areas of frontend development, ensuring a
        well-informed and strategic selection process. By systematically
        assessing each category, development teams can confidently choose the
        technologies that best align with their project&apos;s unique
        requirements, future scalability, and overall architectural vision.
      </p>

      <h2
        className="text-2xl font-semibold mt-8 mb-4"
        id="importance-of-strategic-choices"
      >
        The Importance of Strategic Choices
      </h2>

      <p className="mb-4">
        The initial selection of frontend technologies isn&apos;t merely a
        technical decision; it&apos;s a strategic one with far-reaching
        consequences:
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          <strong>Developer Experience (DX):</strong> The chosen stack directly
          influences how efficiently and enjoyably developers can build
          features. Factors include ease of setup, documentation quality,
          community support, and the learning curve.
        </li>
        <li>
          <strong>Application Performance:</strong> Different tools offer
          varying degrees of optimization for bundle size, rendering speed, and
          data loading, directly affecting user experience.
        </li>
        <li>
          <strong>Long-term Maintainability & Scalability:</strong> The
          longevity of an application depends on how easily it can be updated,
          debugged, and scaled. This is influenced by code organization,
          modularity, and the maturity of the chosen libraries.
        </li>
        <li>
          <strong>Cost Efficiency:</strong> While often overlooked, the right
          tooling can reduce development time, minimize bugs, and simplify
          deployments, leading to cost savings over time.
        </li>
      </ul>

      <h2
        className="text-2xl font-semibold mt-8 mb-4"
        id="key-evaluation-areas"
      >
        Key Evaluation Areas for Frontend Development
      </h2>

      <p className="mb-6">
        This framework categorizes frontend development into several core areas,
        each requiring careful consideration of available libraries and tools.
        For each area, we present common options and provide a glimpse into
        their conceptual usage.
      </p>

      <div className="flex justify-end mt-8">
        <Button asChild>
          <Link href="/core-framework">Continue to Core Framework</Link>
        </Button>
      </div>
    </div>
  );
}
