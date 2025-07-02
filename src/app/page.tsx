"use client"
import Image from "next/image";
 import Footer from "@/components/footer";
import FeaturedCategories from "@/components/FeaturedCategories";
import WhyChooseUs from "@/components/whyChooseUs";
import Header from "@/components/header";
import ShopByVehicle from "@/components/shopByVehicle";

export default function Home() {
  return (
 <div>
        <Header />
        <ShopByVehicle />
        <WhyChooseUs />
        <FeaturedCategories />
        <Footer />
        
 </div>
  );
}
