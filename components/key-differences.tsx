import { Badge } from '@/components/ui/badge';
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
  considerations?: string[];
  badges?: string[];
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
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {differences.map((item, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.badges && item.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            <CardContent className="space-y-4">
              {item.codeExamples && item.codeExamples.length > 0 && (
                <div className="space-y-4">
                  {' '}
                  {item.codeExamples.map((example, exampleIndex) => (
                    <div key={exampleIndex}>
                      <h5 className="font-medium text-sm mb-2">
                        {example.label}:
                      </h5>
                      <CodeBlock language="tsx" code={example.code} />
                    </div>
                  ))}
                </div>
              )}
              {item.considerations && item.considerations.length > 0 && (
                <>
                  <h4 className="font-medium mb-2 text-sm">Consider when:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {item.considerations.map(
                      (consideration, considerationIndex) => (
                        <li
                          key={considerationIndex}
                          className="flex items-start"
                        >
                          <span className="inline-block w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {consideration}
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
