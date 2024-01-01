
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="container mx-auto p-4 md:p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Graph Title</CardTitle>
          <CardDescription className="text-lg text-gray-500">Graph Description</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-gray-500">
          <p>
            Date created: <time>2023-12-30</time>
          </p>
          <Button className="mt-4" variant="link">
            Go to Graph
          </Button>
        </CardContent>
      </Card>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Papers in Graph</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Paper Title</CardTitle>
            <CardDescription>Author: John Doe</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Publication Date: <time>2022-12-01</time>
            </p>
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Graph Actions</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button variant="outline">Remove Papers</Button>
          <Button variant="outline">Favorite Papers</Button>
          <Button variant="outline">Share Graph</Button>
          <Button variant="outline">Delete Graph</Button>
        </div>
      </section>
    </main>
  )
}

