import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DifferenceItem {
  title: string
  description: string
  considerations?: string[]
  badges?: string[]
}

interface KeyDifferencesProps {
  title?: string
  differences: DifferenceItem[]
}

export function KeyDifferences({ title = "Key Differences", differences }: KeyDifferencesProps) {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {differences.map((item, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              {item.badges && item.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>
            {item.considerations && item.considerations.length > 0 && (
              <CardContent>
                <h4 className="font-medium mb-2 text-sm">Consider when:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {item.considerations.map((consideration, considerationIndex) => (
                    <li key={considerationIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {consideration}
                    </li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}