class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-blue-900 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">Katie Cleans</h3>
                            <p class="mb-4">Professional cleaning services for Michigan property managers and landlords.</p>
                            <div class="flex space-x-4">
                                <a href="#" class="hover:text-teal-300 transition">
                                    <i data-feather="facebook" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="hover:text-teal-300 transition">
                                    <i data-feather="instagram" class="w-5 h-5"></i>
                                </a>
                                <a href="#" class="hover:text-teal-300 transition">
                                    <i data-feather="twitter" class="w-5 h-5"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="/" class="hover:text-teal-300 transition">Home</a></li>
                                <li><a href="#services" class="hover:text-teal-300 transition">Services</a></li>
                                <li><a href="#gallery" class="hover:text-teal-300 transition">Gallery</a></li>
                                <li><a href="#contact" class="hover:text-teal-300 transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                            <ul class="space-y-2">
                                <li class="flex items-center">
                                    <i data-feather="mail" class="w-5 h-5 mr-2"></i>
                                    <a href="mailto:katiecleans269@gmail.com" class="hover:text-teal-300 transition">katiecleans269@gmail.com</a>
                                </li>
                                
                                <li class="flex items-center">
                                    <i data-feather="map-pin" class="w-5 h-5 mr-2"></i>
                                    <span>Portage, MI</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-blue-800 mt-8 pt-8 text-center text-sm">
                        <p>&copy; ${new Date().getFullYear()} Katie Cleans. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
