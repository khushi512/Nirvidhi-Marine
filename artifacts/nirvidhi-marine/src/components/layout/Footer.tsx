import logo from "@/assets/nirvidhi-logo.jpg";

export function Footer() {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            {/*<div className="inline-block bg-foreground/95 rounded-md px-6 py-4 mb-8">
            </div>*/}
            <img src={logo} alt="Nirvidhi Marine" className="h-20 w-auto mb-8 rounded-sm" />
            <p className="text-muted-foreground text-sm max-w-sm leading-loose">
              Building India's underwater workforce and the offshore technology base to support the blue economy.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-foreground font-semibold mb-6">Operations</p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Commercial Diving</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Offshore Safety</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Marine Robotics</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Asset Inspection</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-foreground font-semibold mb-6">Contact</p>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Konkan Coast, Maharashtra</li>
              <li>India</li>
              <li className="pt-2">
                <a href="tel:+919969277362" className="hover:text-primary transition-colors">+91 99692 77362</a>
              </li>
              <li className=" hover:text-primary transition-colors">
                <a href="mailto:info@nirvidhimarine.com">info@nirvidhimarine.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nirvidhi Marine Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0 font-medium tracking-[0.1em] uppercase">
            <span>Training</span>
            <span>Services</span>
            <span>Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
