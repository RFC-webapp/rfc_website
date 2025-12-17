import FAQSection from "@/components/faq-section";

const faqs = [
  {
    id: "faq-1",
    question: "Where is Rock Foundation Church located?",
    answer:
      "Our church is located at Tekobo Junction, Idi-Aba, Abeokuta. You can also find our map and directions on the Contact Us page.",
  },
  {
    id: "faq-2",
    question: "What time are your services?",
    answer:
      "We conduct three services every Sunday at 7:00 AM, 9:00 AM, and 11:00 AM. Additional services are held on Wednesdays and Fridays at 5:30 PM. Please note that times are subject to change for special events.",
  },
  {
    id: "faq-3",
    question: "Do I need to book or register before attending?",
    answer:
      "No registration is required. You are welcome to walk in and worship with us.",
  },
  {
    id: "faq-4",
    question: "Is childcare available during services?",
    answer:
      "Yes, we provide a safe and welcoming children’s class during all our services, except the 1st and 3rd Sunday services. We also have a safe playground for children, open daily from 10:00 AM to 4:00 PM.",
  },
  {
    id: "faq-5",
    question: "Do you have online or live-streamed services?",
    answer:
      "Yes, our services are streamed on YouTube, Facebook and Mixlr. You can worship with us live from anywhere in the world. Please check the media section for Live streaming options.",
  },
  {
    id: "faq-6",
    question: "What programs do you offer for children and teens?",
    answer:
      "We run age-appropriate programs for children and teenagers focused on spiritual growth and character development.",
  },
  {
    id: "faq-7",
    question:
      "I want to be a worker, how can I join a department or serve in church?",
    answer:
      "Simply complete the 6-week Kingdom Life Class. Afterward, you’ll be informed about all the church departments and you may choose where you’d like to serve.",
  },
  {
    id: "faq-8",
    question: "Do you offer counseling or prayer support?",
    answer: "Yes, we provide prayer and pastoral counseling by appointment.",
  },
  {
    id: "faq-9",
    question: "Is there parking available at the church?",
    answer:
      "Yes, secure parking is available within the church compound during services. Additional secure parking is also available a short walk away, just two buildings before the church.",
  },
  {
    id: "faq-10",
    question: "How can I speak with a pastor or church leader?",
    answer:
      "You can schedule an appointment through the church office or Contact page. Our Lead Pastor also offer visiting and counseling sessions on Wednesdays from 3:00PM",
  },
  {
    id: "Do you organize outreach or community programs?",
    question: "Do you offer counseling or prayer support?",
    answer:
      "Yes, we frequently organize outreach programs, charity initiatives, and community impact projects. Read more here",
  },
  {
    id: "faq-12",
    question: "What denomination is Rock Foundation Church?",
    answer:
      "Rock Foundation Church is a Bible-believing, Spirit-led Christian ministry committed to the teachings of Jesus Christ. We see ourselves as part of the global Body of Christ",
  },
];

export default function page() {
  return (
    <div className="min-h-screen py-12">
      <FAQSection
        title="General FAQs"
        faqs={faqs}
        sentence="Have questions about giving?"
        linkHref="/give"
        linkLabel="View our Giving FAQs"
        showSentence={true}
      />
    </div>
  );
}
