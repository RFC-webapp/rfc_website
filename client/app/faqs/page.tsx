import FAQSection from "@/components/faq-section";

export default function Page() {
  const faqs = [
    {
      id: "faq-1",
      question: "How are donations used?",
      answer:
        "Your gifts support our ministries, outreach, missions, and the upkeep of our church. We use all donations responsibly, and financial details are available if you’d like to see them. Thank you for helping us make a meaningful impact in our community and beyond.",
    },
    {
      id: "faq-2",
      question: "Can I give to support a specific project or initiative?",
      answer:
        "Yes! You can designate your contribution to a specific project, outreach, or ministry.",
    },
    {
      id: "faq-3",
      question: "Are there other ways to give besides online?",
      answer:
        "Absolutely — you can give in person, via bank transfer, or through our mobile giving channels.",
    },
    {
      id: "faq-4",
      question: "Are there other ways to give besides online?",
      answer:
        "Absolutely — you can give in person, via bank transfer, or through our mobile giving channels.",
    },
    {
      id: "faq-5",
      question: "Are there other ways to give besides online?",
      answer:
        "Absolutely — you can give in person, via bank transfer, or through our mobile giving channels.",
    },
    {
      id: "faq-6",
      question: "Are there other ways to give besides online?",
      answer:
        "Absolutely — you can give in person, via bank transfer, or through our mobile giving channels.",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <FAQSection title="General FAQs" faqs={faqs} />
    </div>
  );
}
