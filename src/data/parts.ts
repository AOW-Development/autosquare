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
                title: "What Is an Axle Housing and Why It's Important for Your Vehicle",
                text: [
                    "The **axle housing** is the rigid casting that encloses the differential and axle shafts.",
                    "It supports vehicle weight, maintains proper wheel alignment, and protects critical drivetrain components from road debris, impacts, and torque stress.",
                    "Whether front or rear, the axle housing plays a central role in transferring engine power to the wheels while also providing mounting points for suspension and braking components.",
                    "Built to withstand constant load and road shock, it forms the backbone of the drivetrain, making timely **axle housing repair** essential for long-term reliability.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Axle Housing Repair or Inspection",
                points: [
                    "**Clunking or grinding noises** – coming from the front or rear axle area.",
                    "**Vehicle pulling to one side** – especially noticeable under load or acceleration.",
                    "**Uneven tire wear** – often caused by axle misalignment.",
                    "**Visible fluid leaks** – indicating a cracked or warped housing.",
                    "**Vibration during acceleration** – more pronounced at higher speeds.",
                    "These symptoms often signal the need for prompt **axle housing repair**, particularly when the **rear axle housing** shows signs of stress or distortion.",
                ],
            },

            impact: {
                title: "How a Faulty Axle Housing Affects Performance and Vehicle Stability",
                text: [
                    "A damaged or misaligned axle housing impacts more than just power transfer.",
                    "**Improper differential alignment** – accelerating internal gear wear.",
                    "**Reduced traction** – especially during acceleration or heavy loads.",
                    "**Unstable handling** – making the vehicle feel loose or unpredictable.",
                    "**Increased suspension stress** – shortening the lifespan of connected components.",
                    "When the **rear axle housing** is compromised, power and load distribution suffer, making professional **axle housing repair** critical for restoring proper performance.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Axle Housing for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, and drivetrain configuration must match.",
                    "**Live axle vs independent suspension design** – critical for compatibility.",
                    "**Load capacity and material strength** – to handle torque and vehicle weight.",
                    "**Differential and axle shaft compatibility** – ensures correct fit and alignment.",
                    "Choosing the wrong housing can lead to repeated **axle housing repair** and alignment issues. Precision matters whether replacing a **rear axle housing** or a front assembly.",
                ],
            },

            benefits: {
                title: "Why Replacing or Repairing Your Axle Housing Improves Performance and Safety",
                points: [
                    "**Stable handling and predictable steering** – restored mechanical alignment.",
                    "**Even tire wear** – reducing long-term maintenance costs.",
                    "**Improved traction and power transfer** – especially under load.",
                    "**Reduced drivetrain noise and vibration** – smoother overall driving.",
                    "A properly aligned **rear axle housing** keeps the vehicle planted and responsive. Quality **axle housing repair** restores factory specifications and driving confidence.",
                ],
            },

            risks: {
                title: "How Ignoring Axle Housing Issues Can Lead to Bigger Repairs",
                points: [
                    "**Accelerated differential wear** – leading to expensive rebuilds.",
                    "**Suspension mounting failure** – creating serious safety risks.",
                    "**Axle shaft misalignment** – increasing the chance of breakage.",
                    "**Compromised vehicle control** – especially during towing or heavy loads.",
                ],
                conclusion:
                    "Addressing axle housing issues early—especially in the **rear axle housing**, which bears the most drivetrain stress—protects the entire system and preserves vehicle safety. Delaying **axle housing repair** often turns a manageable fix into a complete replacement.",
            },
        },

    },
    {
        category: "Axle", name: "Axel Shaft", image: "/parts/Axel Shaft.png", desc: {
            intro: {
                title: "What Is an Axle Shaft and Why It's Important for Your Vehicle",
                text: [
                    "The **axle shaft** is a critical drivetrain component that transfers power from the differential to the wheels.",
                    "It allows the wheels to rotate while supporting vehicle weight and adapting to suspension movement for smooth power delivery.",
                    "In front-wheel and all-wheel-drive vehicles, the **cv axle shaft** accommodates steering angles and suspension travel, maintaining consistent power delivery during turns and over uneven surfaces.",
                    "The complete **axle shaft assembly** works as an integrated system to ensure efficient performance and reliable drivetrain operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Axle Shaft Inspection or Replacement",
                points: [
                    "**Clicking or popping sounds while turning** – commonly linked to cv joint wear.",
                    "**Vibration during acceleration** – especially noticeable at higher speeds.",
                    "**Grease leaks near the wheels or under the vehicle** – indicating a torn cv boot.",
                    "**Loss of traction or uneven power delivery** – affecting drivability.",
                    "**Clunking noises when shifting between drive and reverse** – signaling excessive shaft play.",
                    "These symptoms often point to wear in the **cv axle shaft** or damage within the **axle shaft assembly** that requires immediate attention.",
                ],
            },

            impact: {
                title: "How a Faulty Axle Shaft Affects Performance and Vehicle Control",
                text: [
                    "A damaged axle shaft disrupts smooth power transfer and compromises overall vehicle stability.",
                    "**Jerky or uneven acceleration** – especially under load or uphill driving.",
                    "**Reduced traction during turns** – impacting control and confidence.",
                    "**Increased drivetrain stress** – placing added load on the differential and transmission.",
                    "**Unpredictable handling** – making the vehicle feel unstable or unresponsive.",
                    "When the **axle shaft assembly** fails to function correctly, both performance and safety are at risk. Even minor damage to a **cv axle shaft** can escalate quickly if ignored.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Axle Shaft for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and drivetrain type must match.",
                    "**Left vs right side compatibility** – axle shafts are often side-specific.",
                    "**Spline count and shaft length** – critical for proper fitment.",
                    "**Complete assembly vs shaft-only replacement** – impacts installation and reliability.",
                    "Choosing a complete **axle shaft assembly** often reduces installation time and ensures the **cv axle shaft**, joints, and boots work together seamlessly.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Axle Shaft Improves Performance and Reliability",
                points: [
                    "**Quiet operation** – eliminating clicking, popping, and clunking noises.",
                    "**Smooth acceleration** – restored power delivery without vibration.",
                    "**Improved cornering stability** – especially in front-wheel-drive vehicles.",
                    "**Reduced drivetrain wear** – protecting related components long-term.",
                    "A new **axle shaft assembly** restores the tight, composed driving feel drivers expect, with the **cv axle shaft** delivering power smoothly through every turn and acceleration.",
                ],
            },

            risks: {
                title: "How Ignoring Axle Shaft Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete axle failure** – resulting in sudden loss of drive.",
                    "**Differential or transmission damage** – due to excessive drivetrain stress.",
                    "**Wheel separation risk** – in extreme failure cases.",
                    "**Higher repair costs** – caused by collateral component damage.",
                ],
                conclusion:
                    "Addressing issues early with the correct **cv axle shaft** or a full **axle shaft assembly** protects the drivetrain and maintains safe vehicle operation. Replacing a worn **cv axle shaft** early prevents minor wear from turning into a major and costly failure.",
            },
        },
    },
    {
        category: "Axle", name: "Carrier", image: "/parts/Carrier.png", desc: {
            intro: {
                title: "What Is a Differential Carrier and Why It's Important for Your Vehicle",
                text: [
                    "The **differential carrier** is a core component of the differential that holds the spider gears and side gears in place.",
                    "As it rotates with the ring gear, it distributes torque between the wheels, allowing them to rotate at different speeds during cornering.",
                    "This controlled torque split is essential for traction, stability, and smooth vehicle handling.",
                    "Often referred to as a **carrier assembly**, it ensures engine power is delivered evenly without binding or wheel hop. In some contexts, the term **car carrier** is also used to describe the complete differential housing unit containing these components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Differential Carrier Inspection or Replacement",
                points: [
                    "**Whining or grinding noises** – coming from the differential area.",
                    "**Clunking sounds during acceleration or gear changes** – indicating internal play.",
                    "**Uneven power delivery** – causing inconsistent traction between wheels.",
                    "**Vibration while driving** – especially noticeable under load.",
                    "**Metal particles in differential fluid** – signaling internal wear.",
                    "These symptoms often point to damage or wear within the **carrier assembly** that should be addressed before the **car carrier** system fails completely.",
                ],
            },

            impact: {
                title: "How a Faulty Differential Carrier Affects Performance and Traction",
                text: [
                    "When the differential carrier becomes worn or misaligned, torque distribution becomes inconsistent.",
                    "**Loss of traction during turns** – reducing control and stability.",
                    "**Increased tire wear** – due to uneven wheel speed.",
                    "**Drivetrain binding** – placing excessive stress on gears and bearings.",
                    "**Reduced vehicle stability** – especially on uneven or slippery surfaces.",
                    "A compromised **car carrier** disrupts the balance required for controlled power delivery, while a failing **carrier assembly** affects the entire differential system.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Differential Carrier for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, and axle type must match.",
                    "**Differential design** – open, limited-slip, or locking configuration.",
                    "**Ring gear size and bolt pattern** – critical for compatibility.",
                    "**Complete carrier assembly vs component replacement** – impacts reliability and labor.",
                    "Choosing the correct **carrier assembly** ensures proper fitment and dependable torque distribution. A quality **car carrier** forms the foundation for smooth differential operation.",
                ],
            },

            benefits: {
                title: "Why Replacing the Differential Carrier Improves Stability and Drivetrain Reliability",
                points: [
                    "**Improved traction** – especially noticeable while cornering.",
                    "**Reduced drivetrain noise and vibration** – smoother operation.",
                    "**Even power delivery** – enhancing handling confidence.",
                    "**Extended differential lifespan** – protecting gears and bearings.",
                    "A properly functioning **car carrier** maintains predictable vehicle behavior, while a new **carrier assembly** eliminates worn components that compromise performance.",
                ],
            },

            risks: {
                title: "How Ignoring Differential Carrier Issues Can Lead to Bigger Repairs",
                points: [
                    "**Accelerated gear wear** – damaging ring and pinion sets.",
                    "**Bearing failure** – potentially leading to differential seizure.",
                    "**Loss of traction** – increasing safety risks.",
                    "**Complete differential rebuild** – significantly raising repair costs.",
                ],
                conclusion:
                    "Addressing **carrier assembly** issues early—whether in the **car carrier** housing or internal components—protects the differential and preserves long-term vehicle stability. Ignoring minor wear often turns a manageable repair into a complete differential failure.",
            },
        },

    },
    {
        category: "Axle", name: "Differential", image: "/parts/Differential.png", desc: {
            intro: {
                title: "What Is a Differential and Why It's Important for Your Vehicle",
                text: [
                    "A **differential** allows the wheels on an axle to rotate at different speeds while turning, which is essential because inner and outer wheels follow different paths through a corner.",
                    "Without a properly functioning differential, tires would scrub, traction would drop, and overall handling would suffer.",
                    "In front-wheel-drive and all-wheel-drive vehicles, the **front differential** plays a critical role in distributing torque efficiently to maintain control.",
                    "A healthy **car differential** improves traction, reduces drivetrain stress, and ensures smooth, predictable handling across all driving conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Differential Inspection or Service",
                points: [
                    "**Whining or howling noises** – changing with vehicle speed.",
                    "**Clunking sounds during acceleration or deceleration** – indicating gear or bearing wear.",
                    "**Vibration while turning** – especially noticeable under load.",
                    "**Difficulty maintaining traction in corners** – reduced grip and stability.",
                    "**Fluid leaks near the differential housing** – signaling seal failure.",
                    "These symptoms often indicate internal wear within the **car differential**, particularly when the **front differential** shows signs of stress or damage.",
                ],
            },

            impact: {
                title: "How a Faulty Differential Affects Performance, Traction, and Efficiency",
                text: [
                    "When a differential cannot distribute torque evenly, vehicle behavior becomes unpredictable.",
                    "**Uneven power delivery** – reducing traction and control.",
                    "**Increased tire wear** – caused by wheel speed imbalance.",
                    "**Reduced handling confidence** – especially during cornering.",
                    "**Lower fuel efficiency** – as the drivetrain compensates for added resistance.",
                    "A compromised **car differential** forces other drivetrain components to absorb unnecessary stress. In vehicles with a **front differential**, this directly impacts steering feel and cornering stability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Differential for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, and drivetrain type (FWD, AWD, or RWD).",
                    "**Differential design** – open, limited-slip, or locking configuration.",
                    "**Front vs rear differential requirements** – correct placement matters.",
                    "**OEM vs performance-oriented replacements** – balance reliability and driving needs.",
                    "Selecting the right **car differential** maintains proper torque distribution and handling balance. For front-wheel-drive vehicles, choosing the correct **front differential** is crucial for steering precision and traction.",
                ],
            },

            benefits: {
                title: "Why Servicing or Replacing Your Differential Improves Handling and Longevity",
                points: [
                    "**Improved traction** – especially noticeable during turns.",
                    "**Reduced drivetrain noise and vibration** – smoother operation.",
                    "**Even tire wear** – lowering long-term maintenance costs.",
                    "**Better fuel efficiency** – through reduced drivetrain resistance.",
                    "Proper maintenance of the **car differential** keeps the drivetrain responsive and durable. Regular service of the **front differential**, particularly in AWD systems, ensures balanced power delivery to all wheels.",
                ],
            },

            risks: {
                title: "How Ignoring Differential Issues Can Lead to Bigger Repairs",
                points: [
                    "**Gear and bearing damage** – often requiring complete rebuilds.",
                    "**Loss of traction** – increasing on-road safety risks.",
                    "**Drivetrain lockup** – severely affecting vehicle control.",
                    "**High repair costs** – due to cascading component failures.",
                ],
                conclusion:
                    "Addressing issues early protects the **car differential** and preserves overall vehicle performance. Whether it’s a **front differential** or rear unit showing signs of wear, prompt service prevents minor problems from turning into costly drivetrain failures.",
            },
        },

    },
    {
        category: "Axle", name: "Front Axel", image: "/parts/Front Axel.png", desc: {
            intro: {
                title: "What Is a Front Axle and Why It's Important for Your Vehicle",
                text: [
                    "The **front axle** is a critical structural and mechanical component that supports the vehicle’s weight while allowing the front wheels to steer.",
                    "It works in coordination with the suspension system and steering linkages to absorb road shocks and maintain proper wheel alignment.",
                    "By carrying load and guiding direction simultaneously, the front axle ensures smooth handling, stability, and driving comfort across varying road conditions.",
                    "Well-maintained **front axle parts** are essential for predictable vehicle control and safe, confident operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Front Axle Repair or Inspection",
                points: [
                    "**Clunking or knocking noises** – when driving over bumps or uneven surfaces.",
                    "**Loose or unresponsive steering** – reduced steering precision.",
                    "**Uneven tire wear** – especially noticeable on the front wheels.",
                    "**Vehicle pulling to one side** – during driving or braking.",
                    "**Excessive steering wheel vibration** – indicating worn components.",
                    "These symptoms often signal the need for **front axle repair** before handling and safety are compromised. Worn **front axle parts** can quickly affect multiple systems.",
                ],
            },

            impact: {
                title: "How a Faulty Front Axle Affects Handling, Stability, and Comfort",
                text: [
                    "A compromised front axle can disrupt steering, suspension, and ride quality all at once.",
                    "**Reduced steering accuracy** – making the vehicle harder to control.",
                    "**Poor shock absorption** – resulting in a harsh or unsettled ride.",
                    "**Misaligned suspension geometry** – increasing wear on related components.",
                    "**Lower driving confidence** – especially noticeable at higher speeds.",
                    "When **front axle parts** wear or loosen, the vehicle loses its balanced, composed feel. Timely **front axle repair** restores precision, comfort, and stability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Front Axle Parts for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and axle configuration.",
                    "**Solid axle vs independent front suspension** – design compatibility matters.",
                    "**Load capacity and material strength** – critical for durability.",
                    "**Steering and suspension compatibility** – ensures proper alignment and control.",
                    "Using the correct **front axle parts** minimizes repeat **front axle repair** needs and prevents alignment issues. Quality components form the foundation of reliable steering performance.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing Your Front Axle Improves Safety and Drive Quality",
                points: [
                    "**Precise steering response** – improved control and feedback.",
                    "**Enhanced stability** – during cornering and braking.",
                    "**Smoother ride quality** – even on rough or uneven roads.",
                    "**Even tire wear** – reducing long-term maintenance costs.",
                    "Proper **front axle repair** protects steering and suspension systems, while installing quality **front axle parts** ensures long-lasting comfort and reliability.",
                ],
            },

            risks: {
                title: "How Ignoring Front Axle Issues Can Lead to Bigger Problems",
                points: [
                    "**Accelerated steering and suspension wear** – affecting multiple components.",
                    "**Alignment failure** – increasing tire replacement costs.",
                    "**Loss of vehicle control** – especially during emergency maneuvers.",
                    "**Higher repair expenses** – due to compounded mechanical damage.",
                ],
                conclusion:
                    "Addressing worn or damaged **front axle parts** early preserves safety, comfort, and long-term reliability. Delaying necessary **front axle repair** can quickly turn minor wear into serious handling and safety concerns.",
            },
        },

    },
    {
        category: "Axle", name: "Front Drive Shaft", image: "/parts/Front Drive Shaft.png", desc: {
            intro: {
                title: "What Is a Front Drive Shaft and Why It's Important for Your Vehicle",
                text: [
                    "The **front drive shaft** transfers power from the transmission or differential to the front wheels while allowing smooth steering and suspension movement.",
                    "In front-wheel-drive and all-wheel-drive systems, it must handle torque, rotation, and constant angle changes at the same time.",
                    "Often referred to as a **front wheel drive shaft**, this component plays a key role in delivering consistent power while maintaining stability and control during turns and uneven road conditions.",
                    "Similar to a **rear drive shaft assembly** in rear-wheel-drive vehicles, it is essential for maintaining overall drivetrain integrity.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Front Drive Shaft Inspection or Replacement",
                points: [
                    "**Clicking or popping sounds while turning** – commonly caused by joint wear.",
                    "**Vibration during acceleration** – especially noticeable under load.",
                    "**Grease leakage near the wheels or under the vehicle** – indicating a damaged boot.",
                    "**Clunking noises when shifting gears** – signaling excessive play.",
                    "**Loss of smooth power delivery** – affecting drivability.",
                    "These symptoms often indicate wear requiring **front drive shaft replacement**, or **rear drive shaft repair** if similar issues are present at the back.",
                ],
            },

            impact: {
                title: "How a Faulty Front Drive Shaft Affects Performance and Handling",
                text: [
                    "A worn or damaged front drive shaft disrupts smooth power transfer to the wheels.",
                    "**Jerky acceleration** – especially during hard acceleration or uphill driving.",
                    "**Reduced traction during turns** – impacting control and confidence.",
                    "**Increased stress on transmission and differential components** – accelerating wear.",
                    "**Unstable steering feel** – making the vehicle harder to control.",
                    "When the **front wheel drive shaft** is compromised, performance and safety suffer—much like failure of a **rear drive shaft assembly** in rear-wheel-drive vehicles.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Front Drive Shaft for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and drivetrain type.",
                    "**Left or right side compatibility** – shafts are often side-specific.",
                    "**Spline count and shaft length** – critical for proper fitment.",
                    "**Complete assembly vs shaft-only replacement** – impacts reliability and labor.",
                    "Choosing a complete unit often simplifies **front drive shaft replacement** and ensures long-term reliability, similar to selecting a full **rear drive shaft assembly** for rear-axle repairs.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Front Drive Shaft Improves Performance and Reliability",
                points: [
                    "**Quiet operation** – eliminating clicks, pops, and vibrations.",
                    "**Improved acceleration** – smooth power delivery without hesitation.",
                    "**Stable steering feel** – especially during cornering.",
                    "**Reduced drivetrain wear** – protecting related components.",
                    "A new **front wheel drive shaft** restores the composed, predictable driving feel. Just as **rear drive shaft repair** revitalizes RWD performance, front shaft replacement renews FWD and AWD dynamics.",
                ],
            },

            risks: {
                title: "How Ignoring Front Drive Shaft Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete shaft failure** – resulting in sudden loss of drive.",
                    "**Transmission or differential seal damage** – causing fluid leaks.",
                    "**Wheel hub or bearing damage** – increasing repair costs.",
                    "**Serious safety risks** – especially at highway speeds.",
                ],
                conclusion:
                    "Addressing **front drive shaft** issues early protects the drivetrain and ensures safe vehicle operation. Whether it’s **front wheel drive shaft** maintenance or **rear drive shaft repair**, timely service prevents minor wear from escalating into major and costly failures.",
            },
        },

    },
    {
        category: "Axle", name: "Rear Axel", image: "/parts/Rear Axel.png", desc: {
            intro: {
                title: "What Is a Rear Axle and Why It's Important for Your Vehicle",
                text: [
                    "The **rear axle** transfers power from the differential to the rear wheels while supporting a significant portion of the vehicle’s weight.",
                    "It plays a vital role in maintaining stability, traction, and load-bearing capability, especially during acceleration and when carrying passengers or cargo.",
                    "Rear axle designs vary by vehicle type, and the **rear axle replacement cost** depends on axle construction, vehicle application, and labor requirements.",
                    "Whether solid or independent, a properly functioning **rear axle for car** ensures balanced handling and smooth power delivery under load.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Rear Axle Inspection or Replacement",
                points: [
                    "**Clunking or grinding noises** – coming from the rear of the vehicle.",
                    "**Vibration during acceleration** – especially noticeable under load.",
                    "**Uneven rear tire wear** – often caused by axle misalignment.",
                    "**Vehicle pulling or swaying** – reducing stability and control.",
                    "**Visible fluid leaks** – indicating internal axle or seal wear.",
                    "These symptoms often signal the need to evaluate **rear axle replacement cost** early, as a failing **rear axle for car** can quickly compromise safety and performance.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Axle Affects Stability and Performance",
                text: [
                    "A worn or damaged rear axle reduces the vehicle’s ability to manage power and weight effectively.",
                    "**Loss of traction** – especially during acceleration or towing.",
                    "**Unstable handling** – particularly while cornering or carrying heavy loads.",
                    "**Increased drivetrain stress** – affecting differential and axle components.",
                    "**Reduced driving confidence** – under demanding conditions.",
                    "When the **rear axle for car** cannot maintain alignment and strength, both performance and safety suffer. Understanding **rear axle replacement cost** early helps plan timely repairs.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Axle for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, and drivetrain layout.",
                    "**Solid axle vs independent rear suspension** – design compatibility matters.",
                    "**Load capacity and intended use** – including towing requirements.",
                    "**Differential and braking system compatibility** – for proper fitment.",
                    "Choosing the correct **rear axle for car** helps manage long-term **rear axle replacement cost** and prevents premature wear or repeat repairs.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Rear Axle Improves Handling and Reliability",
                points: [
                    "**Improved traction** – especially noticeable under heavy load.",
                    "**Smoother handling** – during acceleration and braking.",
                    "**Reduced vibration and noise** – enhancing overall ride comfort.",
                    "**Extended drivetrain lifespan** – protecting differential components.",
                    "Investing in the right **rear axle for car** ensures dependable performance in daily and heavy-use driving. While **rear axle replacement cost** varies, the long-term reliability benefits outweigh delayed repairs.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Axle Issues Can Lead to Bigger Repairs",
                points: [
                    "**Accelerated differential damage** – significantly increasing repair costs.",
                    "**Suspension mounting failure** – affecting vehicle control.",
                    "**Axle shaft misalignment** – increasing the risk of breakage.",
                    "**Serious safety hazards** – especially when carrying heavy loads.",
                ],
                conclusion:
                    "Addressing rear axle issues early helps control **rear axle replacement cost** and protects overall vehicle stability. Allowing a worn **rear axle for car** to go unchecked can turn minor wear into costly drivetrain damage and dangerous handling conditions.",
            },
        },
    },
    {
        category: "Axle", name: "Rear Drive Shaft", image: "/parts/Rear Drive Shaft.png", desc: {
            intro: {
                title: "What Is a Rear Drive Shaft and Why It's Important for Your Vehicle",
                text: [
                    "The **rear drive shaft** transmits power from the transmission to the rear differential, allowing the rear wheels to propel the vehicle forward.",
                    "It accommodates suspension movement while maintaining proper drivetrain alignment, ensuring consistent torque delivery across varying road conditions.",
                    "In rear-wheel-drive and four-wheel-drive vehicles, the **rear drive shaft assembly** serves as the critical link between engine power and wheel rotation.",
                    "A properly functioning drive shaft ensures smooth acceleration, responsive handling, and efficient power transfer throughout the drivetrain.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Rear Drive Shaft Inspection or Replacement",
                points: [
                    "**Vibration that increases with vehicle speed** – often caused by imbalance or worn joints.",
                    "**Clunking noises during acceleration or deceleration** – indicating excessive play.",
                    "**Squeaking sounds from underneath the vehicle** – commonly linked to failing universal joints.",
                    "**Difficulty shifting gears smoothly** – due to drivetrain misalignment.",
                    "**Excessive driveline movement** – signaling worn components.",
                    "These symptoms often indicate wear within the **rear drive shaft assembly** that may require professional **rear drive shaft repair** to avoid further drivetrain damage.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Drive Shaft Affects Performance and Drivetrain Health",
                text: [
                    "A compromised rear drive shaft disrupts smooth power transfer from the transmission to the wheels.",
                    "**Severe vibration** – reducing ride comfort and vehicle control.",
                    "**Uneven power delivery** – causing hesitation during acceleration.",
                    "**Increased stress on transmission and differential components** – accelerating wear.",
                    "**Damage to universal joints and center bearings** – leading to further failure.",
                    "When the **rear drive shaft assembly** cannot maintain proper balance and alignment, the entire drivetrain operates under strain, making timely **rear drive shaft repair** essential.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Drive Shaft for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and drivetrain configuration.",
                    "**Shaft length and diameter** – must match factory requirements.",
                    "**Universal joint and yoke compatibility** – critical for proper fitment.",
                    "**One-piece vs two-piece design** – depends on vehicle layout.",
                    "Choosing a complete **rear drive shaft assembly** often delivers better balance and longevity than replacing individual components, reducing future **rear drive shaft repair** needs.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Rear Drive Shaft Improves Performance and Reliability",
                points: [
                    "**Elimination of drivetrain vibration** – for smoother, more comfortable driving.",
                    "**Improved acceleration response** – without hesitation or shudder.",
                    "**Reduced wear on transmission and differential** – protecting major components.",
                    "**Enhanced stability at highway speeds** – improved control and confidence.",
                    "A properly balanced **rear drive shaft assembly** ensures efficient torque transfer and extends the lifespan of surrounding drivetrain parts. Professional **rear drive shaft repair** or replacement restores factory-level precision.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Drive Shaft Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete shaft failure** – potentially leaving the vehicle immobile.",
                    "**Transmission or differential seal damage** – caused by constant vibration.",
                    "**Universal joint failure** – leading to sudden loss of power.",
                    "**Undercarriage damage** – from a detached or flailing shaft.",
                ],
                conclusion:
                    "Addressing rear drive shaft issues early protects the entire drivetrain system. Whether through targeted **rear drive shaft repair** or full **rear drive shaft assembly** replacement, prompt action prevents minor vibrations from escalating into dangerous failures and costly repairs.",
            },
        },
    },
    {
        category: "Axle", name: "Ring Gear/Pinion", image: "/parts/Ring Gear/Pinion.png", desc: {
            intro: {
                title: "What Is a Ring Gear and Pinion and Why It's Important for Your Vehicle",
                text: [
                    "The **ring gear and pinion** form the core of the differential system, transferring rotational power from the driveshaft to the axle shafts and ultimately to the wheels.",
                    "This gear set controls torque multiplication and wheel speed, allowing the vehicle to handle different loads, speeds, and driving conditions efficiently.",
                    "Using hypoid or bevel gear designs, the pinion meshes precisely with the ring gear to redirect power at a 90-degree angle while providing necessary gear reduction.",
                    "This setup is essential for towing capability, smooth cornering, and maintaining optimal engine RPM across a wide range of driving situations.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Ring Gear and Pinion Inspection or Replacement",
                points: [
                    "**Whining or howling noises** – changing with vehicle speed.",
                    "**Clunking sounds during acceleration or deceleration** – indicating excessive backlash.",
                    "**Increased noise while turning** – often caused by uneven gear wear.",
                    "**Vibration from the rear differential area** – signaling imbalance or damage.",
                    "**Excessive drivetrain play** – noticeable during throttle changes.",
                    "These symptoms often indicate wear or damage in the **ring gear and pinion** that requires immediate attention to prevent complete differential failure.",
                ],
            },

            impact: {
                title: "How Faulty Ring and Pinion Gears Affect Performance and Drivetrain Integrity",
                text: [
                    "Worn or damaged ring and pinion gears compromise the entire differential system.",
                    "**Reduced power transfer efficiency** – negatively affecting acceleration.",
                    "**Excessive heat buildup** – damaging differential bearings and seals.",
                    "**Inconsistent torque delivery** – especially noticeable under load or towing.",
                    "**Gear tooth failure** – potentially leading to catastrophic differential damage.",
                    "When the **ring gear and pinion** mesh is compromised, proper torque conversion fails, placing severe stress on surrounding drivetrain components.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Ring and Pinion Gears for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, axle type, and differential housing.",
                    "**Gear ratio selection** – based on tire size, engine output, and driving use.",
                    "**Tooth count compatibility** – ring gear and pinion must be perfectly matched.",
                    "**Material quality** – heat-treated steel for durability under high stress.",
                    "Choosing the correct **ring and pinion gears** ensures balanced acceleration, fuel efficiency, and drivetrain longevity for daily driving, towing, or off-road use.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Ring Gear and Pinion Improves Performance and Efficiency",
                points: [
                    "**Smooth, quiet operation** – eliminating whining and grinding noises.",
                    "**Improved acceleration and towing performance** – through proper torque multiplication.",
                    "**Better fuel efficiency** – achieved with optimized gear ratios.",
                    "**Reduced drivetrain stress** – protecting transmission and axle components.",
                    "A properly installed and shimmed **ring gear and pinion** set ensures correct mesh patterns, maximizing gear life and performance under demanding conditions.",
                ],
            },

            risks: {
                title: "How Ignoring Ring and Pinion Gear Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete gear tooth breakage** – spreading metal debris throughout the differential.",
                    "**Bearing and seal failure** – caused by heat and vibration.",
                    "**Axle shaft damage** – from violent or uneven gear engagement.",
                    "**Full differential replacement** – dramatically increasing repair costs.",
                ],
                conclusion:
                    "Addressing **ring gear and pinion** issues early—through inspection, adjustment, or replacement—protects the entire differential assembly. Ignoring early warning noises can quickly turn a manageable repair into a complete differential rebuild with significant parts and labor costs.",
            },
        },
    },
    {
        category: "Brakes", name: "Anti Lock Brake Part", image: "/parts/Anti-Lock Brake Part.png", desc: {
            intro: {
                title: "What Is an Anti-Lock Brake System and Why It's Important for Your Vehicle",
                text: [
                    "An **anti-lock brake system (ABS)** prevents wheel lock-up during hard braking, allowing the driver to maintain steering control while slowing the vehicle safely.",
                    "By rapidly modulating brake pressure at each wheel, the ABS system delivers maximum stopping power without skidding, even on slippery or uneven surfaces.",
                    "The system uses wheel speed sensors, a control module (ECU), hydraulic valves, and a pump to monitor and adjust braking force in milliseconds.",
                    "This technology is essential for vehicle stability and loss-of-control prevention during emergency braking situations.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Anti-Lock Brake System Inspection or Service",
                points: [
                    "**ABS warning light illuminated** – indicating a detected system fault.",
                    "**Pulsating brake pedal during normal braking** – outside of hard stops.",
                    "**Longer stopping distances** – compared to normal braking performance.",
                    "**Wheel lock-up during hard braking** – loss of ABS intervention.",
                    "**Unusual noises from the brake system** – during operation.",
                    "These symptoms often point to issues with the **anti-lock brake system sensor** or other ABS components that require immediate attention to restore safe braking.",
                ],
            },

            impact: {
                title: "How a Faulty Anti-Lock Brake System Affects Safety and Control",
                text: [
                    "A malfunctioning ABS system reduces your ability to stop safely in critical situations.",
                    "**Wheel lock-up during emergency braking** – causing loss of steering control.",
                    "**Increased stopping distances** – especially on wet, icy, or loose surfaces.",
                    "**Vehicle instability during panic stops** – reduced directional control.",
                    "**Lower driver confidence** – due to unpredictable braking behavior.",
                    "When an **anti-lock brake system sensor** fails or the ABS system develops faults, the vehicle reverts to conventional braking, removing critical skid-prevention benefits.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Anti-Lock Brake System Components for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and brake system type.",
                    "**OEM vs aftermarket components** – especially for sensors and control modules.",
                    "**Complete ABS module vs individual sensor replacement** – depending on fault diagnosis.",
                    "**Electronic and hydraulic compatibility** – with existing brake hardware.",
                    "Choosing quality **anti-lock brake system sensor** components ensures reliable operation and preserves the precise timing required for effective ABS performance.",
                ],
            },

            benefits: {
                title: "Why Servicing Your Anti-Lock Brake System Improves Safety and Performance",
                points: [
                    "**Shorter stopping distances** – during emergency braking situations.",
                    "**Maintained steering control** – even under hard braking.",
                    "**Improved stability** – on wet, icy, or uneven road surfaces.",
                    "**Greater driver confidence** – in all weather and traffic conditions.",
                    "A properly serviced ABS system with functional **anti-lock brake system sensors** provides split-second intervention that helps prevent accidents and protects occupants.",
                ],
            },

            risks: {
                title: "How Ignoring Anti-Lock Brake System Issues Can Lead to Dangerous Situations",
                points: [
                    "**Complete loss of anti-lock functionality** – during emergencies.",
                    "**Wheel lock-up** – causing loss of steering control.",
                    "**Higher accident risk** – especially in poor road conditions.",
                    "**Damage to other brake components** – due to improper operation.",
                ],
                conclusion:
                    "Addressing **anti-lock brake system sensor** failures and ABS malfunctions promptly ensures this critical safety system remains fully operational. Ignoring an ABS warning light can turn a minor sensor issue into a life-threatening situation during emergency braking.",
            },
        },
    },
    {
        category: "Brakes", name: "Brake Master Cylinder", image: "/parts/Brake Master Cylinder.png", desc: {
            intro: {
                title: "What Is a Brake Master Cylinder and Why It's Important for Your Vehicle",
                text: [
                    "The **brake master cylinder** converts mechanical force from the brake pedal into hydraulic pressure that activates the brakes at each wheel.",
                    "Using brake fluid, it transmits force through the braking system to ensure immediate and proportional braking response.",
                    "Modern master cylinders feature a dual-circuit design with separate chambers for front and rear brakes, improving redundancy and safety.",
                    "An integrated reservoir stores brake fluid, allowing partial braking capability if one circuit fails—making this component essential for safe vehicle operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Brake Master Cylinder Inspection or Replacement",
                points: [
                    "**Spongy or soft brake pedal** – pedal sinks toward the floor.",
                    "**Unusually hard brake pedal** – requiring excessive force to stop.",
                    "**Brake warning light illuminated** – indicating hydraulic issues.",
                    "**Visible brake fluid leaks** – near the firewall or under the pedal.",
                    "**Uneven braking or pulling** – during stops.",
                    "These symptoms often signal failing **master cylinder brake parts** and may require immediate replacement to prevent brake failure.",
                ],
            },

            impact: {
                title: "How a Faulty Brake Master Cylinder Affects Braking Performance and Safety",
                text: [
                    "A compromised brake master cylinder cannot maintain proper hydraulic pressure.",
                    "**Inconsistent brake pedal pressure** – making stopping distances unpredictable.",
                    "**Internal fluid leaks** – causing gradual loss of braking force.",
                    "**Complete brake failure** – if both hydraulic circuits are affected.",
                    "**Contaminated brake fluid** – damaging calipers, wheel cylinders, and ABS components.",
                    "When **master cylinder brake parts** wear or seals fail, the braking system loses the hydraulic force needed for safe operation, creating an urgent safety risk.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Brake Master Cylinder for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and brake system configuration.",
                    "**Bore diameter and piston size** – for correct pressure generation.",
                    "**Reservoir capacity and mounting design** – must match the vehicle layout.",
                    "**OEM vs remanufactured units** – ensure quality **master cylinder brake parts**.",
                    "Selecting the correct brake master cylinder ensures proper hydraulic balance between front and rear brakes and reliable stopping performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Brake Master Cylinder Improves Safety and Pedal Feel",
                points: [
                    "**Firm, consistent brake pedal feel** – with proper travel distance.",
                    "**Reliable stopping power** – in all driving conditions.",
                    "**Elimination of fluid leaks** – preventing contamination.",
                    "**Restored confidence** – during emergency braking.",
                    "Quality **master cylinder brake parts** maintain hydraulic integrity and eliminate spongy pedal feel and unpredictable braking response.",
                ],
            },

            risks: {
                title: "How Ignoring Brake Master Cylinder Issues Can Lead to Brake Failure",
                points: [
                    "**Progressive loss of braking power** – leading to complete failure.",
                    "**Internal seal failure** – causing sudden pedal drop.",
                    "**Brake fluid contamination** – damaging calipers, ABS, and wheel cylinders.",
                    "**High accident risk** – from unexpected brake failure.",
                ],
                conclusion:
                    "Addressing **brake master cylinder** replacement needs promptly protects the entire braking system. Allowing worn **master cylinder brake parts** to deteriorate can quickly turn minor pedal issues into catastrophic brake failure when stopping power is needed most.",
            },
        },
    },
    {
        category: "Brakes", name: "Hub", image: "/parts/Hub.png", desc: {
            intro: {
                title: "What Is a Wheel Hub Assembly and Why It's Important for Your Vehicle",
                text: [
                    "A **wheel hub assembly** is the mounting point that connects the wheel to the vehicle’s suspension and braking system.",
                    "It houses the wheel bearings that allow smooth wheel rotation while supporting vehicle weight and transmitting braking torque to the wheels.",
                    "Typically constructed from durable cast iron or aluminum, the hub provides a secure mounting surface for brake rotors or drums.",
                    "This critical junction maintains proper alignment between the braking, suspension, and steering systems for safe, predictable operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Wheel Hub Assembly Inspection or Replacement",
                points: [
                    "**Grinding, humming, or roaring noises** – increasing with vehicle speed.",
                    "**Wheel wobble or excessive play** – noticeable when the wheel is lifted.",
                    "**Vibration through the steering wheel or seat** – especially at higher speeds.",
                    "**Uneven tire wear** – isolated to one wheel position.",
                    "**ABS warning light** – caused by faulty hub-mounted speed sensors.",
                    "These symptoms often indicate wear in the **wheel bearing hub assembly** and require prompt inspection to avoid brake damage or wheel failure.",
                ],
            },

            impact: {
                title: "How a Faulty Wheel Hub Assembly Affects Safety and Vehicle Performance",
                text: [
                    "A worn wheel hub assembly cannot properly support wheel rotation or maintain brake alignment.",
                    "**Unstable handling** – with unpredictable steering response.",
                    "**Accelerated brake wear** – due to rotor misalignment.",
                    "**Excessive heat buildup** – reducing braking efficiency.",
                    "**Risk of catastrophic bearing failure** – while driving.",
                    "As the **wheel bearing hub assembly** deteriorates, bearing play increases and proper rotor alignment is lost, compromising both braking performance and vehicle control.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Wheel Hub Assembly for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and wheel position (front or rear).",
                    "**ABS sensor integration** – required for vehicles with anti-lock braking systems.",
                    "**Load rating** – appropriate for vehicle weight and usage.",
                    "**Complete assembly vs bearing-only replacement** – affects labor and reliability.",
                    "Choosing a complete **wheel bearing hub assembly** often simplifies installation and ensures all components work together seamlessly for long-term reliability.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Wheel Hub Assembly Improves Safety and Ride Quality",
                points: [
                    "**Quiet, vibration-free operation** – across all driving speeds.",
                    "**Accurate wheel alignment** – for optimal brake performance.",
                    "**Improved handling and steering response** – restored stability.",
                    "**Proper ABS operation** – with fully functional speed sensors.",
                    "A quality **wheel hub assembly** eliminates bearing play and noise while ensuring consistent brake alignment and reliable stopping power.",
                ],
            },

            risks: {
                title: "How Ignoring Wheel Hub Assembly Issues Can Lead to Catastrophic Failure",
                points: [
                    "**Complete bearing seizure** – causing wheel lock-up while driving.",
                    "**Wheel detachment** – from severe bearing failure.",
                    "**Brake rotor damage** – due to excessive runout and vibration.",
                    "**Loss of vehicle control** – especially at highway speeds.",
                ],
                conclusion:
                    "Addressing **wheel bearing hub assembly** issues early prevents minor noise from escalating into dangerous failures. Ignoring a failing **wheel hub assembly** can allow a faint hum to progress into complete bearing disintegration and wheel separation, putting both occupants and other drivers at serious risk.",
            },
        },
    },
    {
        category: "Brakes", name: "Locking Hubs", image: "/parts/Locking Hubs.png", desc: {
            intro: {
                title: "What Is a Locking Hub and Why It's Important for Your Vehicle",
                text: [
                    "A **locking hub** allows manual or automatic connection of the front wheels to the drivetrain in four-wheel-drive vehicles.",
                    "When disengaged, the front wheels spin freely without turning the front axle shafts and differential, reducing parasitic drag and improving fuel efficiency during 2WD operation.",
                    "Available as **manual locking hubs** that require physical engagement or automatic versions that engage electronically, these components provide flexibility between 2WD and 4WD modes.",
                    "This engage-and-disengage control is essential for optimizing fuel economy on highways while ensuring dependable traction when off-road or in poor conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Locking Hub Inspection or Replacement",
                points: [
                    "**Four-wheel drive fails to engage** – when selected from the transfer case.",
                    "**Front axle components rotate in 2WD** – reducing fuel efficiency.",
                    "**Grinding or clicking noises** – coming from the front hubs.",
                    "**Difficulty turning manual hub dials** – indicating internal wear.",
                    "**Uneven engagement between left and right hubs** – causing handling issues.",
                    "These symptoms often indicate wear or damage in **4x4 locking hubs**, preventing proper engagement or disengagement and compromising both efficiency and capability.",
                ],
            },

            impact: {
                title: "How Faulty Locking Hubs Affect Performance and Efficiency",
                text: [
                    "When locking hubs fail to operate correctly, drivetrain flexibility is lost.",
                    "**Reduced fuel economy** – from constant front axle rotation in 2WD.",
                    "**Inability to engage four-wheel drive** – when traction is required.",
                    "**Premature drivetrain wear** – affecting axles, CV joints, and the differential.",
                    "**Unpredictable handling** – if one hub engages while the other does not.",
                    "When **manual locking hubs** fail to lock or unlock properly, or automatic hubs stick in one position, the vehicle cannot optimize drivetrain configuration for changing conditions.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Locking Hubs for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and front axle type.",
                    "**Manual vs automatic hubs** – based on driving habits and convenience.",
                    "**Spline count and bolt pattern compatibility** – critical for fitment.",
                    "**Heavy-duty construction** – recommended for off-road or aggressive use.",
                    "Choosing quality **4x4 locking hubs** ensures reliable engagement when traction is needed and full disengagement for efficient highway driving.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Locking Hubs Improves Efficiency and Capability",
                points: [
                    "**Improved fuel economy** – by eliminating unnecessary front axle rotation.",
                    "**Reliable four-wheel-drive engagement** – for off-road and poor weather conditions.",
                    "**Reduced wear on drivetrain components** – including CV joints and the front differential.",
                    "**Restored confidence in 4WD operation** – consistent and predictable engagement.",
                    "Quality **manual locking hubs** or properly functioning automatic hubs restore full control over drivetrain engagement, balancing efficiency and traction for every driving scenario.",
                ],
            },

            risks: {
                title: "How Ignoring Locking Hub Issues Can Lead to Bigger Problems",
                points: [
                    "**Constant front axle rotation** – increasing fuel use and component wear.",
                    "**Inability to engage 4WD** – leading to stranded situations off-road.",
                    "**Asymmetric hub engagement** – causing drivetrain binding and handling issues.",
                    "**Accelerated wear** – on CV joints, differential, and transfer case.",
                ],
                conclusion:
                    "Addressing **4x4 locking hubs** issues early preserves drivetrain efficiency and off-road capability. Ignoring sticky **manual locking hubs** or non-responsive automatic versions can leave you without traction when you need it most, while also wasting fuel and accelerating drivetrain wear.",
            },
        },
    },
    {
        category: "Brakes", name: "Power Brake Booster", image: "/parts/Power Brake Booster.png", desc: {
            intro: {
                title: "What Is a Power Brake Booster and Why It's Important for Your Vehicle",
                text: [
                    "A **power brake booster** multiplies the force applied to the brake pedal using vacuum or hydraulic pressure, greatly reducing the physical effort required to stop the vehicle.",
                    "Positioned between the brake pedal and the master cylinder, it amplifies pedal input so even light foot pressure generates strong braking force.",
                    "Most modern vehicles rely on the brake booster to deliver smooth, responsive braking under normal and emergency conditions.",
                    "By using engine vacuum or hydraulic pressure, the booster ensures consistent braking performance, making it essential for safe and comfortable driving.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Power Brake Booster Inspection or Replacement",
                points: [
                    "**Hard brake pedal** – requiring excessive force to slow or stop the vehicle.",
                    "**Hissing sound when braking** – often caused by a vacuum leak.",
                    "**Engine stalling during braking** – indicating booster or vacuum issues.",
                    "**Longer stopping distances** – despite firm pedal pressure.",
                    "**Brake warning light illuminated** – signaling braking system concerns.",
                    "These symptoms often indicate the need for **brake booster replacement**, as a failing booster removes the power assist that normal braking depends on.",
                ],
            },

            impact: {
                title: "How a Faulty Power Brake Booster Affects Braking Performance and Safety",
                text: [
                    "When the brake booster fails, braking relies almost entirely on driver leg strength.",
                    "**Significantly increased pedal effort** – making emergency stops difficult.",
                    "**Inconsistent braking response** – leading to unpredictable stopping behavior.",
                    "**Vacuum leaks** – negatively affecting engine performance and fuel efficiency.",
                    "**Delayed braking reaction** – increasing accident risk in critical moments.",
                    "A failed brake booster forces the vehicle into manual braking mode, making timely **brake booster replacement** critical for maintaining safe stopping performance.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Power Brake Booster for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and engine configuration.",
                    "**Vacuum-assisted vs hydraulic (hydroboost) design** – depending on braking system.",
                    "**Booster size and mounting configuration** – must match factory specifications.",
                    "**OEM vs remanufactured units** – ensure quality internal components.",
                    "Choosing the correct unit for **brake booster replacement** restores the proper assist ratio and the light pedal feel expected from modern brake systems.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Power Brake Booster Improves Safety and Comfort",
                points: [
                    "**Light, responsive brake pedal** – requiring minimal driver effort.",
                    "**Consistent stopping power** – in everyday and emergency situations.",
                    "**Improved emergency response time** – quicker, more controlled stops.",
                    "**Elimination of vacuum leaks** – restoring proper engine operation.",
                    "A properly functioning **power brake booster** transforms braking into an effortless, controlled action and restores the confidence drivers expect.",
                ],
            },

            risks: {
                title: "How Ignoring Power Brake Booster Issues Can Lead to Dangerous Situations",
                points: [
                    "**Progressive loss of brake assist** – making stops increasingly difficult.",
                    "**Inadequate stopping force** – during emergency situations.",
                    "**Vacuum system failure** – impacting engine performance.",
                    "**Higher accident risk** – due to delayed or insufficient braking.",
                ],
                conclusion:
                    "Addressing **power brake booster** issues promptly ensures your braking system maintains proper assistance for safe operation. Ignoring early symptoms can turn a slightly hard pedal into dangerously ineffective braking. Timely **brake booster replacement** keeps stopping effort normal and reaction time fast when it matters most.",
            },
        },
    },
    {
        category: "Brakes", name: "Rear Brakes", image: "/parts/Rear Brakes.png", desc: {
            intro: {
                title: "What Are Rear Brakes and Why They're Important for Your Vehicle",
                text: [
                    "Rear brakes work together with front brakes to deliver balanced stopping power and maintain vehicle stability during deceleration.",
                    "Whether equipped with **rear disc brakes** using pads or **rear drum brakes** using shoes, these components handle a meaningful share of braking force while helping prevent rear wheel lock-up.",
                    "Rear brake systems also integrate the parking brake mechanism, securing the vehicle on inclines and preventing unintended movement when parked.",
                    "This dual role makes rear brakes essential for both dynamic stopping performance and stationary vehicle safety.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Rear Brake Service or Replacement",
                points: [
                    "**Squealing, grinding, or scraping noises** – coming from the rear wheels.",
                    "**Vehicle pulling to one side** – during braking.",
                    "**Parking brake not holding on inclines** – reduced stationary security.",
                    "**Brake warning light illuminated** – indicating system issues.",
                    "**Reduced stopping power** – requiring increased pedal pressure.",
                    "These symptoms often signal the need for **rear brake pad replacement** on disc systems or service for **rear drum brakes** before performance declines further.",
                ],
            },

            impact: {
                title: "How Faulty Rear Brakes Affect Stopping Power and Vehicle Stability",
                text: [
                    "Worn or compromised rear brakes disrupt proper braking force distribution.",
                    "**Longer stopping distances** – as rear brakes contribute less force.",
                    "**Front brake overwork** – causing premature wear and overheating.",
                    "**Vehicle instability during hard stops** – especially in wet conditions.",
                    "**Ineffective parking brake** – increasing rollaway risk.",
                    "When **rear drum brakes** wear excessively or rear disc pads deteriorate, the front brakes must compensate, leading to uneven stopping and reduced control.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Brake Components for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and brake system type.",
                    "**Disc pads vs drum shoes** – based on rear brake configuration.",
                    "**OEM vs performance compounds** – matched to driving needs.",
                    "**Complete hardware kits** – for rear drum brakes, including springs and adjusters.",
                    "Choosing quality components for **rear brake pad replacement** or **rear drum brakes** service ensures proper friction balance and reliable parking brake function.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Rear Brakes Improves Safety and Braking Balance",
                points: [
                    "**Balanced braking** – preventing front-biased instability.",
                    "**Restored parking brake holding power** – secure stationary positioning.",
                    "**Reduced stopping distances** – through effective four-wheel braking.",
                    "**Extended front brake life** – by sharing braking load.",
                    "Quality **rear brake pad replacement** or properly serviced **rear drum brakes** help the vehicle stop straight, stable, and secure.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Brake Issues Can Lead to Costly Damage",
                points: [
                    "**Metal-to-metal contact** – damaging rotors or drums.",
                    "**Accelerated front brake wear** – from compensating for weak rears.",
                    "**Parking brake cable seizure** – especially with neglected rear drums.",
                    "**Rollaway incidents** – due to ineffective parking brake.",
                ],
                conclusion:
                    "Addressing **rear brake pad replacement** needs or **rear drum brakes** service promptly protects the entire brake system and preserves balanced stopping performance. Ignoring rear brake noises can turn affordable maintenance into expensive repairs while compromising safety.",
            },
        },
    },
    {
        category: "Center Body", name: "Convertible Top Motor", image: "/parts/Convertible Top Motor.png", desc: {
            intro: {
                title: "What Is a Convertible Top Motor and Why It's Important for Your Vehicle",
                text: [
                    "The **convertible top motor** powers the hydraulic or electric system that opens and closes a vehicle’s retractable roof.",
                    "It drives the mechanical assembly responsible for folding, retracting, or extending the top, transforming the cabin from enclosed to open-air at the push of a button.",
                    "Modern convertible systems rely on precise motor timing to coordinate unlatching, folding, and storing roof panels in a specific sequence.",
                    "Whether hydraulic or fully electric, the top motor ensures smooth, reliable transitions, making it essential to convertible convenience and functionality.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Convertible Top Motor Service or Replacement",
                points: [
                    "**Top fails to open or close** – no response when activated.",
                    "**Slow, jerky, or incomplete movement** – roof does not cycle smoothly.",
                    "**Grinding or whining noises** – during top operation.",
                    "**Roof stops mid-cycle** – and will not complete the sequence.",
                    "**Clicking sounds with no movement** – indicating motor engagement failure.",
                    "These symptoms often signal the need for **convertible top motor repair** or full **convertible top motor replacement** before the roof becomes stuck.",
                ],
            },

            impact: {
                title: "How a Faulty Convertible Top Motor Affects Functionality and Convenience",
                text: [
                    "A failing convertible top motor removes the primary convenience feature of the vehicle.",
                    "**Inability to close the roof** – during unexpected weather conditions.",
                    "**Stuck-open top** – exposing the interior to theft and environmental damage.",
                    "**Risky manual operation** – potentially damaging roof mechanisms.",
                    "**Reduced vehicle value** – due to a non-functional convertible system.",
                    "When the top motor fails, flexibility is lost. Timely **convertible top motor repair** or **convertible top motor replacement** restores dependable roof operation.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Convertible Top Motor for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and roof mechanism type.",
                    "**Hydraulic pump motor vs electric motor** – based on system design.",
                    "**OEM vs aftermarket motors** – balancing reliability and warranty.",
                    "**Complete motor assembly vs component repair** – depending on failure type.",
                    "Choosing quality components for **convertible top motor replacement** ensures long-term reliability. In some cases, targeted **convertible top motor repair** may be sufficient.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Convertible Top Motor Improves Reliability and Enjoyment",
                points: [
                    "**One-touch roof operation** – restoring full system functionality.",
                    "**Quiet, smooth movement** – without hesitation or noise.",
                    "**Confidence in all weather conditions** – reliable opening and closing.",
                    "**Restored driving enjoyment** – the true convertible experience.",
                    "A properly functioning motor eliminates uncertainty and ensures dependable roof operation. Quality **convertible top motor replacement** restores convenience and peace of mind.",
                ],
            },

            risks: {
                title: "How Ignoring Convertible Top Motor Issues Can Leave You Stranded",
                points: [
                    "**Complete motor failure** – leaving the roof stuck open or closed.",
                    "**Interior water damage** – from inability to close the top in rain.",
                    "**Broken roof mechanisms** – from forced manual operation.",
                    "**Lower resale value** – due to a non-working convertible system.",
                ],
                conclusion:
                    "Addressing issues early through **convertible top motor repair** or full **convertible top motor replacement** prevents minor problems from escalating. A slowing or noisy motor is often a warning of imminent failure. Prompt repair ensures you’re never stuck with the roof in the wrong position when weather or timing matters most.",
            },
        },
    },
    {
        category: "Center Body", name: "Convertible Top Lift", image: "/parts/Convertible Top Lift.png", desc: {
            intro: {
                title: "What Is a Convertible Top Lift and Why It's Important for Your Vehicle",
                text: [
                    "The **convertible top lift** uses hydraulic or electric systems to physically raise and lower a vehicle’s retractable roof.",
                    "This assembly includes pumps, lift cylinders, fluid lines, sensors, and control components that automate the complex movement between open and closed roof positions.",
                    "The **convertible top lift cylinder**—hydraulic or electric—provides the actual force required to move roof panels through their precise motion path.",
                    "These components must deliver strong yet controlled movement to prevent roof damage and ensure reliable operation over thousands of cycles.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Convertible Top Lift Service or Replacement",
                points: [
                    "**Uneven roof movement** – the top tilts or lifts unevenly from side to side.",
                    "**Visible hydraulic fluid leaks** – near lift cylinders, lines, or the pump.",
                    "**Incomplete open or close cycles** – roof struggles to finish moving.",
                    "**One-sided operation** – one side lifts while the other remains stationary.",
                    "**Slow or weak lifting action** – requiring repeated attempts.",
                    "These symptoms often indicate wear or failure in the **convertible top hydraulic lift cylinder** or related components that need immediate attention.",
                ],
            },

            impact: {
                title: "How Faulty Convertible Top Lift Components Affect System Performance",
                text: [
                    "A failing top lift system disrupts the precise coordination required for safe roof movement.",
                    "**Uneven lifting** – causing roof misalignment and potential mechanical damage.",
                    "**Hydraulic pressure loss** – reducing lifting strength and consistency.",
                    "**Roof stuck mid-cycle** – leaving the vehicle exposed or unusable.",
                    "**Stress on roof fabric or panels** – from improper motion paths.",
                    "When a **convertible top lift cylinder** develops leaks or loses pressure, the system cannot generate the force needed for smooth operation, compromising reliability and safety.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Convertible Top Lift Components for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and roof mechanism design.",
                    "**Hydraulic vs electric lift system** – must match factory configuration.",
                    "**Single cylinder replacement vs full system service** – based on failure scope.",
                    "**OEM vs rebuilt lift cylinders** – balance reliability and cost.",
                    "Selecting quality **convertible top lift cylinder** components or a complete **convertible top hydraulic lift cylinder** assembly ensures proper pressure and synchronized roof movement.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Convertible Top Lift Components Improves Reliability",
                points: [
                    "**Even, synchronized roof movement** – preventing misalignment.",
                    "**Full lifting power** – completing open and close cycles smoothly.",
                    "**Elimination of fluid leaks** – protecting pumps and valves.",
                    "**Restored confidence** – dependable convertible top operation.",
                    "A properly functioning **convertible top hydraulic lift cylinder** system delivers controlled force across the entire motion range, ensuring smooth, damage-free roof operation.",
                ],
            },

            risks: {
                title: "How Ignoring Convertible Top Lift Issues Can Cause Major Damage",
                points: [
                    "**Progressive roof mechanism damage** – from operating with weak cylinders.",
                    "**Hydraulic fluid contamination** – harming pumps and control valves.",
                    "**Roof misalignment** – leading to fabric tears or hard panel damage.",
                    "**Complete system failure** – requiring extensive and costly repairs.",
                ],
                conclusion:
                    "Addressing **convertible top lift cylinder** issues early prevents minor leaks or weak lifting from escalating into major system failures. Operating a roof with a failing **convertible top hydraulic lift cylinder** forces other components to compensate, risking bent arms, torn fabric, or damaged panels. Prompt service keeps your convertible top operating smoothly and avoids costly mechanical damage.",
            },
        },
    },
    {
        category: "Center Body", name: "Roof", image: "/parts/Roof.png", desc: {
            intro: {
                title: "What Is an Automobile Roof and Why It's Important for Your Vehicle",
                text: [
                    "An **automobile roof** acts as the primary protective barrier between passengers and external elements, shielding occupants from weather, noise, and road debris.",
                    "As a critical **car roof** component, modern designs incorporate reinforcement rails, support panels, headliners, seals, and drainage systems for protection and comfort.",
                    "Vehicle roofs come in multiple configurations including solid steel or aluminum panels, panoramic glass, sunroofs, and retractable **convertible car roof** systems.",
                    "Beyond comfort, the roof assembly contributes to structural rigidity, crash protection, and overall driving experience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Roof Inspection or Repair",
                points: [
                    "**Water leaks into the cabin** – during rain or car washes.",
                    "**Visible rust, corrosion, or paint damage** – on roof panels or edges.",
                    "**Sagging headliner** – or interior fabric detachment.",
                    "**Excessive wind noise** – at highway speeds from failed seals.",
                    "**Convertible car roof fabric damage** – tears, cracks, or fading.",
                    "These symptoms often indicate damage to the **car roof** structure, seals, or drainage systems that should be addressed before further deterioration occurs.",
                ],
            },

            impact: {
                title: "How a Damaged Automobile Roof Affects Safety and Comfort",
                text: [
                    "A compromised automobile roof affects both passenger comfort and vehicle safety.",
                    "**Water intrusion** – damaging interior electronics and upholstery.",
                    "**Reduced structural rigidity** – weakening crash protection.",
                    "**Wind noise and air leaks** – lowering cabin comfort.",
                    "**Mold and mildew growth** – from trapped moisture.",
                    "When a **car roof** develops leaks, rust, or structural damage, protection against the elements is lost. In **convertible car roof** systems, fabric or mechanism failure eliminates weather adaptability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Roof Components for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and roof design.",
                    "**Roof panel material** – steel, aluminum, glass, or composite.",
                    "**Convertible car roof fabric vs hard top options** – based on design.",
                    "**Complete assembly vs component repair** – seals, drains, panels, or fabric.",
                    "Choosing quality components for **car roof** repair maintains weather protection and structural integrity. Durable materials are especially important for **convertible car roof** systems.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing Your Automobile Roof Improves Protection and Value",
                points: [
                    "**Complete weather sealing** – preventing interior water damage.",
                    "**Restored structural strength** – improving occupant safety.",
                    "**Reduced wind noise** – for a quieter cabin.",
                    "**Preserved resale value** – through proper exterior condition.",
                    "A well-maintained **car roof** protects your investment and enhances comfort. For **convertible car roof** owners, proper upkeep preserves open-air enjoyment without sacrificing protection.",
                ],
            },

            risks: {
                title: "How Ignoring Roof Issues Can Lead to Extensive Damage",
                points: [
                    "**Interior water damage** – destroying electronics and trim.",
                    "**Progressive rust spread** – into pillars and door frames.",
                    "**Mold growth** – creating odors and health concerns.",
                    "**Structural weakening** – reducing crash protection.",
                ],
                conclusion:
                    "Addressing **car roof** issues early prevents small leaks or minor **convertible car roof** damage from becoming major restoration projects. Water intrusion corrodes wiring, ruins headliners, and accelerates hidden rust. Prompt roof repair protects structural integrity, interior condition, and long-term vehicle value.",
            },
        },
    },
    {
        category: "Center Body", name: "Roof Motor", image: "/parts/Roof Motor.png", desc: {
            intro: {
                title: "What Is a Sunroof Motor and Why It's Important for Your Vehicle",
                text: [
                    "The **sunroof motor** automates the opening, tilting, and closing of the sunroof panel using gears, cables, and guide tracks.",
                    "It enables one-touch operation that slides the glass panel or tilts it upward for ventilation, enhancing cabin comfort at the push of a button.",
                    "Modern sunroof systems rely on precise motor control to move the panel smoothly along rails while maintaining proper alignment and seal compression.",
                    "Whether for fresh air or natural light, the **roof motor** ensures effortless sunroof operation that improves the overall driving experience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Sunroof Motor Inspection or Replacement",
                points: [
                    "**Sunroof fails to open, close, or tilt** – no response when activated.",
                    "**Grinding, clicking, or whining noises** – during operation.",
                    "**Slow, jerky, or incomplete movement** – panel stops mid-cycle.",
                    "**One-direction operation only** – opens but won’t close, or vice versa.",
                    "**Motor runs but panel doesn’t move** – indicating internal gear failure.",
                    "These symptoms often indicate the need for **sunroof motor replacement**. While **sunroof motor price** varies, early action prevents more expensive track or panel damage.",
                ],
            },

            impact: {
                title: "How a Faulty Sunroof Motor Affects Functionality and Protection",
                text: [
                    "A failing sunroof motor removes both convenience and weather protection.",
                    "**Inability to close the sunroof** – during sudden rain or storms.",
                    "**Stuck-open panel** – exposing the interior to water and theft.",
                    "**Risky manual operation** – potentially damaging cables and tracks.",
                    "**Water leaks** – from misaligned or partially open panels.",
                    "When the **roof motor** fails, you lose control over ventilation and sealing. The **sunroof motor price** is minor compared to the interior damage caused by water intrusion.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Sunroof Motor for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and sunroof design.",
                    "**OEM vs aftermarket motors** – balance fit, reliability, and warranty.",
                    "**Complete motor vs gear-only replacement** – depending on failure type.",
                    "**Sunroof motor price comparison** – balancing quality and budget.",
                    "Choosing quality components for **roof motor replacement** ensures reliable operation over thousands of cycles and prevents repeat failures.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Sunroof Motor Improves Convenience and Peace of Mind",
                points: [
                    "**Smooth, quiet operation** – in all opening and closing directions.",
                    "**Reliable weather protection** – dependable closure in rain.",
                    "**Restored ventilation and sunlight** – full sunroof functionality.",
                    "**Eliminated worry** – no risk of being stuck with an open panel.",
                    "A properly functioning **sunroof motor** restores the comfort and convenience that make sunroof-equipped vehicles enjoyable, regardless of **sunroof motor price** concerns.",
                ],
            },

            risks: {
                title: "How Ignoring Sunroof Motor Issues Can Create Costly Problems",
                points: [
                    "**Complete motor failure** – leaving the sunroof stuck open or closed.",
                    "**Interior water damage** – from inability to close during rain.",
                    "**Broken cables or bent tracks** – from forced manual operation.",
                    "**Reduced resale value** – due to a non-functional sunroof system.",
                ],
                conclusion:
                    "Addressing **sunroof motor replacement** early prevents minor issues from escalating into major repairs. A slowing or noisy **roof motor** is a warning of imminent failure. Fixing the motor promptly protects your interior, preserves system integrity, and avoids costs far exceeding the **sunroof motor price**.",
            },
        },
    },
    {
        category: "Center Body", name: "Running Board", image: "/parts/Running Board.png", desc: {
            intro: {
                title: "What Are Running Boards for Cars and Why They're Important for Your Vehicle",
                text: [
                    "**Running boards for cars** are side-mounted steps that provide a stable platform for easier entry and exit from high-riding vehicles.",
                    "Mounted below the door sills, they reduce step-up height, making vehicle access safer and more comfortable for passengers of all ages and mobility levels.",
                    "Beyond accessibility, **truck running boards** and **SUV running boards** protect lower body panels from road debris and door dings.",
                    "They also enhance vehicle appearance and provide a secure platform for reaching roof racks or cleaning upper windows, improving everyday usability.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Running Board Inspection or Replacement",
                points: [
                    "**Loose mounting or rattling** – movement when stepping on the board.",
                    "**Rust, corrosion, or finish damage** – weakening the structure.",
                    "**Cracked or bent step surfaces** – creating trip hazards.",
                    "**Missing or damaged mounting brackets** – compromising stability.",
                    "**Worn non-slip surfaces** – reduced traction in wet conditions.",
                    "These warning signs indicate **truck running boards** or **SUV running boards** need attention before they fail or cause injury.",
                ],
            },

            impact: {
                title: "How Damaged Running Boards Affect Safety and Vehicle Protection",
                text: [
                    "Compromised running boards create safety hazards and reduce vehicle protection.",
                    "**Increased fall risk** – from unstable or slippery step surfaces.",
                    "**Difficult vehicle access** – especially for children or elderly passengers.",
                    "**Loss of lower body protection** – exposing paint and panels to damage.",
                    "**Rattling noises** – from loose mounts while driving.",
                    "When **SUV running boards** or **truck running boards** deteriorate, the vehicle loses both accessibility benefits and protection against debris and impacts.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Running Boards for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and door configuration.",
                    "**Material selection** – aluminum, stainless steel, or composite.",
                    "**Step width and surface texture** – for secure, comfortable footing.",
                    "**Style options** – traditional boards, tube steps, or power-retractable designs.",
                    "Selecting quality **running boards for cars** ensures proper fit, durability, and safe access while matching your vehicle’s appearance and usage needs.",
                ],
            },

            benefits: {
                title: "Why Installing or Replacing Running Boards Improves Accessibility and Protection",
                points: [
                    "**Reduced step-up height** – easier entry and exit for all passengers.",
                    "**Non-slip stepping surface** – safe footing in all weather conditions.",
                    "**Protected rocker panels** – shielding the lower body from damage.",
                    "**Enhanced appearance** – adding a finished, rugged look.",
                    "Quality **SUV running boards** or **truck running boards** turn tall vehicles into user-friendly transportation while improving durability and style.",
                ],
            },

            risks: {
                title: "How Ignoring Running Board Issues Can Create Safety Hazards",
                points: [
                    "**Loose boards detaching** – creating road hazards at speed.",
                    "**Falls and injuries** – from unstable or slippery steps.",
                    "**Rust spreading to mounting points** – weakening structure.",
                    "**Reduced usability** – making vehicle access difficult.",
                ],
                conclusion:
                    "Addressing **truck running boards** or **SUV running boards** issues early maintains safe vehicle access and body protection. Ignoring loose mounts or corrosion can lead to sudden failure, injuries, or damage that reduces resale value. Properly maintained running boards ensure safe, dignified entry and exit while protecting your vehicle’s lower body.",
            },
        },
    },
    {
        category: "Center Body", name: "Seat Belt Rear", image: "/parts/Seat Belt Rear.png", desc: {
            intro: {
                title: "What Is a Rear Seat Belt and Why It's Important for Your Vehicle",
                text: [
                    "A **rear seat belt** restrains rear passengers during collisions, sudden stops, and rollovers, preventing ejection and significantly reducing injury severity.",
                    "Using a lap and shoulder belt design, it distributes crash forces across the strongest areas of the body, primarily the pelvis and chest.",
                    "Modern **rear passenger seat belt** systems integrate with airbags, pretensioners, and force limiters for enhanced occupant protection.",
                    "Anchored to reinforced mounting points in the vehicle structure, the rear seat belt is engineered to withstand extreme crash forces while keeping passengers securely positioned.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Rear Seat Belt Inspection or Replacement",
                points: [
                    "**Fraying, cuts, or excessive wear** – visible damage to belt webbing.",
                    "**Retractor issues** – belt won’t retract smoothly or fully.",
                    "**Faulty buckle operation** – won’t latch securely or releases unexpectedly.",
                    "**Belt stuck in locked position** – unable to extend for use.",
                    "**Visible mounting or hardware damage** – affecting belt strength.",
                    "These symptoms often indicate the need for **rear seat belt replacement**, especially after any collision. A damaged **rear passenger seat belt** cannot provide proper protection.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Seat Belt Affects Passenger Safety",
                text: [
                    "A compromised rear seat belt cannot properly restrain passengers during a crash.",
                    "**Increased injury severity** – due to inadequate restraint.",
                    "**Higher ejection risk** – during rollovers or severe impacts.",
                    "**Secondary injuries** – to front occupants from unrestrained rear passengers.",
                    "**Legal and compliance risks** – from non-functional safety equipment.",
                    "When a **rear passenger seat belt** shows wear or damage, its ability to withstand crash forces is compromised. Delayed **rear seat belt replacement** leaves passengers dangerously exposed.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Seat Belt for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and seating position.",
                    "**OEM replacement parts** – for guaranteed fit and safety compliance.",
                    "**Complete belt assembly** – including retractor, webbing, and buckle.",
                    "**Interior color matching** – for factory appearance.",
                    "Choosing proper components for **rear seat belt replacement** ensures compliance with safety standards and correct integration with restraint systems. Avoid non-certified **rear passenger seat belt** parts.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Rear Seat Belt Improves Safety and Compliance",
                points: [
                    "**Restored crash protection** – meeting current safety regulations.",
                    "**Smooth, reliable operation** – encouraging consistent belt use.",
                    "**Peace of mind** – knowing rear passengers are protected.",
                    "**Legal and insurance compliance** – avoiding liability issues.",
                    "A properly functioning **rear passenger seat belt** provides the restraint needed to prevent serious injuries and save lives. Timely **rear seat belt replacement** ensures safety systems work as designed.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Seat Belt Issues Can Have Fatal Consequences",
                points: [
                    "**Seat belt failure during crashes** – leading to severe injury or death.",
                    "**Rear passengers becoming projectiles** – endangering front occupants.",
                    "**Legal liability** – from transporting passengers with defective belts.",
                    "**Insurance claim complications** – after accidents involving faulty restraints.",
                ],
                conclusion:
                    "Addressing **rear seat belt replacement** immediately is non-negotiable for passenger safety. Worn or damaged **rear passenger seat belts** may fail without warning, even if the damage seems minor. Seat belts are critical life-saving devices, and maintaining them in perfect working order can mean the difference between surviving a crash and catastrophic injury.",
            },
        },

    },
    {
        category: "Center Body", name: "Sunroof Panel Assembly", image: "/parts/Sunroof Panel Assembly.png", desc: {
            intro: {
                title: "What Is a Sunroof Assembly and Why It's Important for Your Vehicle",
                text: [
                    "A **sunroof assembly** is a complete system made up of a glass panel, motor, guide tracks, drain tubes, weather seals, and electronic controls.",
                    "These components work together to allow the sunroof panel to slide or tilt, providing natural light and ventilation while maintaining cabin weatherproofing.",
                    "The system must balance smooth, quiet movement with precise sealing to block wind, water, and noise when closed.",
                    "High-quality **sunroof parts** operating in harmony enhance cabin comfort without compromising structural integrity or interior protection.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Sunroof Assembly Service or Replacement",
                points: [
                    "**Water leaking into the cabin** – during rain or car washes.",
                    "**Wind noise or whistling** – noticeable at highway speeds.",
                    "**Binding or uneven panel movement** – sunroof won’t fully open or close.",
                    "**Visible gaps when closed** – between glass and roof opening.",
                    "**Clogged drain tubes** – causing water overflow into the headliner.",
                    "These symptoms often indicate worn **sunroof parts** or the need for **sunroof seal replacement** before interior damage occurs.",
                ],
            },

            impact: {
                title: "How a Faulty Sunroof Assembly Affects Comfort and Vehicle Condition",
                text: [
                    "A compromised sunroof assembly disrupts both comfort and interior protection.",
                    "**Water intrusion** – damaging headliner, seats, and electronics.",
                    "**Increased wind noise** – reducing highway driving comfort.",
                    "**Inoperable sunroof** – eliminating ventilation and daylight benefits.",
                    "**Mold and mildew growth** – from trapped moisture.",
                    "When **sunroof parts** wear or seals fail, weatherproofing is lost. Timely **sunroof seal replacement** prevents minor leaks from becoming costly interior repairs.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Sunroof Assembly Components for Your Vehicle",
                points: [
                    "**Vehicle specifications** – make, model, year, and sunroof design.",
                    "**Complete assembly vs component repair** – depending on damage extent.",
                    "**OEM vs aftermarket sunroof parts** – for fit and reliability.",
                    "**Sunroof seal replacement kits** – including all required weatherstripping.",
                    "Selecting quality **sunroof parts** ensures precise alignment and sealing. Proper **sunroof seal replacement** using correct materials prevents recurring leak issues.",
                ],
            },

            benefits: {
                title: "Why Servicing Your Sunroof Assembly Improves Protection and Functionality",
                points: [
                    "**Complete weather sealing** – blocking water and wind intrusion.",
                    "**Smooth, quiet operation** – through the full range of motion.",
                    "**Clear drain paths** – preventing water backup into the cabin.",
                    "**Restored light and ventilation** – improving driving enjoyment.",
                    "Routine maintenance of **sunroof parts** and timely **sunroof seal replacement** preserves functionality while preventing costly interior damage.",
                ],
            },

            risks: {
                title: "How Ignoring Sunroof Assembly Issues Can Cause Extensive Damage",
                points: [
                    "**Severe interior water damage** – ruining headliner, carpets, and electronics.",
                    "**Mold and mildew growth** – creating health hazards and odors.",
                    "**Corroded tracks and mechanisms** – requiring full assembly replacement.",
                    "**Reduced resale value** – from visible water damage and sunroof failure.",
                ],
                conclusion:
                    "Addressing **sunroof seal replacement** and worn **sunroof parts** early prevents minor leaks from escalating into major repairs. Water intrusion corrodes hidden electronics, damages roof structures, and promotes mold. Prompt sunroof assembly service protects your vehicle’s interior, preserves comfort, and maintains long-term value.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Compressor Clutch", image: "/parts/AC Compressor Clutch.png", desc: {
            intro: {
                title: "What Is an AC Compressor Clutch and Why It’s Important for Your Vehicle",
                text: [
                    "The **AC compressor clutch** acts as the control gateway of the vehicle’s air conditioning system, using an electromagnet to engage or disengage the compressor as cooling is needed.",
                    "It allows engine power to drive the compressor only when required, preventing constant load on the engine and preserving fuel efficiency.",
                    "A properly functioning **car AC compressor clutch** protects the compressor from unnecessary wear while delivering responsive and consistent cabin cooling.",
                    "When the clutch fails, cooling performance suffers and engine strain increases, turning a comfort system into a performance liability.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New AC Compressor Clutch",
                points: [
                    "**AC blowing warm air** – compressor does not engage when cooling is selected.",
                    "**Clicking or squealing noises** – often caused by worn clutch bearings or slippage.",
                    "**Intermittent cooling** – clutch engages and disengages unpredictably.",
                    "**Burning smell from the engine bay** – indicating clutch overheating or friction failure.",
                    "These symptoms often suggest issues with the **AC compressor clutch**. Inspecting an **AC compressor clutch kit** early can prevent full compressor failure.",
                ],
            },

            impact: {
                title: "How a Faulty AC Compressor Clutch Affects Performance and Fuel Efficiency",
                text: [
                    "A failing AC compressor clutch disrupts the balance between cooling demand and engine load.",
                    "**Constant engagement** – increases engine drag and reduces fuel efficiency.",
                    "**Failure to engage** – leaves the cabin without cooling in hot conditions.",
                    "**Partial engagement** – causes vibration, belt wear, and inconsistent compressor operation.",
                    "Over time, these issues increase fuel consumption, reduce performance, and accelerate wear on belts and pulleys.",
                ],
            },

            choosing: {
                title: "How to Choose the Right AC Compressor Clutch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine type.",
                    "**Compressor specifications** – pulley diameter, coil voltage, and mounting style.",
                    "**Complete clutch kit vs individual parts** – full **AC compressor clutch kit** often ensures better fit and durability.",
                    "Choosing the correct **AC compressor clutch** guarantees smooth engagement, reliable cooling, and long-term compressor protection.",
                ],
            },

            benefits: {
                title: "Why Replacing Your AC Compressor Clutch Improves Vehicle Performance and Reliability",
                points: [
                    "**Faster cooling response** – compressor engages exactly when needed.",
                    "**Reduced engine strain** – power is transferred efficiently, not constantly.",
                    "**Extended compressor lifespan** – preventing overheating and internal damage.",
                    "**Improved driving comfort** – stable cooling in traffic and extreme heat.",
                    "Replacing a worn **car AC compressor clutch** restores precise control and improves both comfort and engine efficiency.",
                ],
            },

            risks: {
                title: "How Ignoring AC Compressor Clutch Issues Can Lead to Bigger Repairs",
                points: [
                    "**Compressor seizure** – often requiring complete compressor replacement.",
                    "**Serpentine belt damage** – risking loss of auxiliary systems.",
                    "**Electrical overload** – damaging relays, coils, or wiring.",
                    "**Complete AC system failure** – significantly increasing repair costs.",
                ],
                conclusion:
                    "Ignoring **AC compressor clutch** issues allows minor faults to escalate into major air conditioning failures. Addressing clutch problems early keeps repair costs manageable, protects the compressor, and prevents system-wide damage.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Compressor", image: "/parts/AC Compressor.png", desc: {
            intro: {
                title: "What Is an AC Compressor and Why It’s Important for Your Vehicle",
                text: [
                    "The **AC compressor** is the heart of the vehicle’s air conditioning system, responsible for compressing and circulating refrigerant through the AC circuit.",
                    "By moving refrigerant under pressure, it allows heat from inside the cabin to be absorbed and released outside, making effective cooling possible.",
                    "A properly functioning **car AC compressor** maintains stable system pressure and delivers consistent cooling performance.",
                    "Because it is engine-driven, efficient compressor operation ensures cabin comfort without placing unnecessary strain on the engine or drive belts.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New AC Compressor",
                points: [
                    "**Warm air from the vents** – refrigerant is not being circulated correctly.",
                    "**Loud noises when the AC is on** – grinding, rattling, or squealing from internal wear.",
                    "**AC clutch not engaging** – preventing the compressor from activating.",
                    "**Visible refrigerant leaks** – often caused by seal or internal component failure.",
                    "If these symptoms appear, reviewing the **AC compressor price** early can help plan repairs before the system fails completely.",
                ],
            },

            impact: {
                title: "How a Faulty AC Compressor Affects Performance and Fuel Efficiency",
                text: [
                    "A failing AC compressor impacts more than just cabin comfort.",
                    "**Increased engine load** – reducing overall fuel efficiency.",
                    "**Inconsistent cooling performance** – due to unstable refrigerant pressure.",
                    "**Excessive belt and pulley strain** – leading to premature component wear.",
                    "Over time, this added resistance lowers efficiency and can negatively affect engine performance, especially in hot weather or stop-and-go traffic.",
                ],
            },

            choosing: {
                title: "How to Choose the Right AC Compressor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine type.",
                    "**Correct refrigerant type** – must align with factory AC specifications.",
                    "**Build quality and warranty** – OEM or high-quality replacements last longer.",
                    "**AC compressor price vs reliability** – balance upfront cost with long-term performance.",
                    "Choosing the correct **AC compressor** ensures proper cooling, efficiency, and system longevity without compromising performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your AC Compressor Improves Vehicle Performance and Reliability",
                points: [
                    "**Consistent cold air output** – even in extreme heat or heavy traffic.",
                    "**Reduced engine strain** – efficient refrigerant circulation.",
                    "**Extended AC system lifespan** – protecting hoses, condenser, and expansion components.",
                    "**Improved driving comfort** – reliable cooling in all conditions.",
                    "A new **car AC compressor** restores system balance and dependable operation, not just comfort.",
                ],
            },

            risks: {
                title: "How Ignoring AC Compressor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete compressor seizure** – often requiring full system replacement.",
                    "**Metal contamination** – damaging the condenser and expansion valve.",
                    "**Escalating repair costs** – replacing multiple AC components instead of one.",
                ],
                conclusion:
                    "Addressing **AC compressor** problems early keeps the **AC compressor price** manageable and prevents extensive damage throughout the air conditioning system. Timely replacement protects performance, efficiency, and long-term reliability.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Condenser", image: "/parts/AC Condenser.png", desc: {
            intro: {
                title: "What Is an AC Condenser and Why It’s Important for Your Vehicle",
                text: [
                    "The **AC condenser** is a key component of the vehicle’s air conditioning system responsible for releasing heat from high-pressure refrigerant.",
                    "Mounted at the front of the vehicle, it allows hot refrigerant gas to cool and condense into a liquid before continuing through the AC system.",
                    "This heat-exchange process is essential for producing cold air inside the cabin.",
                    "A properly functioning **AC condenser car** setup maintains stable system pressure, efficient heat dissipation, and reliable cooling performance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New AC Condenser",
                points: [
                    "**Weak or warm air from vents** – heat is not being released effectively.",
                    "**Reduced cooling in traffic** – limited airflow lowers condenser efficiency.",
                    "**Visible refrigerant leaks** – often from corrosion or road impact damage.",
                    "**Overheating AC system** – pressure buildup due to restricted heat dissipation.",
                    "When these symptoms appear, checking the **AC condenser price** early helps prevent wider AC system damage.",
                ],
            },

            impact: {
                title: "How a Faulty AC Condenser Affects Performance and Fuel Efficiency",
                text: [
                    "A damaged AC condenser forces the system to operate under excessive pressure.",
                    "**Increased engine load** – reducing fuel efficiency.",
                    "**Inconsistent cooling performance** – especially in hot or stop-and-go conditions.",
                    "**Accelerated component wear** – impacting the compressor, hoses, and seals.",
                    "Poor heat dissipation affects both comfort and overall AC system efficiency and reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right AC Condenser for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine configuration.",
                    "**Cooling capacity and design** – airflow and fin density must meet factory specs.",
                    "**Material quality** – corrosion-resistant construction for longer lifespan.",
                    "**AC condenser price vs durability** – balance upfront cost with long-term reliability.",
                    "Choosing the correct **AC condenser** ensures proper fitment, efficient cooling, and dependable AC operation.",
                ],
            },

            benefits: {
                title: "Why Replacing Your AC Condenser Improves Vehicle Performance and Reliability",
                points: [
                    "**Faster cabin cooling** – refrigerant reaches optimal temperature quickly.",
                    "**Reduced compressor strain** – extending AC system lifespan.",
                    "**Stable cooling in extreme heat** – consistent performance in traffic.",
                    "**Improved fuel efficiency** – less engine effort during AC use.",
                    "A new **AC condenser car** component restores system balance and predictable cooling performance.",
                ],
            },

            risks: {
                title: "How Ignoring AC Condenser Issues Can Lead to Bigger Repairs",
                points: [
                    "**Compressor damage** – caused by sustained high system pressure.",
                    "**Refrigerant contamination** – from internal corrosion or debris.",
                    "**Complete AC system failure** – requiring multiple component replacements.",
                ],
                conclusion:
                    "Addressing **AC condenser** problems early keeps the **AC condenser price** manageable and prevents extensive AC system repairs. Timely replacement ensures dependable cooling, protects the compressor, and maintains long-term system reliability.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Evaporator", image: "/parts/AC Evaporator.png", desc: {
            intro: {
                title: "What Is an AC Evaporator and Why It’s Important for Your Vehicle",
                text: [
                    "The **AC evaporator** is responsible for cooling and dehumidifying the air that enters the vehicle’s cabin.",
                    "Located inside the dashboard, it allows refrigerant to absorb heat as it changes from liquid to gas, removing warmth and excess moisture from incoming air.",
                    "A properly functioning **car AC evaporator** delivers cool, dry airflow while helping prevent fogged windows.",
                    "Without a healthy **AC evaporator in car** systems, the air conditioning system cannot cool effectively, even if other components are operating correctly.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New AC Evaporator",
                points: [
                    "**Weak or warm airflow** – evaporator fails to absorb sufficient heat.",
                    "**Musty or moldy odors** – moisture buildup inside the evaporator core.",
                    "**Foggy windows** – poor humidity removal from cabin air.",
                    "**Refrigerant leaks inside the cabin** – often seen as oily residue or reduced cooling.",
                    "If these symptoms persist, inspecting the **car AC evaporator** early can prevent broader AC system damage.",
                ],
            },

            impact: {
                title: "How a Faulty AC Evaporator Affects Performance and Fuel Efficiency",
                text: [
                    "A failing AC evaporator reduces the system’s ability to cool and dehumidify air efficiently.",
                    "**Longer compressor run times** – increasing engine load and fuel consumption.",
                    "**Uneven cabin temperatures** – forcing the AC system to work harder.",
                    "**Restricted airflow** – caused by internal corrosion or blockage.",
                    "Over time, this inefficiency strains the compressor and blower motor, reducing overall AC system performance.",
                ],
            },

            choosing: {
                title: "How to Choose the Right AC Evaporator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and AC system design.",
                    "**Material quality** – corrosion-resistant construction for durability.",
                    "**Proper fitment** – ensures leak-free connections and efficient airflow.",
                    "Selecting the correct **AC evaporator in car** applications maintains cooling capacity and long-term system reliability.",
                ],
            },

            benefits: {
                title: "Why Replacing Your AC Evaporator Improves Vehicle Performance and Reliability",
                points: [
                    "**Colder, cleaner air** – delivered consistently through the vents.",
                    "**Reduced cabin humidity** – improving comfort and visibility.",
                    "**Lower system strain** – extending the life of other AC components.",
                    "**Improved cooling efficiency** – faster temperature control with less effort.",
                    "A new **car AC evaporator** restores comfort while protecting the durability of the entire air conditioning system.",
                ],
            },

            risks: {
                title: "How Ignoring AC Evaporator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Compressor overwork** – leading to premature failure.",
                    "**Refrigerant loss** – reducing cooling capacity and increasing costs.",
                    "**Mold and bacteria buildup** – negatively affecting cabin air quality.",
                ],
                conclusion:
                    "Addressing **AC evaporator** issues early prevents extensive AC system repairs and ensures dependable cooling and healthy cabin air in all driving conditions.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "AC Evaporator Housing", image: "/parts/AC Evaporator Housing.png", desc: {
            intro: {
                title: "What Is an AC Evaporator Housing and Why It’s Important for Your Vehicle",
                text: [
                    "The **AC evaporator housing** is the sealed enclosure that holds and protects the evaporator coil while directing cooled, dehumidified air into the cabin.",
                    "Located behind the dashboard, it ensures airflow passes efficiently over the evaporator before being distributed through the vents.",
                    "A properly sealed **evaporator coil housing** prevents cooled air from escaping, maintaining HVAC efficiency and consistent cabin comfort.",
                    "It also manages condensation by channeling moisture safely away from sensitive components, supporting stable AC system performance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New AC Evaporator Housing",
                points: [
                    "**Weak or uneven airflow** – air leaks inside the housing reduce delivery efficiency.",
                    "**Water dripping inside the cabin** – cracked housing or blocked drain passages.",
                    "**Rattling or air noise behind the dashboard** – loose or damaged housing panels.",
                    "**Reduced cooling efficiency** – chilled air escapes before reaching vents.",
                    "These symptoms often indicate damage to the **evaporator coil housing** that should be addressed early to prevent further HVAC issues.",
                ],
            },

            impact: {
                title: "How a Faulty AC Evaporator Housing Affects Performance and Fuel Efficiency",
                text: [
                    "A damaged AC evaporator housing disrupts proper airflow management within the HVAC system.",
                    "**Air loss and pressure imbalance** – reducing cooling effectiveness.",
                    "**Longer AC run times** – increasing engine load and fuel consumption.",
                    "**Uneven cabin temperatures** – caused by misdirected airflow.",
                    "When cooled air isn’t properly sealed and routed, the entire AC system must work harder to maintain comfort.",
                ],
            },

            choosing: {
                title: "How to Choose the Right AC Evaporator Housing for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and HVAC layout.",
                    "**Seal quality** – proper gaskets and joints to prevent air and moisture leaks.",
                    "**Material durability** – heat- and moisture-resistant construction.",
                    "Selecting the correct **evaporator coil housing** ensures reliable airflow control and long-term HVAC performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your AC Evaporator Housing Improves Vehicle Performance and Reliability",
                points: [
                    "**Improved cooling efficiency** – more chilled air reaches the cabin.",
                    "**Reduced moisture buildup** – preventing interior dampness and odors.",
                    "**Lower system strain** – HVAC components operate under normal conditions.",
                    "**Quieter operation** – elimination of air leaks and rattling noises.",
                    "A new **AC evaporator housing** restores proper airflow routing and sealing, allowing the AC system to perform as designed.",
                ],
            },

            risks: {
                title: "How Ignoring AC Evaporator Housing Issues Can Lead to Bigger Repairs",
                points: [
                    "**Persistent moisture leaks** – causing mold, corrosion, and electrical damage.",
                    "**Evaporator contamination** – dirt and debris entering the HVAC system.",
                    "**Accelerated blower and compressor wear** – from inefficient airflow.",
                ],
                conclusion:
                    "Addressing **AC evaporator housing** issues early prevents costly HVAC repairs and preserves consistent, efficient cabin cooling. Proper sealing and airflow management are essential to long-term AC system reliability.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Blower Motor", image: "/parts/Blower Motor.png", desc: {
            intro: {
                title: "What Is a Blower Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **blower motor** circulates air through the vehicle’s HVAC system, pushing airflow across the heater core for warmth, over the evaporator for cooling, and through vents for ventilation and defrosting.",
                    "Without a functioning blower motor, heated or cooled air cannot effectively reach the cabin.",
                    "A reliable **blower motor car** system delivers consistent airflow at all fan speeds, maintaining comfort in every weather condition.",
                    "Whether cooling the cabin, heating passengers, or clearing windshield fog, the blower motor plays a central role in HVAC performance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Blower Motor",
                points: [
                    "**Weak or no airflow** – even when the fan is set to high.",
                    "**Airflow works only at certain speeds** – indicating electrical or internal wear issues.",
                    "**Unusual noises** – grinding, squealing, or rattling from the dashboard area.",
                    "**Burning smell** – overheating motor or failing electrical connections.",
                    "If these symptoms appear, checking the **blower motor price** early helps avoid sudden HVAC failure.",
                ],
            },

            impact: {
                title: "How a Faulty Blower Motor Affects Performance and Efficiency",
                text: [
                    "A failing blower motor disrupts proper airflow throughout the HVAC system.",
                    "**Inefficient heating and cooling** – uneven air distribution in the cabin.",
                    "**Increased HVAC system strain** – other components work harder to compensate.",
                    "**Higher electrical load** – drawing more power than necessary.",
                    "While it doesn’t directly affect engine output, poor airflow reduces comfort and increases overall energy demand.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Blower Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and HVAC configuration.",
                    "**Fan speed control type** – manual vs automatic climate control systems.",
                    "**Build quality** – durable bearings and balanced fan design reduce noise.",
                    "**Blower motor price vs durability** – balance cost with long-term reliability.",
                    "Choosing the correct **blower motor car** application ensures stable airflow and dependable HVAC performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Blower Motor Improves Vehicle Performance and Reliability",
                points: [
                    "**Consistent airflow at all speeds** – improved comfort and climate control.",
                    "**Quieter HVAC operation** – elimination of rattles and grinding noises.",
                    "**Effective defrosting** – better visibility and driving safety.",
                    "**Reduced strain on HVAC components** – extended system lifespan.",
                    "A new **blower motor** restores dependable airflow in both hot and cold driving conditions.",
                ],
            },

            risks: {
                title: "How Ignoring Blower Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Overheated electrical circuits** – damaging resistors or control modules.",
                    "**Blower resistor failure** – increasing repair costs.",
                    "**Complete airflow loss** – affecting heating, cooling, and defrosting.",
                ],
                conclusion:
                    "Addressing **blower motor** issues early keeps the **blower motor price** manageable and prevents costly HVAC system damage. Timely replacement ensures reliable airflow, consistent comfort, and long-term HVAC reliability.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater", image: "/parts/Heater.png", desc: {
            intro: {
                title: "What Is a Car Heater and Why It’s Important for Your Vehicle",
                text: [
                    "A **car heater** uses heat generated by the engine to warm the cabin through the heater core.",
                    "Hot engine coolant flows into the **car heater core**, where air passing over it absorbs heat before being directed into the interior.",
                    "This system provides cabin warmth during cold weather and plays a critical role in overall driving comfort.",
                    "Beyond comfort, the heater supports windshield defrosting, improving visibility and safety in cold or humid conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Attention to the Car Heater",
                points: [
                    "**Cold air blowing from vents** – even when the heater is turned on.",
                    "**Foggy or icy windshield** – reduced defrosting effectiveness.",
                    "**Coolant smell inside the cabin** – often indicating heater core leakage.",
                    "**Slow cabin warm-up** – heater takes too long to produce warm air.",
                    "These symptoms often suggest issues with the **car heater core** or related heater system components and should be addressed promptly.",
                ],
            },

            impact: {
                title: "How a Faulty Heater Affects Performance and Reliability",
                text: [
                    "A malfunctioning car heater can indirectly affect vehicle performance and safety.",
                    "**Poor defrosting performance** – reducing visibility in cold or wet conditions.",
                    "**Coolant flow issues** – potentially affecting engine temperature regulation.",
                    "**Increased HVAC workload** – placing extra strain on system components.",
                    "While fuel efficiency may not drop significantly, unresolved heater issues can impact cooling system balance and overall vehicle reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Heater Components for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match components to make, model, year, and engine.",
                    "**Heater core quality** – corrosion-resistant materials for long service life.",
                    "**HVAC system integration** – compatibility with blower motor and controls.",
                    "Choosing quality **car heater** components reduces the risk of the heater not working and ensures consistent interior warmth.",
                ],
            },

            benefits: {
                title: "Why Fixing Your Car Heater Improves Comfort and Safety",
                points: [
                    "**Consistent cabin warmth** – even in extreme cold conditions.",
                    "**Effective windshield defrosting** – improved visibility and safety.",
                    "**Balanced engine cooling** – proper coolant circulation through the heater core.",
                    "**Reliable HVAC operation** – reduced strain on related components.",
                    "A properly functioning **car heater** is essential not only for comfort but also for safe winter driving.",
                ],
            },

            risks: {
                title: "How Ignoring Heater Issues Can Lead to Bigger Repairs",
                points: [
                    "**Heater core failure** – leading to coolant leaks and interior damage.",
                    "**Cooling system imbalance** – affecting engine temperature control.",
                    "**Electrical and HVAC component stress** – increasing overall repair costs.",
                ],
                conclusion:
                    "Addressing **car heater not working** issues early prevents costly repairs and ensures reliable cabin comfort and clear visibility in cold weather. Timely heater service protects both the HVAC system and engine cooling performance.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater Core", image: "/parts/Heater Core.png", desc: {
            intro: {
                title: "What Is a Heater Core and Why It’s Important for Your Vehicle",
                text: [
                    "The **heater core** functions like a small radiator inside the vehicle’s HVAC system, using hot engine coolant to generate warm air for the cabin.",
                    "As air passes over the core, heat is transferred into the passenger compartment, providing interior warmth and supporting windshield defrosting.",
                    "A properly functioning **car heater core** ensures even heat distribution, clear windows, and comfortable driving in cold or damp conditions.",
                    "Without a working heater core, the heating system cannot deliver warm air, regardless of blower speed or temperature settings.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Heater Core",
                points: [
                    "**Weak or no heat from vents** – even when the heater is turned on.",
                    "**Sweet or coolant-like smell inside the cabin** – indicating an internal leak.",
                    "**Foggy windows with oily residue** – coolant vapor entering the airflow.",
                    "**Low coolant levels** – caused by leaks within the **car heater core**.",
                    "When these symptoms appear, checking the **heater core price** early can help prevent larger HVAC or cooling system repairs.",
                ],
            },

            impact: {
                title: "How a Faulty Heater Core Affects Performance and Reliability",
                text: [
                    "A failing heater core disrupts proper heat transfer and coolant circulation.",
                    "**Poor cabin heating and defrosting** – reducing comfort and visibility.",
                    "**Cooling system imbalance** – affecting engine temperature regulation.",
                    "**Increased HVAC workload** – forcing the system to run longer to produce heat.",
                    "While fuel efficiency impact is indirect, unresolved heater core issues can strain the cooling system and reduce overall vehicle reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Heater Core for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine type.",
                    "**Material quality** – corrosion-resistant construction for longer lifespan.",
                    "**Accurate fitment** – proper sizing to prevent leaks and airflow issues.",
                    "**Heater core price vs durability** – balance cost with long-term performance.",
                    "Choosing the correct **car heater core** ensures efficient heating and dependable HVAC operation.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Heater Core Improves Vehicle Performance and Reliability",
                points: [
                    "**Consistent cabin heat** – even airflow of warm air throughout the interior.",
                    "**Effective windshield defrosting** – improved visibility and safety.",
                    "**Stable coolant circulation** – supporting proper engine temperature control.",
                    "**Improved HVAC efficiency** – reduced strain on related components.",
                    "A new **heater core** restores dependable heating performance in all cold-weather driving conditions.",
                ],
            },

            risks: {
                title: "How Ignoring Heater Core Issues Can Lead to Bigger Repairs",
                points: [
                    "**Coolant leaks inside the cabin** – causing interior damage and mold growth.",
                    "**Engine overheating** – due to coolant loss or circulation problems.",
                    "**HVAC component failure** – from contamination or prolonged system strain.",
                ],
                conclusion:
                    "Addressing **heater core** issues early keeps the **heater core price** manageable and prevents costly HVAC and cooling system repairs. Timely replacement ensures cabin comfort, clear visibility, and long-term system reliability.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Heater Housing", image: "/parts/Heater Housing.png", desc: {
            intro: {
                title: "What Is a Heater Housing and Why It’s Important for Your Vehicle",
                text: [
                    "The **heater housing** is the protective enclosure that contains the heater core and blower motor within the HVAC system.",
                    "Positioned behind the dashboard, it directs warm air produced by the heater core into the cabin and toward the windshield for effective defrosting.",
                    "A properly sealed **blower motor housing** ensures airflow is routed correctly for consistent interior heating.",
                    "Without a functioning housing, warm air can escape or become unevenly distributed, reducing comfort and heating efficiency in cold weather.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Attention to the Heater Housing",
                points: [
                    "**Weak or uneven heating** – warm air does not reach all vents evenly.",
                    "**Rattling or air leakage noises** – cracked or loose housing panels behind the dashboard.",
                    "**Water leaking inside the cabin** – improper condensation drainage or housing damage.",
                    "**Reduced defrosting performance** – warm air not directed efficiently to the windshield.",
                    "These symptoms often indicate issues with the **heater housing** or **blower motor housing** that should be inspected early.",
                ],
            },

            impact: {
                title: "How a Faulty Heater Housing Affects Performance and Reliability",
                text: [
                    "A damaged heater housing disrupts airflow management within the HVAC system.",
                    "**Heat loss inside the dashboard** – reducing cabin warmth.",
                    "**Longer heater operation times** – increasing overall system load.",
                    "**Uneven cabin temperatures** – forcing the HVAC system to work harder.",
                    "Although fuel efficiency impact is indirect, inefficient airflow increases energy usage and reduces HVAC system reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Heater Housing for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and HVAC configuration.",
                    "**Seal integrity** – proper gaskets to prevent air and heat leakage.",
                    "**Material durability** – heat- and moisture-resistant construction.",
                    "Selecting the correct **blower motor housing** or heater housing ensures proper airflow control and long-term HVAC performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Heater Housing Improves Comfort and Reliability",
                points: [
                    "**Improved cabin heating** – warm air reaches vents efficiently.",
                    "**Enhanced windshield defrosting** – better visibility and safety.",
                    "**Reduced HVAC system strain** – components operate under normal conditions.",
                    "**Quieter operation** – elimination of rattles and air leaks.",
                    "A properly functioning **heater housing** restores reliable comfort and consistent heating performance.",
                ],
            },

            risks: {
                title: "How Ignoring Heater Housing Issues Can Lead to Bigger Repairs",
                points: [
                    "**Persistent heat and air loss** – causing poor heating performance.",
                    "**Moisture buildup behind the dashboard** – leading to mold or electrical damage.",
                    "**Accelerated wear on blower and heater components** – increasing repair costs.",
                ],
                conclusion:
                    "Addressing **heater housing** problems early prevents extensive HVAC repairs and preserves dependable cabin comfort during cold weather. Proper airflow sealing and routing are essential for long-term heating system reliability.",
            },
        },

    },
    {
        category: "Cooling and Heating", name: "Radiator", image: "/parts/Radiator.png", desc: {
            intro: {
                title: "What Is a Car Radiator and Why It’s Important for Your Vehicle",
                text: [
                    "A **car radiator** is the core component of the engine cooling system responsible for dissipating heat from engine coolant.",
                    "As hot coolant flows through the radiator, heat is released into the surrounding air, allowing the engine to maintain an optimal operating temperature.",
                    "This heat-exchange process is essential for engine performance, fuel efficiency, and long-term reliability.",
                    "A properly functioning radiator prevents overheating, protects internal engine components, and supports consistent power delivery under all driving conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Car Radiator",
                points: [
                    "**Engine overheating** – temperature gauge rising above normal levels.",
                    "**Coolant leaks** – visible puddles or consistently low coolant levels.",
                    "**Discolored or sludgy coolant** – indicating internal contamination.",
                    "**Frequent coolant top-ups** – often due to leaks in **car radiator parts**.",
                    "If these symptoms appear, checking the **radiator price** early can help prevent severe engine damage.",
                ],
            },

            impact: {
                title: "How a Faulty Car Radiator Affects Performance and Fuel Efficiency",
                text: [
                    "A failing car radiator reduces the engine’s ability to regulate temperature effectively.",
                    "**Reduced engine efficiency** – engines perform best within a controlled temperature range.",
                    "**Increased fuel consumption** – overheated engines burn fuel less efficiently.",
                    "**Power loss or limp mode activation** – triggered by excessive heat.",
                    "Prolonged overheating places extreme stress on engine components, negatively impacting performance and overall reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Radiator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine type.",
                    "**Cooling capacity** – must meet or exceed factory specifications.",
                    "**Build quality** – durable materials and high-quality **car radiator parts** improve lifespan.",
                    "**Radiator price vs durability** – balance upfront cost with long-term cooling performance.",
                    "Choosing the correct **car radiator** ensures efficient heat dissipation and dependable engine cooling.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Radiator Improves Vehicle Performance and Reliability",
                points: [
                    "**Stable operating temperatures** – preventing overheating in traffic or under load.",
                    "**Improved engine efficiency** – supporting optimal combustion and fuel usage.",
                    "**Extended engine life** – reduced thermal stress on internal components.",
                    "**Reliable performance** – especially in hot weather or demanding driving conditions.",
                    "A new **radiator** restores proper cooling system function and protects the engine from heat-related damage.",
                ],
            },

            risks: {
                title: "How Ignoring Car Radiator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Blown head gasket** – caused by sustained overheating.",
                    "**Warped cylinder head or engine block** – resulting in costly repairs.",
                    "**Complete engine failure** – in extreme overheating scenarios.",
                ],
                conclusion:
                    "Addressing **car radiator** issues early keeps the **radiator price** manageable and prevents catastrophic engine damage. Timely replacement protects engine performance, reliability, and long-term peace of mind.",
            },
        },

    },
    {
        category: "Cooling and Heating", name: "Radiator Fan Motor", image: "/parts/Radiator Fan Motor.png", desc: {
            intro: {
                title: "What Is a Radiator Fan Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **radiator fan motor** powers the cooling fan that pulls air through the radiator to remove heat from engine coolant.",
                    "It is especially critical at low speeds, in traffic, or when the vehicle is stationary, where natural airflow is limited.",
                    "By ensuring continuous airflow, the fan motor helps maintain optimal engine temperature in all driving and weather conditions.",
                    "A properly functioning **car radiator fan motor** supports efficient cooling, protects the engine from overheating, and stabilizes performance under high load.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Radiator Fan Motor",
                points: [
                    "**Engine overheating in traffic** – fan fails to activate at low speeds.",
                    "**Cooling fan not turning on** – even as engine temperature rises.",
                    "**Unusual noises from the fan area** – grinding or rattling from motor wear.",
                    "**Reduced AC performance** – poor airflow affects condenser cooling.",
                    "If these symptoms appear, checking the **radiator fan motor price** early can help prevent engine overheating.",
                ],
            },

            impact: {
                title: "How a Faulty Radiator Fan Motor Affects Performance and Reliability",
                text: [
                    "A failing radiator fan motor limits airflow through the radiator, causing temperature instability.",
                    "**Engine overheating** – especially during idle or stop-and-go driving.",
                    "**Reduced engine efficiency** – excessive heat impacts combustion performance.",
                    "**Increased AC system strain** – poor condenser cooling weakens air conditioning.",
                    "Sustained overheating places additional stress on the engine, indirectly affecting fuel efficiency and long-term reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Radiator Fan Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and cooling system design.",
                    "**Electrical specifications** – correct voltage and connector configuration.",
                    "**Build quality** – durable bearings and balanced motor construction.",
                    "**Radiator fan motor price vs durability** – balance cost with long-term performance.",
                    "Selecting the correct **radiator fan motor** ensures dependable cooling and stable engine operation.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Radiator Fan Motor Improves Performance and Reliability",
                points: [
                    "**Stable engine temperature** – even in heavy traffic or extreme heat.",
                    "**Improved cooling efficiency** – supporting optimal engine performance.",
                    "**Reduced strain on engine and AC components** – extending system lifespan.",
                    "**Quieter operation** – eliminating fan-related noise issues.",
                    "A new **car radiator fan motor** restores reliable airflow and protects critical cooling system components.",
                ],
            },

            risks: {
                title: "How Ignoring Radiator Fan Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Chronic engine overheating** – leading to head gasket failure.",
                    "**Radiator and hose damage** – from excessive pressure and heat.",
                    "**Accelerated engine wear** – resulting in costly repairs or engine failure.",
                ],
                conclusion:
                    "Addressing **radiator fan motor** issues early keeps the **radiator fan motor price** manageable and prevents extensive cooling system and engine repairs. Timely replacement protects engine health and ensures consistent performance.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Radiator Shroud", image: "/parts/Radiator Shroud.png", desc: {
            intro: {
                title: "What Is a Radiator Shroud and Why It Matters for Engine Cooling",
                text: [
                    "A **radiator shroud** is a molded enclosure mounted around the radiator fan that directs airflow straight through the radiator core.",
                    "Instead of allowing air to spill around the edges, the shroud ensures every rotation of the fan pulls air across the cooling fins.",
                    "This focused airflow significantly improves cooling efficiency, especially at idle or low vehicle speeds.",
                    "By controlling airflow, the **radiator fan shroud** plays a critical role in maintaining proper engine temperature and preventing heat buildup under demanding conditions.",
                ],
            },

            signs: {
                title: "Signs of a Damaged or Missing Radiator Shroud",
                points: [
                    "**Engine overheating at idle** – poor airflow when the vehicle is stationary.",
                    "**Cooling fan running constantly** – compensating for lost airflow efficiency.",
                    "**Cracks or broken mounting points** – reducing airflow control.",
                    "**Excessive engine bay heat** – especially after short drives.",
                    "These issues are often misdiagnosed as fan or radiator problems when the **radiator shroud** is the actual cause.",
                ],
            },

            impact: {
                title: "How a Faulty Radiator Shroud Affects Engine Performance",
                text: [
                    "When a radiator shroud is damaged or missing, airflow through the radiator becomes inefficient.",
                    "**Higher engine operating temperatures** – especially in traffic or slow driving conditions.",
                    "**Increased fan load** – shortening radiator fan motor lifespan.",
                    "**Reduced cooling system efficiency** – affecting overall engine performance.",
                    "Over time, excess heat stress can damage hoses, sensors, and other engine components.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Radiator Shroud for Your Vehicle",
                points: [
                    "**Exact vehicle compatibility** – proper alignment with radiator and fan.",
                    "**Material quality** – heat-resistant plastic or composite construction.",
                    "**Mounting integrity** – secure attachment prevents vibration and noise.",
                    "A properly designed **radiator cooling fan shroud** restores airflow efficiency and cooling balance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Radiator Shroud Improves Cooling System Health",
                points: [
                    "**Improved cooling at idle and low speeds**",
                    "**Reduced risk of engine overheating**",
                    "**Better fan performance with less strain**",
                    "**Extended lifespan of cooling system components**",
                    "Although simple in design, the **radiator shroud** is essential for maintaining stable engine temperatures in real-world driving.",
                ],
            },

            risks: {
                title: "How Ignoring Radiator Shroud Issues Can Lead to Bigger Problems",
                points: [
                    "**Chronic overheating in traffic conditions**",
                    "**Premature radiator fan motor failure**",
                    "**Accelerated wear of hoses, sensors, and engine components**",
                ],
                conclusion:
                    "Replacing a damaged or missing **radiator fan shroud** restores proper airflow control and protects the engine from heat-related damage. Timely replacement ensures the cooling system operates efficiently and reliably.",
            },
        },
    },
    {
        category: "Cooling and Heating", name: "Temperature Control", image: "/parts/Temperature Control.png", desc: {
            intro: {
                title: "How Car Temperature Control Maintains Cabin Comfort",
                text: [
                    "Car **temperature control** manages heating, cooling, airflow, and fan speed to maintain a comfortable cabin environment.",
                    "Through manual inputs or automatic climate settings, the system adjusts air temperature and distribution based on driver preferences and external conditions.",
                    "This coordinated control ensures balanced comfort across all seasons, whether driving in extreme heat, cold, or changing weather conditions.",
                ],
            },

            signs: {
                title: "Signs of Car Temperature Control Issues",
                points: [
                    "**Unresponsive temperature control switch** – changes in settings do not affect airflow or temperature.",
                    "**Uneven cabin temperatures** – hot and cold zones inside the vehicle.",
                    "**Delayed heating or cooling response** – system reacts slowly to adjustments.",
                    "**Automatic mode not maintaining set temperature** – requires frequent manual corrections.",
                    "These symptoms often indicate issues within the **car temperature control** system that reduce comfort and HVAC efficiency.",
                ],
            },

            impact: {
                title: "How Faulty Temperature Control Affects Comfort and Efficiency",
                text: [
                    "When temperature control does not function properly, cabin comfort and system efficiency suffer.",
                    "**Inconsistent cabin temperature** – sudden hot or cold air fluctuations.",
                    "**Increased driver distraction** – constant manual adjustments required.",
                    "**Inefficient HVAC operation** – system cycles improperly and works harder than needed.",
                    "Poor temperature regulation reduces overall driving comfort and places unnecessary strain on HVAC components.",
                ],
            },

            choosing: {
                title: "Key Components of a Car Temperature Control System",
                points: [
                    "**Temperature sensors** – monitor cabin and ambient air conditions.",
                    "**Actuators and blend doors** – regulate the mix of hot and cold air.",
                    "**Temperature control switch** – enables manual or digital adjustment of settings.",
                    "Proper coordination of these components ensures accurate **car temperature control** and smooth air distribution.",
                ],
            },

            benefits: {
                title: "Benefits of Proper Temperature Control Operation",
                points: [
                    "**Consistent cabin temperature** – stable comfort without sudden changes.",
                    "**Optimized airflow control** – even air distribution through all vents.",
                    "**Improved system efficiency** – reduced unnecessary HVAC cycling.",
                    "**Enhanced passenger comfort** – pleasant conditions for short and long drives.",
                    "A well-functioning **climate control system** improves both comfort and driving focus.",
                ],
            },

            risks: {
                title: "Why Temperature Control Is Essential for Driving Comfort",
                points: [
                    "**Reduced comfort in extreme weather** – cabin becomes difficult to regulate.",
                    "**Increased HVAC strain** – leading to premature component wear.",
                    "**Driver fatigue or distraction** – caused by constant temperature adjustments.",
                ],
                conclusion:
                    "Effective **car temperature control** is essential for maintaining a comfortable, distraction-free driving environment. Whether using manual controls or an automatic climate control system, precise temperature regulation improves comfort, efficiency, and overall driving experience in every season.",
            },
        },

    },
    {
        category: "Doors", name: "Door Handle Exterior", image: "/parts/Door Handle Exterior.png", desc: {
            intro: {
                title: "What Are Exterior Door Handles and Why They Matter",
                text: [
                    "Exterior door handles are the primary touchpoint used to open vehicle doors from the outside.",
                    "They work in sync with the door latch, locking mechanism, and in modern vehicles, keyless entry systems.",
                    "Available as pull, flap, or flush designs, a **door handle exterior** component is made from durable plastic, chrome, or metal to balance strength, style, and daily usability.",
                    "Though small, **exterior door handles** play a critical role in convenience, security, and the overall appearance of your vehicle.",
                ],
            },

            signs: {
                title: "Signs You May Need Outside Door Handle Replacement",
                points: [
                    "**Loose or stiff handle movement** – indicating internal wear or broken linkage.",
                    "**Handle not opening the door** – a common reason for outside door handle replacement.",
                    "**Cracked or broken handle housing** – often caused by impact or long-term stress.",
                    "**Keyless entry works but door won’t open** – internal handle mechanism failure.",
                    "Addressing these symptoms early prevents unexpected lockouts and usability issues.",
                ],
            },

            impact: {
                title: "How a Faulty Exterior Door Handle Affects Vehicle Use",
                text: [
                    "A damaged exterior door handle impacts more than just convenience.",
                    "**Reduced accessibility** – making daily entry and exit frustrating.",
                    "**Compromised door locking function** – affecting vehicle security.",
                    "**Safety concerns during emergencies** – delayed access when quick entry is required.",
                    "These issues make timely **outside door handle replacement** essential for safe and reliable vehicle use.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Exterior Door Handle for Your Vehicle",
                points: [
                    "**Exact vehicle compatibility** – match make, model, year, and door position.",
                    "**Material quality** – plastic for affordability, metal or chrome for durability and appearance.",
                    "**Lock and sensor integration** – compatibility with central locking and keyless entry systems.",
                    "Choosing the correct **exterior door handle** restores smooth operation and factory-level fit.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Exterior Door Handle Is Important",
                points: [
                    "**Restored easy access** – smooth and reliable door operation.",
                    "**Maintained vehicle security** – proper engagement with locking mechanisms.",
                    "**Preserved exterior appearance** – no broken or mismatched handles.",
                    "**Improved daily usability** – frustration-free entry every time.",
                    "A quality **outside door handle replacement** ensures dependable performance for one of your vehicle’s most-used components.",
                ],
            },

            risks: {
                title: "What Happens If Exterior Door Handle Issues Are Ignored",
                points: [
                    "**Complete handle failure** – leaving the door inoperable from the outside.",
                    "**Unexpected lockouts** – especially problematic in emergencies.",
                    "**Progressive internal latch damage** – increasing repair complexity.",
                ],
                conclusion:
                    "Replacing a faulty **exterior door handle** early prevents inconvenience, security risks, and further door mechanism damage. A reliable handle ensures seamless access and dependable operation every day.",
            },
        },
    },
    {
        category: "Doors", name: "Door Handle Interior", image: "/parts/Door Handle Interior.png", desc: {
            intro: {
                title: "What Is an Interior Door Handle and Why It Matters",
                text: [
                    "An **interior door handle** allows passengers to open the vehicle door safely from inside the cabin.",
                    "When pulled, it engages the door latch mechanism through rods or cables, releasing the lock and allowing the door to open.",
                    "Every **interior car door handle** is designed for frequent daily use, making it a vital component for convenience, safety, and mobility.",
                    "Though often overlooked, a properly functioning **inside car door handle** is essential for quick exits and overall passenger comfort.",
                ],
            },

            signs: {
                title: "Signs You Need to Replace the Interior Door Handle",
                points: [
                    "**Handle feels loose or doesn’t return to position** – internal wear or broken mounting points.",
                    "**Door won’t open from the inside** – but opens normally from the outside.",
                    "**Cracking sounds or visible damage** – indicating weakened handle material.",
                    "**Intermittent operation** – affected by temperature or door position.",
                    "Early replacement prevents passengers from being stuck inside the vehicle.",
                ],
            },

            impact: {
                title: "How a Faulty Interior Door Handle Affects Safety and Comfort",
                text: [
                    "A broken interior door handle is more than a minor inconvenience.",
                    "**Delayed exit during emergencies** – increasing safety risks.",
                    "**Reduced passenger confidence** – especially for rear-seat occupants.",
                    "**Possible deeper latch or linkage issues** – hidden inside the door panel.",
                    "Ignoring these symptoms can allow a simple handle issue to escalate into a larger door mechanism failure.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Interior Door Handle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Correct door position** – front or rear door orientation.",
                    "**Durable materials** – able to withstand repeated use and temperature changes.",
                    "A quality **interior car door handle** restores smooth operation and dependable access from inside the vehicle.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Interior Door Handle Is Important",
                points: [
                    "**Restored smooth door operation** – no sticking or loose movement.",
                    "**Safe and reliable exits** – especially in urgent situations.",
                    "**Improved everyday convenience** – effortless door opening.",
                    "**Maintained cabin usability** – confidence for all passengers.",
                    "A properly functioning **inside car door handle** turns a routine action into a reliable, stress-free experience.",
                ],
            },

            risks: {
                title: "What Happens If Interior Door Handle Issues Are Ignored",
                points: [
                    "**Passengers trapped inside the vehicle** – especially dangerous in emergencies.",
                    "**Increased stress on latch and linkage components** – causing secondary failures.",
                    "**Higher repair costs** – if door mechanisms are damaged over time.",
                ],
                conclusion:
                    "Replacing a faulty **interior door handle** early prevents safety risks, inconvenience, and further door mechanism damage. Timely replacement ensures passengers can always exit the vehicle safely and confidently.",
            },
        },
    },
    {
        category: "Doors", name: "Door Trim Panel", image: "/parts/Door Trim Panel.png", desc: {
            intro: {
                title: "What Is a Rear Door Trim Panel and Why It’s Important for Your Vehicle",
                text: [
                    "A **rear door trim panel** covers and protects the internal components of the rear door while enhancing the vehicle’s interior appearance.",
                    "More than a cosmetic layer, the **interior door panel trim** houses door handles, window switches, armrests, speakers, and wiring.",
                    "By sealing the door structure, the trim panel improves sound insulation, reduces vibration, and enhances overall cabin comfort.",
                    "A well-fitted rear door panel keeps the interior refined while protecting sensitive components from dust, moisture, and impact.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Door Trim Panel",
                points: [
                    "**Loose or rattling panel** – noticeable while driving.",
                    "**Cracks, warping, or broken mounting clips** – preventing secure fitment.",
                    "**Peeling fabric or faded surfaces** – affecting interior appearance.",
                    "**Malfunctioning switches or handles** – caused by poor panel alignment.",
                    "These issues impact both appearance and usability, making replacement necessary.",
                ],
            },

            impact: {
                title: "How a Damaged Door Trim Panel Affects Comfort and Functionality",
                text: [
                    "A faulty interior door panel trim affects more than just aesthetics.",
                    "**Increased road noise** – due to reduced insulation.",
                    "**Unstable switches and handles** – from loose or misaligned mounting.",
                    "**Exposed wiring and components** – increasing risk of damage.",
                    "Over time, these issues reduce passenger comfort and create additional repair needs inside the door.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Door Trim Panel for Your Vehicle",
                points: [
                    "**Exact vehicle match** – make, model, and year compatibility.",
                    "**Correct door position** – left or right rear door.",
                    "**Material and finish** – matching the original interior design.",
                    "**Proper cutouts** – for switches, speakers, and handles.",
                    "A compatible **door trim panel** installs cleanly and restores factory-level fit and appearance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Door Trim Panel Is Important",
                points: [
                    "**Restored interior appearance** – clean and refined cabin look.",
                    "**Improved sound insulation** – quieter driving experience.",
                    "**Securely mounted components** – stable switches and handles.",
                    "**Protection for internal door mechanisms** – against dust and moisture.",
                    "Replacing a damaged rear door trim panel restores both comfort and functionality.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Door Trim Panel Issues Can Lead to Bigger Repairs",
                points: [
                    "**Persistent rattles and vibration damage** – affecting door components.",
                    "**Broken switches or handles** – from unstable mounting.",
                    "**Exposed wiring** – increasing risk of electrical faults.",
                ],
                conclusion:
                    "Addressing **interior door panel trim** damage early prevents cosmetic issues from escalating into costly electrical or latch repairs. Timely replacement preserves cabin comfort, protects internal components, and maintains a solid, high-quality interior feel.",
            },
        },
    },
    {
        category: "Doors", name: "Door Vent Window Regulator Front", image: "/parts/Door Vent Window Regulator Front.png", desc: {
            intro: {
                title: "What Is a Front Door Vent Window Regulator and Why It’s Important for Your Vehicle",
                text: [
                    "A **front door window regulator** controls the movement of the triangular vent window found on some vehicles, allowing it to open and close smoothly.",
                    "Commonly used in older vehicle designs, this specialized regulator enables controlled airflow without lowering the main door glass.",
                    "By improving cabin ventilation and reducing wind turbulence, the regulator enhances comfort while maintaining window stability.",
                    "A properly functioning **front window regulator** ensures the vent glass remains securely positioned during driving.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Front Door Window Regulator",
                points: [
                    "**Vent window sticks or moves unevenly** – difficulty opening or closing fully.",
                    "**Cranking or motor noise without window movement** – internal regulator failure.",
                    "**Window slips out of position or won’t stay closed** – worn guides or mounting points.",
                    "**Increased wind noise** – caused by poor vent window sealing.",
                    "These symptoms may appear on either the **driver side window regulator** or **passenger side window regulator**, depending on usage.",
                ],
            },

            impact: {
                title: "How a Faulty Front Door Window Regulator Affects Comfort and Safety",
                text: [
                    "When a front door window regulator fails, airflow control becomes unpredictable.",
                    "**Increased wind noise and water leaks** – from loose or misaligned vent glass.",
                    "**Reduced cabin comfort** – especially during long drives.",
                    "**Compromised window security** – when the vent window won’t stay closed while parked.",
                    "Even minor regulator issues can affect interior protection and driving comfort.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Front Door Window Regulator for Your Vehicle",
                points: [
                    "**Exact vehicle compatibility** – match make, model, and year.",
                    "**Manual or power operation** – depending on original configuration.",
                    "**Correct door position** – driver side or passenger side window regulator.",
                    "**Proper mounting and glass alignment** – to ensure smooth operation.",
                    "Correct fitment prevents premature wear and ensures reliable vent window function.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Front Door Window Regulator Is Important",
                points: [
                    "**Smooth vent window operation** – easy opening and closing.",
                    "**Improved airflow control** – enhanced cabin ventilation.",
                    "**Secure window positioning** – reduced rattling and leaks.",
                    "**Preserved interior comfort** – quieter and more controlled driving experience.",
                    "A new **front door window regulator** restores dependable operation of this specialized ventilation feature.",
                ],
            },

            risks: {
                title: "How Ignoring Front Door Window Regulator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Misaligned vent glass** – causing seal damage or glass stress.",
                    "**Water intrusion** – leading to interior trim or door component damage.",
                    "**Broken mounting hardware** – increasing repair complexity.",
                ],
                conclusion:
                    "Addressing **front door window regulator** issues early prevents secondary damage and keeps both the **driver side window regulator** and **passenger side window regulator** functioning correctly. Timely replacement ensures proper ventilation, window security, and long-term interior protection.",
            },
        },

    },
    {
        category: "Doors", name: "Electric Door Motor", image: "/parts/Electric Door Motor.png", desc: {
            intro: {
                title: "What Is a Power Door Lock Actuator and Why It’s Important for Your Vehicle",
                text: [
                    "A **power door lock actuator** is the electric motor that controls automatic door locking and unlocking functions.",
                    "This **electric door lock motor** works with central locking systems, keyless entry, alarms, and safety features in modern vehicles.",
                    "By converting electrical signals into mechanical movement, the **car door actuator lock** ensures doors respond quickly and securely.",
                    "A properly functioning actuator supports both everyday convenience and essential vehicle security.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Power Door Lock Actuator",
                points: [
                    "**Doors fail to lock or unlock** – using the remote or interior switch.",
                    "**Delayed or weak locking response** – actuator struggles to engage.",
                    "**Clicking or buzzing noises inside the door** – internal motor wear.",
                    "**Manual locking works but automatic functions do not** – electric motor failure.",
                    "These symptoms often indicate a failing **electric door lock motor** inside the door assembly.",
                ],
            },

            impact: {
                title: "How a Faulty Power Door Lock Actuator Affects Security and Convenience",
                text: [
                    "A failing **car door actuator lock** impacts both safety and daily usability.",
                    "**Reduced vehicle security** – doors may not lock consistently.",
                    "**Unreliable keyless entry** – remote or button inputs fail.",
                    "**Manual locking required** – reducing convenience for passengers.",
                    "Repeated failed lock attempts can also strain wiring and control modules over time.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Power Door Lock Actuator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Door position** – front or rear door application.",
                    "**Side configuration** – left or right-hand orientation.",
                    "**Build quality** – OEM or high-quality aftermarket actuator.",
                    "A properly matched **electric door lock motor** ensures smooth, quiet, and reliable locking operation.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Power Door Lock Actuator Is Important",
                points: [
                    "**Restored automatic locking** – dependable response every time.",
                    "**Improved vehicle security** – doors lock firmly and consistently.",
                    "**Convenient keyless entry** – seamless daily operation.",
                    "**Reduced electrical strain** – protects door wiring and modules.",
                    "Replacing a failing **power door lock actuator** restores confidence in your vehicle’s security system.",
                ],
            },

            risks: {
                title: "How Ignoring Power Door Lock Actuator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete lock failure** – doors may remain permanently unlocked.",
                    "**Damaged linkages or wiring** – increasing repair complexity.",
                    "**Strain on central locking or alarm modules** – leading to costly electrical issues.",
                ],
                conclusion:
                    "Addressing **car door actuator lock** problems early prevents cascading electrical failures and keeps your vehicle secure. Timely replacement ensures reliable locking, protects related components, and restores full door system functionality.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door", image: "/parts/Front Door.png", desc: {
            intro: {
                title: "What Is a Front Door Assembly and Why It’s Important for Your Vehicle",
                text: [
                    "A **front door assembly** is the primary entry and exit point for the driver and front passenger.",
                    "More than a metal panel, it integrates locks, handles, window regulators, trim panels, wiring, hinges, mirrors, and side-impact beams.",
                    "A properly built **driver side door** or passenger door supports occupant safety, sound insulation, weather sealing, and modern electronic features.",
                    "This complete assembly plays a central role in everyday comfort, security, and vehicle usability.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Front Door Assembly",
                points: [
                    "**Door does not open or close smoothly** – indicating alignment or hinge issues.",
                    "**Wind noise or water leaks** – caused by damaged seals or misalignment.",
                    "**Faulty locks, windows, or mirrors** – due to internal damage or wiring faults.",
                    "**Visible structural damage** – often from collision or impact.",
                    "In these situations, a **replacement front door** may be the most reliable solution.",
                ],
            },

            impact: {
                title: "How a Damaged Front Door Assembly Affects Safety and Comfort",
                text: [
                    "A compromised front door assembly impacts multiple safety and comfort systems.",
                    "**Reduced side-impact protection** – weakening occupant safety.",
                    "**Increased road noise** – from poor sealing and alignment.",
                    "**Malfunctioning electronic features** – including locks and windows.",
                    "**Accelerated hinge and latch wear** – due to improper door fit.",
                    "Even minor misalignment can lead to long-term structural and usability problems.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Front Door Assembly for Your Vehicle",
                points: [
                    "**Exact vehicle match** – make, model, and year compatibility.",
                    "**Correct side selection** – driver side door or passenger side door.",
                    "**Component compatibility** – locks, wiring, glass, and trim.",
                    "**OEM or quality-tested replacement** – for safety and durability.",
                    "A correctly fitted **replacement front door** restores factory-level performance and protection.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Front Door Assembly Is Important",
                points: [
                    "**Restored door alignment** – smooth opening and closing.",
                    "**Improved safety protection** – proper side-impact support.",
                    "**Reduced noise and leaks** – better sealing and insulation.",
                    "**Reliable electronics** – consistent lock, window, and mirror operation.",
                    "Replacing a damaged front door assembly ensures every entry and exit feels secure, quiet, and confident.",
                ],
            },

            risks: {
                title: "How Ignoring Front Door Assembly Issues Can Lead to Bigger Repairs",
                points: [
                    "**Latch or hinge failure** – making the door unsafe or unusable.",
                    "**Electrical faults** – affecting locks, windows, and mirrors.",
                    "**Water intrusion** – damaging interior trim and wiring.",
                    "**Reduced crash protection** – from compromised structure.",
                ],
                conclusion:
                    "Addressing **front door assembly** problems early prevents small alignment issues from escalating into costly structural and electrical repairs. Timely replacement protects safety, comfort, and long-term vehicle integrity.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door Switch", image: "/parts/Front Door Switch.png", desc: {
            intro: {
                title: "What Is a Car Door Switch and Why It’s Important for Your Vehicle",
                text: [
                    "A **car door switch** is the control interface mounted on the front door that manages multiple electronic functions.",
                    "It controls power windows, door locks, mirror adjustment, interior lighting, and keyless entry features.",
                    "Often designed as a master control on the driver’s side, the **auto door switch** acts as the command center for door-related electronics.",
                    "By integrating comfort, safety, and convenience into one unit, the door switch ensures smooth interaction with the vehicle’s electronic systems.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Car Door Switch",
                points: [
                    "**Windows or locks not responding** – no reaction to button presses.",
                    "**Intermittent mirror or interior light operation** – inconsistent electrical contact.",
                    "**Some buttons work while others don’t** – internal circuit wear.",
                    "**Delayed or unresponsive controls** – failing switch contacts.",
                    "These symptoms often indicate the need for **car door switch repair** or replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Car Door Switch Affects Comfort and Control",
                text: [
                    "A malfunctioning **auto door switch** disrupts everyday driving convenience.",
                    "**Windows stuck open or closed** – reducing comfort and security.",
                    "**Inconsistent door locking** – affecting vehicle safety.",
                    "**Driver distraction** – caused by repeated or failed button inputs.",
                    "Over time, continued use of a faulty switch can strain connected wiring and control modules.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Car Door Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Correct position** – driver-side master switch or passenger-side unit.",
                    "**Feature support** – auto-up/down windows, mirror control, keyless entry.",
                    "**Build quality** – OEM or high-quality aftermarket construction.",
                    "Selecting the correct **auto door switch** restores full electronic functionality.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Car Door Switch Is Important",
                points: [
                    "**Instant control response** – smooth window and lock operation.",
                    "**Improved safety and security** – reliable door locking.",
                    "**Reduced driver distraction** – predictable control behavior.",
                    "**System reliability** – protects connected motors and actuators.",
                    "A new **car door switch** brings back seamless, reliable interaction with door electronics.",
                ],
            },

            risks: {
                title: "How Ignoring Car Door Switch Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window motor strain** – caused by repeated failed commands.",
                    "**Door lock actuator damage** – from inconsistent power delivery.",
                    "**Wiring and module faults** – increasing repair complexity.",
                ],
                conclusion:
                    "Addressing **car door switch** issues early prevents cascading electrical failures and costly repairs. Timely replacement preserves system reliability, driver convenience, and safe vehicle operation.",
            },
        },
    },
    {
        category: "Doors", name: "Front Door Trim Panel", image: "/parts/Front Door Trim Panel.png", desc: {
            intro: {
                title: "What Is a Front Door Trim Panel and Why It’s Important for Your Vehicle",
                text: [
                    "A **front door trim panel** covers and protects the internal mechanisms inside the front door while defining the interior look and feel.",
                    "This **car front door panel** houses window and lock switches, speakers, armrests, wiring, and mounting hardware.",
                    "Beyond appearance, the panel reduces road noise, absorbs vibration, and shields internal door components from dust and moisture.",
                    "A properly fitted front door trim panel contributes to a quieter, more refined cabin experience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Front Door Trim Panel",
                points: [
                    "**Loose, rattling, or misaligned panel** – noticeable during driving.",
                    "**Cracked plastic or peeling surfaces** – affecting interior appearance.",
                    "**Unstable switches or armrests** – caused by poor panel support.",
                    "**Broken or missing clips** – preventing secure installation.",
                    "In these cases, **front door panel replacement** restores both appearance and function.",
                ],
            },

            impact: {
                title: "How a Damaged Front Door Trim Panel Affects Comfort and Usability",
                text: [
                    "A worn **car front door panel** impacts more than just aesthetics.",
                    "**Increased cabin noise** – due to reduced insulation.",
                    "**Loose or unstable controls** – affecting usability.",
                    "**Exposed wiring and mechanisms** – increasing risk of damage.",
                    "Over time, poor panel fit can lead to discomfort and additional interior issues.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Front Door Trim Panel for Your Vehicle",
                points: [
                    "**Exact vehicle compatibility** – match make, model, and year.",
                    "**Correct side configuration** – driver or passenger door.",
                    "**Material and finish** – consistent with original interior design.",
                    "**Proper cutouts** – for switches, speakers, and handles.",
                    "A well-matched **car front door panel** installs cleanly and preserves factory-quality appearance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Front Door Trim Panel Is Important",
                points: [
                    "**Restored interior appearance** – clean, premium look.",
                    "**Improved sound insulation** – quieter cabin.",
                    "**Secure door-mounted controls** – stable switches and armrests.",
                    "**Protection for internal components** – against dust and moisture.",
                    "Replacing a damaged front door trim panel delivers a solid, comfortable, and refined cabin experience.",
                ],
            },

            risks: {
                title: "How Ignoring Front Door Trim Panel Issues Can Lead to Bigger Repairs",
                points: [
                    "**Broken switches or armrests** – from unstable mounting.",
                    "**Exposed wiring** – increasing electrical fault risk.",
                    "**Moisture intrusion** – damaging window and lock mechanisms.",
                ],
                conclusion:
                    "Addressing **front door trim panel** issues early prevents cosmetic problems from escalating into costly interior and electrical repairs. Timely replacement protects comfort, usability, and long-term door system reliability.",
            },
        },
    },
    {
        category: "Doors", name: "Front Window Regulator", image: "/parts/Front Window Regulator.png", desc: {
            intro: {
                title: "What Is a Car Window Regulator and Why It’s Important for Your Vehicle",
                text: [
                    "A **car window regulator** is the mechanism that controls the upward and downward movement of the front door glass.",
                    "It operates through manual cranks or electric motors using scissor, cable, or Bowden-style designs.",
                    "A properly functioning **front window regulator** ensures clear visibility, proper ventilation, and everyday passenger comfort.",
                    "In power systems, the **auto window regulator** works seamlessly with switches and motors for effortless control.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Car Window Regulator",
                points: [
                    "**Window moves slowly or gets stuck** – indicating internal wear or cable damage.",
                    "**Grinding, clicking, or rattling noises** – from worn regulator components.",
                    "**Glass tilts or drops inside the door** – loss of guide support.",
                    "**Switch works but window does not move** – regulator or motor failure.",
                    "These symptoms often point to wear in the **front window regulator assembly**.",
                ],
            },

            impact: {
                title: "How a Faulty Car Window Regulator Affects Comfort and Safety",
                text: [
                    "A failing **auto window regulator** reduces convenience, safety, and security.",
                    "**Reduced cabin security** – window may not close fully.",
                    "**Increased noise and water intrusion** – poor sealing from misaligned glass.",
                    "**Compromised driver visibility** – window cannot be positioned correctly.",
                    "Continued use can also strain window motors and electrical components.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Car Window Regulator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Manual or power configuration** – based on original setup.",
                    "**Regulator type** – scissor, cable, or Bowden system.",
                    "**Correct door position** – left or right front door.",
                    "A properly matched **front window regulator** restores factory-level performance and reliability.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Car Window Regulator Is Important",
                points: [
                    "**Smooth glass movement** – no sticking or tilting.",
                    "**Improved cabin comfort** – better ventilation and sealing.",
                    "**Glass alignment protection** – reduced risk of breakage.",
                    "**Reliable daily operation** – consistent window control.",
                    "Replacing a worn **car window regulator** turns a basic feature into a dependable everyday convenience.",
                ],
            },

            risks: {
                title: "How Ignoring Front Window Regulator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window motor failure** – caused by excessive strain.",
                    "**Damaged tracks or guides** – increasing repair complexity.",
                    "**Glass breakage** – from loss of regulator support.",
                ],
                conclusion:
                    "Addressing **front window regulator** problems early prevents secondary damage to motors, switches, and glass. Timely replacement avoids costly door and electrical repairs while restoring smooth, secure window operation.",
            },
        },
    },
    {
        category: "Doors", name: "Power Window Motor", image: "/parts/Power Window Motor.png", desc: {
            intro: {
                title: "What Is a Power Window Motor and Why It’s Important for Your Vehicle",
                text: [
                    "A **power window motor** is the electric component that automates window movement, allowing windows to raise and lower at the push of a button.",
                    "Working with a window regulator system such as scissor, cable, or rack-and-pinion designs, the **electric window motor** converts electrical energy into smooth mechanical motion.",
                    "By eliminating manual effort, the window motor enhances convenience, improves safety, and ensures consistent window operation.",
                    "A properly functioning **power window motor** delivers smooth, reliable control in all driving conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Power Window Motor",
                points: [
                    "**Window moves slowly or stops midway** – motor struggling under load.",
                    "**Grinding, clicking, or humming noises** – internal motor wear or gear failure.",
                    "**Window does not respond to the switch** – motor no longer engaging.",
                    "**One window fails while others work normally** – isolated motor failure.",
                    "These symptoms often indicate the need for **power window motor replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Power Window Motor Affects Comfort and Safety",
                text: [
                    "A failing **electric window motor** affects both convenience and vehicle security.",
                    "**Reduced cabin security** – windows may not close fully.",
                    "**Compromised weather protection** – increased wind and water intrusion.",
                    "**Driver distraction** – repeated attempts to operate the window.",
                    "Continued operation can also place excessive strain on the window regulator and wiring.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Power Window Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Regulator type** – scissor, cable, or rack-and-pinion design.",
                    "**Correct door position** – driver or passenger side.",
                    "**Build quality** – OEM or high-quality aftermarket motor.",
                    "A properly matched **power window motor** restores factory-level window performance and reliability.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Power Window Motor Is Important",
                points: [
                    "**Effortless window operation** – smooth movement with one-touch control.",
                    "**Improved cabin security** – reliable window closure.",
                    "**Protection for the window regulator** – reduced mechanical strain.",
                    "**Consistent daily performance** – dependable response every time.",
                    "Replacing a failing **power window motor** turns a daily convenience into a smooth, stress-free experience.",
                ],
            },

            risks: {
                title: "How Ignoring Power Window Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window regulator damage** – from excessive motor strain.",
                    "**Damaged tracks or guides** – caused by uneven movement.",
                    "**Burned switches or wiring** – due to electrical overload.",
                ],
                conclusion:
                    "Addressing **power window motor replacement** early prevents cascading damage to regulators, tracks, and electrical components. Timely repair keeps the window system operating safely, quietly, and reliably.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Back Door", image: "/parts/Rear Back Door.png", desc: {
            intro: {
                title: "What Is a Rear Back Door and Why It’s Important for Your Vehicle",
                text: [
                    "A **rear back door** provides access to rear seating or cargo areas and plays a key role in usability, safety, and vehicle design.",
                    "Depending on the vehicle, it may be a liftgate, tailgate, hatchback, sliding door, or barn-style door, available in manual or powered configurations.",
                    "Beyond access, the rear back door integrates locks, glass, lighting, trim, hinges, and structural supports.",
                    "When functioning properly, the complete **rear car door assembly** ensures safe loading, secure closure, and everyday convenience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Back Door",
                points: [
                    "**Difficulty opening or closing** – indicating hinge, latch, or alignment issues.",
                    "**Door misalignment or sagging** – poor fit or worn mounting points.",
                    "**Faulty latch or locking mechanism** – unreliable door closure.",
                    "**Power rear door not responding** – motor, sensor, or wiring faults.",
                    "**Water leaks, rattling, or excessive road noise** – damaged seals or structure.",
                    "These symptoms often point to worn or damaged **rear door parts for cars** that need attention.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Back Door Affects Safety and Usability",
                text: [
                    "A damaged rear back door affects both safety and practicality.",
                    "**Unreliable closure** – weak latches or misalignment can allow the door to open unexpectedly.",
                    "**Water and dust intrusion** – from damaged seals or poor fitment.",
                    "**Reduced reliability in powered systems** – increased strain on motors and sensors.",
                    "Over time, these issues make cargo access frustrating and can compromise interior protection.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Back Door for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – make, model, year, and body style.",
                    "**Manual or powered configuration** – matching the original setup.",
                    "**Component compatibility** – hinges, latches, glass, wiring, and trim.",
                    "**OEM or quality aftermarket options** – for durability and proper fit.",
                    "Correct selection of **rear car door assembly parts** ensures smooth operation, sealing, and longevity.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Rear Back Door Improves Vehicle Reliability",
                points: [
                    "**Secure closure and proper alignment** – improved safety.",
                    "**Reduced noise and leaks** – better sealing and insulation.",
                    "**Reliable locking and operation** – manual or powered.",
                    "**Easier cargo access** – improved everyday usability.",
                    "A properly fitted rear back door protects interior components and helps maintain vehicle value.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Back Door Issues Can Lead to Bigger Repairs",
                points: [
                    "**Latch or hinge failure** – creating unsafe conditions.",
                    "**Water intrusion** – damaging interior trim and electronics.",
                    "**Increased strain on powered door motors** – leading to costly failures.",
                ],
                conclusion:
                    "Addressing **rear back door** issues early with the correct **rear door parts for cars** prevents cascading damage and higher repair costs. Timely replacement keeps your vehicle safe, quiet, and dependable.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Side Door", image: "/parts/Rear Side Door.png", desc: {
            intro: {
                title: "What Is a Rear Side Door and Why It’s Important for Your Vehicle",
                text: [
                    "A **rear side door** provides safe and convenient access to the back seats, making it essential for passenger comfort and everyday usability.",
                    "Depending on vehicle design, this door may be a conventional hinged door, **sliding rear door**, or a rear-hinged style.",
                    "Built to balance safety, style, and space efficiency, the rear side door integrates hinges, latches, glass, trim, and locking systems.",
                    "Whether it’s the **driver side rear door** or passenger side, proper fit ensures smooth entry, secure closure, and effective sound and weather insulation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Side Door",
                points: [
                    "**Door does not open or close smoothly** – hinge, latch, or alignment issues.",
                    "**Misalignment causing wind noise or water leaks** – worn seals or structural damage.",
                    "**Faulty locks, handles, or window operation** – internal component failure.",
                    "**Visible damage from impact or corrosion** – compromising strength and fit.",
                    "For vehicles with **sliding rear doors**, worn tracks or rollers may also indicate replacement is needed.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Side Door Affects Safety and Comfort",
                text: [
                    "A damaged rear side door can compromise both passenger safety and ride quality.",
                    "**Reduced side-impact protection** – from structural or alignment damage.",
                    "**Increased cabin noise** – due to poor sealing.",
                    "**Difficult entry and exit** – affecting rear passengers.",
                    "In vehicles with powered or sliding rear doors, faults can also strain motors and control systems, reducing reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Side Door for Your Vehicle",
                points: [
                    "**Exact vehicle compatibility** – make, model, and year.",
                    "**Door type** – conventional, sliding rear door, or rear-hinged design.",
                    "**Correct side selection** – especially for the **driver side rear door**.",
                    "**Component compatibility** – locks, wiring, glass, and trim.",
                    "A properly matched rear side door restores factory-level safety, sealing, and operation.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Side Door Is Important",
                points: [
                    "**Safe and comfortable passenger access** – smooth entry and exit.",
                    "**Proper sealing** – reduced noise, dust, and water intrusion.",
                    "**Reliable locks and windows** – restored functionality.",
                    "**Maintained structural integrity** – improved safety and durability.",
                    "A new rear side door enhances both everyday usability and overall cabin refinement.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Side Door Issues Can Lead to Bigger Repairs",
                points: [
                    "**Hinge or latch failure** – creating safety risks.",
                    "**Electrical faults** – from damaged wiring or powered door components.",
                    "**Water intrusion** – damaging interior trim and electronics.",
                ],
                conclusion:
                    "Addressing **rear side door** issues early prevents minor alignment or component problems from escalating into costly structural and mechanical repairs. Timely replacement protects passenger safety, comfort, and long-term vehicle reliability.",
            },
        },
    },
    {
        category: "Doors", name: "Rear Window Regulator", image: "/parts/Rear Window Regulator.png", desc: {
            intro: {
                title: "What Is a Rear Window Regulator and Why It’s Important for Your Vehicle",
                text: [
                    "A **rear window regulator** controls the upward and downward movement of the rear door windows, allowing passengers to adjust ventilation with ease.",
                    "Available in manual and powered designs, the regulator may use **cable, scissor, or rack-and-pinion** systems to guide the glass smoothly.",
                    "A properly functioning regulator ensures safe window operation, supports cabin airflow, and enhances passenger comfort.",
                    "In powered setups, the **rear power window regulator** works seamlessly with switches and motors for effortless control.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Window Regulator",
                points: [
                    "**Window moves slowly, unevenly, or gets stuck** – internal wear or cable damage.",
                    "**Grinding, clicking, or rattling noises** – regulator mechanism failure.",
                    "**Window tilts or falls inside the door** – loss of glass support.",
                    "**Switch works but window does not move** – regulator or motor issue.",
                    "These symptoms often indicate problems with the **rear passenger window regulator** or related components.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Window Regulator Affects Comfort and Safety",
                text: [
                    "A failing **rear power window regulator** impacts both convenience and security.",
                    "**Reduced cabin security** – windows may not close fully.",
                    "**Compromised weather protection** – allowing rain, dust, or noise inside.",
                    "**Loss of passenger ventilation control** – affecting rear-seat comfort.",
                    "Continued operation can also strain the window motor, switches, and wiring.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Window Regulator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Manual or powered configuration** – based on your window system.",
                    "**Regulator type** – cable, scissor, or rack-and-pinion design.",
                    "**Correct fitment** – specific to the **rear passenger window regulator** position.",
                    "The right regulator restores smooth operation and factory-level performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Window Regulator Is Important",
                points: [
                    "**Smooth and reliable window movement** – without sticking or noise.",
                    "**Improved passenger comfort** – consistent ventilation control.",
                    "**Proper glass alignment** – protecting the window from damage.",
                    "**Dependable daily operation** – effortless use every time.",
                    "A new rear window regulator turns a basic feature into a reliable convenience.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Window Regulator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window motor failure** – from excessive strain.",
                    "**Damaged tracks or broken glass** – due to misalignment.",
                    "**Electrical wiring and switch damage** – from repeated overload.",
                ],
                conclusion:
                    "Addressing **rear power window regulator** problems early prevents secondary damage and costly door repairs. Timely replacement keeps rear window operation safe, smooth, and reliable for long-term use.",
            },
        },
    },
    {
        category: "Doors", name: "Side View Mirror", image: "/parts/Side View Mirror.png", ddesc: {
            intro: {
                title: "What Is a Side View Mirror and Why It’s Important for Your Vehicle",
                text: [
                    "A **side view mirror** is a critical safety component that improves visibility of adjacent lanes and rear blind spots.",
                    "Mounted on both sides of the vehicle, the **side rear view mirror** helps drivers monitor surrounding traffic, change lanes safely, and park with confidence.",
                    "Modern **car side mirrors** may include advanced features such as heating, power folding, integrated turn indicators, memory settings, and digital displays.",
                    "All these features are designed to enhance driving safety, convenience, and overall situational awareness.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Side View Mirror",
                points: [
                    "**Cracked or broken mirror glass** – reducing visibility.",
                    "**Loose or vibrating mirror housing** – unstable positioning while driving.",
                    "**Power adjustment or folding not working** – motor or wiring issues.",
                    "**Heating or indicator functions failing** – electrical component failure.",
                    "Any of these issues can compromise visibility and road safety.",
                ],
            },

            impact: {
                title: "How a Faulty Side Mirror Affects Safety and Driving Confidence",
                text: [
                    "A damaged **car side mirror** significantly limits situational awareness.",
                    "**Risky lane changes** – reduced ability to monitor adjacent traffic.",
                    "**Increased blind spots** – higher accident potential.",
                    "**Difficult parking and reversing** – limited spatial awareness.",
                    "For mirrors with electronic features, failure can also strain internal motors and wiring.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Side View Mirror for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Adjustment type** – manual or electric configuration.",
                    "**Integrated features** – heating, indicators, memory, or power folding.",
                    "**Side selection** – left or right **side rear view mirror**.",
                    "A properly matched mirror restores factory-level visibility and functionality.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Side View Mirror Is Important",
                points: [
                    "**Clear rear and side visibility** – improved lane awareness.",
                    "**Restored safety features** – heating, indicators, and power adjustment.",
                    "**Enhanced driving confidence** – better control in traffic and parking.",
                    "**Secure mounting** – eliminating vibration or misalignment.",
                    "A functional side view mirror turns every drive into a safer, more controlled experience.",
                ],
            },

            risks: {
                title: "How Ignoring Side View Mirror Issues Can Lead to Bigger Repairs",
                points: [
                    "**Progressive housing damage** – leading to full mirror assembly replacement.",
                    "**Electrical wiring corrosion** – from exposure to moisture.",
                    "**Mirror detachment** – creating safety hazards on the road.",
                ],
                conclusion:
                    "Addressing **car side mirror** issues early prevents safety risks, avoids electrical damage, and eliminates the need for complete mirror assembly replacement. Timely repair or replacement ensures reliable visibility and long-term driving safety.",
            },
        },
    },
    {
        category: "Electrical", name: "Alternator", image: "/parts/Alternator.png", desc: {
            intro: {
                title: "What Is an Alternator and Why It’s Important for Your Vehicle",
                text: [
                    "The **alternator** is the heart of your vehicle’s electrical system, generating power while the engine is running.",
                    "It charges the battery and supplies electricity to essential systems such as lights, ignition, infotainment, sensors, and climate control.",
                    "Without a properly functioning alternator, the battery would quickly drain, leading to electrical failures and engine shutdown.",
                    "Simply put, the alternator keeps your vehicle running reliably every time you drive.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Alternator Repair or Replacement",
                points: [
                    "**Battery warning light on the dashboard** – charging system issue detected.",
                    "**Dim or flickering headlights and interior lights** – inconsistent power output.",
                    "**Electrical features behaving erratically** – unstable voltage supply.",
                    "**Difficulty starting or frequent battery drain** – battery not being recharged.",
                    "These symptoms often indicate the need to **fix car alternator** problems before complete failure occurs.",
                ],
            },

            impact: {
                title: "How a Faulty Alternator Affects Performance and Reliability",
                text: [
                    "When the alternator cannot supply consistent electrical power, vehicle systems begin to fail progressively.",
                    "**Weak ignition and engine misfires** – insufficient power for ignition components.",
                    "**Malfunctioning sensors and control modules** – unstable voltage delivery.",
                    "**Reduced performance of safety and comfort features** – lights, ABS, infotainment, and HVAC affected.",
                    "Delaying alternator repair often turns a manageable issue into a complete roadside breakdown.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Alternator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine specifications.",
                    "**Output capacity (amps)** – ensure it meets your vehicle’s electrical demand.",
                    "**OEM or high-quality remanufactured options** – for durability and performance.",
                    "**Mounting and wiring compatibility** – direct fit reduces installation issues.",
                    "The right alternator choice minimizes repeat failures and the need to frequently **fix car alternator** issues.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Alternator Is Important",
                points: [
                    "**Stable electrical supply** – consistent power for all vehicle systems.",
                    "**Fully charged battery** – reliable starting every time.",
                    "**Protected electronics** – prevents voltage spikes and drops.",
                    "**Dependable driving experience** – no unexpected electrical shutdowns.",
                    "A new alternator restores confidence and long-term reliability in everyday driving.",
                ],
            },

            risks: {
                title: "How Ignoring Alternator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Dead battery and engine stalling** – loss of electrical supply while driving.",
                    "**Damage to electronic control units** – from unstable voltage.",
                    "**Wiring and sensor failure** – caused by prolonged electrical stress.",
                ],
                conclusion:
                    "Addressing alternator issues early prevents major electrical failures, avoids costly ECU damage, and keeps your vehicle running strong. Timely alternator repair or replacement ensures reliable power delivery and long-term system health.",
            },
        },
    },
    {
        category: "Electrical", name: "Antenna", image: "/parts/Antenna.png", desc: {
            intro: {
                title: "What Is a Car Antenna and Why It’s Important for Your Vehicle",
                text: [
                    "The **car antenna** is a vital component that enables clear reception for radio, GPS, navigation, and communication systems.",
                    "Designed to capture and transmit signals, modern antennas are available in whip, shark fin, and internal designs that balance performance and aesthetics.",
                    "A properly functioning car antenna ensures stable connectivity, accurate navigation, and uninterrupted entertainment while driving.",
                    "Without reliable signal reception, communication and infotainment systems lose effectiveness and convenience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Car Antenna Replacement",
                points: [
                    "**Weak or static-filled radio reception** – signal capture is compromised.",
                    "**GPS losing signal or slow location updates** – reduced navigation accuracy.",
                    "**Intermittent connection to communication systems** – unstable signal strength.",
                    "**Visible damage, bending, or corrosion** – physical antenna failure.",
                    "These symptoms often indicate it’s time to **replace antenna on car** for dependable performance.",
                ],
            },

            impact: {
                title: "How a Faulty Car Antenna Affects Performance and Convenience",
                text: [
                    "A damaged car antenna affects more than just audio quality and radio reception.",
                    "**Interrupted navigation guidance** – unreliable GPS signal.",
                    "**Reduced hands-free calling reliability** – communication dropouts.",
                    "**Limited access to connected vehicle features** – poor data reception.",
                    "Delaying car antenna replacement leads to ongoing frustration and reduced driving convenience.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Car Antenna for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Antenna style** – whip, shark fin, or internal based on design and signal needs.",
                    "**System support** – radio, GPS, navigation, and communication compatibility.",
                    "**OEM or high-quality aftermarket options** – for durability and reception quality.",
                    "Choosing the right antenna reduces the need to repeatedly **replace antenna on car**.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Car Antenna Is Important",
                points: [
                    "**Clear signal reception** – improved radio and audio clarity.",
                    "**Accurate navigation performance** – stable GPS connectivity.",
                    "**Reliable communication systems** – consistent hands-free calling.",
                    "**Enhanced driving experience** – uninterrupted connectivity and entertainment.",
                    "A new car antenna restores full system functionality and modern driving convenience.",
                ],
            },

            risks: {
                title: "How Ignoring Car Antenna Issues Can Lead to Bigger Repairs",
                points: [
                    "**Water intrusion at mounting point** – leading to corrosion.",
                    "**Wiring damage** – from prolonged exposure and signal loss.",
                    "**Head unit or GPS module issues** – caused by poor signal integrity.",
                ],
                conclusion:
                    "Addressing **car antenna replacement** needs early prevents signal loss from escalating into complex electrical repairs. Timely antenna replacement protects communication systems, preserves connectivity, and ensures reliable performance across all signal-dependent features.",
            },
        },
    },
    {
        category: "Electrical", name: "Audio Euipment Radio", image: "/parts/Audio Euipment Radio.png", desc: {
            intro: {
                title: "What Is an Audio Equipment Radio and Why It Matters for Your Vehicle",
                text: [
                    "The **Audio Equipment Radio** is the central hub of your vehicle’s entertainment and information system.",
                    "From basic AM/FM playback to advanced infotainment, a modern **car radio** delivers music, navigation prompts, calls, and system alerts.",
                    "Available in single DIN and double DIN formats, today’s systems integrate sound, connectivity, and control into one dashboard command center.",
                    "A properly functioning car stereo system enhances driving comfort, convenience, and overall user experience.",
                ],
            },

            types: {
                title: "Types of Car Radio and Stereo Systems",
                points: [
                    "**Single DIN car radio** – compact design for smaller dashboards.",
                    "**Double DIN car stereo systems** – larger displays with expanded features.",
                    "**Touch screen car stereo units** – GPS navigation, apps, and advanced controls.",
                    "**Bluetooth-enabled radios** – hands-free calling and wireless music streaming.",
                    "**USB and AUX-supported systems** – flexible media playback options.",
                    "Each **Audio Equipment Radio** type is designed to match different vehicle layouts and driver preferences.",
                ],
            },

            signs: {
                title: "Signs You May Need Car Radio Repair",
                points: [
                    "**No sound or distorted audio** – speaker or internal amplifier issues.",
                    "**Touchscreen not responding** – control module or display failure.",
                    "**Bluetooth disconnecting frequently** – unstable connectivity.",
                    "**Radio turning off randomly or not powering on** – wiring or internal faults.",
                    "These symptoms usually indicate the need for timely **car radio repair** to restore full functionality.",
                ],
            },

            impact: {
                title: "How a Faulty Audio Equipment Radio Affects Driving",
                text: [
                    "A malfunctioning Audio Equipment Radio impacts more than in-car entertainment.",
                    "**Navigation prompts may be missed** – reducing driving confidence.",
                    "**Hands-free communication becomes unreliable** – increasing distraction.",
                    "**System alerts and audio cues may fail** – affecting safety features.",
                    "A reliable car radio is essential for maintaining comfort, focus, and safe vehicle operation.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Audio Equipment Radio for Your Vehicle",
                points: [
                    "**Dashboard size and DIN compatibility** – single or double DIN fitment.",
                    "**Desired features** – Bluetooth, GPS, touchscreen, or app integration.",
                    "**Sound quality and amplifier support** – for enhanced audio performance.",
                    "**Vehicle wiring and steering control compatibility** – seamless integration.",
                    "Choosing the right **Audio Equipment Radio** reduces future car radio repair needs and ensures smooth operation.",
                ],
            },

            benefits: {
                title: "Why Timely Car Radio Repair or Upgrade Is Important",
                points: [
                    "**Restored sound quality** – clear, consistent audio output.",
                    "**Reliable connectivity** – stable Bluetooth and media access.",
                    "**Improved driving comfort** – easy access to entertainment and navigation.",
                    "**Modernized interior experience** – enhanced usability and appearance.",
                ],
                conclusion:
                    "Delaying **car radio repair** can lead to wiring damage, speaker failure, or complete system loss. Whether repairing or upgrading your Audio Equipment Radio, addressing issues early restores connectivity, improves sound quality, and enhances every drive with dependable entertainment and control.",
            },
        },
    },
    {
        category: "Electrical", name: "Automatic Headlamp Dimmer", image: "/parts/Automatic Headlamp Dimmer.png", desc: {
            intro: {
                title: "What Is an Automatic Headlamp Dimmer and Why It Matters",
                text: [
                    "An **Automatic Headlamp Dimmer** is an intelligent lighting control system that automatically switches between high and low beams based on traffic and ambient light conditions.",
                    "Using sensors or cameras, the system detects oncoming vehicles and surrounding light to reduce glare while maintaining optimal road visibility.",
                    "A properly functioning **auto headlight dimmer** improves night driving safety and reduces driver fatigue by eliminating manual beam adjustments.",
                ],
            },

            working: {
                title: "How an Automatic Headlight Dimming System Works",
                text: [
                    "The **Automatic Headlamp Dimmer** continuously monitors light levels from oncoming traffic, street lighting, and the environment.",
                    "When bright light is detected, the system automatically switches headlights to low beam.",
                    "Once the road clears, high beams are restored to maximize forward visibility.",
                    "In some vehicles, this operation is managed through a **headlamp dimmer switch** integrated into the steering column or lighting control module.",
                ],
            },

            types: {
                title: "Types of Headlamp Dimmer Systems",
                points: [
                    "**Sensor-based auto headlight dimmer systems** – react to ambient and oncoming light.",
                    "**Camera-assisted adaptive dimming systems** – use visual detection for precise beam control.",
                    "**Electronic headlamp dimmer switch units** – electronically manage beam selection.",
                    "**Integrated dimmers with adaptive headlights** – coordinate beam direction and intensity.",
                    "Each **Automatic Headlamp Dimmer** type is designed to match specific vehicle lighting technologies and safety systems.",
                ],
            },

            signs: {
                title: "Signs of a Faulty Automatic Headlamp Dimmer",
                points: [
                    "**High beams not dimming for oncoming traffic** – sensor or control failure.",
                    "**Headlights stuck on low beam** – reduced night visibility.",
                    "**Delayed or inconsistent beam switching** – system response issues.",
                    "**Lighting system warning indicators** – electronic or module faults.",
                    "These symptoms often indicate problems with sensors, control modules, or the **headlamp dimmer switch**.",
                ],
            },

            benefits: {
                title: "Why an Auto Headlight Dimmer Improves Driving Safety",
                points: [
                    "**Improved night visibility** – high beams used whenever safe.",
                    "**Reduced glare for other drivers** – safer shared road conditions.",
                    "**Lower driver workload** – no need for constant manual switching.",
                    "**Enhanced focus and comfort** – especially on long night drives.",
                ],
            },

            risks: {
                title: "When to Repair or Replace an Automatic Headlamp Dimmer",
                points: [
                    "**Reduced night visibility** – increasing accident risk.",
                    "**Increased glare complaints** – affecting other road users.",
                    "**Unreliable lighting behavior** – inconsistent beam control.",
                ],
                conclusion:
                    "Ignoring **Automatic Headlamp Dimmer** issues can compromise night driving safety. Timely repair or replacement of the **headlamp dimmer switch**, sensors, or control modules ensures reliable lighting performance and confident driving in low-visibility conditions.",
            },
        },
    },
    {
        category: "Electrical", name: "Backup Light", image: "/parts/Backup Light.png", desc: {
            intro: {
                title: "What Is a Backup Light and Why It Matters",
                text: [
                    "A **backup light** illuminates the area behind your vehicle when reverse gear is engaged.",
                    "It improves rear visibility in low-light conditions and alerts pedestrians and nearby drivers that the vehicle is moving backward.",
                    "Whether using a standard bulb or **LED backup lights**, this component plays a critical role in everyday driving safety.",
                ],
            },

            working: {
                title: "How Reverse Lights Work",
                text: [
                    "When the transmission is shifted into reverse, an electrical signal activates the reverse lighting circuit.",
                    "Power is sent to the **reverse light bulb**, which illuminates instantly to light the rear path.",
                    "The bulb is typically housed within the tail lamp assembly and controlled through a reverse switch or vehicle control module.",
                ],
            },

            types: {
                title: "Types of Backup Lights",
                points: [
                    "**Standard halogen reverse light bulbs** – factory-installed and cost-effective.",
                    "**LED backup lights** – brighter output with faster response time.",
                    "**Integrated reverse lights** – built into modern tail lamp assemblies.",
                    "**Auxiliary rear-mounted backup lights** – added for enhanced visibility in dark environments.",
                    "Each **reverse light** type offers different brightness levels, efficiency, and service life.",
                ],
            },

            signs: {
                title: "Signs of a Failing Reverse Light",
                points: [
                    "**Reverse lights not turning on** – electrical or bulb failure.",
                    "**Dim or flickering illumination** – weakening bulb or poor connection.",
                    "**Burnt-out reverse light bulb** – no rear illumination.",
                    "**Dashboard warning alerts** – detected lighting fault in modern vehicles.",
                    "These issues reduce rear visibility and increase the risk of accidents while reversing.",
                ],
            },

            benefits: {
                title: "Why Replacing a Backup Light Is Important",
                points: [
                    "**Improved rear visibility** – safer reversing in low-light conditions.",
                    "**Increased awareness for others** – alerts pedestrians and nearby drivers.",
                    "**Better parking accuracy** – clearer view of obstacles and surroundings.",
                    "**Compliance with road safety regulations** – required lighting functionality.",
                    "Upgrading to **LED backup lights** further improves brightness and reaction time.",
                ],
            },

            risks: {
                title: "When to Replace a Reverse Light Bulb",
                points: [
                    "**Reverse lights fail to activate** – no illumination when backing up.",
                    "**Weak or uneven light output** – reduced effectiveness.",
                    "**Intermittent operation** – unreliable signaling to others.",
                ],
                conclusion:
                    "If your reverse lights are dim or not working, immediate **reverse light bulb replacement** is recommended. Timely service restores rear visibility, improves safety, and ensures reliable reversing in all driving conditions.",
            },
        },
    },
    {
        category: "Electrical", name: "Blower Motor", image: "/parts/Blower Motor.png", desc: {
            intro: {
                title: "What Is a Blower Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **blower motor** circulates air through your vehicle’s HVAC system.",
                    "It pushes air across the heater core for warm air, over the evaporator for cooling, and through vents for ventilation and defrosting.",
                    "Without a properly functioning **blower motor**, heated or cooled air cannot reach the cabin effectively.",
                    "A reliable **blower motor car system** ensures consistent airflow at all fan speeds, maintaining cabin comfort in all weather conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Blower Motor",
                points: [
                    "**Weak or no airflow from vents** – even when the fan is set to high.",
                    "**Airflow works only at certain speeds** – indicating internal wear or electrical faults.",
                    "**Unusual noises** – grinding, squealing, or rattling from the dashboard area.",
                    "**Burning smell** – overheating motor or failing electrical connections.",
                    "If these symptoms appear, checking the **blower motor price** early helps avoid sudden HVAC failure.",
                ],
            },

            impact: {
                title: "How a Faulty Blower Motor Affects Performance and Efficiency",
                text: [
                    "A failing blower motor disrupts proper airflow through the HVAC system.",
                    "**Inefficient heating and cooling** – air does not circulate evenly through the cabin.",
                    "**Increased system strain** – other HVAC components work harder to compensate.",
                    "**Higher electrical load** – drawing more power than necessary.",
                    "While it does not directly affect engine output, inefficient airflow increases energy usage and reduces driving comfort.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Blower Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match the motor to make, model, year, and HVAC system.",
                    "**Fan speed control type** – manual vs automatic climate control requirements.",
                    "**Build quality** – durable bearings and balanced fan design reduce noise and wear.",
                    "Understanding the **blower motor price** range helps balance cost, durability, and long-term performance.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Blower Motor Improves Comfort and Reliability",
                points: [
                    "**Stable airflow at all speeds** – consistent climate control.",
                    "**Quieter HVAC operation** – elimination of rattles and grinding noises.",
                    "**Effective defrosting** – improved visibility and driving safety.",
                    "**Reduced strain on HVAC components** – extended system lifespan.",
                    "A new **blower motor** ensures dependable HVAC performance in both hot and cold conditions.",
                ],
            },

            risks: {
                title: "How Ignoring Blower Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Overheating electrical circuits** – damaging resistors or control modules.",
                    "**Blower resistor failure** – increasing overall repair costs.",
                    "**Complete HVAC airflow loss** – affecting heating, cooling, and defrosting.",
                ],
                conclusion:
                    "Addressing **blower motor** issues early keeps repair costs manageable and prevents expensive HVAC system failures. Timely replacement protects comfort, visibility, and overall system reliability.",
            },
        },
    },
    {
        category: "Electrical", name: "Camera/Projector", image: "/parts/Camera/Projector.png", desc: {
            intro: {
                title: "What Is a Car Camera System and Why It’s Important for Your Vehicle",
                text: [
                    "A **car camera system** enhances driving awareness by providing real-time visual feedback of blind spots, rear areas, and surroundings.",
                    "From a **backup camera for car** parking assistance to advanced security monitoring, camera systems significantly reduce accident risk.",
                    "Modern setups may include rear, front, and surround-view cameras integrated with in-cabin displays.",
                    "A properly functioning **car camera system** improves safety, confidence, and control during parking, reversing, and low-visibility driving.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a Camera or Projector Upgrade",
                points: [
                    "**Difficulty judging distance while reversing** – limited rear visibility.",
                    "**Frequent parking mishaps or blind-spot uncertainty** – lack of visual assistance.",
                    "**Poor night visibility** – even with functioning headlights.",
                    "**Non-functional or outdated camera display** – delayed or unclear video feed.",
                    "These issues often indicate the need for a **car camera system** or visibility upgrade.",
                ],
            },

            impact: {
                title: "How a Faulty Camera System Affects Safety and Visibility",
                text: [
                    "A malfunctioning camera system reduces situational awareness and increases accident risk.",
                    "**Limited rear visibility** – making reversing and parking more difficult.",
                    "**Blind-spot exposure** – increasing collision risk in tight spaces.",
                    "**Reduced night-time confidence** – especially without projector headlight support.",
                    "When visual assistance is compromised, driver reaction time and accuracy are reduced.",
                ],
            },

            choosing: {
                title: "Types of Car Camera Systems and How to Choose the Right One",
                points: [
                    "**Backup camera for car** – assists with reversing and parking.",
                    "**Rear view mirror camera** – integrated display for unobstructed rear vision.",
                    "**Security cameras** – front and rear monitoring for safety and recording.",
                    "**360-degree camera systems** – complete surround-view coverage.",
                    "Choosing the right **car camera system** depends on vehicle compatibility, display type, and visibility needs.",
                ],
            },

            benefits: {
                title: "Why Upgrading Your Car Camera System Improves Safety and Control",
                points: [
                    "**Improved rear visibility** – eliminating blind spots and obstructions.",
                    "**Safer parking and reversing** – especially in crowded or tight spaces.",
                    "**Enhanced night driving awareness** – when paired with projector headlights.",
                    "**Reduced collision risk** – better judgment and reaction time.",
                    "A modern **rear view mirror camera** or backup camera transforms everyday driving into a more controlled experience.",
                ],
            },

            risks: {
                title: "How Ignoring Camera or Visibility Issues Can Lead to Bigger Problems",
                points: [
                    "**Higher risk of reversing accidents** – due to limited rear visibility.",
                    "**Parking damage** – from misjudging distance or obstacles.",
                    "**Reduced night-time safety** – especially without projector lighting support.",
                ],
                conclusion:
                    "Addressing **car camera system** issues early improves visibility, reduces collision risk, and enhances overall driving confidence. Timely upgrades ensure safer maneuvering in traffic, parking areas, and low-light conditions.",
            },
        },

    },
    {
        category: "Electrical", name: "Chassis ECM", image: "/parts/Chassis ECM.png", desc: {
            intro: {
                title: "What Is a Chassis ECM and Why It’s Important for Your Vehicle",
                text: [
                    "The **Chassis ECM** (Electronic Control Module) acts as the vehicle’s stability and control brain.",
                    "Working alongside the **ABS control module** and **traction control module**, it monitors wheel speed, steering input, braking force, and suspension behavior.",
                    "By processing real-time sensor data, the Chassis ECM helps keep the vehicle balanced, predictable, and safe in changing driving conditions.",
                    "A properly functioning **chassis control module** is essential for modern vehicle safety and handling performance.",
                ],
            },

            signs: {
                title: "Signs of a Failing Chassis ECM",
                points: [
                    "**ABS or traction control warning lights** – illuminated on the dashboard.",
                    "**Loss of traction control assistance** – wheels spin more easily on slippery surfaces.",
                    "**Inconsistent braking behavior** – reduced confidence during stops.",
                    "**Poor stability during cornering or sudden maneuvers** – vehicle feels less controlled.",
                    "These symptoms often indicate problems with the **Chassis ECM**, **ABS control module**, or **traction control module**.",
                ],
            },

            impact: {
                title: "How a Faulty Chassis ECM Affects Stability and Safety",
                text: [
                    "When the Chassis ECM malfunctions, coordination between braking, traction, and stability systems is compromised.",
                    "**Reduced skid prevention** – increased risk of wheel lock or loss of grip.",
                    "**Delayed system response** – slower correction during emergency maneuvers.",
                    "**Unpredictable handling** – especially on wet, sandy, or uneven roads.",
                    "Without a reliable **chassis control module**, the vehicle cannot react quickly enough to maintain stability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Chassis ECM for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and drivetrain configuration.",
                    "**System integration** – compatibility with ABS, traction, and suspension systems.",
                    "**Programming requirements** – many Chassis ECMs require vehicle-specific coding.",
                    "**OEM or high-quality remanufactured units** – for reliability and safety compliance.",
                    "Choosing the correct **chassis control module** ensures proper communication with all stability systems.",
                ],
            },

            benefits: {
                title: "Why Replacing a Faulty Chassis ECM Improves Driving Safety",
                points: [
                    "**Restored ABS functionality** – controlled braking without wheel lock.",
                    "**Reliable traction control** – improved grip in low-traction conditions.",
                    "**Enhanced vehicle stability** – safer cornering and lane corrections.",
                    "**Predictable emergency response** – confident handling during sudden stops.",
                    "A healthy **Chassis ECM** ensures all safety systems work together seamlessly.",
                ],
            },

            risks: {
                title: "How Ignoring Chassis ECM Issues Can Lead to Bigger Problems",
                points: [
                    "**Loss of critical safety systems** – ABS and traction control may stop functioning.",
                    "**Increased accident risk** – due to reduced stability and braking control.",
                    "**Cascading electronic faults** – affecting relatd control modules and sensors.",
                ],
                conclusion:
                    "Addressing **Chassis ECM** issues early restores coordination between braking, traction, and stability systems. Timely replacement of a faulty **ABS control module** or **traction control module** protects vehicle handling, improves safety, and ensures confident control in all driving conditions.",
            },
        },
    },
    {
        category: "Electrical", name: "Column Switch", image: "/parts/Column Switch.png", desc: {
            intro: {
                title: "What Is a Column Switch and Why It’s Important for Your Vehicle",
                text: [
                    "A **column switch** is mounted on the steering column and allows the driver to control key vehicle functions without removing hands from the wheel.",
                    "Commonly known as a **steering column switch** or **turn signal switch**, it manages lighting, signaling, and wiper operations.",
                    "Its ergonomic placement ensures quick, intuitive access to essential controls while driving.",
                    "A properly functioning **column switch** plays a critical role in safety, visibility, and everyday driving convenience.",
                ],
            },

            signs: {
                title: "Signs of a Failing Column Switch",
                points: [
                    "**Turn signals not activating or cancelling** – indicators fail to respond correctly.",
                    "**Headlights or high beams malfunctioning** – lights not switching as intended.",
                    "**Windshield wipers operating intermittently** – delayed or unresponsive control.",
                    "**Loose or stiff switch movement** – worn internal contacts or mechanical wear.",
                    "These symptoms often indicate issues with the **turn signal switch** or **steering column switch** assembly.",
                ],
            },

            impact: {
                title: "How a Faulty Column Switch Affects Safety and Visibility",
                text: [
                    "A malfunctioning column switch can reduce driver control over critical safety systems.",
                    "**Unreliable signaling** – increasing the risk of miscommunication with other drivers.",
                    "**Reduced night visibility** – improper headlight or high-beam operation.",
                    "**Poor weather readiness** – inconsistent wiper and washer control.",
                    "When the **column switch** fails, driver awareness and reaction capability are compromised.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Column Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and steering column configuration.",
                    "**Function support** – indicators, headlights, wipers, cruise, or infotainment controls.",
                    "**Connector and wiring compatibility** – ensures proper electrical communication.",
                    "**OEM or high-quality aftermarket units** – for durability and precise operation.",
                    "Selecting the correct **steering column switch** ensures reliable control and long service life.",
                ],
            },

            benefits: {
                title: "Why Replacing a Faulty Column Switch Improves Driving Safety",
                points: [
                    "**Reliable turn signal operation** – clear communication with surrounding traffic.",
                    "**Consistent headlight control** – safer night and low-visibility driving.",
                    "**Responsive wiper functionality** – improved visibility during rain or snow.",
                    "**Smooth, ergonomic control** – reduced driver distraction.",
                    "A new **column switch** restores confidence and predictable operation of essential driving controls.",
                ],
            },

            risks: {
                title: "How Ignoring Column Switch Issues Can Lead to Bigger Problems",
                points: [
                    "**Loss of signaling reliability** – increasing accident risk.",
                    "**Headlight or wiper failure** – compromising visibility and safety.",
                    "**Electrical contact damage** – affecting connected systems within the steering column.",
                ],
                conclusion:
                    "Addressing **column switch** problems early restores proper control of lights, signals, and wipers. Timely replacement of a faulty **turn signal switch** or **steering column switch** ensures safe communication, dependable visibility, and consistent operation every time you drive.",
            },
        },
    },
    {
        category: "Electrical", name: "Conv/Invert/Charger", image: "/parts/Conv/Invert/Charger.png", desc: {
            intro: {
                title: "What Is a Car Power Inverter and Why It’s Important for Your Vehicle",
                text: [
                    "A **car power inverter** converts your vehicle’s DC battery power into usable AC electricity.",
                    "It allows you to run and charge everyday devices such as phones, laptops, and small appliances while on the road.",
                    "Modern setups may include a **power inverter for car**, built-in **car charger and USB** ports, or **pure sine wave inverters** for sensitive electronics.",
                    "A reliable inverter or charger system turns your vehicle into a mobile power source for travel, work, and emergency situations.",
                ],
            },

            signs: {
                title: "Signs You May Need a New Car Power Inverter or Charger",
                points: [
                    "**Devices charging slowly or not at all** – insufficient or unstable power output.",
                    "**Inverter overheating or shutting off** – internal component wear or overload.",
                    "**Flickering or unstable power** – poor voltage regulation.",
                    "**Warning lights or blown fuses** – electrical protection faults.",
                    "These issues often indicate inefficient power conversion or failing inverter components.",
                ],
            },

            impact: {
                title: "How a Faulty Inverter Affects Convenience and Safety",
                text: [
                    "An unreliable car power inverter can disrupt charging and pose safety risks.",
                    "**Device damage risk** – unstable voltage shortens electronics lifespan.",
                    "**Battery drain** – inefficient conversion places excess load on the vehicle battery.",
                    "**Overheating hazards** – failing units may overheat inside the cabin.",
                    "When power delivery becomes unreliable, everyday travel and emergency readiness are compromised.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Converter, Inverter, or Charger for Your Car",
                points: [
                    "**Power rating** – match inverter wattage to the devices you plan to run.",
                    "**Output type** – **pure sine wave** for laptops and sensitive electronics.",
                    "**Vehicle compatibility** – suited for your car’s electrical system and 12V capacity.",
                    "**Safety features** – overload, short-circuit, and thermal protection.",
                    "Choosing the right **power inverter for car** use ensures stable performance and long-term reliability.",
                ],
            },

            benefits: {
                title: "Why Upgrading Your Car Inverter or Charger Improves Reliability",
                points: [
                    "**Consistent power delivery** – stable charging for phones, laptops, and accessories.",
                    "**Electronics protection** – clean, regulated voltage output.",
                    "**Enhanced travel convenience** – power availability anywhere you drive.",
                    "**Emergency readiness** – reliable backup power when needed most.",
                    "A dependable **car power inverter** or charger keeps your vehicle ready to support modern electrical needs.",
                ],
            },

            risks: {
                title: "How Ignoring Inverter or Charger Issues Can Lead to Bigger Problems",
                points: [
                    "**Permanent device damage** – from unstable or dirty power output.",
                    "**Battery and wiring strain** – excessive load on vehicle electrical systems.",
                    "**Cabin safety risks** – overheating or electrical faults.",
                ],
                conclusion:
                    "Addressing **converter, inverter, or charger** issues early restores safe, stable power delivery and protects both your vehicle and connected electronics. Timely upgrades ensure reliable charging, safer operation, and dependable power wherever the road takes you.",
            },
        },
    },
    {
        category: "Electrical", name: "Corner/Park Light", image: "/parts/Corner/Park Light.png", desc: {
            intro: {
                title: "What Are Corner Lights and Parking Lights and Why They’re Important for Your Vehicle",
                text: [
                    "**Corner lights** improve visibility when turning by illuminating the side area of the vehicle during steering input or indicator use.",
                    "**Parking lights**, also known as **car parking lights**, keep your vehicle visible when parked or driving in low-light conditions such as dusk, rain, or fog.",
                    "Together, these lights enhance safety, signal vehicle presence to other drivers, and support legal road visibility requirements.",
                    "Properly functioning corner and parking lights help reduce blind spots and improve overall driving awareness.",
                ],
            },

            signs: {
                title: "Signs You May Need Corner Light or Parking Light Replacement",
                points: [
                    "**Dim or non-functioning parking lights** – reduced visibility when parked or driving in low light.",
                    "**One corner light not illuminating** – limited side visibility during turns.",
                    "**Flickering lights** – wiring, socket, or bulb issues.",
                    "**Dashboard bulb-out warnings** – indicating lighting system faults.",
                    "Timely **parking light replacement** helps maintain visibility and avoid traffic violations.",
                ],
            },

            impact: {
                title: "How Faulty Corner or Parking Lights Affect Safety and Visibility",
                text: [
                    "Malfunctioning corner or parking lights reduce how visible your vehicle is to others.",
                    "**Reduced side visibility** – increasing risk during turns and maneuvers.",
                    "**Lower vehicle presence** – especially at night or in poor weather conditions.",
                    "**Higher risk of curb or obstacle contact** – due to limited illumination.",
                    "When **car parking lights** or corner lights fail, both safety and compliance are compromised.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Corner Lights or Parking Lights for Your Vehicle",
                points: [
                    "**Bulb type** – LED for longevity and brightness or halogen for OEM match.",
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Housing and sealing** – proper fit to prevent moisture intrusion.",
                    "**Brightness and color compliance** – meet road safety regulations.",
                    "Choosing the correct **corner light** and **parking lights** ensures consistent illumination and durability.",
                ],
            },

            benefits: {
                title: "Why Replacing Corner or Parking Lights Improves Safety and Compliance",
                points: [
                    "**Improved turning visibility** – clearer side illumination in low light.",
                    "**Better parked vehicle visibility** – reduced risk of being overlooked.",
                    "**Restored lighting compliance** – meeting road safety requirements.",
                    "**Enhanced driver confidence** – predictable illumination in all conditions.",
                    "Replacing worn **car parking lights** ensures your vehicle remains visible, safe, and road-legal.",
                ],
            },

            risks: {
                title: "How Ignoring Corner or Parking Light Issues Can Lead to Bigger Problems",
                points: [
                    "**Increased accident risk** – from reduced side or vehicle visibility.",
                    "**Traffic citations** – due to non-compliant lighting.",
                    "**Electrical strain** – flickering bulbs stressing wiring and sockets.",
                ],
                conclusion:
                    "Addressing **corner light** and **parking light** issues early restores visibility, improves safety, and keeps your vehicle compliant. Timely **parking light replacement** ensures reliable illumination in every driving and parking situation.",
            },
        },
    },
    {
        category: "Electrical", name: "Cruise Speed Regulator", image: "/parts/Cruise Speed Regulator.png", desc: {
            intro: {
                title: "What Is a Cruise Speed Regulator and Why It’s Important for Your Vehicle",
                text: [
                    "A **Cruise Speed Regulator**, commonly known as a **cruise control system**, maintains a constant vehicle speed without continuous accelerator input.",
                    "Modern systems include **automatic cruise control** and adaptive variants that adjust speed based on surrounding traffic conditions.",
                    "By reducing the need for constant throttle control, cruise systems help minimize driver fatigue on long journeys.",
                    "They also promote steady fuel usage and provide a smoother, more relaxed highway driving experience.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Cruise Control Repair",
                points: [
                    "**Cruise control not engaging or switching off unexpectedly** – system unable to maintain set speed.",
                    "**Fluctuating speed during cruise operation** – inconsistent throttle or sensor input.",
                    "**Cruise warning light illuminated on the dashboard** – system or sensor fault detected.",
                    "**Delayed throttle response** – noticeable lag when cruise control is active.",
                    "These symptoms often indicate the need for timely **cruise control repair** to prevent further system issues.",
                ],
            },

            impact: {
                title: "How a Faulty Cruise Speed Regulator Affects Driving Comfort and Efficiency",
                text: [
                    "A malfunctioning **cruise speed regulator** reduces driving comfort by forcing constant manual speed control.",
                    "**Inconsistent speed regulation** – negatively affecting fuel efficiency.",
                    "**Increased driver fatigue** – especially on long highway drives.",
                    "**Disabled adaptive safety features** – in vehicles with automatic or adaptive cruise systems.",
                    "When cruise control fails, long-distance driving becomes less efficient and more tiring.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Cruise Speed Regulator Components",
                points: [
                    "**Vehicle compatibility** – ensure support for standard or adaptive cruise systems.",
                    "**OEM vs. aftermarket components** – control modules, sensors, and switches.",
                    "**Integration with engine and braking systems** – critical for adaptive cruise control.",
                    "**Software calibration requirements** – especially for radar- or camera-based systems.",
                    "Proper component selection ensures reliable **automatic cruise control** performance and smooth system operation.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing a Cruise Speed Regulator Improves Comfort and Efficiency",
                points: [
                    "**Effortless cruising** – consistent speed without constant accelerator input.",
                    "**Reduced driver fatigue** – especially during long highway trips.",
                    "**Improved fuel efficiency** – steady speed reduces unnecessary acceleration.",
                    "**Restored adaptive functionality** – safe distance management in traffic.",
                    "A properly functioning **cruise speed regulator** turns highway driving into a calm, controlled experience.",
                ],
            },

            risks: {
                title: "How Ignoring Cruise Speed Regulator Issues Can Lead to Bigger Problems",
                points: [
                    "**Loss of cruise functionality** – forcing constant manual speed control.",
                    "**Increased fuel consumption** – due to inconsistent throttle input.",
                    "**Disabled adaptive safety systems** – reducing driving assistance features.",
                ],
                conclusion:
                    "Addressing **cruise control repair** needs early restores smooth speed regulation, improves driving comfort, and ensures all cruise-related features operate as intended. A healthy **cruise speed regulator** enhances efficiency, safety, and long-distance driving confidence.",
            },
        },
    },
    {
        category: "Electrical", name: "Dash/Interior/Seat Switch", image: "/parts/Dash/Interior/Seat Switch.png", desc: {
            intro: {
                title: "What Is a Seat Switch and Why It’s Important for Your Vehicle",
                text: [
                    "A **seat switch** controls power seat movement and essential cabin functions through integrated dash and interior controls.",
                    "Commonly found in vehicles with power seating and advanced electronics, it allows drivers and passengers to adjust seating position and manage comfort-related features.",
                    "In many designs, the switch also interacts with dash and interior systems such as lighting and memory settings.",
                    "By enabling precise seat adjustment and responsive interior control, the seat switch plays a key role in driving comfort, posture, visibility, and safe vehicle operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Power Seat Switch Replacement",
                points: [
                    "**Power seat not moving or responding intermittently** – inconsistent electrical contact.",
                    "**Seat movement stopping mid-adjustment** – internal switch wear or signal interruption.",
                    "**Interior lights not switching correctly** – shared dash or interior control failure.",
                    "**Loose, sticky, or unresponsive switch feel** – worn or damaged internal components.",
                    "These symptoms often indicate the need for **power seat switch replacement** to restore proper function.",
                ],
            },

            impact: {
                title: "How a Faulty Seat Switch Affects Driving Comfort and Safety",
                text: [
                    "A malfunctioning **seat switch** can prevent proper seating position, affecting posture, pedal reach, and driving visibility.",
                    "**Increased driver fatigue** – caused by poor seating alignment on long drives.",
                    "**Reduced control confidence** – improper seat height or distance from pedals and steering wheel.",
                    "**Electrical strain on motors and wiring** – caused by inconsistent power delivery.",
                    "Ignoring these issues can lead to broader interior electrical problems over time.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Seat Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and seat configuration.",
                    "**Adjustment functions supported** – forward, backward, height, recline, lumbar, or memory.",
                    "**Integration with dash and interior systems** – lighting and control modules.",
                    "**OEM or high-quality aftermarket options** – for reliability and proper fit.",
                    "Selecting the correct switch ensures seamless **power seat switch replacement** and dependable operation.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing a Seat Switch Improves Comfort and Reliability",
                points: [
                    "**Smooth and precise seat adjustment** – effortless control of seating position.",
                    "**Improved driving posture** – better comfort and reduced fatigue.",
                    "**Reliable interior controls** – consistent lighting and dash function.",
                    "**Reduced strain on seat motors and wiring** – extending component lifespan.",
                    "A properly functioning **seat switch** turns everyday adjustments into smooth, dependable actions.",
                ],
            },

            risks: {
                title: "How Ignoring Seat Switch Issues Can Lead to Bigger Problems",
                points: [
                    "**Permanent seat positioning issues** – affecting comfort and safety.",
                    "**Seat motor damage** – from repeated failed adjustment attempts.",
                    "**Interior electrical faults** – due to unstable switch signals.",
                ],
                conclusion:
                    "Addressing **power seat switch replacement** early restores comfort, protects interior electronics, and ensures safe, reliable seat adjustment. A healthy **seat switch** supports correct driving posture and long-term interior system reliability.",
            },
        },
    },
    {
        category: "Electrical", name: "Electric Door Motor", image: "/parts/Electric Door Motor.png", desc: {
            intro: {
                title: "What Is a Power Door Lock Actuator and Why It’s Important for Your Vehicle",
                text: [
                    "A **power door lock actuator** is the electric motor that controls automatic locking and unlocking of vehicle doors.",
                    "In modern vehicles, this **electric door lock motor** works with central locking systems, keyless entry, alarms, and safety features.",
                    "By converting electrical signals into mechanical movement, the **car door actuator lock** ensures doors respond instantly and securely.",
                    "This system is essential for everyday convenience, vehicle security, and passenger safety.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Power Door Lock Actuator",
                points: [
                    "**Doors fail to lock or unlock using the remote or switch** – actuator motor not responding.",
                    "**Delayed or weak locking response** – internal motor wear or electrical resistance.",
                    "**Clicking or buzzing sounds inside the door** – failing electric door lock motor.",
                    "**Manual locking works but automatic locking does not** – actuator malfunction.",
                    "These symptoms commonly indicate the need for **power door lock actuator replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Power Door Lock Actuator Affects Security and Convenience",
                text: [
                    "A failing **car door actuator lock** compromises both security and daily usability.",
                    "**Reduced vehicle security** – doors may remain unlocked unintentionally.",
                    "**Unreliable keyless entry** – remote and central locking functions fail intermittently.",
                    "**Increased manual effort** – passengers must lock or unlock doors manually.",
                    "Repeated failed locking attempts can also strain wiring and door control modules.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Power Door Lock Actuator for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year precisely.",
                    "**Door position** – front or rear door placement.",
                    "**Side configuration** – left or right side fitment.",
                    "**OEM or high-quality aftermarket build** – ensures quiet, long-lasting operation.",
                    "A properly matched **electric door lock motor** restores smooth and reliable locking.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Power Door Lock Actuator Is Important",
                points: [
                    "**Instant and reliable locking response** – doors secure every time.",
                    "**Restored keyless entry convenience** – seamless remote operation.",
                    "**Improved vehicle security** – reduced risk of unauthorized access.",
                    "**Lower electrical strain** – protects wiring and control modules.",
                    "Replacing a faulty **power door lock actuator** turns a basic safety function into a dependable daily experience.",
                ],
            },

            risks: {
                title: "How Ignoring Power Door Lock Actuator Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete door lock failure** – doors stuck locked or unlocked.",
                    "**Damaged linkages inside the door** – increasing repair complexity.",
                    "**Electrical overload** – affecting central locking or alarm systems.",
                ],
                conclusion:
                    "Addressing **power door lock actuator replacement** early prevents cascading electrical failures and protects vehicle security. A healthy **car door actuator lock** ensures dependable locking, convenience, and long-term reliability.",
            },
        },
    },
    {
        category: "Electrical", name: "Engine ECM", image: "/parts/Engine ECM.png", desc: {
            intro: {
                title: "What Is an Engine ECM and Why It’s Important",
                text: [
                    "The **Engine ECM (Engine Control Module)** is the central computer that manages engine operation.",
                    "It controls **fuel injection, ignition timing, and emissions** by processing real-time data from multiple engine sensors.",
                    "A properly functioning **ECM in car systems** ensures smooth drivability, optimal fuel efficiency, and emission compliance.",
                    "Without a healthy engine control module, modern engines cannot operate reliably or efficiently.",
                ],
            },

            working: {
                title: "How an Engine ECM Works",
                text: [
                    "The **Engine ECM** continuously receives input from sensors monitoring airflow, throttle position, engine temperature, oxygen levels, and crankshaft speed.",
                    "Using this data, it calculates precise fuel delivery and ignition timing for every driving condition.",
                    "**ECM programming** allows the module to adapt to engine load, driving behavior, and emission requirements.",
                    "It also communicates with other vehicle systems to ensure coordinated and efficient operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need ECM Repair or Replacement",
                points: [
                    "**Check engine light staying on or flashing** – fault codes related to engine management.",
                    "**Poor acceleration or sudden power loss** – incorrect fuel or ignition control.",
                    "**Engine stalling or rough idling** – unstable ECM signal processing.",
                    "**Reduced fuel efficiency** – inefficient fuel delivery calculations.",
                    "**Vehicle failing emission tests** – emission control malfunction.",
                    "These symptoms often indicate the need for **ECM repair or replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Engine ECM Affects Driving",
                text: [
                    "A malfunctioning **engine control module** disrupts fuel delivery and ignition timing.",
                    "This can result in **uneven performance, higher fuel consumption, and increased emissions**.",
                    "In severe cases, ECM failure may trigger **limp mode** or prevent the vehicle from starting.",
                    "Such faults directly affect vehicle reliability and daily usability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Engine ECM for Your Vehicle",
                points: [
                    "**Vehicle specifications** – match make, model, year, and engine type.",
                    "**OEM or compatible replacement module** – ensures system compatibility.",
                    "**ECM programming or relearning requirement** – critical for modern vehicles.",
                    "**Sensor and wiring compatibility** – avoids communication errors.",
                    "Choosing the correct **engine ECM** ensures proper integration and long-term performance.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing an Engine ECM Improves Performance and Reliability",
                points: [
                    "**Precise fuel injection control** – improved efficiency and responsiveness.",
                    "**Accurate ignition timing** – smoother engine operation.",
                    "**Restored emission compliance** – cleaner exhaust output.",
                    "**Stable communication with vehicle systems** – reliable drivability.",
                    "Proper **ECM programming** ensures the engine operates exactly as designed.",
                ],
            },

            conclusion: {
                title: "Why a Healthy Engine ECM Is Critical",
                text: [
                    "A properly functioning **Engine ECM** keeps your engine responsive, efficient, and reliable.",
                    "Timely **ECM repair or replacement** prevents drivability issues, emission failures, and unexpected breakdowns.",
                    "Maintaining a healthy engine control module turns complex engine management into seamless, dependable performance every time you drive.",
                ],
            },
        },
    },
    {
        category: "Electrical", name: "Engine Wire Harness", image: "/parts/Engine Wire Harness.png", desc: {
            intro: {
                title: "What Is an Engine Wire Harness and Why It’s Important",
                text: [
                    "The **engine wire harness** is the central electrical network that connects engine sensors, actuators, and control components to the ECU.",
                    "It ensures consistent electrical flow and accurate signal transmission between critical engine systems.",
                    "A properly functioning **engine wiring harness** maintains engine performance, fuel efficiency, and system reliability.",
                    "In modern vehicles, a dependable **car wiring harness** is essential for smooth engine operation and precise system communication.",
                ],
            },

            working: {
                title: "How an Engine Wire Harness Works",
                text: [
                    "The **engine wire harness** routes bundled, insulated wires through the engine bay to connect sensors and control modules.",
                    "It links oxygen, temperature, crankshaft, and camshaft sensors directly to the ECU.",
                    "The harness also delivers power and control signals to fuel injectors, ignition coils, and actuators.",
                    "Protective sheathing and sealed connectors guard the wiring from heat, vibration, moisture, and abrasion.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Engine Wire Harness Replacement",
                points: [
                    "**Check engine light with no clear cause** – inconsistent or interrupted sensor signals.",
                    "**Engine misfires or rough running** – unstable electrical communication.",
                    "**Intermittent electrical failures** – components working unpredictably.",
                    "**Visible frayed, brittle, or melted wires** – heat or age-related damage.",
                    "**Burning smell from engine bay** – insulation breakdown or short circuits.",
                    "These symptoms often indicate wiring degradation and signal the need to check **engine wire harness replacement cost** early.",
                ],
            },

            impact: {
                title: "How a Faulty Engine Wire Harness Affects Driving",
                text: [
                    "A damaged **engine wire harness** disrupts sensor signals and power delivery.",
                    "This leads to incorrect fuel injection, improper ignition timing, and unstable engine operation.",
                    "Drivers may experience rough idling, reduced fuel efficiency, or sudden loss of power.",
                    "Severe wiring faults can trigger limp mode, engine stalling, or complete shutdown.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Engine Wire Harness for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine configuration.",
                    "**Connector and sensor compatibility** – ensures accurate signal transmission.",
                    "**Heat and abrasion resistance** – critical for engine bay durability.",
                    "**OEM or high-quality aftermarket car wiring harness** – ensures long-term reliability.",
                    "Choosing the correct **engine wiring harness** prevents electrical faults and repeat failures.",
                ],
            },

            benefits: {
                title: "Why Replacing an Engine Wire Harness Improves Performance and Reliability",
                points: [
                    "**Stable electrical flow** – consistent power and signal delivery.",
                    "**Accurate sensor communication** – improved fuel and ignition control.",
                    "**Reduced misfires and drivability issues** – smoother engine operation.",
                    "**ECU protection** – prevents damage from shorts or voltage spikes.",
                    "A new **engine wire harness** restores dependable engine performance and system stability.",
                ],
            },

            conclusion: {
                title: "Why Timely Engine Wire Harness Service Matters",
                text: [
                    "The **engine wire harness** is critical to every aspect of engine management.",
                    "Ignoring wiring issues can lead to unpredictable performance, breakdowns, and costly ECU damage.",
                    "Timely repair or replacement ensures clean electrical communication, reliable driving, and long-term engine protection.",
                ],
            },
        },
    },
    {
        category: "Electrical", name: "Fog Lamp Rear", image: "/parts/Fog Lamp Rear.png", desc: {
            intro: {
                title: "What Is a Fog Lamp Rear and Why It’s Important",
                text: [
                    "A **fog lamp rear** is a safety-focused lighting component designed to improve vehicle visibility from behind in poor weather conditions.",
                    "Unlike standard tail lights, **rear fog lights** emit a brighter, more focused red beam that penetrates fog, rain, and snow more effectively.",
                    "By increasing rear visibility, **car rear fog lights** help following drivers identify your vehicle sooner.",
                    "This significantly reduces the risk of rear-end collisions in low-visibility driving environments.",
                ],
            },

            working: {
                title: "How a Fog Lamp Rear Works",
                text: [
                    "The **fog lamp rear** is activated using a dashboard or stalk-mounted switch.",
                    "It operates independently or alongside the main lighting system depending on vehicle design.",
                    "The lamp produces an intense red light optimized for visibility through fog and mist.",
                    "Rear fog lamps are available in **LED, halogen, or Xenon** configurations and are mounted low or centrally to maximize effectiveness without glare.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Rear Fog Light Replacement",
                points: [
                    "**Rear fog lamp not illuminating** – no light when switched on.",
                    "**Dim or flickering output** – possible bulb or wiring issue.",
                    "**Dashboard warning indicator** – signaling a lighting fault.",
                    "**Cracked lens or moisture inside housing** – seal failure or impact damage.",
                    "These issues often indicate the need to inspect or replace **rear fog lights** to maintain safety compliance.",
                ],
            },

            impact: {
                title: "How a Faulty Fog Lamp Rear Affects Driving Safety",
                text: [
                    "A malfunctioning **fog lamp rear** reduces how visible your vehicle is to traffic behind you.",
                    "This increases the risk of rear-end collisions during fog, heavy rain, or snow.",
                    "Reduced visibility is especially dangerous on highways and during sudden braking situations.",
                    "In regions where **car rear fog lights** are mandatory, faulty lamps may also lead to legal penalties.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fog Lamp Rear for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Lighting type** – LED, halogen, or Xenon based on preference and regulations.",
                    "**Mounting position** – left, right, or centrally mounted design.",
                    "**OEM or approved aftermarket assemblies** – ensure brightness and compliance.",
                    "Selecting the correct **fog lamp rear** ensures proper fitment, visibility, and road legality.",
                ],
            },

            benefits: {
                title: "Why Repairing or Replacing a Fog Lamp Rear Improves Safety",
                points: [
                    "**Improved rear visibility** – especially in fog and low-light conditions.",
                    "**Reduced rear-end collision risk** – better reaction time for following drivers.",
                    "**Restored legal compliance** – meets safety regulations where required.",
                    "**Consistent lighting performance** – reliable operation in adverse weather.",
                    "A properly functioning **rear fog lamp** enhances overall driving safety in hazardous conditions.",
                ],
            },

            conclusion: {
                title: "Why Rear Fog Lamp Maintenance Matters",
                text: [
                    "The **fog lamp rear** is a critical safety feature for low-visibility driving.",
                    "Ignoring faults can significantly increase accident risk and legal exposure.",
                    "Timely repair or replacement keeps your vehicle visible, compliant, and safer in poor weather conditions.",
                ],
            },
        },
    },
    {
        category: "Electrical", name: "Front Door Switch", image: "/parts/Front Door Switch.png", desc: {
            intro: {
                title: "What Is a Car Door Switch and Why It’s Important for Your Vehicle",
                text: [
                    "A **car door switch** is the control interface mounted on the front door that manages key electronic functions such as power windows, door locks, mirror adjustment, interior lights, and keyless entry.",
                    "Often designed as a **master control on the driver’s side**, the auto door switch acts as the command center for door-related electronics.",
                    "By integrating comfort, safety, and convenience into one unit, the door switch ensures smooth interaction between the driver and the vehicle’s electronic systems.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Car Door Switch",
                points: [
                    "**Windows or locks not responding** – button presses have no effect.",
                    "**Intermittent operation** – mirrors or interior lights work inconsistently.",
                    "**Partial failure** – some buttons work while others do not.",
                    "**Delayed or unresponsive controls** – slow or no reaction to input.",
                    "These symptoms often indicate internal wear and the need for **car door switch repair or replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Car Door Switch Affects Comfort and Control",
                text: [
                    "A malfunctioning **auto door switch** disrupts everyday driving convenience.",
                    "Windows may become stuck open or closed, affecting comfort and security.",
                    "Door locking can become unreliable, increasing safety concerns.",
                    "Repeated button presses divert driver attention and may strain wiring and control modules over time.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Car Door Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Switch position** – driver-side master switch or passenger-side unit.",
                    "**Feature support** – auto-up windows, mirror control, keyless entry.",
                    "**Build quality** – OEM or high-quality aftermarket construction.",
                    "Selecting the correct **auto door switch** restores seamless electronic control and long-term reliability.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Car Door Switch Is Important",
                points: [
                    "**Instant electronic response** – windows, locks, and mirrors work as intended.",
                    "**Improved safety** – reliable door locking and distraction-free operation.",
                    "**Restored convenience** – smooth control of all front door functions.",
                    "**System protection** – reduced strain on motors, actuators, and wiring.",
                    "A properly functioning **car door switch** keeps all door electronics working together smoothly.",
                ],
            },

            risks: {
                title: "How Ignoring Car Door Switch Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window motor strain** – caused by repeated failed switch commands.",
                    "**Lock actuator failure** – from inconsistent electrical signals.",
                    "**Wiring damage inside the door** – due to electrical overload or shorting.",
                ],
                conclusion:
                    "Addressing **car door switch** issues early prevents costly electrical repairs and preserves the reliability of your vehicle’s door control systems.",
            },
        },

    },
    {
        category: "Electrical", name: "Fuse Box Cabin", image: "/parts/Fuse Box Cabin.png", desc: {
            intro: {
                title: "What Is a Cabin Fuse Box and Why It’s Important for Your Vehicle",
                text: [
                    "The **cabin fuse box** is the central electrical control unit that distributes and protects power to interior vehicle systems such as lights, infotainment, power windows, seat controls, climate functions, and dashboard electronics.",
                    "This **vehicle fuse box** houses multiple fuses and relays designed to prevent electrical overloads and short circuits.",
                    "By managing electrical flow and isolating faults, the **car fuse box** ensures safe operation of cabin electronics while protecting sensitive components from damage.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Cabin Fuse Box",
                points: [
                    "**Interior lights not working or flickering** – unstable power supply.",
                    "**Power windows, locks, or seats failing intermittently** – inconsistent circuit output.",
                    "**Fuses blowing repeatedly** – internal fuse box damage or shorting.",
                    "**Burning smell or heat near the fuse box area** – serious electrical risk.",
                    "**Multiple interior systems losing power at once** – failing fuse box switch.",
                    "These symptoms often indicate internal damage and the need for **car fuse box replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Cabin Fuse Box Affects Electrical Safety and Reliability",
                text: [
                    "A failing **car fuse box** disrupts proper power distribution and circuit protection.",
                    "Interior electronics may shut down unexpectedly due to unstable electrical flow.",
                    "Voltage fluctuations can damage switches, relays, and electronic control modules.",
                    "The risk of short circuits or electrical fires increases significantly.",
                    "Connected wiring harnesses may deteriorate over time from excessive heat or overload.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Cabin Fuse Box for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**Correct fuse layout** – proper circuit positions and amperage ratings.",
                    "**Fuse type support** – Mini, Micro2, and ATO blade-style fuses.",
                    "**Build quality** – OEM or high-quality aftermarket construction.",
                    "Selecting the correct **fuse box switch** ensures reliable circuit protection and long-term durability.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Cabin Fuse Box Is Important",
                points: [
                    "**Stable power distribution** – interior electronics function consistently.",
                    "**Improved electrical safety** – reduced risk of shorts and overloads.",
                    "**Protected cabin systems** – infotainment, climate, and seat controls stay safe.",
                    "**Long-term reliability** – prevents repeated fuse failures and wiring damage.",
                    "A properly functioning **vehicle fuse box** preserves both comfort and electrical reliability.",
                ],
            },

            risks: {
                title: "How Ignoring Cabin Fuse Box Issues Can Lead to Bigger Repairs",
                points: [
                    "**Widespread electrical breakdowns** – multiple systems failing together.",
                    "**Damaged wiring harnesses** – from heat buildup or repeated overloads.",
                    "**Loss of protection for sensitive electronics** – increasing repair costs.",
                    "**Potential damage to control modules, infotainment, or climate systems**.",
                ],
                conclusion:
                    "Early **car fuse box replacement** prevents cascading electrical failures and ensures safe, reliable operation of your vehicle’s interior systems.",
            },
        },
    },
    {
        category: "Electrical", name: "Fuse Box Engine", image: "/parts/Fuse Box Engine.png", desc: {
            intro: {
                title: "What Is a Fuse Box Engine and Why It’s Important for Your Vehicle",
                text: [
                    "The **Fuse Box Engine** is the primary electrical distribution hub located in the engine compartment, responsible for protecting critical systems such as the ECU, ABS, cooling fans, and other engine accessories.",
                    "This **engine compartment fuse box** houses fuses, relays, and diodes that prevent electrical overloads, short circuits, and component damage.",
                    "By regulating power flow and isolating electrical faults, the **automotive fuse box** ensures reliable engine operation and consistent performance of connected systems.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Fuse Box Engine",
                points: [
                    "**Cooling fans, ECU, or ABS not functioning properly** – unstable power delivery.",
                    "**Blown fuses recurring repeatedly** – internal fuse box damage.",
                    "**Relays clicking erratically or failing to engage** – poor electrical contacts.",
                    "**Burning smell or visible heat around the fuse box** – serious electrical risk.",
                    "**Engine accessories losing power intermittently** – failing circuit protection.",
                    "These symptoms often indicate corrosion, internal wear, or damage requiring **Fuse Box Engine replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Fuse Box Engine Affects Vehicle Performance",
                text: [
                    "A malfunctioning **engine compartment fuse box** disrupts proper power distribution to vital engine and safety systems.",
                    "Inconsistent power delivery can affect ECU processing, ABS functionality, and cooling fan operation.",
                    "Electrical instability increases the risk of short circuits or overheating.",
                    "Relays and wiring harnesses may suffer long-term damage from repeated overloads.",
                    "What begins as a fuse issue can escalate into serious engine electrical failures.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Fuse Box Engine for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and engine configuration.",
                    "**Correct fuse and relay layout** – designed for ECU, ABS, and engine accessories.",
                    "**Build quality** – OEM or high-quality aftermarket automotive fuse box.",
                    "**Proper engine bay fitment** – secure mounting and sealed connections.",
                    "Selecting the correct **Fuse Box Engine** ensures complete protection of engine electrical circuits.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Fuse Box Engine Is Important",
                points: [
                    "**Stable electrical protection** – consistent power to engine systems.",
                    "**Improved safety** – reduced risk of shorts and electrical fires.",
                    "**Reliable accessory operation** – cooling fans, sensors, and relays function correctly.",
                    "**Extended component lifespan** – protects ECU, ABS, and wiring harnesses.",
                    "A healthy **engine compartment fuse box** preserves engine reliability and electrical integrity.",
                ],
            },

            risks: {
                title: "How Ignoring Fuse Box Engine Issues Can Lead to Bigger Repairs",
                points: [
                    "**Repeated electrical faults** – unresolved fuse and relay failures.",
                    "**Burnt wiring or melted connectors** – from heat and overload.",
                    "**Damage to ECU, ABS, or other critical modules**.",
                    "**Increased repair costs** – cascading electrical system failures.",
                ],
                conclusion:
                    "Early **Fuse Box Engine replacement** prevents widespread electrical damage and ensures your vehicle’s engine and safety systems operate safely and reliably.",
            },
        },
    },
    {
        category: "Electrical", name: "Headlight", image: "/parts/Headlight.png", desc: {
            intro: {
                title: "What Is a Headlight and Why It’s Important for Your Vehicle",
                text: [
                    "A **Headlight** is the primary lighting component mounted at the front of your vehicle, designed to illuminate the road ahead and improve visibility during night driving or low-light conditions.",
                    "Modern vehicles use different technologies such as LED, halogen, or **xenon headlights**, each offering varying brightness, efficiency, and lifespan.",
                    "Properly functioning headlights ensure safe navigation, help other drivers see your vehicle clearly, and keep your car compliant with road safety regulations.",
                    "Timely **headlight bulb replacement** maintains optimal brightness and prevents visibility-related hazards.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Headlight",
                points: [
                    "**Dim or flickering headlights** – reduced light output during operation.",
                    "**One headlight not illuminating** – common bulb or ballast failure.",
                    "**Poor beam alignment or uneven lighting** – affecting road coverage.",
                    "**Moisture or condensation inside the housing** – seal or housing damage.",
                    "**Yellowed or cloudy lens** – reduced brightness and clarity.",
                    "These issues often signal the need for **headlight bulb replacement**, repair, or **xenon headlight replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Headlight Affects Driving Safety",
                text: [
                    "A malfunctioning **Headlight** significantly reduces nighttime and low-visibility driving safety.",
                    "Insufficient illumination limits reaction time and obstacle detection.",
                    "Other drivers may struggle to see your vehicle, increasing collision risk.",
                    "Electrical strain from faulty lighting can affect related circuits.",
                    "Neglecting headlight issues compromises both safety and legal compliance.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Headlight for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and trim level.",
                    "**Headlight type** – LED, halogen, or **xenon headlights**.",
                    "**Beam pattern and brightness** – for proper road coverage.",
                    "**OEM or high-quality aftermarket units** – for durability and fit.",
                    "**Installation and alignment requirements** – to avoid glare or misalignment.",
                    "Choosing the correct **Headlight** ensures safe, reliable night driving.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Headlight Is Important",
                points: [
                    "**Restored road visibility** – clearer view in dark conditions.",
                    "**Improved safety** – faster reaction time and obstacle detection.",
                    "**Compliance with traffic laws** – avoids fines and inspection failures.",
                    "**Balanced lighting performance** – consistent beam output on both sides.",
                    "A new **Headlight** improves confidence and safety during every drive.",
                ],
            },

            risks: {
                title: "How Ignoring Headlight Issues Can Lead to Bigger Repairs",
                points: [
                    "**Electrical damage** – strain on wiring, ballasts, or control modules.",
                    "**Complete headlight assembly failure** – higher replacement cost.",
                    "**Legal and safety risks** – from inadequate or misaligned lighting.",
                ],
                conclusion:
                    "Addressing **headlight bulb replacement** or full **Headlight** issues early prevents cascading electrical problems and ensures your vehicle remains safe, visible, and road-ready.",
            },
        },
    },
    {
        category: "Electrical", name: "Headlight Motor", image: "/parts/Headlight Motor.png", desc: {
            intro: {
                title: "What Is a Headlight Motor and Why It’s Important for Your Vehicle",
                text: [
                    "A **Headlight Motor**, also known as a headlight leveling motor, adjusts the vertical angle of your headlights to ensure proper road illumination.",
                    "It works with reflector, projector, and adaptive headlight systems to maintain correct beam height based on vehicle load and driving conditions.",
                    "By preventing excessive glare and maximizing forward visibility, the **car headlight motor** plays a vital role in nighttime driving safety.",
                    "Proper headlight motor operation supports adaptive and automatic leveling features for consistent lighting performance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Headlight Motor",
                points: [
                    "**Headlights stuck in one position** – unable to adjust up or down.",
                    "**Uneven or misaligned beams** – poor road illumination or glare.",
                    "**Dashboard warning lights** – related to adaptive or leveling systems.",
                    "**Headlights sagging or tilting** – especially when the vehicle is loaded.",
                    "These symptoms often indicate the need for **motor headlamp repair** or full **headlight motor replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Headlight Motor Affects Driving Safety",
                text: [
                    "A malfunctioning **Headlight Motor** compromises proper beam alignment and road visibility.",
                    "Reduced illumination limits reaction time in low-light or adverse weather conditions.",
                    "Incorrect beam height can cause glare for oncoming drivers.",
                    "Adaptive and automatic leveling systems may stop functioning correctly.",
                    "Continued operation with a faulty motor can strain wiring and headlight components.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Headlight Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Headlight type** – reflector, projector, or adaptive systems.",
                    "**Left or right-side placement** – specific to headlight assembly.",
                    "**OEM or high-quality aftermarket options** – for accuracy and durability.",
                    "**Compatibility with dashboard leveling controls** – for proper adjustment.",
                    "Selecting the correct **car headlight motor** ensures precise beam control and reliable performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Headlight Motor Is Important",
                points: [
                    "**Restored beam alignment** – proper road coverage at night.",
                    "**Reduced glare** – improved safety for oncoming traffic.",
                    "**Functional adaptive lighting** – full system responsiveness.",
                    "**Improved night driving confidence** – consistent illumination.",
                    "A properly working **Headlight Motor** keeps all lighting systems operating in harmony.",
                ],
            },

            risks: {
                title: "How Ignoring Headlight Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Uneven illumination** – increasing accident risk.",
                    "**Damage to headlight assemblies** – from improper positioning.",
                    "**Electrical strain** – affecting leveling controls and wiring.",
                ],
                conclusion:
                    "Addressing **headlight motor replacement** early prevents cascading lighting and electrical issues. A healthy **Headlight Motor** ensures safe, glare-free illumination and keeps your vehicle road-ready at all times.",
            },
        },
    },
    {
        category: "Electrical", name: "High Mounted Stop Light", image: "/parts/High Mounted Stop Light.png", desc: {
            intro: {
                title: "What Is a Third Brake Light and Why It’s Important for Your Vehicle",
                text: [
                    "A **third brake light**, also known as a **high mount brake light**, is an additional brake lamp positioned higher than the standard rear tail lights.",
                    "Often designed as an **LED third brake light**, it illuminates faster than traditional bulbs to alert drivers behind you more quickly during braking.",
                    "By improving brake signal visibility, the high mount brake light significantly reduces rear-end collision risk.",
                    "This component is also a legal safety requirement in most modern vehicles.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Third Brake Light",
                points: [
                    "**Brake light not illuminating** – no response when the brake pedal is pressed.",
                    "**Flickering or dim light output** – common in failing LED third brake lights.",
                    "**Dashboard warning indicator** – signaling a brake light or circuit fault.",
                    "**Uneven illumination** – compared to left and right tail brake lights.",
                    "These symptoms often indicate the need for **high mount brake light replacement** or repair.",
                ],
            },

            impact: {
                title: "How a Faulty Third Brake Light Affects Driving Safety",
                text: [
                    "A malfunctioning **third brake light** reduces how quickly drivers behind can recognize braking.",
                    "Delayed visibility increases the risk of rear-end collisions, especially in traffic.",
                    "Non-functioning high mount brake lights may compromise legal compliance.",
                    "Electrical faults can also place strain on brake light circuits and wiring.",
                    "Even if standard brake lights work, a failed high mount brake light reduces overall braking visibility.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Third Brake Light for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**LED vs. standard bulb** – LEDs offer faster response and longer lifespan.",
                    "**Mounting style and dimensions** – ensure proper fitment.",
                    "**OEM or high-quality aftermarket units** – for durability and compliance.",
                    "**Electrical compatibility** – proper integration with brake light circuits.",
                    "Choosing the right **high mount brake light** ensures reliable signaling and long-term performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Third Brake Light Is Important",
                points: [
                    "**Improved braking visibility** – faster reaction time for following drivers.",
                    "**Reduced rear-end collision risk** – especially in stop-and-go traffic.",
                    "**Legal compliance** – meets road safety lighting regulations.",
                    "**Consistent illumination** – aligned with other rear brake lights.",
                    "A properly working **third brake light** strengthens your vehicle’s overall safety system.",
                ],
            },

            risks: {
                title: "How Ignoring Third Brake Light Issues Can Lead to Bigger Repairs",
                points: [
                    "**Increased collision risk** – delayed braking awareness.",
                    "**Electrical strain** – affecting brake light wiring and circuits.",
                    "**Dashboard warning escalation** – from unresolved lighting faults.",
                ],
                conclusion:
                    "Addressing **high mount brake light replacement** early prevents electrical complications and restores full rear visibility. A functional **LED third brake light** keeps your vehicle safe, compliant, and clearly visible during every braking event.",
            },
        },
    },
    {
        category: "Electrical", name: "Ignitons Switch", image: "/parts/Ignitons Switch.png", desc: {
            intro: {
                title: "What Is an Ignition Switch and Why It’s Important for Your Vehicle",
                text: [
                    "The **ignition switch** is the control component that starts your engine and supplies power to essential electrical systems.",
                    "A reliable **car ignition switch** activates circuits for the starter motor, dashboard, lighting, infotainment, and climate control.",
                    "By managing electrical flow during startup and operation, the ignition switch ensures safe and consistent vehicle functionality.",
                    "Without a properly working ignition switch, engine startup and accessory operation become unreliable.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Ignition Switch",
                points: [
                    "**Engine fails to start or starts intermittently** – inconsistent electrical engagement.",
                    "**Dashboard lights flicker or stay off** – unstable power delivery.",
                    "**Accessories not working** – radio, lights, or AC fail when the key is turned.",
                    "**Key stuck or hard to turn** – internal wear in the ignition mechanism.",
                    "These symptoms often indicate the need for **ignition switch replacement** or repair.",
                ],
            },

            impact: {
                title: "How a Faulty Ignition Switch Affects Driving and Vehicle Operation",
                text: [
                    "A malfunctioning **ignition switch** can interrupt normal vehicle operation and compromise safety.",
                    "Unexpected stalling or failure to start may occur.",
                    "Electrical accessories can lose power intermittently.",
                    "Repeated start attempts may strain the starter motor and drain the battery.",
                    "Over time, ignition wiring and connected circuits may suffer damage.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Ignition Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Key system type** – traditional key, push-start, or smart key.",
                    "**Security integration** – compatibility with immobilizer systems.",
                    "**Wiring harness fitment** – correct connectors and pin layout.",
                    "**OEM or high-quality aftermarket build** – ensures durability and reliability.",
                    "Choosing the correct **car ignition switch** ensures smooth startup and safe power distribution.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Ignition Switch Is Important",
                points: [
                    "**Reliable engine startup** – consistent ignition engagement.",
                    "**Stable accessory power** – lights, infotainment, and climate systems work properly.",
                    "**Reduced electrical strain** – protects starter, battery, and wiring.",
                    "**Improved safety and convenience** – prevents unexpected failures.",
                    "A properly functioning **ignition switch** restores dependable daily operation.",
                ],
            },

            risks: {
                title: "How Ignoring Ignition Switch Issues Can Lead to Bigger Repairs",
                points: [
                    "**Starter motor damage** – from repeated failed starts.",
                    "**Battery drain** – caused by unstable electrical circuits.",
                    "**Wiring and electrical shorts** – escalating repair complexity.",
                    "**Immobilizer or security system faults** – affecting vehicle access.",
                ],
                conclusion:
                    "Addressing **ignition switch replacement** early prevents electrical damage and startup failures. A healthy **car ignition switch** ensures reliable engine starting, stable accessory power, and long-term vehicle dependability.",
            },
        },
    },
    {
        category: "Electrical", name: "Info GPS TV Screen", image: "/parts/Info-GPS-TV Screen.png", desc: {
            intro: {
                title: "What Is a Car Infotainment System and Why It’s Important for Your Vehicle",
                text: [
                    "A **car infotainment system** is the central multimedia and navigation interface of a vehicle, combining entertainment, communication, and navigation features.",
                    "The **GPS screen for car** provides real-time navigation guidance, helping drivers reach destinations safely and accurately.",
                    "Modern infotainment systems support Bluetooth, audio streaming, voice control, Android Auto, and Apple CarPlay.",
                    "By integrating multiple functions into a single **navigation screen for car**, the system improves convenience, reduces distraction, and enhances driving safety.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Car Infotainment System",
                points: [
                    "**GPS screen freezing or not responding** – navigation becomes unreliable.",
                    "**Touchscreen controls unresponsive or erratic** – poor user interaction.",
                    "**Android Auto or Apple CarPlay not connecting** – smartphone integration failure.",
                    "**Bluetooth or audio cutting out intermittently** – unstable system performance.",
                    "These symptoms often indicate the need for **car infotainment system replacement** or repair.",
                ],
            },

            impact: {
                title: "How a Faulty Car Infotainment System Affects Driving Convenience",
                text: [
                    "A malfunctioning **car infotainment system** disrupts navigation, entertainment, and communication.",
                    "Drivers may struggle to follow GPS directions, increasing distraction or unsafe maneuvers.",
                    "Hands-free calling and audio streaming may become unreliable.",
                    "Repeated troubleshooting while driving reduces comfort and road focus.",
                    "Even minor system issues can negatively impact safety and overall driving experience.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Car Infotainment System for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Screen size and resolution** – clear visuals and responsive touch.",
                    "**Smartphone support** – Android Auto and Apple CarPlay compatibility.",
                    "**Connectivity options** – Bluetooth, USB, and audio integration.",
                    "**System integration** – support for steering wheel controls and vehicle electronics.",
                    "**OEM or high-quality aftermarket build** – ensures stability and longevity.",
                    "Choosing the right **GPS screen for car** ensures smooth navigation and seamless connectivity.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Car Infotainment System Is Important",
                points: [
                    "**Accurate navigation** – reliable route guidance and mapping.",
                    "**Seamless smartphone integration** – safer calls, messaging, and media control.",
                    "**Improved driving focus** – reduced distractions through intuitive controls.",
                    "**Enhanced entertainment experience** – stable audio and media playback.",
                    "A properly functioning **car infotainment system** improves both safety and comfort on every drive.",
                ],
            },

            risks: {
                title: "How Ignoring Car Infotainment System Issues Can Lead to Bigger Repairs",
                points: [
                    "**Complete touchscreen failure** – loss of navigation and controls.",
                    "**Wiring or module damage** – escalating electronic issues.",
                    "**System compatibility problems** – smartphone and software failures.",
                    "**Increased driver distraction** – affecting road safety.",
                ],
                conclusion:
                    "Addressing **car infotainment system** issues early prevents cascading electronic failures. A healthy **navigation screen for car** ensures reliable connectivity, accurate navigation, and a safer, more enjoyable driving experience.",
            },
        },
    },
    {
        category: "Electrical", name: "Instrument Cluster", image: "/parts/Instrument Cluster.png", desc: {
            intro: {
                title: "What Is a Car Instrument Cluster and Why It’s Important for Your Vehicle",
                text: [
                    "The **car instrument cluster** is the central dashboard display that shows critical driving and vehicle status information.",
                    "It provides real-time data such as speed, engine RPM, fuel level, temperature, and warning indicators.",
                    "Modern digital clusters combine clear visuals with advanced graphics for improved readability and driver awareness.",
                    "By delivering accurate information, the **instrument cluster** supports safe driving, timely maintenance, and confident vehicle operation.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Instrument Cluster",
                points: [
                    "**Dashboard gauges not working or inaccurate** – speed, RPM, or fuel readings are incorrect.",
                    "**Flickering, dim, or blank display** – poor visibility of critical information.",
                    "**Warning lights staying on or not illuminating** – system alerts become unreliable.",
                    "**Erratic behavior of speedometer or tachometer** – unstable or jumping readings.",
                    "These symptoms often indicate the need for **instrument cluster repair** or full replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Instrument Cluster Affects Driving Safety and Performance",
                text: [
                    "A malfunctioning **instrument cluster** can misrepresent essential vehicle data.",
                    "Incorrect speed or RPM readings may lead to unsafe driving behavior.",
                    "Inaccurate fuel information can result in unexpected fuel loss.",
                    "Missed warning alerts can delay maintenance or repairs.",
                    "Visual glitches and flickering displays may distract the driver and reduce focus.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Instrument Cluster for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year.",
                    "**Display type** – digital or analog based on vehicle design.",
                    "**Supported indicators** – warning lights, odometer, trip meter, and sensors.",
                    "**Electronic integration** – compatibility with vehicle control modules.",
                    "**OEM or high-quality aftermarket build** – ensures accuracy and durability.",
                    "Choosing the right **car instrument cluster** ensures reliable readings and seamless system integration.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Instrument Cluster Is Important",
                points: [
                    "**Accurate dashboard readings** – better speed, fuel, and RPM monitoring.",
                    "**Improved driving safety** – timely visibility of warning indicators.",
                    "**Enhanced driving confidence** – reliable real-time vehicle data.",
                    "**Prevention of unexpected breakdowns** – early detection of system issues.",
                    "A properly functioning **instrument cluster** keeps drivers informed and vehicles operating safely.",
                ],
            },

            risks: {
                title: "How Ignoring Instrument Cluster Issues Can Lead to Bigger Repairs",
                points: [
                    "**Undetected engine or transmission issues** – warning alerts may not display.",
                    "**Improper fuel management** – inaccurate fuel readings.",
                    "**Increased strain on sensors and control modules** – due to faulty communication.",
                    "**Reduced safety awareness** – missing critical vehicle status information.",
                ],
                conclusion:
                    "Addressing **instrument cluster** problems early prevents cascading electronic issues. A healthy **car instrument cluster** ensures accurate monitoring, safer driving, and long-term vehicle reliability.",
            },
        },
    },
    {
        category: "Electrical", name: "Lid Motor Pull Down", image: "/parts/Lid Motor Pull Down.png", desc: {
            intro: {
                title: "What Is a Trunk Pull Down Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **trunk pull down motor**, also known as a **trunk lid pull down motor** or **automatic trunk closer**, automates the final closing and latching of the trunk or tailgate.",
                    "It uses an electric actuator to gently pull the lid into a fully closed position after it is lowered.",
                    "This system ensures consistent, secure trunk closure without slamming or excessive manual force.",
                    "By improving closure reliability, the trunk pull down motor enhances daily convenience and protects both cargo and vehicle components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Trunk Pull Down Motor",
                points: [
                    "**Trunk fails to close automatically** – lid stops before fully latching.",
                    "**Slow or inconsistent trunk movement** – delayed or uneven pull-down action.",
                    "**Grinding, buzzing, or clicking noises** – internal motor or gear wear.",
                    "**Anti-pinch system activating incorrectly** – false safety triggers.",
                    "**Trunk remains partially open** – risking water entry or theft.",
                    "These symptoms often indicate the need for **automatic trunk closer** repair or motor replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Trunk Pull Down Motor Affects Convenience and Safety",
                text: [
                    "A malfunctioning **trunk pull down motor** reduces ease of use and compromises trunk security.",
                    "Manual force may be required to close the trunk fully.",
                    "Improper latching can expose cargo to water damage or theft.",
                    "Failed anti-pinch operation may increase the risk of injury.",
                    "Repeated failed cycles can strain actuators, wiring, and latch mechanisms.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Trunk Pull Down Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and body style.",
                    "**Trunk type** – sedan trunk, liftgate, or tailgate configuration.",
                    "**Safety integration** – compatibility with anti-pinch sensors.",
                    "**OEM or high-quality aftermarket build** – for durability and smooth operation.",
                    "**Correct mounting position and power rating** – ensures consistent pull-down force.",
                    "Selecting the right **trunk lid pull down motor** restores reliable and safe trunk operation.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Trunk Pull Down Motor Is Important",
                points: [
                    "**Smooth automatic trunk closure** – no slamming or repeated attempts.",
                    "**Improved trunk security** – ensures proper latching every time.",
                    "**Protection of hinges and latches** – reduced mechanical stress.",
                    "**Fully functional anti-pinch safety features** – safer operation.",
                    "**Enhanced daily convenience** – effortless trunk use.",
                    "A healthy **automatic trunk closer** improves both comfort and vehicle protection.",
                ],
            },

            risks: {
                title: "How Ignoring Trunk Pull Down Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Damaged hinges or misaligned latches** – from improper closure.",
                    "**Strained wiring or actuator failure** – due to repeated cycling.",
                    "**Anti-pinch sensor malfunction** – affecting safety systems.",
                    "**Water intrusion into trunk area** – causing corrosion or interior damage.",
                ],
                conclusion:
                    "Addressing **trunk pull down motor** issues early prevents costly trunk mechanism repairs. Replacing a failing **automatic trunk closer** ensures secure closure, reliable safety features, and long-term trunk system durability.",
            },
        },
    },
    {
        category: "Electrical", name: "Power Window Motor", image: "/parts/Power Window Motor.png", desc: {
            intro: {
                title: "What Is a Power Window Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **power window motor** is the electric component that automates window movement, allowing windows to raise and lower at the push of a button.",
                    "Working alongside the window regulator, the **electric window motor** converts electrical energy into smooth mechanical motion.",
                    "It supports regulator designs such as scissor, cable, or rack-and-pinion systems for controlled glass movement.",
                    "By eliminating manual effort, the window motor improves convenience, safety, and consistent window operation in all driving conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Power Window Motor",
                points: [
                    "**Window moves slowly or stops midway** – motor losing power or internal wear.",
                    "**Grinding, clicking, or humming noises** – worn gears or failing motor windings.",
                    "**Window does not respond to the switch** – motor failure despite working controls.",
                    "**One window fails while others work** – isolated power window motor issue.",
                    "These symptoms often indicate the need for **power window motor replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Power Window Motor Affects Comfort and Safety",
                text: [
                    "A failing **electric window motor** disrupts everyday convenience and compromises vehicle security.",
                    "Windows may fail to close completely, reducing cabin security.",
                    "Weather protection is compromised during rain or dust exposure.",
                    "Repeated switch operation diverts driver attention.",
                    "Continued use can overload the window regulator and strain the electrical system.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Power Window Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and door position.",
                    "**Regulator type** – scissor, cable, or rack-and-pinion system.",
                    "**Door placement** – driver or passenger side configuration.",
                    "**Build quality** – OEM or high-quality aftermarket motor.",
                    "A properly matched **window motor** restores factory-level window performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Power Window Motor Is Important",
                points: [
                    "**Smooth and effortless window movement** – consistent operation every time.",
                    "**Improved cabin security** – windows close fully and reliably.",
                    "**Protection for the window regulator** – reduced mechanical strain.",
                    "**Quieter operation** – eliminates grinding or humming noises.",
                    "**Reliable daily convenience** – dependable control at the switch.",
                    "A new **power window motor** restores confidence in window operation.",
                ],
            },

            risks: {
                title: "How Ignoring Power Window Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Window regulator damage** – excessive strain from a failing motor.",
                    "**Damaged window tracks or misaligned glass** – uneven movement.",
                    "**Burnt switches or wiring** – electrical overload.",
                    "**Window jamming or glass drop** – safety and repair risk.",
                ],
                conclusion:
                    "Addressing **power window motor replacement** early prevents cascading damage to regulators, tracks, and electrical systems. Timely replacement ensures safe, smooth, and reliable window operation in everyday driving.",
            },
        },
    },
    {
        category: "Electrical", name: "Radiator Fan Motor", image: "/parts/Radiator Fan Motor.png", desc: {
            intro: {
                title: "What Is a Radiator Fan Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **radiator fan motor** powers the cooling fan that pulls air through the radiator to dissipate heat from the engine coolant.",
                    "It becomes especially critical at low speeds, in traffic, or when the vehicle is stationary, where natural airflow is limited.",
                    "By ensuring continuous airflow, the fan motor helps maintain optimal engine temperature in all driving and weather conditions.",
                    "A properly functioning **car radiator fan motor** supports efficient cooling, protects the engine from overheating, and ensures stable performance under high load or extreme heat.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Radiator Fan Motor",
                points: [
                    "**Engine overheating in traffic** – fan fails to activate at low speeds.",
                    "**Cooling fan not turning on** – even when engine temperature rises.",
                    "**Unusual noises from the fan area** – grinding or rattling from worn bearings.",
                    "**AC performance drops** – poor condenser cooling due to lack of airflow.",
                    "If these symptoms appear, checking the **radiator fan motor price** early helps prevent engine overheating.",
                ],
            },

            impact: {
                title: "How a Faulty Radiator Fan Motor Affects Performance and Fuel Efficiency",
                text: [
                    "A failing radiator fan motor restricts airflow through the radiator, causing temperature instability.",
                    "**Engine overheating** occurs especially during idle or stop-and-go driving.",
                    "**Reduced engine efficiency** results as excess heat affects combustion.",
                    "**AC system strain** increases due to poor condenser cooling.",
                    "Sustained overheating forces the engine to work harder, indirectly impacting fuel efficiency and long-term reliability.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Radiator Fan Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, year, and cooling system design.",
                    "**Electrical specifications** – correct voltage, connector type, and power rating.",
                    "**Build quality** – durable bearings and balanced motors for quiet operation.",
                    "Understanding the **radiator fan motor price** range helps balance cost with performance and longevity.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Radiator Fan Motor Improves Performance & Reliability",
                points: [
                    "**Stable engine temperature** – even in heavy traffic or extreme heat.",
                    "**Improved cooling efficiency** – supports optimal engine operation.",
                    "**Reduced strain on engine and AC components** – extends system lifespan.",
                    "**Quieter operation** – eliminates fan-related noise issues.",
                    "A new **car radiator fan motor** ensures dependable cooling and protects critical engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Radiator Fan Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Chronic overheating** – leading to head gasket failure.",
                    "**Radiator and hose damage** – caused by excessive heat and pressure.",
                    "**Accelerated engine wear** – resulting in costly repairs or engine failure.",
                ],
                conclusion:
                    "Addressing **radiator fan motor** issues early keeps repair costs manageable and prevents extensive cooling system and engine damage. Timely replacement ensures reliable temperature control and long-term engine protection.",
            },
        },

    },
    {
        category: "Electrical", name: "Rear Door Switch", image: "/parts/Rear Door Switch.png", desc: {
            intro: {
                title: "What Is a Rear Door Switch and Why It’s Important for Your Vehicle",
                text: [
                    "The **rear door switch** is an electronic sensor that monitors whether a rear door is open or closed.",
                    "It works with interior lighting, door ajar warnings, and central locking systems to ensure safety and convenience.",
                    "By accurately detecting door status, the **car door switch** prevents battery drain and supports proper locking behavior.",
                    "A properly functioning **door ajar switch** ensures passengers are protected and vehicle security systems operate reliably.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Door Switch",
                points: [
                    "**Interior lights staying on or not turning on** – incorrect door status detection.",
                    "**Door ajar warning light flickering or not activating** on the dashboard.",
                    "**Inconsistent locking or unlocking** behavior for rear doors.",
                    "**Unexpected warning chimes or alerts** while driving.",
                    "These symptoms often indicate the need for **rear door switch** repair or replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Door Switch Affects Comfort and Security",
                text: [
                    "A malfunctioning rear door switch can compromise both safety and everyday convenience.",
                    "**False door-ajar signals** may appear even when the door is closed.",
                    "**Interior lights may remain on**, leading to battery drain.",
                    "**Central locking systems may fail** to secure all doors properly.",
                    "Repeated faults can also place strain on wiring and connected control modules.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Door Switch for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**Correct switch type** – ensure proper door ajar switch design.",
                    "**OEM or high-quality aftermarket** construction for reliability.",
                    "**System integration** – compatibility with alarms, interior lights, and central locking.",
                    "The right **rear door switch** restores accurate door monitoring and dependable operation.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Door Switch Is Important",
                points: [
                    "**Accurate door status detection** – reliable open/close monitoring.",
                    "**Proper interior light operation** – prevents battery drain.",
                    "**Reliable door ajar warnings** – improved safety awareness.",
                    "**Secure central locking** – all doors lock as intended.",
                    "A new **car door switch** turns a small sensor into a dependable safety and convenience feature.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Door Switch Issues Can Lead to Bigger Repairs",
                points: [
                    "**Repeated battery drain** due to interior lights staying on.",
                    "**Electrical strain** on wiring and door control circuits.",
                    "**Central locking or alarm module failure** over time.",
                ],
                conclusion:
                    "Ignoring a faulty **rear door switch** can escalate minor electrical issues into costly system failures. Early replacement preserves security, prevents battery problems, and keeps rear door electronics operating correctly.",
            },
        },
    },
    {
        category: "Electrical", name: "Rear Side Marker", image: "/parts/Rear Side Marker.png", desc: {
            intro: {
                title: "What Is a Rear Side Marker Light and Why It’s Important for Your Vehicle",
                text: [
                    "The **rear side marker light** is a safety lighting component mounted on the side of the vehicle near the rear quarter panel.",
                    "It improves side visibility during turns, lane changes, and low-light driving conditions.",
                    "Using standard bulbs or **LED side marker lights**, it signals your vehicle’s presence and movement to other drivers.",
                    "Properly functioning **side marker lights** reduce the risk of side-impact collisions and improve overall road safety.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Side Marker Light",
                points: [
                    "**Dim or non-functioning side marker light** on one or both sides.",
                    "**Flickering or intermittent illumination** due to wiring or socket issues.",
                    "**LED side marker lights not turning on consistently**.",
                    "**Reduced side visibility** during night or poor weather driving.",
                    "These symptoms indicate the need for **rear side marker light** repair or replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Side Marker Light Affects Safety and Driving",
                text: [
                    "A malfunctioning rear side marker light reduces how visible your vehicle is from the side.",
                    "**Other drivers may miss your vehicle** during turns or lane changes.",
                    "**Side-collision risk increases** in low-light or poor weather conditions.",
                    "**Regulatory compliance may be affected** if side marker lights are not operational.",
                    "Repeated faults can also place strain on wiring and lighting connectors.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Side Marker Light for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**Lighting type** – choose between standard bulbs or **LED side marker lights**.",
                    "**OEM or high-quality aftermarket** construction for durability.",
                    "**Proper fitment** – correct housing shape and wiring connector compatibility.",
                    "The right **rear side marker light** restores reliable side visibility and performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Side Marker Light Is Important",
                points: [
                    "**Improved side visibility** during night driving and lane changes.",
                    "**Enhanced safety awareness** for surrounding vehicles.",
                    "**Reliable illumination in low-light conditions**.",
                    "**Compliance with vehicle lighting regulations**.",
                    "A properly working **side marker light** ensures your vehicle is clearly visible from all angles.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Side Marker Light Issues Can Lead to Bigger Repairs",
                points: [
                    "**Wiring or connector damage** from prolonged electrical faults.",
                    "**Corrosion at the light socket** due to moisture intrusion.",
                    "**Impact on other lighting circuits** sharing the same harness.",
                ],
                conclusion:
                    "Ignoring a faulty **rear side marker light** can escalate minor lighting issues into broader electrical problems. Early replacement maintains safety, prevents wiring damage, and keeps all **side marker lights** operating correctly.",
            },
        },
    },
    {
        category: "Electrical", name: "Rear Wiper Motor", image: "/parts/Rear Wiper Motor.png", desc: {
            intro: {
                title: "What Is a Rear Wiper Motor and Why It’s Important for Your Vehicle",
                text: [
                    "The **rear wiper motor** is the electric motor that powers the rear windshield wiper, allowing it to sweep rain, snow, and debris from the rear glass.",
                    "A properly functioning **rear window wiper motor** ensures clear rear visibility in adverse weather conditions.",
                    "By maintaining a clean rear windshield, the **rear windshield wiper motor** supports safer reversing, lane changes, and parking.",
                    "Reliable rear wiper operation is essential for overall driving safety, especially in hatchbacks, SUVs, and wagons.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Rear Wiper Motor",
                points: [
                    "**Rear wiper not moving** when activated.",
                    "**Slow or intermittent wiper movement** across the rear glass.",
                    "**Grinding, buzzing, or clicking noises** coming from the rear wiper motor.",
                    "**Wiper stopping mid-swipe or failing to return to park position**.",
                    "These symptoms indicate the need for **rear wiper motor** repair or replacement.",
                ],
            },

            impact: {
                title: "How a Faulty Rear Wiper Motor Affects Safety and Visibility",
                text: [
                    "A malfunctioning **rear windshield wiper motor** reduces rear visibility in rain, snow, or muddy conditions.",
                    "**Reversing and lane changes become more difficult and unsafe**.",
                    "**Collision risk increases** due to obstructed rear vision.",
                    "Repeated activation attempts can strain wiring, switches, and the wiper linkage.",
                    "Even minor rear wiper motor issues can significantly affect driving safety.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Rear Wiper Motor for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**OEM or high-quality aftermarket motor** for durability and correct fit.",
                    "**Compatibility with rear wiper linkage and blade system**.",
                    "**Correct power rating** and support for intermittent wipe functions.",
                    "The right **rear window wiper motor** ensures smooth, reliable operation in all weather.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Rear Wiper Motor Is Important",
                points: [
                    "**Restored rear window visibility** during rain and snow.",
                    "**Safer reversing and parking** in low-visibility conditions.",
                    "**Smooth, consistent wiper operation** without noise or hesitation.",
                    "**Reduced strain on wiring and wiper linkage components**.",
                    "A properly working **rear wiper motor** keeps everyday driving safe and stress-free.",
                ],
            },

            risks: {
                title: "How Ignoring Rear Wiper Motor Issues Can Lead to Bigger Repairs",
                points: [
                    "**Worn or damaged rear wiper linkage** from stalled motor operation.",
                    "**Electrical strain or blown circuits** in the rear wiper system.",
                    "**Premature wear of rear wiper blades** due to improper movement.",
                ],
                conclusion:
                    "Ignoring a failing **rear windshield wiper motor** can escalate minor faults into linkage damage or electrical issues. Early **rear wiper motor replacement** preserves rear visibility, prevents cascading failures, and maintains safe driving in all weather conditions.",
            },
        },
    },
    {
        category: "Electrical", name: "Speedometer Cluster", image: "/parts/Speedometer Cluster.png", desc: {
            intro: {
                title: "What Is a Speedometer Cluster and Why It’s Important for Your Vehicle",
                text: [
                    "The **speedometer cluster**, also known as a **digital speedometer cluster** or **instrument cluster**, displays essential vehicle information such as speed, fuel level, RPM, temperature, and warning indicators.",
                    "It acts as the driver’s primary interface for monitoring vehicle performance and safety systems.",
                    "A properly functioning speedometer cluster ensures accurate readings that help drivers make informed, safe driving decisions.",
                    "Without reliable cluster data, monitoring vehicle health and driving conditions becomes difficult and unsafe.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Speedometer Cluster",
                points: [
                    "**Speedometer or tachometer readings fluctuating or inaccurate**.",
                    "**Fuel gauge or temperature readings incorrect**.",
                    "**Warning lights staying on or failing to illuminate**.",
                    "**Digital display flickering, dimming, or not lighting up**.",
                    "These symptoms often indicate the need for **instrument cluster repair** or **digital speedometer cluster replacement**.",
                ],
            },

            impact: {
                title: "How a Faulty Speedometer Cluster Affects Driving and Safety",
                text: [
                    "A malfunctioning **instrument cluster** reduces the driver’s ability to monitor vehicle status accurately.",
                    "**Incorrect speed readings** can lead to unsafe driving or traffic violations.",
                    "**Fuel misreadings** may cause unexpected breakdowns due to empty tanks.",
                    "**Missed warning indicators** can delay critical maintenance or repairs.",
                    "Electrical strain from a faulty cluster may also affect other dashboard modules.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Speedometer Cluster for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**Analog or digital display type** based on original configuration.",
                    "**OEM or high-quality aftermarket construction** for reliability.",
                    "**Support for warning lights, trip meters, and integrated sensors**.",
                    "The right **digital speedometer cluster** restores full dashboard accuracy and performance.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Speedometer Cluster Is Important",
                points: [
                    "**Accurate speed, RPM, and fuel readings** for safe driving.",
                    "**Fully functional warning indicators** for timely maintenance.",
                    "**Improved driver confidence and vehicle monitoring**.",
                    "**Reliable communication with other dashboard and control modules**.",
                    "A properly functioning **speedometer cluster** keeps the driver informed and the vehicle protected.",
                ],
            },

            risks: {
                title: "How Ignoring Speedometer Cluster Issues Can Lead to Bigger Repairs",
                points: [
                    "**Misjudged driving speed** leading to safety risks or fines.",
                    "**Missed engine or system warnings** causing costly damage.",
                    "**Electrical faults spreading to other dashboard electronics**.",
                ],
                conclusion:
                    "Ignoring a faulty **instrument cluster** can result in unsafe driving, missed maintenance alerts, and cascading electrical issues. Early **speedometer cluster replacement** ensures reliable vehicle monitoring, preserves dashboard electronics, and maintains driving safety.",
            },
        },
    },
    {
        category: "Electrical", name: "Tail Light", image: "/parts/Tail Light.png", desc: {
            intro: {
                title: "What Is a Tail Light and Why It’s Important for Your Vehicle",
                text: [
                    "A **tail light** is the rear-mounted lighting component that signals your vehicle’s presence and actions to drivers behind you.",
                    "Modern systems include standard bulbs and **LED tail lights**, often integrated into a complete **tail light assembly**.",
                    "Tail lights improve visibility during night driving, braking, and turning, helping prevent rear-end collisions.",
                    "Properly functioning tail lights are essential for road safety, legal compliance, and maintaining your vehicle’s exterior appearance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Tail Light",
                points: [
                    "**Tail lights not illuminating** at night or when braking.",
                    "**Flickering or intermittent lighting** during operation.",
                    "**LED tail light segments not working consistently**.",
                    "**Cracked lens or damaged tail light housing**.",
                    "These symptoms often indicate the need for **tail light replacement** or repair of the **tail light assembly**.",
                ],
            },

            impact: {
                title: "How a Faulty Tail Light Affects Safety and Driving",
                text: [
                    "A malfunctioning **tail light** reduces rear visibility and weakens critical signaling to other drivers.",
                    "**Reduced night-time visibility** increases the risk of rear-end collisions.",
                    "**Brake and turn signals may not be seen clearly**, creating dangerous situations.",
                    "**Vehicle may fail safety inspections or traffic regulations**.",
                    "Electrical faults in the tail light assembly can also affect wiring and connectors over time.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Tail Light for Your Vehicle",
                points: [
                    "**Vehicle compatibility** – match make, model, and year exactly.",
                    "**Lighting type** – LED tail lights for longevity or standard bulbs for OEM match.",
                    "**OEM or high-quality aftermarket construction** for durability.",
                    "**Complete tail light assembly vs. individual component replacement**.",
                    "The correct **tail light assembly** ensures proper fitment, brightness, and reliable operation.",
                ],
            },

            benefits: {
                title: "Why Replacing a Worn Tail Light Is Important",
                points: [
                    "**Improved rear visibility** during night and low-light driving.",
                    "**Clear brake and turn signaling** to surrounding traffic.",
                    "**Compliance with road safety and inspection requirements**.",
                    "**Maintained exterior appearance and vehicle value**.",
                    "A properly working **tail light** keeps your vehicle visible, predictable, and safe on the road.",
                ],
            },

            risks: {
                title: "How Ignoring Tail Light Issues Can Lead to Bigger Repairs",
                points: [
                    "**Increased risk of rear-end collisions** due to poor signaling.",
                    "**Wiring damage or blown fuses** from repeated electrical faults.",
                    "**Failure of related rear lighting components**.",
                ],
                conclusion:
                    "Ignoring a faulty **tail light** can compromise safety, cause legal issues, and lead to electrical damage. Timely **tail light replacement** prevents cascading faults, restores full rear visibility, and keeps your vehicle compliant and road-ready.",
            },
        },
    },
    {
        category: "Electrical", name: "Temperature Control", image: "/parts/Temperature Control.png", desc: {
            intro: {
                title: "How Car Temperature Control Maintains Cabin Comfort",
                text: [
                    "**Car temperature control** manages heating, cooling, airflow, and fan speed to maintain a consistent and comfortable cabin environment.",
                    "Through manual inputs or automatic climate settings, the system adjusts air temperature and distribution based on driver preferences and external conditions.",
                    "This balance ensures stable comfort in all weather conditions, from extreme heat to cold climates.",
                ],
            },

            role: {
                title: "Role of Temperature Control in Modern Vehicles",
                text: [
                    "A **climate control system in cars** continuously monitors cabin conditions and responds by regulating airflow direction, fan speed, and temperature.",
                    "In automatic mode, the system maintains the selected temperature without constant driver input.",
                    "This reduces distraction, improves comfort, and ensures consistent cabin conditions throughout the drive.",
                ],
            },

            components: {
                title: "Key Components of a Car Temperature Control System",
                points: [
                    "**Temperature sensors** – detect cabin and ambient conditions.",
                    "**Actuators and blend doors** – control the mix of hot and cold air.",
                    "**Temperature control switch car** – allows manual or digital adjustment of settings.",
                    "Together, these components ensure accurate temperature regulation and smooth air distribution.",
                ],
            },

            benefits: {
                title: "Benefits of Proper Temperature Control Operation",
                points: [
                    "**Consistent cabin temperature** – no sudden hot or cold fluctuations.",
                    "**Optimized airflow control** – even air distribution across all vents.",
                    "**Improved fuel efficiency** – efficient system cycling in automatic mode.",
                    "**Enhanced passenger comfort** – stable conditions for short or long drives.",
                ],
            },

            signs: {
                title: "Signs of Temperature Control Issues",
                points: [
                    "**Unresponsive temperature control switch car** – settings do not change airflow or temperature.",
                    "**Uneven cabin temperatures** – hot and cold zones inside the vehicle.",
                    "**Delayed cooling or heating response** – slow system adjustment.",
                    "**Automatic mode not maintaining set temperature** – frequent manual corrections required.",
                ],
            },

            importance: {
                title: "Why Temperature Control Is Essential for Driving Comfort",
                text: [
                    "Effective **car temperature control** does more than regulate heat or cold.",
                    "It supports driver focus, passenger comfort, and overall HVAC system efficiency.",
                    "Whether using manual controls or an advanced **climate control system in cars**, precise temperature regulation ensures a pleasant, controlled driving environment in every season.",
                ],
            },
        },
    },
    {
        category: "Electrical", name: "Vacuum Pump", image: "/parts/Vacuum Pump.png", desc: {
            intro: {
                title: "What Is a Vacuum Pump and Why It’s Important for Your Vehicle",
                text: [
                    "A **vacuum pump**, also known as a **brake vacuum pump** or **automotive vacuum pump**, supplies vacuum pressure to power-assisted braking systems and other vacuum-dependent vehicle functions.",
                    "It is especially critical in **turbocharged, direct injection, and hybrid engines**, where natural intake vacuum is often insufficient.",
                    "A properly functioning vacuum pump ensures safe braking performance, stable engine operation, and reliable vacuum supply for supporting systems.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Vacuum Pump",
                points: [
                    "**Increased brake pedal effort** or reduced braking assistance.",
                    "**Hissing or unusual vacuum-related noises** from the engine bay.",
                    "**Engine or brake warning lights** related to vacuum systems.",
                    "**Reduced performance** in turbocharged or direct injection engines.",
                ],
            },

            impact: {
                title: "How a Faulty Vacuum Pump Affects Vehicle Safety and Performance",
                text: [
                    "A failing vacuum pump directly impacts braking efficiency and engine operation.",
                    "Reduced brake assist increases stopping distance and driver effort during braking.",
                    "Vacuum-dependent systems may malfunction, and turbocharged or hybrid engines may experience reduced efficiency.",
                    "Prolonged operation with a faulty pump can strain brake boosters and related components.",
                ],
            },

            selection: {
                title: "How to Choose the Right Vacuum Pump for Your Vehicle",
                points: [
                    "**Vehicle make, model, and engine type compatibility**.",
                    "**OEM or high-quality aftermarket options** for reliability.",
                    "**Integration with brake boosters and vacuum-operated systems**.",
                    "**Correct pump capacity and pressure specifications**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Vacuum Pump Is Important",
                text: [
                    "Replacing a failing vacuum pump restores full brake assist and ensures consistent vacuum delivery.",
                    "It improves braking safety, engine performance, and overall system reliability.",
                    "A healthy automotive vacuum pump prevents unexpected failures during critical driving situations.",
                ],
            },

            risk: {
                title: "How Ignoring Vacuum Pump Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring a malfunctioning brake vacuum pump can cause increased wear on the brake booster and compromised braking performance.",
                    "Vacuum leaks may strain engine components and reduce efficiency in turbocharged or hybrid systems.",
                    "Early replacement prevents cascading mechanical failures and keeps both braking and engine systems operating safely and efficiently.",
                ],
            },
        },
    },
    {
        category: "Electrical", name: "Windshield Wiper", image: "/parts/Windshield Wiper.png", desc: {
            intro: {
                title: "What Is a Windshield Wiper Motor and Why It’s Important for Your Vehicle",
                text: [
                    "A **windshield wiper motor**, also known as a **wiper motor** or **wiper motor assembly**, powers the windshield wipers to maintain clear visibility during rain, snow, or debris conditions.",
                    "Available in front and rear configurations and often featuring variable-speed control, this motor is essential for safe driving in adverse weather.",
                    "A properly functioning windshield wiper motor ensures smooth, consistent wiping action, supporting driver visibility and overall road safety.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Windshield Wiper Motor",
                points: [
                    "**Wipers move slowly or stop intermittently** during operation.",
                    "**Wipers do not respond** when the switch is activated.",
                    "**Grinding or clicking noises** from the wiper motor area.",
                    "**Erratic wiper movement** or operation in only one direction.",
                ],
            },

            impact: {
                title: "How a Faulty Windshield Wiper Motor Affects Driving Safety",
                text: [
                    "A failing windshield wiper motor can significantly reduce visibility in rain or snow, increasing accident risk.",
                    "Wipers may stop mid-swipe, leaving the windshield partially obstructed.",
                    "Electrical strain from a failing motor can affect switches, relays, and other wiper system components.",
                    "Driver distraction increases when visibility is compromised during poor weather conditions.",
                ],
            },

            selection: {
                title: "How to Choose the Right Windshield Wiper Motor for Your Vehicle",
                points: [
                    "**Vehicle make, model, and year compatibility**.",
                    "**Front or rear wiper motor configuration**.",
                    "**Variable-speed or single-speed operation** requirements.",
                    "**OEM or high-quality aftermarket construction**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Windshield Wiper Motor Is Important",
                text: [
                    "Replacing a failing windshield wiper motor restores smooth, consistent wiping performance.",
                    "It improves visibility, enhances driving confidence, and ensures safety in all weather conditions.",
                    "Proper replacement also prevents unnecessary strain on wiper linkages and electrical components.",
                ],
            },

            risk: {
                title: "How Ignoring Windshield Wiper Motor Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring a faulty wiper motor can result in complete wiper system failure.",
                    "Damaged wiper linkages, blown fuses, or electrical shorts may develop over time.",
                    "Early windshield wiper motor replacement prevents cascading mechanical and electrical issues and keeps visibility systems reliable.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Air Cleaner",
        image: "/parts/Air Cleaner Filter.png",
        desc: {
            intro: {
                title: "What Is an Air Cleaner and Why It’s Important for Your Vehicle",
                text: [
                    "An **air cleaner**, commonly known as an **engine air filter**, is responsible for filtering dust, dirt, and debris from the air entering the engine.",
                    "By supplying clean air for combustion, the air cleaner helps maintain engine power, fuel efficiency, and long-term reliability.",
                    "Available in **paper, cotton, and synthetic materials**, a properly functioning auto air filter cleaner protects internal engine components from premature wear and contamination.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Air Cleaner",
                points: [
                    "**Reduced engine power or sluggish acceleration**.",
                    "**Decreased fuel efficiency**.",
                    "**Dirty or clogged filter element**.",
                    "**Unusual engine sounds during acceleration**.",
                ],
            },

            impact: {
                title: "How a Dirty Air Cleaner Affects Engine Performance",
                text: [
                    "A clogged air cleaner limits the amount of clean air reaching the engine, leading to incomplete combustion and power loss.",
                    "Restricted airflow increases fuel consumption and raises emissions output.",
                    "Over time, the engine is forced to work harder, accelerating wear on internal components and reducing overall efficiency.",
                ],
            },

            selection: {
                title: "How to Choose the Right Air Cleaner for Your Vehicle",
                points: [
                    "**Vehicle make, model, and engine specifications**.",
                    "**Filter material type: paper, cotton, or synthetic**.",
                    "**OEM or high-quality aftermarket compatibility**.",
                    "**Intended driving conditions such as dusty or urban environments**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Air Cleaner Is Important",
                text: [
                    "Replacing a dirty air cleaner restores proper airflow and improves fuel efficiency.",
                    "A clean filter helps the engine perform at its designed output and supports smoother, more responsive driving.",
                    "Regular replacement also reduces internal engine wear and prolongs engine life.",
                ],
            },

            risk: {
                title: "How Ignoring Air Cleaner Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring a clogged or damaged air cleaner can lead to poor combustion and increased engine deposits.",
                    "Sensor contamination and long-term engine damage may occur due to unfiltered air intake.",
                    "Early air cleaner replacement prevents costly repairs and keeps the engine running clean, efficient, and protected.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Coolant Pump",
        image: "/parts/Coolant Pump.png",
        desc: {
            intro: {
                title: "What Is a Coolant Pump and Why It’s Important for Your Vehicle",
                text: [
                    "A **coolant pump**, also known as an **engine coolant pump**, is responsible for circulating coolant through the engine, radiator, and cooling passages.",
                    "By maintaining continuous coolant flow, the pump regulates engine temperature and prevents overheating during operation.",
                    "Available in **mechanical and electric variants**, a properly functioning coolant pump is essential for engine efficiency, performance stability, and long-term engine protection.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs Coolant Pump Replacement",
                points: [
                    "**Engine overheating or a rising temperature gauge**.",
                    "**Coolant leaks near the front of the engine**.",
                    "**Whining, grinding, or squealing noises** from the pump area.",
                    "**Steam coming from the engine bay**.",
                ],
            },

            impact: {
                title: "How a Faulty Coolant Pump Affects Engine Performance",
                text: [
                    "A failing engine coolant pump disrupts proper temperature regulation, leading to inconsistent engine operating temperatures.",
                    "The risk of overheating increases significantly, reducing engine efficiency and power output.",
                    "Prolonged operation with poor coolant circulation can damage head gaskets and other internal engine components.",
                ],
            },

            selection: {
                title: "How to Choose the Right Coolant Pump for Your Vehicle",
                points: [
                    "**Compatibility with your vehicle’s make, model, and engine type**.",
                    "**Mechanical or electric pump design requirements**.",
                    "**OEM or high-quality aftermarket construction**.",
                    "**Integration with timing belt or accessory drive systems**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Coolant Pump Is Important",
                text: [
                    "Replacing a failing coolant pump restores proper temperature regulation and steady coolant flow.",
                    "It protects engine components from heat damage and ensures smooth, efficient operation.",
                    "A healthy cooling system keeps the engine running within safe limits under all driving conditions.",
                ],
            },

            risk: {
                title: "How Ignoring Coolant Pump Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring coolant pump problems can result in severe overheating and coolant loss.",
                    "Warped engine components, damaged head gaskets, and catastrophic engine failure may occur.",
                    "Early coolant pump replacement prevents costly repairs and preserves long-term engine reliability and performance.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Cylinder Block",
        image: "/parts/Cylinder Block.png",
        desc: {
            intro: {
                title: "What Is a Cylinder Block and Why It’s Important for Your Vehicle",
                text: [
                    "The **cylinder block**, also known as the **engine block**, is the main structural foundation of an engine.",
                    "It houses the engine cylinders, coolant passages, and oil galleries, supporting critical components such as pistons, the crankshaft, and the cylinder head.",
                    "Typically made from **cast iron or aluminum**, the engine cylinder block provides the strength, durability, and precise alignment required for combustion, lubrication, and cooling.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Have Cylinder Block Issues",
                points: [
                    "**Persistent engine overheating**.",
                    "**Coolant or oil leaks from the engine body**.",
                    "**White smoke from the exhaust**.",
                    "**Loss of engine compression or power**.",
                ],
            },

            impact: {
                title: "How a Faulty Cylinder Block Affects Engine Performance",
                text: [
                    "A damaged engine block disrupts core engine functions, resulting in poor combustion efficiency.",
                    "Coolant and oil may mix internally, increasing engine wear and contamination.",
                    "Power output, reliability, and overall engine performance are significantly reduced.",
                ],
            },

            selection: {
                title: "How to Choose the Right Cylinder Block for Your Vehicle",
                points: [
                    "**Exact engine code and vehicle compatibility**.",
                    "**Cast iron vs aluminum construction**.",
                    "**Cylinder configuration and engine displacement**.",
                    "**OEM specifications or precision-machined replacements**.",
                ],
            },

            importance: {
                title: "Why Repairing or Replacing a Cylinder Block Is Important",
                text: [
                    "Restoring a damaged cylinder block reestablishes proper combustion, cooling, and lubrication.",
                    "Whether repaired or replaced, a sound engine block ensures stable performance and reduced mechanical stress.",
                    "A healthy cylinder block supports the engine’s full operating lifespan and long-term durability.",
                ],
            },

            risk: {
                title: "How Ignoring Cylinder Block Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring cylinder block damage can result in complete engine failure and blown head gaskets.",
                    "Seized components or catastrophic internal damage may occur over time.",
                    "Early diagnosis and repair prevent costly engine rebuilds and protect overall vehicle reliability.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Cylinder Head",
        image: "/parts/Cylinder Head.png",
        desc: {
            intro: {
                title: "What Is a Cylinder Head and Why It’s Important for Your Vehicle",
                text: [
                    "The **cylinder head** sits on top of the engine block and seals the engine cylinders, forming the combustion chamber.",
                    "It houses critical components such as valves, spark plugs, fuel injectors, and camshafts while directing airflow for intake and exhaust.",
                    "By managing combustion pressure, cooling flow, and valve timing, the cylinder head plays a key role in engine power, efficiency, and overall performance.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Have Cylinder Head Problems",
                points: [
                    "**Engine overheating or high cylinder head temperature**.",
                    "**Coolant loss without visible leaks**.",
                    "**White smoke or steam from the exhaust**.",
                    "**Rough idle, misfires, or loss of power**.",
                ],
            },

            impact: {
                title: "How a Faulty Cylinder Head Affects Engine Performance",
                text: [
                    "A damaged cylinder head disrupts combustion and airflow control, reducing engine efficiency and power output.",
                    "Poor fuel combustion can lead to misfires and unstable engine operation.",
                    "Coolant may enter the combustion chambers, increasing emissions and engine stress.",
                ],
            },

            selection: {
                title: "How to Choose the Right Cylinder Head for Your Vehicle",
                points: [
                    "**Engine type, displacement, and configuration**.",
                    "**Valve count and camshaft compatibility**.",
                    "**Material choice such as aluminum or cast iron**.",
                    "**OEM specifications or precision-machined replacements**.",
                ],
            },

            importance: {
                title: "Why Repairing or Replacing a Cylinder Head Is Important",
                text: [
                    "Repairing or replacing a faulty cylinder head restores compression and stabilizes combustion.",
                    "Proper replacement regulates engine temperature and improves overall performance.",
                    "A healthy cylinder head enhances fuel efficiency and supports long-term engine durability.",
                ],
            },

            risk: {
                title: "How Ignoring Cylinder Head Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring cylinder head problems can result in blown head gaskets and coolant or oil mixing.",
                    "Severe overheating or complete engine failure may occur over time.",
                    "Timely cylinder head repair or replacement prevents extensive engine damage and costly rebuilds.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Engine Assembly",
        image: "/parts/Engine Assembly.png",
        desc: {
            intro: {
                title: "What Is an Engine Assembly and Why It’s Important for Your Vehicle",
                text: [
                    "An **engine assembly** is the complete, fully integrated unit that combines the cylinder block, pistons, crankshaft, camshaft, bearings, and related internal components into one functioning system.",
                    "As the heart of the powertrain, the engine assembly converts fuel into mechanical power that drives your vehicle.",
                    "A properly built engine assembly ensures smooth combustion, balanced power delivery, and long-term durability, directly impacting performance, fuel efficiency, and reliability.",
                ],
            },

            working: {
                title: "How an Engine Assembly Works",
                text: [
                    "The engine assembly operates through a precise sequence of air intake, compression, combustion, and exhaust.",
                    "Pistons move within the cylinder block, the crankshaft converts linear motion into rotational force, and the valvetrain manages airflow timing.",
                    "During assembly, **engine assembly lube** is used to protect critical surfaces during initial startup, ensuring proper lubrication before full oil circulation begins.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Engine Assembly Repair or Replacement",
                points: [
                    "**Knocking or grinding noises** from the engine.",
                    "**Loss of power or poor acceleration**.",
                    "**Excessive oil consumption or visible oil leaks**.",
                    "**Overheating or coolant contamination**.",
                    "**Severe internal damage discovered during inspection**.",
                ],
            },

            impact: {
                title: "How a Faulty Engine Assembly Affects Performance and Reliability",
                text: [
                    "A compromised engine assembly can lead to reduced horsepower, unstable engine operation, and increased fuel consumption.",
                    "In severe cases, internal failure can cause complete engine shutdown, leaving the vehicle inoperable.",
                    "Continued driving with internal damage may also affect connected systems such as the transmission, cooling system, and exhaust components.",
                ],
            },

            selection: {
                title: "How to Choose the Right Engine Assembly for Your Vehicle",
                points: [
                    "**Exact compatibility with vehicle make, model, and engine code**.",
                    "**Long block vs short block configuration**.",
                    "**OEM specifications versus rebuilt or remanufactured units**.",
                    "**Proper use of engine assembly lube during installation**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Engine Assembly Is Important",
                text: [
                    "Replacing a failing engine assembly restores original power output and smooth operation.",
                    "It eliminates internal wear issues, improves fuel efficiency, and enhances overall reliability.",
                    "A healthy engine assembly extends the lifespan of the vehicle and ensures dependable daily driving.",
                ],
            },

            risk: {
                title: "How Ignoring Engine Assembly Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring problems within an engine assembly can result in catastrophic engine failure, including damaged crankshafts, cracked blocks, or seized pistons.",
                    "Over time, cooling, lubrication, and drivetrain components may also be affected.",
                    "Early engine assembly repair or replacement prevents costly secondary damage and keeps the vehicle running safely and efficiently.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Harmonic Balancer",
        image: "/parts/Harmonic Balancer.png",
        desc: {
            intro: {
                title: "What Is a Harmonic Balancer and Why It’s Important for Your Vehicle",
                text: [
                    "A **harmonic balancer** is a vibration-dampening component mounted on the crankshaft that reduces torsional vibrations created during engine combustion.",
                    "If left uncontrolled, these vibrations can damage the crankshaft and other internal engine components.",
                    "By absorbing and neutralizing harmonic forces, the harmonic balancer protects engine integrity, improves smoothness, and supports long-term engine longevity.",
                    "It also serves as a pulley to drive accessory belts for systems like the alternator, power steering, and air conditioning.",
                ],
            },

            working: {
                title: "How a Harmonic Balancer Works",
                text: [
                    "The harmonic balancer consists of a metal hub connected to an outer ring through a rubber or elastomer layer.",
                    "As the crankshaft twists under load, this layer absorbs and dampens vibrations before they can travel through the engine.",
                    "During installation or service, a **harmonic balancer installer** is required to ensure correct alignment and secure mounting without damaging the crankshaft.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Harmonic Balancer Replacement",
                points: [
                    "**Excessive engine vibration**, especially at idle.",
                    "**Squealing or slipping accessory belts**.",
                    "**Visible wobbling of the crankshaft pulley**.",
                    "**Cracked or separated rubber ring**.",
                    "**Unusual noises from the front of the engine**.",
                ],
            },

            impact: {
                title: "How a Faulty Harmonic Balancer Affects Engine Performance",
                text: [
                    "A failing harmonic balancer allows harmful vibrations to travel through the crankshaft, accelerating wear on bearings, seals, and internal engine components.",
                    "Accessory belts may misalign or fail, affecting charging, cooling, and power steering systems.",
                    "Over time, unchecked vibration can lead to serious internal engine damage.",
                ],
            },

            selection: {
                title: "How to Choose the Right Harmonic Balancer for Your Vehicle",
                points: [
                    "**Compatibility with your engine size and crankshaft design**.",
                    "**OEM specifications versus performance-grade replacements**.",
                    "**Proper fit for accessory belt configurations**.",
                    "**Use of a correct harmonic balancer installer during installation**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Harmonic Balancer Is Important",
                text: [
                    "Replacing a damaged harmonic balancer restores engine smoothness and protects the crankshaft from excessive vibration.",
                    "It ensures stable accessory belt operation and preserves engine timing accuracy.",
                    "A new harmonic balancer helps the engine run quietly, smoothly, and efficiently.",
                ],
            },

            risk: {
                title: "How Ignoring Harmonic Balancer Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring a failing harmonic balancer can result in crankshaft damage, broken belts, and seal leaks.",
                    "Internal bearing wear or catastrophic engine failure may occur in severe cases.",
                    "Early harmonic balancer replacement prevents costly repairs and safeguards the engine’s long-term health.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Intake Manifold",
        image: "/parts/Intake Manifold.png",
        desc: {
            intro: {
                title: "What Is an Intake Manifold and Why It’s Important for Your Vehicle",
                text: [
                    "The **intake manifold** is a crucial engine component that evenly distributes air—or an air-fuel mixture—to each cylinder for optimal combustion.",
                    "Proper airflow management ensures efficient fuel use, smooth engine operation, and maximized power output.",
                    "A well-designed **engine intake manifold** directly influences performance, responsiveness, and overall drivability.",
                    "High-quality intake manifold assembly components help maintain consistent airflow, reduce turbulence, and support long-term engine reliability.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need an Intake Manifold Inspection or Replacement",
                points: [
                    "**Rough idling or engine misfires**.",
                    "**Reduced engine power and poor acceleration**.",
                    "**Coolant or vacuum leaks around the manifold**.",
                    "**Check engine light illuminated**.",
                    "**Unusual hissing or sucking noises from the engine bay**.",
                ],
            },

            impact: {
                title: "How a Faulty Intake Manifold Affects Engine Performance",
                text: [
                    "A failing engine intake manifold disrupts airflow and combustion, decreasing engine power and throttle response.",
                    "Fuel efficiency may suffer due to improper air distribution.",
                    "Engine overheating or rough running can occur, placing additional strain on internal components.",
                    "Sensors and connected engine systems may also be damaged over time.",
                ],
            },

            selection: {
                title: "How to Choose the Right Intake Manifold for Your Vehicle",
                points: [
                    "**Vehicle make, model, and engine compatibility**.",
                    "**Material type such as aluminum or plastic**.",
                    "**OEM versus high-quality aftermarket options**.",
                    "**Inclusion of gaskets, sensors, and mounting hardware**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Intake Manifold Is Important",
                text: [
                    "Replacing a failing engine intake manifold restores engine power, efficiency, and throttle responsiveness.",
                    "It prevents vacuum or coolant leaks and reduces the risk of engine misfires.",
                    "Proper replacement ensures smooth airflow and consistent engine performance for everyday driving.",
                ],
            },

            risk: {
                title: "How Ignoring Intake Manifold Issues Can Lead to Bigger Repairs",
                text: [
                    "Neglecting problems with an intake manifold assembly can lead to warped cylinder heads and damaged gaskets.",
                    "Overheating, intake valve issues, and long-term engine damage may develop.",
                    "Early intake manifold replacement protects connected components and preserves overall engine reliability.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Oil Pan",
        image: "/parts/Oil Pan.png",
        desc: {
            intro: {
                title: "What Is an Oil Pan and Why It’s Important for Your Vehicle",
                text: [
                    "The **oil pan** is a vital engine component mounted at the bottom of the engine block that stores engine oil used for lubrication and cooling.",
                    "Acting as a reservoir, the **engine oil pan** ensures a steady supply of oil to moving engine parts, reducing friction and heat during operation.",
                    "By maintaining proper oil circulation, the oil pan plays a direct role in protecting internal engine components and supporting long-term engine reliability.",
                ],
            },

            working: {
                title: "How an Oil Pan Works",
                text: [
                    "Engine oil flows down into the oil pan after circulating through the engine.",
                    "From there, the oil pump draws oil back up and redistributes it to critical components such as bearings, pistons, and camshafts.",
                    "Most oil pans include a drain plug for routine oil changes, while some designs feature cooling fins or baffles to improve oil temperature control and prevent oil sloshing during acceleration or cornering.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Oil Pan Replacement",
                points: [
                    "**Oil leaks pooling under the vehicle**.",
                    "**Low oil level warnings or frequent oil top-ups**.",
                    "**Visible dents or cracks in the oil pan**.",
                    "**Burning oil smell after driving**.",
                    "**Reduced oil pressure readings**.",
                ],
            },

            impact: {
                title: "How a Faulty Oil Pan Affects Engine Performance",
                text: [
                    "A compromised engine oil pan can lead to oil starvation, increased engine friction, and overheating.",
                    "Even minor leaks can gradually reduce oil levels, accelerating wear on internal engine components.",
                    "If ignored, continued oil loss may result in severe engine damage or complete engine failure.",
                ],
            },

            selection: {
                title: "How to Choose the Right Oil Pan for Your Vehicle",
                points: [
                    "**Compatibility with your engine make, model, and year**.",
                    "**Steel versus aluminum oil pan construction**.",
                    "**Proper oil capacity and drain plug placement**.",
                    "**OEM or high-quality aftermarket options**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Oil Pan Is Important",
                text: [
                    "Replacing a damaged oil pan restores proper oil containment and prevents leaks.",
                    "It protects vital engine components from premature wear and ensures safe oil pressure levels.",
                    "A healthy oil pan supports consistent lubrication and smooth engine operation under all driving conditions.",
                ],
            },

            risk: {
                title: "How Ignoring Oil Pan Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring oil pan leaks or damage can lead to low oil levels, bearing failure, and engine overheating.",
                    "Catastrophic engine damage may occur if oil loss continues unchecked.",
                    "Early oil pan replacement prevents cascading failures and preserves long-term engine longevity while avoiding rising repair costs.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Short Cylinder Block",
        image: "/parts/Short Cylinder Block.png",
        desc: {
            intro: {
                title: "What Is a Short Cylinder Block and Why It’s Important for Your Vehicle",
                text: [
                    "A **short cylinder block**, commonly called a **short block engine**, is a partially assembled engine core that includes the cylinder block, crankshaft, pistons, connecting rods, and bearings.",
                    "It does not include the cylinder head, valvetrain, or external accessories.",
                    "This configuration makes a short cylinder block ideal for engine rebuilds or performance upgrades, allowing reuse of existing components while restoring the engine’s core structure and strength.",
                ],
            },

            working: {
                title: "How a Short Cylinder Block Works",
                text: [
                    "The short block forms the foundation of the engine’s rotating assembly.",
                    "The crankshaft converts piston movement into rotational force, while pistons and connecting rods manage combustion forces within the cylinders.",
                    "Once installed, existing or upgraded components such as the cylinder head, camshaft, intake, and fuel systems are mounted to complete the engine assembly.",
                    "This makes **short block replacement** a flexible and cost-effective solution.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need a Short Block Replacement",
                points: [
                    "**Low compression across multiple cylinders**.",
                    "**Knocking or deep metallic engine noises**.",
                    "**Excessive oil consumption or blow-by**.",
                    "**Spun bearings or damaged crankshaft journals**.",
                    "**Engine failure due to overheating or oil starvation**.",
                ],
            },

            impact: {
                title: "How a Worn Short Cylinder Block Affects Engine Performance",
                text: [
                    "A damaged short cylinder block compromises engine balance, lubrication, and combustion efficiency.",
                    "Power output drops significantly, oil pressure becomes unstable, and engine vibration increases.",
                    "Overall reliability and engine lifespan are greatly reduced.",
                ],
            },

            selection: {
                title: "How to Choose the Right Short Cylinder Block for Your Vehicle",
                points: [
                    "**Engine code, displacement, and mounting compatibility**.",
                    "**OEM specifications versus performance-oriented builds**.",
                    "**Material quality and machining tolerances**.",
                    "**Intended use: daily driving, towing, or performance upgrades**.",
                ],
            },

            importance: {
                title: "Why Replacing a Short Cylinder Block Is Important",
                text: [
                    "Replacing a worn short cylinder block restores the engine’s structural integrity, compression, and oil control.",
                    "It provides a solid foundation for rebuilding while allowing customization of top-end components.",
                    "This approach balances performance, reliability, and cost compared to full engine replacement.",
                ],
            },

            risk: {
                title: "How Ignoring Short Cylinder Block Damage Can Lead to Bigger Repairs",
                text: [
                    "Continuing to operate an engine with internal block damage can lead to catastrophic failure, including seized engines, broken crankshafts, or thrown connecting rods.",
                    "Such failures often damage reusable components and significantly increase repair costs.",
                    "Early short block replacement prevents complete engine loss and protects the rest of the powertrain.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Spark Plug",
        image: "/parts/Spark Plug.png",
        desc: {
            intro: {
                title: "What Is a Spark Plug and Why It’s Important for Your Vehicle",
                text: [
                    "A **spark plug** is a critical ignition component that ignites the air-fuel mixture inside each engine cylinder.",
                    "By generating a precise electrical spark, it initiates combustion that powers the engine.",
                    "Available in **copper, platinum, and iridium** types, each spark plug is designed to balance durability, performance, and efficiency.",
                    "Properly functioning spark plugs are essential for smooth engine operation, strong acceleration, and optimal fuel economy.",
                ],
            },

            working: {
                title: "How a Spark Plug Works",
                text: [
                    "The spark plug receives high voltage from the ignition coil and releases it across a small gap at its tip.",
                    "This spark ignites the compressed air-fuel mixture, creating controlled combustion within the cylinder.",
                    "Electrode material plays a key role: copper offers strong conductivity, platinum provides longer service life, and iridium delivers precise sparks with minimal wear, making it ideal for modern engines.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Spark Plug Replacement",
                points: [
                    "**Engine misfires or rough idling**.",
                    "**Difficulty starting the engine**.",
                    "**Reduced fuel efficiency**.",
                    "**Sluggish acceleration or noticeable power loss**.",
                    "**Check engine light related to ignition faults**.",
                ],
            },

            impact: {
                title: "How Faulty Spark Plugs Affect Engine Performance",
                text: [
                    "When spark plugs fail to ignite properly, combustion becomes inconsistent and inefficient.",
                    "Incomplete fuel burn leads to higher emissions and increased fuel consumption.",
                    "Engine vibration, hesitation, and strain on ignition coils or the catalytic converter may occur over time.",
                ],
            },

            selection: {
                title: "How to Choose the Right Spark Plug for Your Vehicle",
                points: [
                    "**Manufacturer-recommended heat range**.",
                    "**Electrode material: copper, platinum, or iridium**.",
                    "**Correct thread size and reach**.",
                    "**Compatibility with your ignition system**.",
                    "**Use of the correct spark plug socket during installation**.",
                ],
            },

            importance: {
                title: "Why Replacing Worn Spark Plugs Is Important",
                text: [
                    "Replacing worn spark plugs restores efficient combustion and smoother engine response.",
                    "Fresh plugs improve fuel economy, reduce emissions, and help the engine start easily.",
                    "Proper spark plug performance ensures consistent power delivery and reliable everyday driving.",
                ],
            },

            risk: {
                title: "How Ignoring Spark Plug Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring worn spark plugs can cause repeated misfires and ignition coil failure.",
                    "Unburned fuel may damage the catalytic converter and increase long-term engine stress.",
                    "Early spark plug replacement prevents costly repairs and keeps the engine running efficiently and smoothly.",
                ],
            },
        },
    },
    {
        category: "Engine",
        name: "Timing Cover",
        image: "/parts/Timing Cover.png",
        desc: {
            intro: {
                title: "What Is a Timing Cover and Why It’s Important for Your Vehicle",
                text: [
                    "A **timing cover** is a protective engine component that encloses and shields the timing belt or timing chain from dust, debris, moisture, and external damage.",
                    "Mounted at the front of the engine, the **engine timing cover** also helps retain engine oil and maintain proper lubrication around critical timing components.",
                    "By protecting precise timing mechanisms, the timing cover plays a key role in ensuring accurate valve timing, smooth engine operation, and long-term durability.",
                ],
            },

            working: {
                title: "How a Timing Cover Works",
                text: [
                    "The timing cover acts as a sealed barrier around the timing chain or belt assembly.",
                    "It aligns closely with the engine block and cylinder head, using gaskets or seals to prevent oil leaks.",
                    "In chain-driven systems, the timing chain cover also supports oil circulation to lubricate the chain, tensioners, and guides, ensuring consistent timing performance under all driving conditions.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle May Need Timing Cover Replacement",
                points: [
                    "**Oil leaks from the front of the engine**.",
                    "**Visible cracks or warping in the timing cover**.",
                    "**Burning oil smell near the engine bay**.",
                    "**Low engine oil levels without an obvious cause**.",
                    "**Contaminated timing belt or chain area**.",
                ],
            },

            impact: {
                title: "How a Faulty Timing Cover Affects Engine Performance",
                text: [
                    "When the timing cover fails to seal properly, oil leakage and contamination can occur.",
                    "Insufficient lubrication may cause premature wear of timing belts or chains.",
                    "Engine noise may increase, and timing alignment can drift over time.",
                    "If left unaddressed, these issues can compromise overall engine reliability.",
                ],
            },

            selection: {
                title: "How to Choose the Right Timing Cover for Your Vehicle",
                points: [
                    "**Compatibility with your vehicle’s make, model, and engine type**.",
                    "**Belt-driven versus chain-driven timing system**.",
                    "**Material type such as aluminum or reinforced composite**.",
                    "**OEM or high-quality aftermarket construction**.",
                ],
            },

            importance: {
                title: "Why Replacing a Worn Timing Cover Is Important",
                text: [
                    "Replacing a damaged timing cover restores proper sealing and prevents oil loss.",
                    "It protects timing components from contamination and wear.",
                    "Proper replacement helps maintain accurate engine timing and consistent engine performance.",
                ],
            },

            risk: {
                title: "How Ignoring Timing Cover Issues Can Lead to Bigger Repairs",
                text: [
                    "Ignoring timing cover problems can result in severe oil leaks and timing chain or belt damage.",
                    "Accelerated wear of internal engine components may follow.",
                    "In extreme cases, timing system failure can occur, leading to major engine repairs.",
                    "Early timing cover replacement helps avoid costly damage and preserves engine longevity.",
                ],
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
        category: "Entertainment", name: "Info GPS TV Screen", image: "/parts/Info-GPS-TV Screen.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
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
        category: "Suspension/Steering", name: "Crossmember/K Frame", image: "/parts/Crossmember/K-Frame.png", desc: {
            intro: {
                title: "What is an Airflow Meter and Why It's Important for Your Vehicle",
                text: [
                    "**The airflow meter**, also known as a **Mass Airflow Sensor**, is a critical component of your vehicle’s engine.",
                    "It measures the exact amount of air entering the engine and sends precise data to the **ECU (Engine Control Unit)**.",
                    "This helps maintain the optimal **air-fuel ratio**, which is essential for smooth performance, better fuel economy, and lower emissions.",
                    "Without a properly functioning **Air Flow Meter**, your engine may underperform, consume more fuel, and strain other components.",
                ],
            },

            signs: {
                title: "Signs Your Vehicle Needs a New Airflow Meter",
                points: [
                    "**Reduced engine performance** - the vehicle feels sluggish during acceleration.",
                    "**Poor fuel efficiency** - increased fuel consumption.",
                    "**Rough idling or stalling** - engine hesitates at low speeds.",
                    "**Check engine light** - triggered by airflow inconsistencies.",
                ],
            },

            impact: {
                title: "How a Faulty Airflow Meter Affects Performance and Fuel Efficiency",
                text: [
                    "A failing **mass airflow sensor** can disrupt engine performance by sending incorrect data to the ECU.",
                    "**Too much fuel (rich mixture)** - higher fuel consumption and black exhaust smoke.",
                    "**Too little fuel (lean mixture)** - reduced power, overheating, and component strain.",
                    "Even minor inaccuracies can cause noticeable drops in performance and fuel efficiency.",
                ],
            },

            choosing: {
                title: "How to Choose the Right Airflow Meter for Your Vehicle",
                points: [
                    "**Vehicle compatibility** - ensure it matches your make, model, year, and engine type.",
                    "**OEM vs aftermarket** - OEM ensures precise fit; quality aftermarket parts can work if specifications match.",
                    "**Sensor type** - hot-wire, vane, or other designs must align with ECU requirements.",
                ],
            },

            benefits: {
                title: "Why Replacing Your Airflow Meter Improves Performance & Reliability",
                points: [
                    "**Smoother acceleration** - improved throttle response.",
                    "**Better fuel economy** - optimized air-fuel mixture.",
                    "**Reduced emissions** - cleaner exhaust output.",
                    "**Improved reliability** - prevents damage to other engine components.",
                ],
            },

            risks: {
                title: "How Ignoring Airflow Meter Issues Can Lead to Bigger Repairs",
                points: [
                    "**Catalytic converter damage** - overheating due to incorrect fuel mixtures.",
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
