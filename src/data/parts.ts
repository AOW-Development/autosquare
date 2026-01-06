// types
export type Part = {
    name: string;
    image: string;
    desc: string | any;
};

// helper (ONLY for description)
const descFromName = (name: string) =>
    `${name} is a genuine automotive part designed to deliver reliable performance, durability, and safety for everyday driving conditions.`;

// 🔹 ALL PARTS AS OBJECTS
export const PARTS: Part[] = [
    {
        name: "Air Flow Meter",
        image: "/parts/Air Flow Meter.png",
        desc: {
            intro: {
                title: "What is an Airflow Meter and Why It’s Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air–fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** – the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** – increased fuel consumption.",
                    "**Rough idling or stalling** – engine hesitates at low speeds.",
                    "**Check engine light** – triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** – higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** – reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** – OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** – hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** – improved throttle response.",
                    "**Better fuel economy** – optimized air–fuel mixture.",
                    "**Reduced emissions** – cleaner exhaust output.",
                    "**Improved reliability** – prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** – overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** – potential safety risk.",
                    "**Excess wear on injectors and spark plugs** – costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    { name: "Carburetor", image: "", desc: descFromName("Carburetor") },
    { name: "Fuel Injection Parts", image: "", desc: descFromName("Fuel Injection Parts") },
    { name: "Fuel Pump", image: "", desc: descFromName("Fuel Pump") },
    { name: "Fuel Tank", image: "", desc: descFromName("Fuel Tank") },
    { name: "Fuel Tank Sending Unit", image: "", desc: descFromName("Fuel Tank Sending Unit") },
    { name: "Throttle Body", image: "", desc: descFromName("Throttle Body") },

    { name: "Axel Housing", image: "", desc: descFromName("Axel Housing") },
    { name: "Axel Shaft", image: "", desc: descFromName("Axel Shaft") },
    { name: "Carrier", image: "", desc: descFromName("Carrier") },
    { name: "Differential", image: "", desc: descFromName("Differential") },
    { name: "Front Axel", image: "", desc: descFromName("Front Axel") },
    { name: "Front Drive Shaft", image: "", desc: descFromName("Front Drive Shaft") },
    { name: "Rear Axel", image: "", desc: descFromName("Rear Axel") },
    { name: "Rear Drive Shaft", image: "", desc: descFromName("Rear Drive Shaft") },
    { name: "Ring Gear/Pinion", image: "", desc: descFromName("Ring Gear/Pinion") },

    { name: "Anti-Lock Brake Part", image: "", desc: descFromName("Anti-Lock Brake Part") },
    { name: "Brake Master Cylinder", image: "", desc: descFromName("Brake Master Cylinder") },

    { name: "Convertible Top Motor", image: "", desc: descFromName("Convertible Top Motor") },
    { name: "Convertible Top Lift", image: "", desc: descFromName("Convertible Top Lift") },
    { name: "Roof", image: "", desc: descFromName("Roof") },
    { name: "Roof Motor", image: "", desc: descFromName("Roof Motor") },
    { name: "Running Board", image: "", desc: descFromName("Running Board") },
    { name: "Seat Belt Rear", image: "", desc: descFromName("Seat Belt Rear") },
    { name: "Sunroof Panel Assembly", image: "", desc: descFromName("Sunroof Panel Assembly") },

    { name: "AC Compressor Clutch", image: "", desc: descFromName("AC Compressor Clutch") },
    { name: "AC Compressor", image: "", desc: descFromName("AC Compressor") },
    { name: "AC Condenser", image: "", desc: descFromName("AC Condenser") },
    { name: "AC Evaporator", image: "", desc: descFromName("AC Evaporator") },
    { name: "AC Evaporator Housing", image: "", desc: descFromName("AC Evaporator Housing") },
    { name: "Blower Motor", image: "", desc: descFromName("Blower Motor") },
    { name: "Heater", image: "", desc: descFromName("Heater") },
    { name: "Heater Core", image: "", desc: descFromName("Heater Core") },
    { name: "Heater Housing", image: "", desc: descFromName("Heater Housing") },
    { name: "Radiator", image: "", desc: descFromName("Radiator") },
    { name: "Radiator Fan Motor", image: "", desc: descFromName("Radiator Fan Motor") },
    { name: "Radiator Shroud", image: "", desc: descFromName("Radiator Shroud") },
    { name: "Temperature Control", image: "", desc: descFromName("Temperature Control") },

    { name: "Hub", image: "", desc: descFromName("Hub") },
    { name: "Locking Hubs", image: "", desc: descFromName("Locking Hubs") },
    { name: "Power Brake Booster", image: "", desc: descFromName("Power Brake Booster") },
    { name: "Rear Brakes", image: "", desc: descFromName("Rear Brakes") },

    { name: "Alternator", image: "", desc: descFromName("Alternator") },
    { name: "Starter Motor", image: "", desc: descFromName("Starter Motor") },
    { name: "Shock Absorber", image: "", desc: descFromName("Shock Absorber") },
    { name: "Wheel", image: "", desc: descFromName("Wheel") },
    { name: "Tires", image: "", desc: descFromName("Tires") },
];
