import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div>
      <div className="mb-6">
        <Skeleton className="h-8 w-48 mb-2" />
        <Skeleton className="h-4 w-64" />
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32 mb-1" />
          <Skeleton className="h-4 w-48" />
        </CardHeader>
        <CardContent>
          <div className="relative border-l pl-6 ml-3 space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                <Skeleton className="absolute -left-10 p-1 rounded-full h-8 w-8" />
                <div className="mb-1">
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-6 w-48 mb-1" />
                <Skeleton className="h-4 w-64 mb-2" />
                <div className="flex gap-1">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-20" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

