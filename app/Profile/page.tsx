"use client";
import Image from "next/image";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import BackButton from "@/components/BackButton";

export default function Component() {
  return (
    <>
      <main className="p-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    alt="User's name"
                    src="/placeholder-avatar.jpg"
                  />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-xl">Swapnil1530</h3>
                  <p className="text-gray-500">patelswapnil438@gmail.com</p>
                </div>
              </div>
              <p className="text-gray-500">Bio: Next js Full Stack Developer</p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-lg">Pro Plan Plan</p>
              <p className="text-gray-500">
                Status:{" "}
                <span className="text-green-700 font-semibold"> Active </span>
              </p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Your Usage Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold text-2xl">20</h3>
                  <p>Graphs Created</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">8</h3>
                  <p>Graphs Shared</p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">50</h3>
                  <p>Papers Collected</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Created a new graph: Graph Title</li>
                <li>Added a new paper to: Collection Name</li>
                <li>Shared a graph: Graph Title</li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Button className="w-1/3">
              <Link href="/NewGraph">Create New Graph</Link>
            </Button>
            <Button className="w-1/3">Share Graph</Button>
            <Button className="w-1/3">Upload Papers</Button>
          </div>
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Saved Graphs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Graph Thumbnail"
                      className="w-20 h-20"
                      height="100"
                      src=""
                      width="100"
                    />
                    <div>
                      <Link href="GraphDetails">
                        <h3 className="font-bold">Graph 1 </h3>
                      </Link>
                      <p className="text-gray-500">Created on: 30-12-2023</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Graph Thumbnail"
                      className="w-20 h-20"
                      height="100"
                      src=""
                      width="100"
                    />
                    <div>
                      <Link href="GraphDetails">
                        <h3 className="font-bold">Graph 2</h3>
                      </Link>
                      <p className="text-gray-500">Created on: 30-12-2023</p>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <div className="flex space-x-4">
            <Link className="w-1/2" href="#">
              <Button className="w-full">Favourites</Button>
            </Link>
            <Link className="w-1/2" href="#">
              <Button className="w-full">Collections</Button>
            </Link>
            <Link className="w-1/2" href="/Account">
              <Button className="w-full">Account</Button>
            </Link>
            <BackButton text="Back to Home" href="/" />
          </div>
        </div>
      </main>
    </>
  );
}
