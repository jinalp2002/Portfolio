

const Footer = () => {
    return (
        <footer className=" bg-primary  text-gray-700 dark:text-gray-300 dark:bg-[#052f4a] font-serif ">

            <div className=" max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-4">

                {/* Brand */}
                <div>
                    <h2 className="text-sm font-bold text-[#bfa14a] underline">
                        My Portfolio
                    </h2>
                    <p className="text-sm mt-2">
                        Building modern, responsive web

                        applications using React & Tailwind CSS.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3 underline">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:underline"><a href="#">Home</a></li>
                        <li className="hover:underline"><a href="#Projects">Projects</a></li>
                        <li className="hover:underline"><a href="#About">About</a></li>
                        <li className="hover:underline"><a href="#Contact">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold mb-3 underline">Projects</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Jewellery UI</li>
                        <li>Country Explorer</li>
                        <li>Portfolio Website</li>
                        <li>API Projects</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-3 underline">Contact</h3>
                    <p className="text-sm">Email: jpatel111102@gmail.com</p>
                    <p className="text-sm">Contact: 8849074100</p>
                    <p className="text-sm">Location: Mumbai,maharashtra.</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm">
                © {new Date().getFullYear()} All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;