import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeBlock } from './code-block';

interface CodeExample {
  label: string;
  code: string;
}

interface DifferenceItem {
  title: string;
  description: string;
  codeExamples?: CodeExample[];
}

interface KeyDifferencesProps {
  title?: string;
  differences: DifferenceItem[];
}

export function KeyDifferences({
  title = 'Key Differences',
  differences,
}: KeyDifferencesProps) {
  return (
    <div className="mt-12 mb-8 w-full max-w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full">
        {differences.map((item, index) => (
          <Card key={index} className="h-full w-full min-w-0">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {item.codeExamples && item.codeExamples.length > 0 && (
                <div className="space-y-4 w-full min-w-0">
                  {item.codeExamples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="w-full min-w-0">
                      <h5 className="font-medium text-sm mb-2">
                        {example.label}:
                      </h5>
                      <div className="w-full min-w-0">
                        <CodeBlock language="tsx" code={example.code} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
