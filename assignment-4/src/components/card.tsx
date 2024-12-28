import { FaRegCheckCircle } from "react-icons/fa";


const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      button: "Get Started",
      isHighlighted: false,
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      button: "Get Started",
      isHighlighted: true,
    },
    {
      name: "Organization",
      price: "$44.99",
      description: "Collaborate and manage tasks effectively",
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
      button: "Get Started",
      isHighlighted: false,
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-36 px-6 gap-12">
      {/* Heading */}
      <div className="text-center max-w-4xl">
        <h1 className="text-[62px] font-bold leading-[87px] text-[#212529] tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-[18px] leading-[30px] text-[#212529] tracking-tight">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      {/* Price Cards */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`flex flex-col justify-between p-8 border rounded-lg shadow-md ${
              plan.isHighlighted
                ? "bg-[#043873] text-white border-blue-400"
                : "bg-white text-gray-900 border-yellow-200"
            }`}
            style={{ width: plan.isHighlighted ? "360px" : "300px" }}
          >
            <div>
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-4xl font-bold text-yellow-200">{plan.price}</p>
              <p className="mt-1 text-base">{plan.description}</p>
            </div>
            <ul className="mt-6 space-y-4">
  {plan.features.map((feature, idx) => (
    <li key={idx} className="flex items-center gap-2">
      <FaRegCheckCircle className="w-4 h-4 text-yellow-200" />
      <p>{feature}</p>
    </li>
  ))}
</ul>
            <button
              className={`mt-6 py-3 px-6 rounded-md font-medium ${
                plan.isHighlighted
                  ? "bg-blue-600 text-white "
                  : "bg-white text-gray-900 border border-yellow-200"
              }`}
            >
              {plan.button}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

