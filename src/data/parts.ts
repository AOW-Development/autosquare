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
                    "The **airflow meter**, also known as a **mass airflow sensor**, is the unsung hero of your vehicle's engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This ensures the engine maintains the optimal **air-fuel ratio**, which is crucial for smooth performance, better fuel economy, and lower emissions—much like how a **fuel sender unit** monitors fuel levels to keep your engine properly supplied.",
                    "Without a properly functioning airflow meter, your engine may underperform, consume more fuel, and even strain other components.",
                    "Simply put, it’s a small part with a big impact on your vehicle’s reliability and efficiency.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Check engine light** - often triggered by airflow inconsistencies.",
                    "**Poor fuel efficiency** - you’re filling the tank more often than usual.",
                    "**Rough idling or stalling** - the engine hesitates or sputters at low speeds.",
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "If you notice one or more of these symptoms, it’s time to inspect your airflow meter before it affects other critical engine components—similar to addressing **fuel sending unit repair** before fuel gauge issues escalate.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can create a domino effect inside your engine by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - increased fuel consumption and black smoke from the exhaust.",
                    "**Too little fuel (lean mixture)** - reduced power, potential overheating, and added strain on engine components.",
                    "Even minor inaccuracies in the airflow meter can lead to noticeable drops in performance and fuel economy, making every drive less smooth and more expensive.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure the airflow meter matches your vehicle’s make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM parts guarantee precise fit and performance; high-quality aftermarket options can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with your vehicle’s ECU requirements.",
                    "Choosing the correct airflow meter ensures accurate air measurement, protects your engine, and maintains fuel efficiency—just as selecting a quality **fuel sender unit** ensures accurate fuel monitoring.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Vehicle Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response and drivability.",
                    "**Improved fuel economy** - optimal air-fuel ratios reduce wasted fuel.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Peace of mind** - helps prevent knock-on damage to other engine components.",
                    "Replacing or upgrading your airflow meter isn’t just routine maintenance—it’s a direct boost to engine performance and long-term reliability.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - incorrect fuel mixtures can overheat or clog it.",
                    "**Engine misfires or stalling** - creating serious safety risks on the road.",
                    "**Increased wear on injectors and spark plugs** - leading to costly long-term repairs.",
                ],
                conclusion:
                    "A small airflow meter issue can quickly snowball into expensive repairs—much like delaying fuel sending unit repair can lead to fuel system failures. Addressing airflow meter problems early keeps your engine healthy and your wallet intact.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Carburetor", image: "/parts/Carburetor.png", desc: {
            intro: {
                title: "What Is a Carburetor & Why It's Important for Your Vehicle",
                text: [
                    "A **carburetor** is the mechanical heart of older gasoline engines, responsible for mixing the right amount of air and fuel before sending it into the engine for combustion.",
                    "Over time, fuel deposits, varnish, and residue build up inside the carburetor, disrupting airflow and throwing off the fuel mixture.",
                    "A quality **carburetor cleaning kit**, often paired with **carburetor cleaner**, removes these deposits and restores the delicate balance your engine depends on.",
                    "When it’s clean and all **carburetor parts** are functioning properly, the engine runs smoother, responds faster, and delivers consistent power.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Carburetor Cleaning or Service",
                points: [
                    "**Hard starting** - especially after the vehicle sits overnight.",
                    "**Sluggish throttle response or hesitation** - noticeable delay when accelerating.",
                    "**Rough idling or engine stalling** - instability at low speeds.",
                    "**Poor fuel efficiency** - higher fuel consumption during normal driving.",
                    "**Black smoke or fuel smell** - indicating an improper air-fuel mixture.",
                    "If these symptoms appear, your carburetor likely needs cleaning with **carburetor cleaner** or inspection of its internal **carburetor parts** before the problem worsens.",
                ],
            },

            impact: {
                title: "How a Dirty Carburetor Affects Performance & Fuel Efficiency",
                text: [
                    "When a carburetor becomes clogged, airflow and fuel delivery lose their balance, negatively affecting engine performance.",
                    "**Rich fuel mixtures** - excessive fuel consumption and inefficient combustion.",
                    "**Lean fuel mixtures** - weak combustion, power loss, and potential engine strain.",
                    "**Delayed throttle response** - the engine feels unresponsive and sluggish.",
                    "Using a proper **carburetor cleaner** restores airflow paths and fuel channels, improving throttle response, smoother power delivery, and better fuel economy even in high-mileage engines.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Carburetor Cleaning Kit or Parts",
                points: [
                    "**Engine type and size** - two-stroke and four-stroke engines require different setups.",
                    "**Vehicle or equipment application** - cars, motorcycles, generators, or lawn equipment all have unique carburetor designs.",
                    "**Compatibility of gaskets and jets** - precise fit is critical for proper sealing and fuel flow.",
                    "**Quality of cleaning solution** - a reliable **carburetor cleaner** should dissolve deposits without damaging seals.",
                    "Choosing the right components—whether a complete cleaning kit or individual **carburetor parts**—ensures safe cleaning and long-lasting results.",
                ],
            },

            benefits: {
                title: "Why Cleaning or Servicing Your Carburetor Improves Performance & Reliability",
                points: [
                    "**Instant throttle response** - smooth acceleration without hesitation.",
                    "**Consistent idling** - steadier engine operation at low speeds.",
                    "**Improved fuel efficiency** - especially noticeable in stop-and-go driving.",
                    "**Extended engine life** - proper combustion reduces internal stress.",
                    "Regular maintenance using quality **carburetor parts** and effective **carburetor cleaner** helps older engines remain dependable and enjoyable to drive.",
                ],
            },

            risks: {
                title: "How Ignoring Carburetor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Fuel flooding** - washing oil from cylinder walls and increasing wear.",
                    "**Spark plug fouling** - leading to misfires and hard starts.",
                    "**Engine overheating** - caused by improper fuel-air ratios.",
                    "**Premature wear on internal components** - resulting in costly repairs.",
                ],
                conclusion:
                    "A simple cleaning with the right **carburetor cleaner** and timely replacement of worn **carburetor parts** can prevent major issues and keep your engine running reliably for years.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Fuel Injection Parts", image: "/parts/Fuel Injection Parts.png", desc: {
            intro: {
                title: "What Is a Fuel Injector & Why It's Important for Your Vehicle",
                text: [
                    "A **fuel injector** is a precision component that delivers the exact amount of fuel into the engine at precisely the right moment.",
                    "Modern engines rely on this accuracy to maintain optimal combustion, smooth power delivery, and strong fuel efficiency.",
                    "When injectors wear out or clog, fuel spray becomes uneven, turning **fuel injector replacement cost** into a necessary investment rather than an avoidable expense.",
                    "Proper replacement or **fuel injection cleaning** restores correct fuel atomization, helping the engine perform as designed and protecting the overall **car fuel injector system** from long-term damage.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Fuel Injector Service or Replacement",
                points: [
                    "**Loss of engine power** - especially noticeable during acceleration.",
                    "**Rough idling or engine vibrations** - uneven combustion at low speeds.",
                    "**Decreased fuel economy** - higher fuel usage despite normal driving habits.",
                    "**Engine misfires or hesitation** - particularly under load.",
                    "**Fuel smell or black exhaust smoke** - indicating improper fuel spray.",
                    "If these symptoms persist, your **car fuel injector** may require professional **fuel injection cleaning** or replacement to restore proper fuel delivery.",
                ],
            },

            impact: {
                title: "How a Faulty Fuel Injector Affects Performance & Fuel Efficiency",
                text: [
                    "A malfunctioning injector disrupts the combustion process by delivering fuel unevenly instead of a fine, controlled mist.",
                    "**Incomplete combustion** - reduced engine power and sluggish response.",
                    "**Excess fuel consumption** - increased running costs over time.",
                    "**Carbon buildup** - deposits on valves, pistons, and spark plugs.",
                    "Timely **fuel injection cleaning** or injector replacement corrects spray patterns and restores efficient combustion, improving throttle response and mileage across the **car fuel injector system**.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fuel Injector for Your Vehicle",
                points: [
                    "**Vehicle specifications** - match the injector to your make, model, year, and engine type.",
                    "**Injector flow rate and spray pattern** - must align with engine requirements.",
                    "**OEM vs aftermarket injectors** - choose based on quality, reliability, and fit.",
                    "**Cleaning vs replacement** - determine whether **fuel injection cleaning** is sufficient or full replacement is needed due to wear.",
                    "Selecting the right fuel injector ensures precise fuel delivery and prevents costly compatibility or performance issues.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Fuel Injector Improves Performance & Reliability",
                points: [
                    "**Smoother engine operation** - reduced vibration and consistent combustion.",
                    "**Improved fuel economy** - accurate fuel spray minimizes waste.",
                    "**Restored power and acceleration** - engine responds as intended.",
                    "**Lower emissions** - cleaner and more efficient combustion.",
                    "While **fuel injector replacement cost** includes parts and labor, the long-term payoff is improved reliability, better performance, and increased driving comfort. Regular **fuel injection cleaning** can also extend the life of your **car fuel injector**.",
                ],
            },

            risks: {
                title: "How Ignoring Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - persistent misfires and unburned fuel.",
                    "**Reduced engine lubrication** - excess fuel wash dilutes oil on cylinder walls.",
                    "**Carbon buildup** - clogged intake valves and combustion chambers.",
                    "**Engine overheating or knocking** - risk of serious internal damage.",
                ],
                conclusion:
                    "Addressing injector problems early through **fuel injection cleaning** or timely replacement protects your engine and prevents small issues from escalating into expensive repairs. Proactive care keeps **fuel injector replacement cost** from becoming part of a much larger repair bill.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Fuel Pump", image: "/parts/Fuel Pump.png", desc: {
            intro: {
                title: "What Is a Fuel Pump & Why It's Important for Your Vehicle",
                text: [
                    "The **fuel pump** is responsible for delivering fuel from the tank to the engine at the correct pressure, allowing the engine to maintain smooth combustion under all driving conditions.",
                    "Without a properly functioning fuel pump, even a healthy engine cannot run reliably.",
                    "Modern vehicles rely on electric fuel pumps that act as a precise **fuel transfer pump**, ensuring fuel reaches the injectors consistently.",
                    "When it performs as intended, the result is reliable performance, efficient fuel usage, and smooth engine operation—similar to how a fuel transfer pump maintains steady flow in specialized systems.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Fuel Pump Service or Replacement",
                points: [
                    "**Engine hesitation or jerking** - especially noticeable during acceleration.",
                    "**Difficulty starting the vehicle** - extended cranking or delayed ignition.",
                    "**Sudden loss of power at high speeds** - fuel demand exceeds supply.",
                    "**Frequent stalling** - particularly when the fuel level is low.",
                    "**Engine misfires** - caused by inconsistent fuel delivery.",
                    "If these symptoms persist, it may be time to consider **fuel pump replacement** before the vehicle becomes unreliable.",
                ],
            },

            impact: {
                title: "How a Faulty Fuel Pump Affects Performance & Fuel Efficiency",
                text: [
                    "A failing fuel pump cannot maintain consistent pressure throughout the fuel system.",
                    "**Lean fuel conditions** - reduced power, hesitation, and sluggish response.",
                    "**Irregular combustion** - leading to misfires or engine stalling.",
                    "**Increased fuel consumption** - as the engine struggles to compensate for unstable delivery.",
                    "When the **fuel transfer pump** delivers an unstable flow, the engine operates under constant stress. Addressing the issue early restores performance and prevents excessive fuel waste.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fuel Pump for Your Vehicle",
                points: [
                    "**Vehicle specifications** - make, model, year, and engine configuration must match.",
                    "**Required fuel pressure and flow rate** - critical for proper injector operation.",
                    "**In-tank vs. external pump design** - based on vehicle system requirements.",
                    "**OEM vs high-quality aftermarket options** - choose reliability and correct fit.",
                    "Selecting the wrong pump can cause starting issues, poor performance, or premature failure. Proper **fuel pump replacement** with a compatible **fuel transfer pump** ensures safe and consistent fuel delivery.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Fuel Pump Improves Performance & Reliability",
                points: [
                    "**Smooth acceleration** - steady fuel delivery without hesitation.",
                    "**Consistent engine performance** - reliable operation at all speeds.",
                    "**Improved fuel efficiency** - especially noticeable during highway driving.",
                    "**Reduced risk of stalling** - improved safety and dependability.",
                    "A timely **fuel pump replacement** doesn’t just fix a problem—it restores confidence in every drive and ensures your **fuel transfer pump system** operates at peak efficiency.",
                ],
            },

            risks: {
                title: "How Ignoring Fuel Pump Issues Can Lead to Bigger Repairs",
                points: [
                    "**Injector and ignition strain** - repeated misfires stress related components.",
                    "**Overheating valves and pistons** - caused by lean running conditions.",
                    "**Complete pump failure** - leaving the vehicle stranded without warning.",
                    "**Increased repair costs** - due to secondary engine damage.",
                ],
                conclusion:
                    "Addressing fuel pump issues early with the right **fuel transfer pump** or complete **fuel pump replacement** protects your engine and prevents unexpected breakdowns. Acting on warning signs promptly helps avoid costly repairs and downtime.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Fuel Tank", image: "/parts/Fuel Tank.png", desc: {
            intro: {
                title: "What Is a Fuel Tank & Why It’s Important for Your Vehicle",
                text: [
                    "The **fuel tank** is designed to safely store fuel while maintaining proper venting and pressure control within the vehicle’s fuel system.",
                    "It houses essential **fuel tank parts** such as filler necks, straps, caps, and seals, all working together to prevent leaks and ensure stable fuel delivery.",
                    "Built for durability and impact resistance, modern fuel tanks also play a critical role in crash protection.",
                    "A properly sealed and supported tank keeps fuel contained, vapors controlled, and the vehicle safe under both normal driving and emergency conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Fuel Tank Repair or Component Replacement",
                points: [
                    "**Fuel odor** - noticeable around or inside the vehicle.",
                    "**Visible fuel leaks** - especially under the rear of the car.",
                    "**Difficulty refueling** - frequent pump shut-offs or slow filling.",
                    "**Loose or corroded tank straps** - reduced structural support.",
                    "**Check engine light** - often caused by EVAP or venting system issues.",
                    "If any of these signs appear, timely **fuel tank repair** or replacement of worn **fuel tank parts** is essential for safety and compliance.",
                ],
            },

            impact: {
                title: "How a Faulty Fuel Tank Affects Performance & Fuel Efficiency",
                text: [
                    "A compromised fuel tank does more than leak fuel—damaged seals, caps, or venting components can disrupt system performance.",
                    "**Fuel vapor loss** - reduced efficiency and wasted fuel.",
                    "**Pressure imbalance** - negatively affects fuel delivery to the engine.",
                    "**EVAP system faults** - triggering warning lights and inspection failures.",
                    "**Inconsistent fuel flow** - leading to rough or unstable engine behavior.",
                    "Even minor damage can disrupt performance and increase fuel consumption if left unaddressed.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fuel Tank Parts for Your Vehicle",
                points: [
                    "**Vehicle make, model, and year** - ensures correct fitment.",
                    "**Material type** - steel versus high-density plastic construction.",
                    "**EVAP and venting compatibility** - critical for emissions compliance.",
                    "**Quality of seals, caps, and mounting straps** - prevents leaks and movement.",
                    "Using properly matched **fuel tank parts** reduces the need for repeat fuel tank repair and helps avoid safety risks caused by poor sealing or improper fit.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing Fuel Tank Components Improves Safety & Reliability",
                points: [
                    "**Prevents fuel leaks** - significantly reduces fire hazards.",
                    "**Ensures correct venting** - protects the EVAP system from damage.",
                    "**Maintains structural integrity** - especially important during rear impacts.",
                    "**Improves fuel efficiency** - by eliminating vapor and liquid fuel loss.",
                    "A secure, properly sealed fuel tank restores confidence in everyday driving as well as long-distance travel.",
                ],
            },

            risks: {
                title: "How Ignoring Fuel Tank Issues Can Lead to Bigger Problems",
                points: [
                    "**Increased fire or explosion risk** - due to active fuel leaks.",
                    "**Corrosion spread** - weakening mounting points and tank straps.",
                    "**EVAP system failure** - resulting in inspection or emissions test failures.",
                    "**Environmental hazards** - fuel seepage contaminating surroundings.",
                ],
                conclusion:
                    "Addressing damaged **fuel tank parts** early through proper fuel tank repair protects your vehicle, your personal safety, and the environment while preventing small issues from escalating into serious problems.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Fuel Tank Sending Unit", image: "/parts/Fuel Tank Sending Unit.png", desc: {
            intro: {
                title: "What Is a Fuel Tank Sender Unit & Why It's Important for Your Vehicle",
                text: [
                    "The **fuel tank sender unit** is responsible for monitoring how much fuel is actually inside your tank.",
                    "It uses a float and resistor mechanism to measure fuel level and sends accurate signals to the dashboard gauge, allowing drivers to know exactly when to refuel and how far the vehicle can safely travel.",
                    "A properly functioning **fuel sender unit** prevents false readings, unexpected empty tanks, and unnecessary strain on the fuel system.",
                    "It turns fuel level from a guess into reliable information, eliminating the need for frequent **fuel sending unit repair**.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Fuel Sender Unit Repair or Replacement",
                points: [
                    "**Fuel gauge stuck on full or empty** - readings do not change with driving.",
                    "**Erratic gauge movement** - fluctuating readings, especially while driving.",
                    "**Low fuel warning light issues** - staying on constantly or never activating.",
                    "**Sudden drop in fuel reading** - without corresponding mileage driven.",
                    "**Unexpected fuel run-outs** - vehicle stalls despite showing fuel remaining.",
                    "These symptoms usually indicate the need for **fuel sending unit repair** or complete **fuel sender unit replacement** before inaccurate readings cause bigger problems.",
                ],
            },

            impact: {
                title: "How a Faulty Fuel Tank Sender Unit Affects Performance & Fuel Management",
                text: [
                    "While a failing sender unit doesn’t stop the engine directly, it creates serious secondary issues that affect fuel management.",
                    "**False fuel readings** - leading to unplanned breakdowns and inconvenience.",
                    "**Running the tank dry** - which can overheat and damage the fuel pump.",
                    "**Sediment pickup** - repeated low-fuel operation pulls debris into the system.",
                    "**Increased stress on the fuel system** - shortening component lifespan.",
                    "An unreliable **fuel sender unit** turns fuel management into a gamble and increases the likelihood of repeated **fuel sending unit repair**.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fuel Tank Sender Unit for Your Vehicle",
                points: [
                    "**Vehicle specifications** - make, model, year, and fuel tank design must match.",
                    "**Resistance range compatibility** - must align with the vehicle’s gauge cluster.",
                    "**Integrated vs standalone units** - depending on tank and pump configuration.",
                    "**OEM vs quality aftermarket replacements** - balance fit, accuracy, and reliability.",
                    "Choosing the correct **fuel sender unit** restores precision and reduces the need for repeat **fuel sending unit repair**.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Fuel Tank Sender Unit Improves Reliability & Confidence",
                points: [
                    "**Accurate fuel gauge readings** - consistent and dependable information.",
                    "**Reliable low-fuel warnings** - fewer surprises on the road.",
                    "**Reduced risk of fuel pump damage** - by avoiding repeated low-fuel operation.",
                    "**Peace of mind** - especially during long trips or daily commutes.",
                    "Knowing exactly how much fuel you have changes how confidently you drive. A quality **fuel sender unit** removes guesswork and prevents unnecessary **fuel sending unit repair** calls.",
                ],
            },

            risks: {
                title: "How Ignoring Fuel Sender Unit Issues Can Lead to Bigger Problems",
                points: [
                    "**Unexpected fuel starvation** - leaving the vehicle stranded.",
                    "**Fuel pump overheating** - caused by frequent low-fuel operation.",
                    "**Contaminant buildup** - damaging injectors, filters, and lines.",
                    "**Higher repair costs** - from avoidable fuel system component failures.",
                ],
                conclusion:
                    "Addressing **fuel sender unit** issues early protects the entire fuel system and restores trust in your dashboard readings. Acting on warning signs prevents minor problems from escalating into costly repairs.",
            },
        },

    },
    {
        category: "Air and Fuel", name: "Throttle Body", image: "/parts/Throttle Body.png", desc: {
            intro: {
                title: "What Is a Throttle Body & Why It's Important for Your Vehicle",
                text: [
                    "The **throttle body** controls how much air enters the engine based on throttle input.",
                    "When you press the accelerator, the throttle plate opens, allowing more air to mix with fuel for combustion, directly influencing engine response, power delivery, and efficiency.",
                    "The **throttle body replacement cost** includes both parts and labor and varies depending on vehicle make, engine type, and whether electronic calibration is required.",
                    "Replacing a worn throttle body restores accurate airflow control and keeps combustion efficient across all driving conditions, eliminating the need for ongoing **throttle body repair**.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Throttle Body Repair or Replacement",
                points: [
                    "**Sluggish or delayed acceleration** - noticeable lag when pressing the accelerator.",
                    "**Erratic idle speeds** - engine speed rises or falls unexpectedly.",
                    "**Engine hesitation or stalling** - especially at low speeds or during stops.",
                    "**Poor throttle response** - even with light pedal input.",
                    "**Check engine light** - related to airflow or throttle position faults.",
                    "These symptoms may indicate the need for **throttle body repair** or full **throttle body replacement** to restore proper airflow control.",
                ],
            },

            impact: {
                title: "How a Faulty Throttle Body Affects Performance & Combustion Efficiency",
                text: [
                    "When the throttle body cannot regulate airflow accurately, combustion efficiency suffers.",
                    "**Inconsistent air intake** - causing hesitation, surging, or uneven response.",
                    "**Poor fuel-air balance** - reducing overall engine efficiency.",
                    "**Reduced power output** - especially noticeable during acceleration.",
                    "**Increased fuel consumption** - as the engine compensates for airflow issues.",
                    "Addressing airflow problems through timely **throttle body replacement** or professional **throttle body repair** restores smooth engine response and reliable performance.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Throttle Body for Your Vehicle",
                points: [
                    "**Vehicle specifications** - make, model, year, and engine configuration must match.",
                    "**Mechanical vs electronic design** - ensure compatibility with the throttle control system.",
                    "**Throttle bore size and sensor compatibility** - critical for proper airflow and ECU communication.",
                    "**OEM vs high-quality aftermarket options** - balance fit, reliability, and performance.",
                    "Choosing the right throttle body reduces repeat **throttle body repair** needs and ensures accurate throttle control, making **throttle body replacement** a worthwhile investment.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Throttle Body Improves Performance & Reliability",
                points: [
                    "**Instant, predictable acceleration** - restored connection between pedal input and engine response.",
                    "**Stable idling** - smoother driving in stop-and-go conditions.",
                    "**Improved combustion efficiency** - optimized airflow and fuel balance.",
                    "**Reduced engine strain** - enhancing long-term reliability.",
                    "While **throttle body replacement cost** varies by vehicle, the improvement in drivability and engine efficiency is immediate and often eliminates the need for future **throttle body repair**.",
                ],
            },

            risks: {
                title: "How Ignoring Throttle Body Issues Can Lead to Bigger Repairs",
                points: [
                    "**Persistent airflow imbalance** - placing stress on the fuel and intake systems.",
                    "**Repeated stalling** - affecting drivability and on-road safety.",
                    "**Carbon buildup** - impacting intake components and airflow paths.",
                    "**ECU adaptation errors** - increasing diagnostic complexity and cost.",
                ],
                conclusion:
                    "Addressing throttle body issues early—whether through cleaning, **throttle body repair**, or complete **throttle body replacement**—prevents cascading engine problems and protects overall performance. Delaying maintenance due to **throttle body replacement cost** concerns often leads to far greater expenses later.",
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
