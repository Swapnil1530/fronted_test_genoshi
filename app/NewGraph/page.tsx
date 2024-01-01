"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";
import BackButton from "@/components/BackButton";
import { CurvedlineChart } from "@/components/Chart";

export default function Component() {
  return (
    <div className="mx-4 sm:mx-auto sm:max-w-md lg:max-w-2xl">
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">New Graph</h1>
        <form className="space-y-8">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter graph title" />
            <Label htmlFor="description">Description</Label>
            <Input id="description" placeholder="Enter graph description" />
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Paper Selection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Upload Papers</h3>
                <Button variant="outline">Upload Files</Button>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Select from Favorites</h3>
                <select className="w-full h-10 rounded-md ">
                  <option value="">Select a paper</option>
                  <option value="paper1">Paper 1</option>
                  <option value="paper2">Paper 2</option>
                </select>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Graph Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Layout</h3>
                <select className="w-full h-10  rounded-md">
                  <option value="">Select layout</option>
                  <option value="layout1">Layout 1</option>
                  <option value="layout2">Layout 2</option>
                </select>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Colors</h3>
                <select className="w-full h-10  rounded-md ">
                  <option value="">Select color scheme</option>
                  <option value="color1">Color Scheme 1</option>
                  <option value="color2">Color Scheme 2</option>
                </select>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Other Options</h3>
                <Input placeholder="Specify other options" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <CurvedlineChart className="w-full aspect-[4/3]" />
            </CardContent>
          </Card>
          <div className="flex justify-between ">
            <BackButton text="Back to Home" href="/" />
            <Button className="">Create Graph</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
