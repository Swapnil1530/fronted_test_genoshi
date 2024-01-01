interface PlanInterface {
  title: String;
  price: String;
  features: String[];
}

export const pricingPlans: PlanInterface[] = [
  {
    title: "Basic Plan",
    price: "$4/month/user",
    features: ["Up to 10 graphs", "Up to 500 chatbot queries"],
  },
  {
    title: "Pro Plan",
    price: "$8/month/user",
    features: [
      "Up to 50 graphs",
      "Up to 1000 chatbot queries",
      "Email + live chat support",
    ],
  },
  {
    title: "Enterprise Plan",
    price: "Contact for price",
    features: [
      "Unlimited graphs",
      "Ability to upload custom PDFs",
      "24/7 phone + email support",
    ],
  },
];
