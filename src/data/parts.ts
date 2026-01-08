// types
export type Part = {
    category: string;
    name: string;
    image: string;
    desc: string | any;
};

// helper (ONLY for description)
const descFromName = (name: string) =>
    `${name} is a genuine automotive part designed to deliver reliable performance, durability, and safety for everyday driving conditions.`;


export const PARTS = [
    {
        category: "Air and Fuel", name: "Air Flow Meter", image: "/parts/Air Flow Meter.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Carburetor", image: "/parts/Carburetor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Fuel Injection Parts", image: "/parts/Fuel Injection Parts.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Fuel Pump", image: "/parts/Fuel Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Fuel Tank", image: "/parts/Fuel Tank.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Fuel Tank Sending Unit", image: "/parts/Fuel Tank Sending Unit.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Air and Fuel", name: "Throttle Body", image: "/parts/Throttle Body.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },

    {
        category: "Axle", name: "Axel Housing", image: "/parts/Axel Housing.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Axel Shaft", image: "/parts/Axel Shaft.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Carrier", image: "/parts/Carrier.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Differential", image: "/parts/Differential.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Front Axel", image: "/parts/Front Axel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Front Drive Shaft", image: "/parts/Front Drive Shaft.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Rear Axel", image: "/parts/Rear Axel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Rear Drive Shaft", image: "/parts/Rear Drive Shaft.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Ring Gear/Pinion", image: "/parts/Ring Gear/Pinion.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },

    {
        category: "Brakes", name: "Anti-Lock Brake Part", image: "/parts/Anti-Lock Brake Part.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Brakes", name: "Brake Master Cylinder", image: "/parts/Brake Master Cylinder.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Brakes", name: "Hub", image: "/parts/Hub.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Brakes", name: "Locking Hubs", image: "/parts/Locking Hubs.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Brakes", name: "Power Brake Booster", image: "/parts/Power Brake Booster.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Brakes", name: "Rear Brakes", image: "/parts/Rear Brakes.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },

    {
        category: "Center Body", name: "Convertible Top Motor", image: "/parts/Convertible Top Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Convertible Top Lift", image: "/parts/Convertible Top Lift.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Roof", image: "/parts/Roof.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Roof Motor", image: "/parts/Roof Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Running Board", image: "/parts/Running Board.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Seat Belt Rear", image: "/parts/Seat Belt Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Center Body", name: "Sunroof Panel Assembly", image: "/parts/Sunroof Panel Assembly.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },

    {
        category: "Cooling and Heating", name: "AC Compressor Clutch", image: "/parts/AC Compressor Clutch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Compressor", image: "/parts/AC Compressor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Condenser", image: "/parts/AC Condenser.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Evaporator", image: "/parts/AC Evaporator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Evaporator Housing", image: "/parts/AC Evaporator Housing.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Blower Motor", image: "/parts/Blower Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater", image: "/parts/Heater.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater Core", image: "/parts/Heater Core.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater Housing", image: "/parts/Heater Housing.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Radiator", image: "/parts/Radiator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Radiator Fan Motor", image: "/parts/Radiator Fan Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Radiator Shroud", image: "/parts/Radiator Shroud.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Temperature Control", image: "/parts/Temperature Control.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },

    {
        category: "Doors", name: "Door Handle Exterior", image: "/parts/Door Handle Exterior.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Door Handle Interior", image: "/parts/Door Handle Interior.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Door Trim Panel", image: "/parts/Door Trim Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Door Vent Window Regulator Front", image: "/parts/Door Vent Window Regulator Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Electric Door Motor", image: "/parts/Electric Door Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door", image: "/parts/Front Door.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door Switch", image: "/parts/Front Door Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door Trim Panel", image: "/parts/Front Door Trim Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Front Window Regulator", image: "/parts/Front Window Regulator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Power Window Motor", image: "/parts/Power Window Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Back Door", image: "/parts/Rear Back Door.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Side Door", image: "/parts/Rear Side Door.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Window Regulator", image: "/parts/Rear Window Regulator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Doors", name: "Side View Mirror", image: "/parts/Side View Mirror.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Alternator", image: "/parts/Alternator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Antenna", image: "/parts/Antenna.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Audio Euipment Radio", image: "/parts/Audio Euipment Radio.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Automatic Headlamp Dimmer", image: "/parts/Automatic Headlamp Dimmer.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Backup Light", image: "/parts/Backup Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Blower Motor", image: "/parts/Blower Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Camera/Projector", image: "/parts/Camera/Projector.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Chassis ECM", image: "/parts/Chassis ECM.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Column Switch", image: "/parts/Column Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Conv/Invert/Charger", image: "/parts/Conv/Invert/Charger.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Corner/Park Light", image: "/parts/Corner/Park Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Cruise Speed Regulator", image: "/parts/Cruise Speed Regulator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Dash/Interior/Seat Switch", image: "/parts/Dash/Interior/Seat Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Electric Door Motor", image: "/parts/Electric Door Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Engine ECM", image: "/parts/Engine ECM.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Engine Wire Harness", image: "/parts/Engine Wire Harness.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Fog Lamp Rear", image: "/parts/Fog Lamp Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Front Door Switch", image: "/parts/Front Door Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Fuse Box Cabin", image: "/parts/Fuse Box Cabin.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Fuse Box Engine", image: "/parts/Fuse Box Engine.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Headlight", image: "/parts/Headlight.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Headlight Motor", image: "/parts/Headlight Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "High Mounted Stop Light", image: "/parts/High Mounted Stop Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Ignitons Switch", image: "/parts/Ignitons Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Info-GPS-TV Screen", image: "/parts/Info-GPS-TV Screen.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Instrument Cluster", image: "/parts/Instrument Cluster.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Lid Motor Pull Down", image: "/parts/Lid Motor Pull Down.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Power Window Motor", image: "/parts/Power Window Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Radiator Fan Motor", image: "/parts/Radiator Fan Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Rear Door Switch", image: "/parts/Rear Door Switch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Rear Side Marker", image: "/parts/Rear Side Marker.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Rear Wiper Motor", image: "/parts/Rear Wiper Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Speedometer Cluster", image: "/parts/Speedometer Cluster.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Tail Light", image: "/parts/Tail Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Temperature Control", image: "/parts/Temperature Control.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Vacuum Pump", image: "/parts/Vacuum Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Electrical", name: "Windshield Wiper", image: "/parts/Windshield Wiper.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "AC Compressor", image: "/parts/AC Compressor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Air Flow Meter", image: "/parts/Air Flow Meter.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Air Injection Pump", image: "/parts/Air Injection Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Alternator", image: "/parts/Alternator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Carburetor", image: "/parts/Carburetor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Catalytic Converter", image: "/parts/Catalytic Converter.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Coil/Ignitor", image: "/parts/Coil/Ignitor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Distributor", image: "/parts/Distributor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Engine Oil Cooler", image: "/parts/Engine Oil Cooler.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Exhaust Manifold", image: "/parts/Exhaust Manifold.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Fan Blade", image: "/parts/Fan Blade.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Fan Clutch", image: "/parts/Fan Clutch.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Fuel Injection Parts", image: "/parts/Fuel Injection Parts.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Fuel Pump", image: "/parts/Fuel Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Intercooler", image: "/parts/Intercooler.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Power Steering Pump", image: "/parts/Power Steering Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Starter Motor", image: "/parts/Starter Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Throttle Body", image: "/parts/Throttle Body.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Turbo/Supercharger", image: "/parts/Turbo/Supercharger.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Engine Accessories", name: "Vacuum Pump", image: "/parts/Vacuum Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Entertainment", name: "Antenna", image: "/parts/Antenna.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Entertainment", name: "Audio Equipment Radio", image: "/parts/Audio Equipment Radio.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Entertainment", name: "Camera/Projector", image: "/parts/Camera/Projector.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Entertainment", name: "Info-GPS-TV Screen", image: "/parts/Info-GPS-TV Screen.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Corner/Park Light", image: "/parts/Corner/Park Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Fender", image: "/parts/Fender.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Front Bumper", image: "/parts/Front Bumper.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Front Spoiler", image: "/parts/Front Spoiler.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Grille", image: "/parts/Grille.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Header Panel", image: "/parts/Header Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Headlamp Washer Motor", image: "/parts/Headlamp Washer Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Headlamp Wiper Motor", image: "/parts/Headlamp Wiper Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Headlight", image: "/parts/Headlight.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Headlight Door/Cover", image: "/parts/Headlight Door/Cover.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Hood", image: "/parts/Hood.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Radiator Core Support", image: "/parts/Radiator Core Support.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Windshield Washer Motor", image: "/parts/Windshield Washer Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Windshield Wiper Motor", image: "/parts/Windshield Wiper Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Wiper Arm", image: "/parts/Wiper Arm.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Front Body", name: "Wiper Transmission", image: "/parts/Wiper Transmission.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Back Glass", image: "/parts/Back Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Front Door Glass", image: "/parts/Front Door Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Front Door Vent Glass", image: "/parts/Front Door Vent Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Quarter Glass", image: "/parts/Quarter Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Rear Door Glass", image: "/parts/Rear Door Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Rear Door Vent Glass", image: "/parts/Rear Door Vent Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Rear View Mirror", image: "/parts/Rear View Mirror.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Roof Glass", image: "/parts/Roof Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Side View Mirror", image: "/parts/Side View Mirror.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Special Glass", image: "/parts/Special Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Glass and Mirrors", name: "Windshield Glass", image: "/parts/Windshield Glass.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    }, {
        category: "Interior", name: "Armrest", image: "/parts/Armrest.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Console Front", image: "/parts/Console Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Console Rear", image: "/parts/Console Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Dash Panel", image: "/parts/Dash Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Front Door Trim Panel", image: "/parts/Front Door Trim Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Front Seat", image: "/parts/Front Seat.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Front Seat Track", image: "/parts/Front Seat Track.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Glove Box", image: "/parts/Glove Box.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Rear View Mirror", image: "/parts/Rear View Mirror.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Roll Bar", image: "/parts/Roll Bar.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Seat Belt Front", image: "/parts/Seat Belt Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Seat Belt Rear", image: "/parts/Seat Belt Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Seat Motor", image: "/parts/Seat Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Seat Rear", image: "/parts/Seat Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Speedometer Cluster", image: "/parts/Speedometer Cluster.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Sun Visor", image: "/parts/Sun Visor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Tachometer", image: "/parts/Tachometer.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Interior", name: "Third Seat Station WagonVan", image: "/parts/Third Seat Station WagonVan.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Backup Light", image: "/parts/Backup Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Corner/Park Light", image: "/parts/Corner/Park Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Fog Lamp Rear", image: "/parts/Fog Lamp Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Headlight", image: "/parts/Headlight.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Headlight Motor", image: "/parts/Headlight Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "High Mounted Stop light", image: "/parts/High Mounted Stop light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Rear Side Marker", image: "/parts/Rear Side Marker.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Lights", name: "Tail Light", image: "/parts/Tail Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    }, {
        category: "Rear Body", name: "Back Glass Regulator", image: "/parts/Back Glass Regulator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Backup Light", image: "/parts/Backup Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Fog Lamp Rear", image: "/parts/Fog Lamp Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "High Mounted Stop Light", image: "/parts/High Mounted Stop Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Pickup Box", image: "/parts/Pickup Box.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Quarter Panel", image: "/parts/Quarter Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Quarter Repair Panel", image: "/parts/Quarter Repair Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Quarter Window Regulator", image: "/parts/Quarter Window Regulator.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Rear Bumper", image: "/parts/Rear Bumper.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Rear Clip", image: "/parts/Rear Clip.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Rear Side Marker", image: "/parts/Rear Side Marker.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Sunroof Panel Assm", image: "/parts/Sunroof Panel Assm.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Tail Finish Panel", image: "/parts/Tail Finish Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Tail Light", image: "/parts/Tail Light.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Tail Panel", image: "/parts/Tail Panel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Trunk/Hatch/Tailgate", image: "/parts/Trunk/Hatch/Tailgate.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Rear Body", name: "Valance Rear", image: "/parts/Valance Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Safety", name: "Air Bag", image: "/parts/Air Bag.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Safety", name: "Seat Belt Front", image: "/parts/Seat Belt Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Safety", name: "Seat Belt Motor", image: "/parts/Seat Belt Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Safety", name: "Seat Belt Rear", image: "/parts/Seat Belt Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Safety", name: "Seat Belt Track Electric", image: "/parts/Seat Belt Track Electric.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    }, {
        category: "Suspension/Steering", name: "Air/Coil Spring", image: "/parts/Air/Coil Spring.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Crossmember/K-Frame", image: "/parts/Crossmember/K-Frame.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Front Axle Beam 2WD", image: "/parts/Front Axle Beam 2WD.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Front Knee", image: "/parts/Front Knee.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Front Leaf Spring", image: "/parts/Front Leaf Spring.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Front Spindle/Knuckle", image: "/parts/Front Spindle/Knuckle.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Hub", image: "/parts/Hub.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Loaded Beam Axle", image: "/parts/Loaded Beam Axle.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Lower Control Front", image: "/parts/Lower Control Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Lower Control Rear", image: "/parts/Lower Control Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Power Steering", image: "/parts/Power Steering.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Power Steering Pump", image: "/parts/Power Steering Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Rear Knuckle/Stub", image: "/parts/Rear Knuckle/Stub.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Rear Leaf Spring", image: "/parts/Rear Leaf Spring.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Rear Suspension", image: "/parts/Rear Suspension.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Shock Absorber", image: "/parts/Shock Absorber.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Stabilizer Bar", image: "/parts/Stabilizer Bar.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Steering Column", image: "/parts/Steering Column.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Steering Gear/Rack", image: "/parts/Steering Gear/Rack.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Strut", image: "/parts/Strut.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Suspension Pump", image: "/parts/Suspension Pump.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Torsion Bar", image: "/parts/Torsion Bar.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Upper Control Arm Front", image: "/parts/Upper Control Arm Front.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Suspension/Steering", name: "Upper Control Arm Rear", image: "/parts/Upper Control Arm Rear.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Bell Housing", image: "/parts/Bell Housing.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Clutch Master Cylinder", image: "/parts/Clutch Master Cylinder.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Clutch Slave Cylinder", image: "/parts/Clutch Slave Cylinder.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Crossmember Transmission", image: "/parts/Crossmember Transmission.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Differential", image: "/parts/Differential.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "FlyvWheel/Flex Plate", image: "/parts/FlyvWheel/Flex Plate.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Front Drive Shaft", image: "/parts/Front Drive Shaft.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Rear Drive Shaft", image: "/parts/Rear Drive Shaft.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Torque Converter", image: "/parts/Torque Converter.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Transfer Case", image: "/parts/Transfer Case.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Transfer Case Motor", image: "/parts/Transfer Case Motor.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Transmission", name: "Transmission Assembly", image: "/parts/Transmission Assembly.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Jack", image: "/parts/Jack.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Spare Wheel Carrier", image: "/parts/Spare Wheel Carrier.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Spare Wheel", image: "/parts/Spare Wheel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Tires", image: "/parts/Tires.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Wheel", image: "/parts/Wheel.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    },
    {
        category: "Wheels", name: "Wheel Cover Hub Cap", image: "/parts/Wheel Cover Hub Cap.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
                    "**Engine misfires or stalling** - potential safety risk.",
                    "**Excess wear on injectors and spark plugs** - costly long-term repairs.",
                ],
                conclusion:
                    "Addressing Air Flow Meter issues early helps maintain engine health and avoids expensive repairs.",
            },
        },
    }

];
