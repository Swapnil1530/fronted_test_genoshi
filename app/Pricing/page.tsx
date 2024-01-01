"use client";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pricingPlans } from "@/constants/priceplan";
import Link from "next/link";
import React, { useState } from "react";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan]: any = useState(null);

  const handleSelectPlan = (index: number) => {
    setSelectedPlan(pricingPlans[index]);
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-semibold mb-6">Choose a Pricing Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`border p-6 rounded ${
              selectedPlan === plan ? "border-blue-500" : ""
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
            <p className="text-gray-600 mb-4">{plan.price}</p>
            <ul className="list-disc pl-5 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <input
              type="radio"
              name="pricingPlan"
              id={`plan-${index}`}
              onChange={() => handleSelectPlan(index)}
            />
            <label htmlFor={`plan-${index}`} className="ml-2">
              Select Plan
            </label>
          </div>
        ))}
      </div>
      {selectedPlan && (
        <div className="mt-8 p-6 border rounded">
          <h2 className="text-xl font-semibold mb-4">
            Selected Plan: {selectedPlan.title}
          </h2>
          <p className="text-gray-600 mb-4">Price: {selectedPlan.price}</p>
          <ul className="list-disc pl-5 mb-4">
            {selectedPlan.features.map((feature: string, i: number) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <p className="text-green-500">Plan selected! Proceed to payment.</p>
          <Button className="mt-4">
            <Link href="#">Proceed to Payment</Link>
          </Button>
        </div>
      )}
      <div className="mt-4">
        <BackButton text="Back to Home" href="/" />
      </div>
    </div>
  );
};

export default PricingPage;
