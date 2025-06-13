import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-8 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center"
      >
        Ali Rabbani Rasyidin Baadilla – Portfolio
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="ERC Website Content Management"
          description="Managed and uploaded content to erc.elins.id using WordPress, including project showcases, articles, and media. Contributed to layout organization, media formatting, and dynamic updates for the Linux dan Jaringan and Kreasi dan Inovasi categories."
          tools="WordPress, Elementor, Media Tools"
          link="https://erc.elins.id/projects/"
        />

        <ProjectCard
          title="G-Connect – Early Warning System"
          description="Developed backend API and contributed to frontend integration for flood and landslide early warning system."
          tools="Node.js, MongoDB, Express"
        />

        <ProjectCard
          title="Aeroponics Dashboard"
          description="Built an agricultural monitoring dashboard to visualize pH, temperature, and humidity data in real-time."
          tools="React, Firebase"
        />

        <ProjectCard
          title="Web Inklusi Design"
          description="Helped build a showcase website for Elins Research Club featuring club projects, news, and contact info."
          tools="WordPress, Figma, Elementor"
        />
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-2"
      >
        <p className="text-lg">Connect with me:</p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="mailto:rasyidinbaadilla@gmail.com">Email</a>
          </Button>
          <Button asChild>
            <a href="https://www.linkedin.com/in/alirabbanirasyidinbaadilla" target="_blank">LinkedIn</a>
          </Button>
          <Button asChild>
            <a href="https://www.instagram.com/alirrb3" target="_blank">Instagram</a>
          </Button>
          <Button asChild>
            <a href="https://dzakyradithyaa.github.io" target="_blank">Design Inspiration</a>
          </Button>
        </div>
      </motion.div>
    </main>
  );
}

function ProjectCard({ title, description, tools, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="transition-shadow duration-300 shadow-md hover:shadow-xl rounded-2xl bg-white p-4"
    >
      <Card>
        <CardContent className="space-y-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>{description}</p>
          {tools && <p className="text-sm text-muted-foreground">Tools: {tools}</p>}
          {link && <a href={link} className="text-blue-500 text-sm underline" target="_blank">View Project</a>}
        </CardContent>
      </Card>
    </motion.div>
  );
}
