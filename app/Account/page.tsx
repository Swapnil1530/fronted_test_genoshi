import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ResponsiveLine } from "@nivo/line";
import BackButton from "@/components/BackButton";
import Form from "@/components/Form";
import { CurvedlineChart } from "@/components/Chart";

export default function Component() {
  return (
    <div className="mx-4 sm:mx-auto sm:max-w-md lg:max-w-2xl">
      <div className="flex flex-col space-y-10 p-6">
        <h1 className="text-4xl font-semibold">Account Setting</h1>
        <Form />
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Manage Subscription Plan</CardTitle>
            <CardDescription>
              View and manage your subscription details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">Current Plan:</span>
              <Badge className="text-lg">Pro</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">Price:</span>
              <span className="text-lg">$8/month</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">Renewal Date:</span>
              <span className="text-lg">2024-01-01</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Upgrade Plan</Button>
            <Button className="ml-4">Cancel Subscription</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Link Third-Party Accounts</CardTitle>
            <CardDescription>
              Connect with Google for seamless integration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="ml-auto">Link Google Account</Button>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>View Usage Statistics</CardTitle>
            <CardDescription>
              Check your account activity and usage stats.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CurvedlineChart className="w-full aspect-[16/9]" />
          </CardContent>
        </Card>
      </div>
      <div className="ml-5 mb-2">
        <BackButton text="Back to Home" href="/" />
      </div>
    </div>
  );
}
