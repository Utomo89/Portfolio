// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Linkedin, Mail, Instagram } from "lucide-react";
import Lanyard from "./ui/lanyard/Lanyard.jsx";

export default function About2() {
    return (
        <section
        id="about"
        className="min-h-screen overflow-x-hidden"
        >
        <div className="container mx-auto h-screen"> 
            <div className="container border mx-auto h-screen"> 
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        TEST
                    </div>
                    <div className="col-span-6">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}